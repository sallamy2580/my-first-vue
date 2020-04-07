<template>
  <div id="tickets">
      <div class="d-flex flex-column flex-md-row justify-space-between align-md-center mb-5">
          <div class="flex-grow-1">
            <div class="panel-title">{{language === 'ar' ? makeArabic(panelTitle): panelTitle}}</div>
            <AdminPageInfo :adminUser="adminUser" :routes="routes"></AdminPageInfo>
          </div>
          <v-btn :x-large="$vuetify.breakpoint.mdAndUp" large depressed rounded class="px-9 px-md-12 align-self-end" color="primary" @click="newTicket">{{language === 'ar'? 'تذكرة جديدة':'New Ticket'}}</v-btn>
      </div>
      <v-card style="border-radius: 20px !important;">
        <v-card-title class="headline font-weight-regular" :style="{'font-size': $vuetify.breakpoint.smAndDown ? '20px !important' : '', 'direction': language === 'ar' ? 'rtl': ''}" >{{language === 'ar'? 'تذاكر المسبقة':'Recent Tickets'}}</v-card-title>
        <v-data-table
            :headers="headers"
            :items="ticketsRecord"
            hide-default-footer
            class="support-table table"
            :loading="tableLoading"
            :mobile-breakpoint="mobileBreakPoint"
        >

        <template v-slot:item.action="{ item }">
            <v-icon
                color="blue"
                class="mr-2"
                @click="view(item)"
            >
                mdi-eye
            </v-icon>
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
  </div>
</template>

<script lang="ts">
  import {Getter, Mutation, State} from "vuex-class";
import {Vue, Component} from 'vue-property-decorator';
import AdminPageInfo from './AdminPageInfo.vue';
import Axios from "axios";
  import alzuhudLink, { makeArabic } from "@/components/Functions/Functions";

@Component({
    components: {
        AdminPageInfo
    }
})
export default class UserSupport extends Vue {
    @State adminUser: string;
    @State routes: string[];
    @Getter token: string;
    panelTitle: string = 'Support';
    tableLoading: boolean = true;
    pagesCount: number = 1;
    page: number = 1;

    // @ts-ignore
    @Mutation replaceRoute;
    @Mutation setTicketId: (id: number | null) => void;
    @State language: any;
    headers: any[] = [];
    ticketsRecord = [
        // {
        //     subject: "Packages",
        //     status: "pending",
        //     date: "23.10.2018",
        //     message: 'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut',
        // },
        // {
        //     subject: "Packages",
        //     status: "pending",
        //     date: "23.10.2018",
        //     message: 'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut',
        // },
        // {
        //     subject: "Packages",
        //     status: "pending",
        //     date: "23.10.2018",
        //     message: 'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut',
        // },
        // {
        //     subject: "Packages",
        //     status: "pending",
        //     date: "23.10.2018",
        //     message: 'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut',
        // },
        // {
        //     subject: "Packages",
        //     status: "pending",
        //     date: "23.10.2018",
        //     message: 'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut',
        // },
        // {
        //     subject: "Packages",
        //     status: "pending",
        //     date: "23.10.2018",
        //     message: 'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut',
        // },
        // {
        //     subject: "Packages",
        //     status: "pending",
        //     date: "23.10.2018",
        //     message: 'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut',
        // },
        // {
        //     subject: "Packages",
        //     status: "pending",
        //     date: "23.10.2018",
        //     message: 'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut',
        // },
        // {
        //     subject: "Packages",
        //     status: "pending",
        //     date: "23.10.2018",
        //     message: 'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut',
        // }
    ];
    // @ts-ignore
    view (item) {

        this.setTicketId(item.id);
        this.$router.push('ticket');
    }
    async mounted () {
        this.replaceRoute(['Support']);
        this.headers = this.language === 'ar' ? [
            { text: 'الموضوع', value: 'subject' },
            { text: 'الحالة', value: 'status' },
            { text: 'التاریخ', value: 'date' },
            { text: 'البيان', value: 'message' },
            { text: 'OP', value: 'action', sortable: false }
        ] : [
            { text: 'Subject', value: 'subject' },
            { text: 'Status', value: 'status' },
            { text: 'Date', value: 'date' },
            { text: 'Message', value: 'message' },
            { text: 'OP', value: 'action', sortable: false }
        ];
      try {
        let response = await Axios.get(`http://${alzuhudLink}:8080/api/users/tickets/all`, {
          params: {
            token: this.token,
          }
        });

        this.pagesCount = response.data.res.last_page;

        this.ticketsRecord = response.data.res.data.map((item: any) => ({
          subject: item.subject,
          status: item.status,
          date: new Date(item.user_id.updated_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
          }),
          message: item.body,
          id: item.id,
        }));
      } finally {
        this.tableLoading = false;
      }
    }

    newTicket() {
        this.$router.push(`new-ticket`);
    }
    makeArabic(str: string) {
        return makeArabic(str);
    }
    async changePage(e: any) {
      if (e !== undefined) {
        this.ticketsRecord = [];
        this.tableLoading = true;
        try {
          let response = await Axios.get(`http://${alzuhudLink}:8080/api/users/tickets/all`, {
            params: {
              token: this.token,
              page: e,
            }
          });

          this.ticketsRecord = response.data.res.data.map((item: any) => ({
            subject: item.subject,
            status: item.status,
            date: item.user_id.created_at,
            message: item.body,
            id: item.id,
          }));
        } finally {
          this.tableLoading = false;
        }
      }
    }
}
</script>

<style lang="scss">
    .support-table {
        .v-data-table__wrapper {
            overflow-x: hidden;
        }
        td {
            .v-data-table__mobile-row__cell {
                /*white-space: normal;*/
                overflow-x: hidden;
                text-overflow: ellipsis;
                @media screen and (max-width: 960px) {
                    max-width: 400px;
                }
                @media screen and (max-width: 550px) {
                    max-width: 200px;
                }

            }
            &.text-start {
                overflow-x: hidden;
                text-overflow: ellipsis;
                max-width: 300px;
            }
        }
    }
</style>

<style lang="scss" scoped>
    #tickets{
        padding:  0;
    }


</style>
