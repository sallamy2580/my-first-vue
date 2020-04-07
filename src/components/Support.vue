<template>
  <v-app id="tickets">
      <v-card>
          <v-card-title class="d-none d-md-flex headline" style="padding: 25px 35px 0px 35px;">Recent Tickets
          <v-spacer></v-spacer>
          <v-text-field
                  outlined
                  label="Search in Subject"
                  prepend-inner-icon="mdi-magnify"
                  class="mx-0 mx-md-2 my-3 my-md-0"
                  style="max-width: 350px;"
                  @input="searchInSupport"
                  hide-details
          ></v-text-field>
          </v-card-title>
          <v-card-title class="d-md-none title mr-7 font-weight-regular" style="padding: 25px 35px 0px 35px;">Recent Tickets
          <v-spacer></v-spacer>
          <v-text-field
                  outlined
                  label="Search in Subject"
                  prepend-inner-icon="mdi-magnify"
                  class="mx-0 mx-md-2 my-3 my-md-0"
                  style="max-width: 350px;"
                  @input="searchInSupport"
                  hide-details
          ></v-text-field>
          </v-card-title>
        <v-data-table
            :headers="headers"
            :items="ticketsRecord"
            disable-pagination
            hide-default-footer
            class="table"
            :loading="tableLoading"
            :mobile-breakpoint="mobileBreakPoint"
        >

        <template v-slot:item.status="{ item }">
            <span style="white-space: nowrap;">{{ item.status }}</span>
        </template>
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
  </v-app>
</template>

<script>
  import {mapGetters, mapMutations, mapState, mapActions} from 'vuex';
import Axios from 'axios';
  import alzuhudLink from "@/components/Functions/Functions";
    export default {
        data () {
            return {
                test: '',
                headers: [
                { text: 'User', align: 'left', sortable: false,value: 'user' },
                { text: 'Subject', value: 'subject' },
                { text: 'Status', value: 'status' },
                { text: 'Date', value: 'date' },
                // { text: 'Responding Agent', value: 'respAgent' },
                { text: 'OP', value: 'action', sortable: false }
                ],
                ticketsRecord: [],
                tableLoading: false,
                page: 1,
                pagesCount: 1,
                search: null,

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
                'setTicketId'

            ]),
            ...mapActions([
                'snackIt'
            ]),
            view (item) {

                this.setTicketId(item.id);
                this.$router.push('ticket');
            },
            async searchInSupport (search) {
                if (search !== undefined || null) {
                    this.tableLoading = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/tickets/all`, {
                            params: {
                                search: search,
                                token: this.token
                            }
                        }).finally();
                        let data = response.data.res.data;
                        // this.items = data.filter(ticket => ticket.user_id.username === this.username).map(ticket => ({

                        this.ticketsRecord = data.map(ticket => ({
                            user: ticket.user_id.full_name,
                            subject: ticket.subject,
                            status: ticket.status,
                            // responderAgent: ticket,
                            date: new Date(ticket.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })
                        }));
                        this.tableLoading = false

                    } catch (e) {
                        console.log(e.response);
                        this.snackIt({
                            message: 'An error occurred while getting tickets data ',
                            color: 'error',
                            snackbar: true
                        });
                    }
                }
            },

            async changePage (e) {
                if (e !== undefined) {
                    this.tableLoading = true;
                    this.ticketsRecord = [];
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/tickets/all`, {
                            params: {
                                page: e,
                                token: this.token
                            }
                        }).finally();
                        let data = response.data.res.data;
                        this.pagesCount = response.data.res.last_page;

                        this.ticketsRecord = data.map(ticket => ({
                            id: ticket.id,
                            user: ticket.user_id.full_name,
                            subject: ticket.subject,
                            status: ticket.status,
                            // responderAgent: ticket,
                            date: new Date(ticket.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })
                        }));
                        this.tableLoading = false;

                    } catch (e) {
                        console.error(e);
                        this.snackIt({
                            message: 'An error occurred while getting tickets data ',
                            color: 'error',
                            snackbar: true
                        });
                    }
                }
            }
        },
        async mounted () {
            this.$parent.$emit('update route');
            this.replaceRoute(['Support']);
            this.tableLoading = true;
            try {
                let response = await Axios.get(`http://${alzuhudLink}:8080/api/tickets/all` , {
                    params: {
                        token: this.token
                    }
                }).finally();
                let data = response.data.res.data;
                // this.items = data.filter(ticket => ticket.user_id.username === this.username).map(ticket => ({

                this.ticketsRecord = data.map(ticket => ({
                    id: ticket.id,
                    user: ticket.user_id.full_name,
                    subject: ticket.subject,
                    status: ticket.status,
                    // responderAgent: ticket,
                    date: new Date(ticket.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    })
                }));
                this.tableLoading = false;
                console.log(this.ticketsRecord);

            } catch (e) {
                console.log(e.response);
                this.snackIt({
                    message: 'An error occurred while getting tickets data ',
                    color: 'error',
                    snackbar: true
                });
            }

        }
        // }
    }
</script>

<style lang="scss" scoped>
    #tickets{
        padding: 20px 20px;
    }
</style>
