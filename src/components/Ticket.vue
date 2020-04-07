<template>
  <v-app id="ticket">
      <v-card :loading="mainLoading">
        <div id="FakeTitleContainer">
            <div id="btnsContainer">
                <v-btn :loading="closing" @click="closeTicket" min-width="150" class="font-weight-medium body-1 px-7" height="50" rounded outlined color="#FF1744">Close Ticket</v-btn>
            </div>
        </div>
        <div :class="[adminUser === 'Admin' ? 'container01' : 'container01-agent']">
            <div>
                <span class="title font-weight-regular">User: </span>
                <span class="title font-weight-bold text-capitalize">{{ticketData.tickets[0].user_id.full_name}}</span>
            </div>
            <div>
                <span class="title font-weight-regular">Subject: </span>
                <span class="title font-weight-bold text-capitalize">{{ticketData.subject}}</span>
            </div>
            <div v-if="adminUser === 'Admin'">
                <span class="title font-weight-regular">Answered By: </span>
                <span class="title font-weight-bold text-capitalize">{{responder}}</span>
            </div>
            <div>
                <span class="title font-weight-regular">Status: </span>
                <span class="title font-weight-bold text-capitalize">{{ticketData.status}}</span>
            </div>
        </div>
        <v-divider style="grid-column: 1/5;"></v-divider>
        <div id="chatContainer">
            <template v-for="(ticket, index) in ticketData.tickets">
                <div class="userText-container" v-if="ticket.user_id.id !== userId">
                    <v-card class="container03" style="padding: 15px 20px; border-radius: 20px !important;" flat color="grey lighten-2">
                        <h3>{{ticket.user_id.full_name}}</h3>
                        <p>{{ticket.body}}</p>
                        <div class="chat-time-container">
                            <p style="color:grey; font-size:11.5pt;">{{getDate(index === 0 ? ticket.created_at: ticket.updated_at)}}</p>
                            <p style="color:grey; font-size:11.5pt;">{{getTime(index === 0 ? ticket.created_at: ticket.updated_at)}}</p>
                        </div>
                    </v-card>
                </div>
                <!--<div class="responderText-container">
                    <v-card outlined class="container03 px-5 py-4" :color="adminUser === 'Agent' ? '#D4EBD4' : 'false'" v-bind:style="[adminUser === 'Admin' ? {'border-color': 'grey'} : {} ]">
                        <h3>{{ticket.user_id.full_name}}</h3>
                        <p>{{ticket.body}}</p>
                        <div class="chat-time-container">
                            <p style="color:grey; font-size:11.5pt;">{{getDate(index === 0 ? ticket.created_at: ticket.updated_at)}}</p>
                            <p style="color:grey; font-size:11.5pt;">{{getTime(index === 0 ? ticket.created_at: ticket.updated_at)}}</p>
                        </div>
                    </v-card>
                </div>-->
                <div class="responderText-container" v-else>
                    <v-card outlined class="container03 px-5 py-4" :color="adminUser === 'Agent' ? '#D4EBD4' : 'false'" v-bind:style="[adminUser === 'Admin' ? {'border-color': 'grey'} : {} ]">
                        <h3>{{ticket.user_id.full_name}}</h3>
                        <p>{{ticket.body}}</p>
                        <div class="chat-time-container">
                            <p style="color:grey; font-size:11.5pt;">{{getDate(index === 0 ? ticket.created_at: ticket.updated_at)}}</p>
                            <p style="color:grey; font-size:11.5pt;">{{getTime(index === 0 ? ticket.created_at: ticket.updated_at)}}</p>
                        </div>
                    </v-card>
                </div>
            </template>
        </div>
        <v-divider style="grid-column: 1/5; margin: 8px 0;"></v-divider>
        <div class="container04" style="margin-bottom: -10px;">
            <!-- <v-btn text icon style=" justify-self:center;"> -->
                <v-file-input v-model="file" id="fileInput" style="margin-top: -1px; display: none;">
                </v-file-input>
                <v-btn @click="openFileInput" :ripple="false" class="pt-5" style="margin: 0 -5px;" icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 21.265 27.469">
                        <g id="surface1" transform="translate(-11.993 -6.035)">
                            <path id="Path_217" data-name="Path 217" d="M27.216,6.035A5.919,5.919,0,0,0,22.907,7.9l-8.523,8.991a8.893,8.893,0,0,0,0,12.132,1.039,1.039,0,0,0,.347.243l.006,0a7.945,7.945,0,0,0,11.3-.245l6-6.326a1.064,1.064,0,1,0-1.545-1.464l-6,6.326a5.781,5.781,0,0,1-8.565,0,6.791,6.791,0,0,1,0-9.205l8.521-8.991a3.718,3.718,0,0,1,5.532,0,4.438,4.438,0,0,1,0,6l-7.756,8.184a1.653,1.653,0,0,1-2.5,0,2.088,2.088,0,0,1,0-2.8l6.239-6.584A1.064,1.064,0,1,0,24.422,12.7l-6.241,6.584a4.189,4.189,0,0,0,0,5.731,1.063,1.063,0,0,0,.358.247,3.824,3.824,0,0,0,5.232-.247l7.756-8.184a6.5,6.5,0,0,0,.218-8.586,1.07,1.07,0,0,0-.218-.345A5.924,5.924,0,0,0,27.216,6.035Z" transform="translate(0 0)" fill="#707070"/>
                        </g>
                    </svg>
                </v-btn>
            <!-- </v-btn> -->
            <v-textarea style="margin-bottom: -20px; max-height: 200px;"
                v-model="message"
                name="name"
                label="Your Message"
                id="id"
                auto-grow
                rows="1"
                outlined
                flat
            ></v-textarea>
            <v-btn @click="sendTicket" :loading="sendLoading" class=" body-1 px-10" max-width="105" height="45" rounded color="#00897B" dark style="margin-top: 4px;">Send</v-btn>
            <!--            <v-btn style="margin-top: 10px" class="d-sm-none" icon fab color="#00897B" dark><v-icon size="34">mdi-send</v-icon></v-btn>-->
        </div>
      </v-card>
  </v-app>
</template>

<script>
import {mapGetters, mapMutations, mapState, mapActions } from 'vuex';
import Axios from 'axios';
import alzuhudLink, {toBase64} from "@/components/Functions/Functions";
import { consoleInfo } from 'vuetify/src/util/console';
    export default {
        data () {
            return {
                ticketData: {
                    subject: '',
                    status: '',
                    // user: {
                    //     name: 'Arnold Lang',
                    //     userTicketText: 'Minim nulla occaecat ut esse do id. Veniam excepteur quis aute consectetur. Lorem aliquip reprehenderit voluptate Lorem deserunt pariatur velit cupidatat eiusmod ea. Excepteur voluptate enim proident reprehenderit incididunt consequat ullamco qui aliquip aute eiusmod. Et laboris fugiat commodo et irure do sit. Ipsum proident mollit tempor ullamco nostrud tempor. Labore exercitation occaecat fugiat ut mollit incididunt eu labore duis quis. Adipisicing minim qui nisi esse occaecat mollit magna labore proident tempor. Ea elit occaecat et nostrud sint deserunt incididunt amet dolore excepteur duis ex laboris. Consequat ex aute esse incididunt laboris in. Labore dolor ullamco cupidatat id non. In officia veniam proident do quis do amet ea cillum ut.',
                    //     userTicketTime: '12:35 PM',
                    //     userTicketDate: '22.10.2019'
                    // },
                    // responder: {
                    //     name: 'Jasmine Andrews',
                    //     responderTicketText: 'Mollit pariatur ipsum consectetur eu deserunt qui amet voluptate. Tempor proident duis magna qui et quis consequat voluptate qui quis. Dolore sunt aliqua et anim nisi.',
                    //     responderTicketTime: '12:35 PM',
                    //     responderTicketDate: '22.10.2019'
                    // }
                },
                responder: '',
                file: null,
                message: null,
                mainLoading: false,
                sendLoading: false,
                closing: false
            }
        },
        computed: {
            ...mapState([
                'adminUser',
                'ticketId',
                'userId'
            ]),
            ...mapGetters([
                'token'
            ]),
        },
        methods: {
            ...mapMutations([
                'replaceRoute',
                'changePanelTitle'
            ]),
            ...mapActions([
                'snackIt'
            ]),
            async getConversation ()  {
                console.log('id : ', this.ticketId);
                try {
                    const response = await Axios.get(`http://${alzuhudLink}:8080/api/tickets/sections/${this.ticketId}`, {
                        params: {
                            token: this.token,
                        }
                    });
                    console.log('t resp: ', response);
                    this.ticketData = {
                        subject: response.data.ticket.subject,
                        status: response.data.ticket.status,
                        tickets: [
                            response.data.ticket,
                            ...response.data.sections.data.reverse(),
                        ]
                    };
                    console.log('t data: ', this.ticketData);
                    this.findResponder();
                } catch (e) {
                    console.log(e.response);
                }
                this.mainLoading = false;
            },
            getTime(datestr) {
                const date = new Date(datestr);
                const now = new Date();
                const newDate = new Date(date.getTime() - (now.getTimezoneOffset() * 60000));
                return newDate.toLocaleTimeString('en-US', {
                    hour12: true,
                    hour: 'numeric',
                    minute: 'numeric',
                });
            },

            getDate(datestr) {
                const date = new Date(datestr);
                const now = new Date();
                const newDate = new Date(date.getTime() - (now.getTimezoneOffset() * 60000));
                return newDate.toLocaleDateString('en-US', {

                })
            },

            async sendTicket() {
                this.sendLoading = true;
                const img = !!this.file ? await toBase64(this.file): '';
                try {
                    const response = await Axios.post(`http://${alzuhudLink}:8080/api/tickets/answer/${this.ticketId}`, {
                        body: this.message,
                        ticket_img: img,
                        token: this.token,
                    });
                    const response2 = await Axios.get(`http://${alzuhudLink}:8080/api/tickets/sections/${this.ticketId}`, {
                        params: {
                            token: this.token,
                        }
                    });
                    this.ticketData = {
                        subject: response2.data.ticket.subject,
                        status: response2.data.ticket.status,
                        tickets: [
                            response2.data.ticket,
                            ...response2.data.sections.data.reverse(),
                        ]
                    };
                    this.snackIt({
                        message: 'Ticket added',
                        color: 'success',
                        snackbar: true,
                    });

                } catch (e) {
                    this.snackIt({
                        message: 'Failed to add ticket',
                        color: 'error',
                        snackbar: true,
                    });
                } finally {
                    this.message = '';
                    this.sendLoading = false;
                    const chat = document.getElementById('chatContainer');
                    setTimeout(() => {
                        if (!!chat)
                            chat.scrollTop = chat.scrollHeight;
                    }, 10);
                }
            },
            openFileInput () {
                let el = document.getElementById('fileInput');
                el.click();
            },
            async closeTicket() {
                if (confirm('Are you sure to close this ticket?')) {
                    this.closing = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/tickets/close/${this.ticketId}`, {
                            params: {
                                // ticketId: this.ticketId,
                                token: this.token
                            }
                        });
                        this.snackIt({
                            message: 'Ticket Closed',
                            color: 'success',
                            snackbar: true,
                        });
                        this.$router.push("/admin/support");
                    } catch (e) {
                        console.log(e.response);
                        this.snackIt({
                            message: 'Failed to close ticket',
                            color: 'error',
                            snackbar: true,
                        });
                    }
                    finally {
                        this.closing = false;
                    }
                }
            },
            findResponder() {
                if (this.ticketData.tickets !== null) {
                    let ticketOwnerId = this.ticketData.tickets[0].user_id.id;
                    console.log('owner: ', ticketOwnerId);
                    try {
                        for (let i = 0; i < this.ticketData.tickets.length ; i++) {
                            if (this.ticketData.tickets[i].user_id.id !== ticketOwnerId) {
                                this.responder = this.ticketData.tickets[i].user_id.full_name;
                                console.log('responder: ', this.responder);
                                return;
                            }
                        }
                    } catch (e) {
                        console.log('findResponder: ', e);
                    }
                }
            }
        },
        async mounted () {
            this.mainLoading = true;
            this.changePanelTitle('Ticket');
            this.replaceRoute(['Support', 'Ticket']);
            this.$parent.$emit('update route');
            await this.getConversation();
            const chat = document.getElementById('chatContainer');
            setTimeout(() => {
                if (!!chat)
                    chat.scrollTop = chat.scrollHeight;
            }, 10);
        },

        // beforeDestroy() {
        //     this.setTicketId(null);
        // }
    }
</script>

<style lang="scss">
    #ticket {
        .v-input input {
            font-weight: bold;
        }
        .v-file-input .v-input__control {
            display: none;
        }
        .v-input__append-outer .v-icon, .v-input__prepend-outer .v-icon {
            font-size: 50px !important;
        }
    }
</style>

<style lang="scss" scoped>
    #ticket{
        padding: 20px 20px;
    }
    .container00{
        padding: 0 20px;
        display: grid;
        grid-row-gap: 40px;
    }
    .container01{
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto;
        padding: 15px 20px;
        justify-content: space-between;
    }
    .container01-agent{
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        padding: 15px 20px;
        justify-content: space-between;
    }
    #chatContainer{
        max-height: 55vh;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    .userText-container {
        display: grid;
        grid-template-columns: 80%;
        grid-template-rows: auto auto auto;
        padding: 15px 20px;
    }
    .responderText-container {
        display: grid;
        grid-template-columns: 80%;
        grid-template-rows: auto auto auto;
        justify-content: right;
        padding: 15px 20px;
    }
    .container03{
        display: grid;
        grid-template-rows: auto auto auto;
        grid-row-gap: 15px;
    }
    .chat-time-container {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: right;
        grid-column-gap: 20px;
        margin-bottom: -20px;
    }
    .container04{
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-column-gap: 15px;
        // align-items: center;
        padding: 15px 20px;

    }
    #FakeTitleContainer{
        display: grid;
        position: relative;
        // z-index: +1;
        top: -65px;
        margin-bottom: -40px;
    }
    #btnsContainer{
        grid-column: 2/3;
        display: grid;
        grid-template-columns: auto;
        grid-column-gap: 15px;
        justify-content: right;
    }

    .container04 .v-btn::before {
        display: none;
    }

    @media screen and (max-width: 960px) {
        .container01{
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto;
            grid-row-gap: 15px;
            padding: 15px 20px;
        }
    }
    @media screen and (max-width: 600px) {
        .container01, .container01-agent{
             display: grid;
             grid-template-columns: auto;
             grid-template-rows: auto auto;
             grid-row-gap: 15px;
             padding: 15px 20px;
         }
        #ticket{
            padding: 80px 20px 10px 20px;
        }
    }
</style>
