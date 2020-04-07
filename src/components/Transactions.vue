<template>
  <v-app id="transactions" :style="{'padding': adminUser.toLowerCase() !== 'user' ? '20px 20px 0': ''}">
      <div v-if="adminUser.toLowerCase() === 'user'" class="mb-5">
        <div class="panel-title">{{panelTitle}}</div>
        <AdminPageInfo :adminUser="adminUser" :routes="routes"></AdminPageInfo>
      </div>
      <v-card>
          <v-card-title class="d-none d-md-flex headline" style="padding: 25px 35px 0px 35px;" :style="{'direction': language === 'ar' ? 'rtl': ''}">{{language === 'ar'? 'اخر عملية':'Recent Transaction'}}
          <!--<v-spacer></v-spacer>
          <v-text-field
                  outlined
                  label="Search in Name"
                  prepend-inner-icon="mdi-magnify"
                  class="mx-0 mx-md-2 my-3 my-md-0"
                  style="max-width: 300px;"
                  @input="searchBooking"
                  hide-details
                  v-model="search"
          ></v-text-field>-->
          </v-card-title>
          <v-card-title class="d-md-none title mr-7 font-weight-regular" style="padding: 25px 35px 0px 35px;" :style="{'direction': language === 'ar' ? 'rtl': ''}">{{language === 'ar'? 'اخر عملية':'Recent Transaction'}}
          <!--<v-spacer></v-spacer>
          <v-text-field
                  outlined
                  label="Search in Name"
                  prepend-inner-icon="mdi-magnify"
                  class="mx-0 mx-md-2 my-3 my-md-0"
                  style="max-width: 300px;"
                  @input="searchBooking"
                  hide-details
                  v-model="search"
          ></v-text-field>-->
          </v-card-title>
        <v-data-table
            :headers="headers"
            :items="packages"
            disable-pagination
            hide-default-footer
            class="table"
            :loading="tableLoading"
            :mobile-breakpoint="mobileBreakPoint"
        >
        <template v-slot:item.status="{ item }">
            <v-chip class="d-none d-md-inline-flex body-1 font-weight-regular" style="white-space: nowrap;" :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
            <v-chip class="d-md-none caption font-weight-regular" style="white-space: nowrap;" :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
        </template>

        <template v-slot:item.action="{ item }">
            <a
                class="d-none d-md-flex title font-weight-regular text-right"
                style="color: #0072ff; justify-content:end; white-space: nowrap;"
                @click="view(item.bookingId)"
            >
                View Booking
            </a>
            <a
                    class="d-md-none body-2 font-weight-regular"
                    style="color: #0072ff; justify-content:end; white-space: nowrap;"
                    @click="view(item.bookingId)"
            >
                View Booking
            </a>
        </template>
        </v-data-table>
      </v-card>
      <v-pagination v-model="page"
                    :length="pagesCount"
                    circle
                    :disabled="pagesCount === 1"
                    :total-visible="7"
                    class="mt-4"
                    @next="changePage($event)"
                    @previous="changePage($event)"
                    @input="changePage($event)"
      ></v-pagination>
  </v-app>
</template>

<script lang="ts">
import { mapMutations, mapState } from 'vuex';
import Axios from 'axios';
import {Component, Vue} from "vue-property-decorator";
import {Getter, Mutation, State, Action} from "vuex-class";
import AdminPageInfo from "@/components/AdminPageInfo.vue";
import alzuhudLink from "@/components/Functions/Functions";

  @Component({
    components: {
      AdminPageInfo,
    }
  })
  export default class Transactions extends Vue {
    @Getter token: any;
    @State adminUser: any;
    @Action snackIt: Function;
    @State routes: any[];
    panelTitle: string = '';
    tableLoading: boolean = true;
    pagesCount: number = 1;
    page: number = 1;
    headers: any = [
    ];
    packages = [];
   @Mutation replaceRoute: Function;
   @Mutation setBookingId: Function;
   @State language: any;

    getColor (status: any) {
        switch (status) {
            case "pending" :
                return 'orange';
            case "not paid" :
                return 'red';
            case "paid" :
                return 'green';
            case "removed" :
                return 'grey';
        }
    }
    async mounted () {
        this.replaceRoute(['Transactions']);
        this.$parent.$emit('update route');
        this.panelTitle = 'Transactions';


        this.headers = this.language === 'ar' ? (this.adminUser.toLowerCase() === 'user' ? [
            { text: 'العنوان', value: 'title' },
            { text: 'القيمة', value: 'amount' },
            { text: 'التاريخ', value: 'date' },
            { text: 'الحالة', value: 'status', align: 'left' },
            { text: 'OP', value: 'action', sortable: false, align: 'right' }
        ]: [
            {text: 'المستخدم', align: 'left', sortable: false, value: 'name'},
            { text: 'العنوان', value: 'title' },
            { text: 'القيمة', value: 'amount' },
            { text: 'التاريخ', value: 'date' },
            { text: 'الحالة', value: 'status', align: 'left' },
            { text: 'OP', value: 'action', sortable: false, align: 'right' }
        ]): (this.adminUser.toLowerCase() === 'user' ? [
          { text: 'Title', value: 'title' },
          { text: 'Amount', value: 'amount' },
          { text: 'Date', value: 'date' },
          { text: 'Status', value: 'status', align: 'left' },
          { text: 'OP', value: 'action', sortable: false, align: 'right' }
        ]: [
          {text: 'User', align: 'left', sortable: false, value: 'name'},
          { text: 'Title', value: 'title' },
          { text: 'Amount', value: 'amount' },
          { text: 'Date', value: 'date' },
          { text: 'Status', value: 'status', align: 'left' },
          { text: 'OP', value: 'action', sortable: false, align: 'right' }
        ]);

      try {
        const items = await Axios.get(`http://${alzuhudLink}:8080/api/transactions/all`, {
          params: {
            token: this.token,
          }
        });

        this.pagesCount = items.data.res.last_page;
          this.packages = items.data.res.data.map((item: any) => ({
          name: item.user_id.full_name,
          title: item.title,
          amount: '$' + this.split(item.amount),
          status: item.status,
          bookingId: item.booking_id.id,
          date: new Date(item.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
        }));


      } catch(e) {
        this.snackIt({
          message: this.adminUser.toLowerCase() === 'user' ? 'An Error Occurred while Getting Transactions' : 'An error occurred while getting users data ',
          color: 'error',
          snackbar: true
        });
      } finally {
        this.tableLoading = false;
      }
    }

    async changePage(e: any) {
      if (e !== undefined) {
        this.packages = [];
        this.tableLoading = true;
        try {
          const items = await Axios.get(`http://${alzuhudLink}:8080/api/transactions/all`, {
            params: {
              token: this.token,
              page: e,
            }
          });

          this.packages = items.data.res.data.map((item: any) => ({
            name: item.user_id.full_name,
            title: item.title,
            amount: '$' + this.split(item.amount),
            status: item.status,
            bookingId: item.booking_id.id,
            date: new Date(item.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
          }));
        } catch(e) {
          this.snackIt({
            message: this.adminUser.toLowerCase() === 'user' ? 'An error occurred while getting transactions' : 'An error occurred while getting users data ',
            color: 'error',
            snackbar: true
          });
        } finally {
          this.tableLoading = false;
        }
      }
    }
      split(str: string): string {
          let strData = parseFloat(str);
          let data = strData.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          return data.split('.')[0];
      }

      view (id: number) {
          console.log("id is: ", id);
          this.setBookingId(id);
          this.$router.push('viewBooking');
      }
  }
</script>

<style lang="scss" scoped>
    #transactions{
        padding: 0 0 10px;
    }
</style>
