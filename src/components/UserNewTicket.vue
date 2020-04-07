<template>
  <div id="user-new-ticket">
        <div class="d-flex justify-space-between align-center mb-5">
            <div class="flex-grow-1">
                <div class="panel-title">{{panelTitle}}</div>
                <AdminPageInfo :adminUser="adminUser" :routes="routes"></AdminPageInfo>
            </div>
        </div>
      <v-card style="padding: 0; margin-bottom: 35px;">
        <v-card-title style="font-size:14pt; margin-bottom: 10px; ">Send a New Ticket</v-card-title>
        <v-row class="px-5">
            <v-col cols="12" md="6">
                <v-text-field outlined label="Enter Subject" v-model="subject" :rules="[required]"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-file-input outlined prepend-icon="" append-icon="mdi-paperclip" label="Select File" v-model="file"></v-file-input>
            </v-col>
            <v-col cols="12">
                <v-textarea auto-grow outlined label="Message" v-model="message" :rules="[required]"></v-textarea>
            </v-col>
        </v-row>
        <div id="btn-new-container">
            <v-btn max-width="150" rounded depressed x-large class="px-12" dark color="primary" style="justify-self: right; align-self: center; font-weight:bold;" @click="submitTicket">Send</v-btn>
        </div>
      </v-card>
  </div>
</template>

<script lang="ts">
  import {Action, Getter, Mutation, State} from "vuex-class";
import {Vue, Component} from 'vue-property-decorator';
import AdminPageInfo from './AdminPageInfo.vue';
import Axios from "axios";
import alzuhudLink, {toBase64} from "@/components/Functions/Functions";

@Component({
    components: {
        AdminPageInfo
    }
})
export default class UserNewTicket extends Vue {
    // @ts-ignore
    @State adminUser: string;
    // @ts-ignore
    @State routes: string[];
    @Getter token: string;
    panelTitle: string = 'New Ticket';
    // @ts-ignore
    @Mutation replaceRoute;
    // @ts-ignore
    @Action snackIt: ({color: string, message: string, snackbar: boolean}) => void;
    subject: string | undefined = undefined;
    file: File | undefined = undefined;
    message: string | undefined = undefined;

    required (value: any): any {

      if (typeof value === typeof []) {
        if (value.length === 0) {
          return 'Required';
        }
        return true;
      }
      return !!value || 'Required';
    }

    ticketData = {
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
    }
    
    mounted () {
        this.replaceRoute(['Support', 'New Ticket']);
    }

    async submitTicket() {

      if (this.subject !== undefined && this.message !== undefined && this.subject !== '' && this.message !== '') {
        let file = '';
        try {
          if (this.file !== undefined)
            file = await toBase64(this.file);
        } catch (e) {
          file = '';
        }

        try {
          const result = await Axios.post(`http://${alzuhudLink}:8080/api/tickets/add`, {
            token: this.token,
            subject: this.subject,
            ticket_img: file,
            body: this.message,
          });
          this.$router.push('support');
        } catch (e) {
          this.snackIt({
            message: 'Failed to Submit New Ticket',
            color: 'error',
            snackbar: true,
          })
        }
      } else {
        this.snackIt({
          message: 'Fill the Required Fields',
          color: 'error',
          snackbar: true,
        })
      }
    }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
    #user-new-ticket{
        padding: 0 0 10px;
    }
    #btn-new-container{
        padding: 5px 20px 25px 0;
        display: grid;
        grid-template-columns: auto;
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
</style>
