<template>
  <v-app id="bookings">
      <v-card>
        <v-card-title class="d-none d-md-flex headline" style="padding: 25px 35px 0px 35px;">Recent Orders
        <v-spacer></v-spacer>
          <v-text-field
                  outlined
                  label="Search in User Name"
                  prepend-inner-icon="mdi-magnify"
                  class="mx-0 mx-md-2 my-3 my-md-0"
                  style="max-width: 350px;"
                  @input="searchInBookings"
                  hide-details
          ></v-text-field>
        </v-card-title>
        <v-card-title class="d-md-none title mr-7 font-weight-regular" style="padding: 25px 35px 0px 35px;">Recent Orders
        <v-spacer></v-spacer>
          <v-text-field
                  outlined
                  label="Search in User Name"
                  prepend-inner-icon="mdi-magnify"
                  class="mx-0 mx-md-2 my-3 my-md-0"
                  style="max-width: 350px;"
                  @input="searchInBookings"
                  hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="bookingsRecord"
            disable-pagination
            hide-default-footer
            class="table"
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
        <template v-slot:item.priceStatus="{ item }">
            <v-chip class="d-none d-md-inline-flex body-1 font-weight-regular" style="white-space: nowrap;" :color="getColor(item.priceStatus)" dark>{{ item.priceStatus }}</v-chip>
            <v-chip class="d-md-none caption font-weight-regular" style="white-space: nowrap;" :color="getColor(item.priceStatus)" dark>{{ item.priceStatus }}</v-chip>
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

<script>
  import {mapMutations, mapActions, mapState, mapGetters} from 'vuex';
import Axios from 'axios';
  import alzuhudLink from "@/components/Functions/Functions";

    export default {
        data () {
            return {
                headers: [
                {
                    text: 'User',
                    align: 'left',
                    sortable: false,
                    value: 'user',
                },
                { text: 'Country', value: 'country' },
                { text: 'Order No', value: 'orderNo' },
                { text: 'Order Date', value: 'orderDate' },
                { text: 'Price Status', value: 'priceStatus' },
                    // { text: 'Type', value: 'type' },
                { text: 'OP', value: 'action', sortable: false, align: 'right' }
                ],
                bookingsRecord: [
                    /*{
                        user: "Nancy Cook",
                        country: "Brazil",
                        orderNo: "6223365",
                        orderDate: "23.10.2018",
                        type: "Hajj Ummrah 2018"
                    }*/
                    ],
                tableLoading: false,
                pagesCount: null,
                page: 1
            }
        },
        computed: {
            ...mapGetters([
                'token'
            ])
        },
        methods: {
            ...mapMutations([
                'replaceRoute',
                'setBookingId'
            ]),
            ...mapActions([
                'snackIt'
            ]),

            getColor (status) {
                switch (status) {
                    case "not applied" :
                        return 'red';
                    case "applied" :
                        return 'green';
                }
            },
            async searchInBookings (search) {
                // console.log(search)
                if (search !== undefined || null) {
                    this.tableLoading = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/booking/all`
                            , {
                                params: {
                                    search: search,
                                    page: this.page,
                                    token: this.token
                                }
                            }).finally(() => this.tableLoading = false);
                        let bookingsData = response.data.res.data;
                        console.log(bookingsData)
                        this.pagesCount = response.data.res.last_page;
                        this.bookingsRecord = bookingsData.map(bok => ({
                            id: bok.id,
                            user: typeof bok.user_id === "object" ? bok.user_id.full_name : 'Unknown',
                            country: typeof bok.country_id === "object" ? bok.country_id.name : 'Unknown',
                            orderNo: bok.id,
                            priceStatus: bok.is_price_applied === "yes" ? 'applied' : 'not applied',
                            // type: bok.type,
                            // passenger: bok.
                            orderDate: bok.created_at === null ? 'indeterminate' : new Date(bok.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })
                        }));
                    } catch (e) {
                        this.tableLoading = false;
                        this.snackIt({
                            message: 'An Error Occurred: ' + e.response.data.message,
                            color: 'error',
                            snackbar: true
                        });
                    }
                }
            },
            async getAllBookings() {
                this.tableLoading = true;
                try {
                    let response = await Axios.get(`http://${alzuhudLink}:8080/api/booking/all`
                        , {
                            params: {
                                page: this.page,
                                token: this.token
                            }
                        }).finally(() => this.tableLoading = false);
                    let bookingsData = response.data.res.data;
                    console.log(bookingsData);
                    this.pagesCount = response.data.res.last_page;
                    this.bookingsRecord = bookingsData.map(bok => ({
                        id: bok.id,
                        user: typeof bok.user_id === "object" ? bok.user_id.full_name : 'Unknown',
                        country: typeof bok.country_id === "object" ? bok.country_id.name : 'Unknown',
                        orderNo: bok.id,
                        // type: bok.type,
                        // passenger: bok.
                        priceStatus: bok.is_price_applied === "yes" ? 'applied' : 'not applied',

                        orderDate: bok.created_at === null ? 'indeterminate' : new Date(bok.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        })
                    }));
                } catch (e) {
                    this.tableLoading = false;
                    this.snackIt({
                        message: 'An Error Occurred: ' + e.response.data.message,
                        color: 'error',
                        snackbar: true
                    });
                }
            },
            async changePage(e) {
                if (e !== undefined) {
                    this.bookingsRecord = [];
                    this.tableLoading = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/booking/all`
                            , {
                                params: {
                                    page: e,
                                    token: this.token
                                }
                            }).finally(() => this.tableLoading = false);
                        let bookingsData = response.data.res.data;
                        this.pagesCount = response.data.res.last_page;
                        this.bookingsRecord = bookingsData.map(bok => ({
                            id: bok.id,
                            user: typeof bok.user_id === "object" ? bok.user_id.full_name : 'Unknown',
                            country: typeof bok.country_id === "object" ? bok.country_id.name : 'Unknown',
                            orderNo: bok.id,
                            // type: bok.type,
                            // passenger: bok.
                            orderDate: bok.created_at === null ? 'indeterminate' : new Date(bok.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })
                        }));
                    } catch (e) {
                        this.tableLoading = false;
                        this.snackIt({
                            message: 'An Error Occurred: ' + e.response.data.message,
                            color: 'error',
                            snackbar: true
                        });
                    }
                }
            },
            view (item) {
                this.setBookingId(item.id);
                this.$router.push('viewBooking');
            }
        },
        mounted () {
            this.replaceRoute(['Bookings']);
            this.$parent.$emit('update route');
            this.getAllBookings()
        }
    }
</script>

<style lang="scss" scoped>
    #bookings{
        padding: 20px 20px;
    }
</style>
