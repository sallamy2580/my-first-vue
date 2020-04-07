<template>
  <div id="user-ticket">
        <div class="d-flex justify-space-between align-center mb-5">
            <div class="flex-grow-1">
                <div class="panel-title">{{panelTitle}}</div>
                <AdminPageInfo :adminUser="adminUser" :routes="routes"></AdminPageInfo>
            </div>
<!--            <v-btn x-large outlined rounded class="font-weight-regular body-1 px-7" height="50" color="#FF1744">Close Ticket</v-btn>-->
        </div>
      <v-card>
        <div class="container01">
            <div>
                <span class="title font-weight-regular">Subject: </span>
                <span class="title font-weight-black">{{ticketData.subject}}</span>
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
                <div class="responderText-container" style="border-radius: 20px !important;" v-else>
                    <v-card outlined class="container03" style="padding: 15px 20px;" color="green lighten-4">
                        <h3>{{ticket.user_id.full_name}}</h3>
                        <p>{{ticket.body}}</p>
                        <div class="chat-time-container">
                            <p style="color:grey; font-size:11.5pt;">{{getDate(index === 0 ? ticket.created_at: ticket.updated_at)}}</p>
                            <p style="color:grey; font-size:11.5pt;">{{getTime(index === 0 ? ticket.created_at: ticket.updated_at)}}</p>
                        </div>
                    </v-card>
                </div>
            </template>
<!--            <div class="userText-container">-->
<!--                <v-card class="container03" style="padding: 15px 20px;" flat color="grey lighten-2">-->
<!--                    <p>{{ticketData.user.userTicketText}}</p>-->
<!--                    <div class="chat-time-container">-->
<!--                        <p style="color:grey; font-size:11.5pt;">{{ticketData.user.userTicketDate}}</p>-->
<!--                        <p style="color:grey; font-size:11.5pt;">{{ticketData.user.userTicketTime}}</p>-->
<!--                    </div>-->
<!--                </v-card>-->
<!--            </div>-->
<!--            <div class="responderText-container">-->
<!--                <v-card outlined class="container03" style="padding: 15px 20px;" color="green lighten-3">-->
<!--                    <p>{{ticketData.responder.responderTicketText}}</p>-->
<!--                    <div class="chat-time-container">-->
<!--                        <p style="color:grey; font-size:11.5pt;">{{ticketData.responder.responderTicketDate}}</p>-->
<!--                        <p style="color:grey; font-size:11.5pt;">{{ticketData.responder.responderTicketTime}}</p>-->
<!--                    </div>-->
<!--                </v-card>-->
<!--            </div>-->
<!--            <div class="responderText-container">-->
<!--                <v-card outlined class="container03" style="padding: 15px 20px;" color="green lighten-3">-->
<!--                    <p>{{ticketData.responder.responderTicketText}}</p>-->
<!--                    <div class="chat-time-container">-->
<!--                        <p style="color:grey; font-size:11.5pt;">{{ticketData.responder.responderTicketDate}}</p>-->
<!--                        <p style="color:grey; font-size:11.5pt;">{{ticketData.responder.responderTicketTime}}</p>-->
<!--                    </div>-->
<!--                </v-card>-->
<!--            </div>-->
        </div>
        <v-divider style="grid-column: 1/5; margin: 8px 0;"></v-divider>
        <div class="container04">
            <!-- <v-btn text icon style=" justify-self:center;"> -->
            <v-file-input style="margin-top: -1px; display: none;" id="select-file" v-model="file">
            </v-file-input>
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="paperclip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click="selectFile" class="paper-clip">
              <path fill="#999" d="M149.106 512c-33.076 0-66.153-12.59-91.333-37.771-50.364-50.361-50.364-132.305-.002-182.665L319.842 29.498c39.331-39.331 103.328-39.331 142.66 0 39.331 39.332 39.331 103.327 0 142.657l-222.63 222.626c-28.297 28.301-74.347 28.303-102.65 0-28.3-28.301-28.3-74.349 0-102.649l170.301-170.298c4.686-4.686 12.284-4.686 16.97 0l5.661 5.661c4.686 4.686 4.686 12.284 0 16.971l-170.3 170.297c-15.821 15.821-15.821 41.563.001 57.385 15.821 15.82 41.564 15.82 57.385 0l222.63-222.626c26.851-26.851 26.851-70.541 0-97.394-26.855-26.851-70.544-26.849-97.395 0L80.404 314.196c-37.882 37.882-37.882 99.519 0 137.401 37.884 37.881 99.523 37.882 137.404.001l217.743-217.739c4.686-4.686 12.284-4.686 16.97 0l5.661 5.661c4.686 4.686 4.686 12.284 0 16.971L240.44 474.229C215.26 499.41 182.183 512 149.106 512z" ></path>
            </svg>
            <!-- </v-btn> -->
            <v-textarea style="margin-bottom: -20px;"
                name="name"
                label="Your Message"
                id="id"
                outlined
                auto-grow
                rows="2"
                flat
                v-model="message"
            ></v-textarea>
            <v-btn depressed class="font-weight-regular  px-8 px-md-11" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1': 'body-2']" height="50" rounded color="#00897B" dark @click="sendTicket">Send</v-btn>
        </div>
      </v-card>
  </div>
</template>

<script lang="ts">
  import {Mutation, State, Action, Getter} from "vuex-class";
import {Vue, Component} from 'vue-property-decorator';
import AdminPageInfo from './AdminPageInfo.vue';
import Axios from "axios";
import alzuhudLink, {toBase64} from "@/components/Functions/Functions";

@Component({
    components: {
        AdminPageInfo
    }
})
export default class UserTicket extends Vue {
    // @ts-ignore
    @State adminUser: string;
    // @ts-ignore
    @State routes: string[];
    @State ticketId: number;
    @State userId: number;
    @Getter token: string;
    panelTitle: string = 'Ticket';
    // @ts-ignore
    @Mutation replaceRoute;
    @Mutation setTicketId: (id: number | null) => void;
    @Action snackIt: Function;

    ticketData: any = {
        subject: 'Packages',
        status: 'Answered',
        user: {
            name: 'Arnold Lang',
            userTicketText: 'Minim nulla occaecat ut esse do id. Veniam excepteur quis aute consectetur. Lorem aliquip reprehenderit voluptate Lorem deserunt pariatur velit cupidatat eiusmod ea. Excepteur voluptate enim proident reprehenderit incididunt consequat ullamco qui aliquip aute eiusmod. Et laboris fugiat commodo et irure do sit. Ipsum proident mollit tempor ullamco nostrud tempor. Labore exercitation occaecat fugiat ut mollit incididunt eu labore duis quis. Adipisicing minim qui nisi esse occaecat mollit magna labore proident tempor. Ea elit occaecat et nostrud sint deserunt incididunt amet dolore excepteur duis ex laboris. Consequat ex aute esse incididunt laboris in. Labore dolor ullamco cupidatat id non. In officia veniam proident do quis do amet ea cillum ut.',
            userTicketTime: '12:35 PM',
            userTicketDate: '22.10.2019'
        },
        responder: {
            name: 'Jasmine Andrews',
            responderTicketText: 'Mollit pariatur ipsum consectetur eu deserunt qui amet voluptate. Tempor proident duis magna qui et quis consequat voluptate qui quis. Dolore sunt aliqua et anim nisi.',
            responderTicketTime: '12:35 PM',
            responderTicketDate: '22.10.2019'
        }
    };
    message: string = '';
    file: File | null;

    selectFile() {
      const el = document.getElementById('select-file');
      if (el !== null)
        el.click();
    }

    async mounted () {
      this.replaceRoute(['Support', 'My Tickets']);
      try {
        const response = await Axios.get(`http://${alzuhudLink}:8080/api/tickets/sections/${this.ticketId}`, {
          params: {
            token: this.token,
          }
        });

        console.log(response.data);
        this.ticketData = {
          subject: response.data.ticket.subject,
          status: response.data.ticket.status,
          tickets: [
            response.data.ticket,
            ...response.data.sections.data.reverse(),
          ]
        };
      } catch (e) {

      }

      const chat = document.getElementById('chatContainer');
      setTimeout(() => {
          if (!!chat)
              chat.scrollTop = chat.scrollHeight;
      }, 10);
    }

    getTime(datestr: string): string {
      const date = new Date(datestr);
      const now = new Date();
      const newDate = new Date(date.getTime() - (now.getTimezoneOffset() * 60000));
      return newDate.toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
      });
    }

    getDate(datestr: string): string {
      const date = new Date(datestr);
      const now = new Date();
      const newDate = new Date(date.getTime() - (now.getTimezoneOffset() * 60000));
      return newDate.toLocaleDateString('en-US', {

      });
    }

    beforeDestroy() {
      this.setTicketId(null);
    }

    async sendTicket() {
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
          message: 'Ticket Added',
          color: 'success',
          snackbar: true,
        });


      } catch (e) {
        this.snackIt({
          message: 'Failed to Add Ticket',
          color: 'error',
          snackbar: true,
        });
      } finally {
        this.message = '';
          const chat = document.getElementById('chatContainer');
          setTimeout(() => {
              if (!!chat)
                  chat.scrollTop = chat.scrollHeight;
          }, 10);
      }


    }
}
</script>

<style lang="scss">
    #user-ticket {
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
    #user-ticket{
        padding: 0 0 10px;
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
    }
    #chatContainer{
        max-height: 55vh;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    .userText-container {
        display: grid;
        grid-template-columns: 50%;
        grid-template-rows: auto auto auto;
        padding: 15px 20px;
        @media screen and (max-width: 1264px) {
          grid-template-columns: 80%;
        }

        @media screen and (max-width: 960px) {
          grid-template-columns: 100%;
        }
    }
    .responderText-container {
        display: grid;
        grid-template-columns: 50%;
        grid-template-rows: auto auto auto;
        justify-content: right;
        padding: 15px 20px;
        @media screen and (max-width: 1264px) {
          grid-template-columns: 80%;
        }

        @media screen and (max-width: 960px) {
          grid-template-columns: 100%;
        }
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
        // top: -65px;
        // margin-bottom: -40px;
    }
    #btnsContainer{
        grid-column: 2/3;
        display: grid;
        grid-template-columns: auto;
        grid-column-gap: 15px;
        justify-content: right;
    }

    .paper-clip {
      &:hover {
        cursor: pointer;
      }
      max-height: 40px;
      max-width: 40px;
      @media screen and (max-width: 960px) {
        max-height: 30px;
        max-width: 30px;
      }
      align-self: start;
      margin-top: 10px;
    }
</style>
