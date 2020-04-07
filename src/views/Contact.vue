<template>
  <div class="white">
    <AlzuhudHeader :light="true"></AlzuhudHeader>
    <PageInfo pageName="Contact Us" :routes="['contact us']"></PageInfo>
    <main>
      <v-row justify="center" class="mx-n3 mx-md-0" style=" height: 30vh; width: 100%;">
        <div id="map"  style="width: 100%; height: 100%;"></div>
      </v-row>
      <v-row class="mt-12 pt-0 pt-md-12" style="width: 100%">
        <v-col cols="12" md="6">
            <div class="box py-5 py-md-10 mx-n3 mx-md-0" v-for="(contact, index) in contacts" :key="contact">
                <img :src="contact.image">
                <a v-if="index !== 3" class="text black--text" :href="`${(index === 0) ? 'mailto:' : 'tel:'}${contact.info}`">{{contact.info}}</a>
                <div v-else class="text black--text">{{contact.info}}</div>
            </div>
        </v-col>
        <v-col cols="12" md="6">
            <v-row>
                <v-col class="px-0 pl-md-0 pr-md-3" cols="12" md="6"><v-text-field :rules="[nameLength]" v-model="name" outlined label="Full Name"></v-text-field></v-col>
                <v-col class="pr-md-0 px-0 pl-md-3" cols="12" md="6"><v-text-field outlined label="Email" :rules="[matchEmail]" v-model="email"></v-text-field></v-col>
            </v-row>
            <v-row>
                <v-col class="px-0" cols="12"><v-text-field :rules="[required]" outlined label="Subject" v-model="subject"></v-text-field></v-col>
            </v-row>
            <v-row>
                <v-col class="px-0" cols="12"><v-textarea :rules="[required]" auto-grow outlined label="Message" v-model="message"></v-textarea></v-col>
            </v-row>
            <v-row>
<!--              <vue-recaptcha-->
<!--                  ref="recaptcha"-->
<!--                  @verify="onCaptchaVerified"-->
<!--                  size="invisible"-->
<!--                  sitekey="6LfowrkUAAAAALwp4QjB4KT1XhH4AhNKaABEsBT-">-->
<!--              </vue-recaptcha>-->
            </v-row>
            <v-row justify="end">
                <v-btn rounded :block="$vuetify.breakpoint.smAndDown" depressed color="primary" :disabled="submitting" style="font-weight: 600; font-size: 18px;" x-large class=" px-12 mt-0 mt-md-5" @click="submitContact">Send</v-btn>
            </v-row>
        </v-col>
      </v-row>
    </main>
<!--    <AppSection></AppSection>-->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AlzuhudHeader from '@/components/AlzuhudHeader.vue';
import AppSection from '@/components/AppSection.vue';
import Footer from '@/components/Footer.vue';
import PageInfo from '@/components/PageInfo.vue';
import alzInput from '@/components/alzInput.vue';
// contacts
// @ts-ignore
import Message from '@/assets/message.svg';
// @ts-ignore
import Phone from '@/assets/phone.svg';
// @ts-ignore
import Location from '@/assets/location.svg';
import Axios from "axios";
import {Action} from "vuex-class";
import alzuhudLink from "@/components/Functions/Functions";

interface contact {
    image: string,
    info: string
}

@Component({
  components: {
    AlzuhudHeader,
    AppSection,
    Footer,
    PageInfo,
    alzInput,
    // @ts-ignore
    // 'vue-recaptcha': VueRecaptcha,
  }
})
export default class Contact extends Vue {
    contacts: Array<contact>;
    email: string = '';
    name: string = '';
    subject: string = '';
    message: string = '';
    emailValidated: boolean = false;
    nameLengthValidated: boolean = false;
    submitting: boolean = false;
    @Action snackIt: Function;

    /**
     *
     */
    constructor() {
        super();
        this.contacts = [
            {
                image: Message,
                info: 'info@alzuhud.com'
            },
            {
                image: Phone,
                info: '+966 122349474'
            },
            {
                image: Phone,
                info: '+966 554175500'
            },
            {
                image: Location,
                info: 'Al Nuzha Dist, Jedda, KSA'
            },
        ];
    }

    mounted() {
        document.title = 'Contact Us - Alzuhud';
        let locations = [
          ['<div class="infobox"><h3 class="title">OUR OFFICE</h3><span>Al Nuzha Dist, Jedda, KSA</span><br></div>',21.6242675, 39.1624923,  2]
        ];

        // @ts-ignore
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          scrollwheel: false,
          navigationControl: true,
          mapTypeControl: false,
          scaleControl: false,
          draggable: false,
          styles: [ { "stylers": [ { "hue": "#bfbdb8" },  {saturation: -100},
              {gamma: 0.90} ] } ],
          // @ts-ignore
          center: new google.maps.LatLng(21.6242675, 39.1624923),
          // @ts-ignore
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        // @ts-ignore
        let infowindow = new google.maps.InfoWindow();

        let marker, i;

        for (i = 0; i < locations.length; i++) {

          // @ts-ignore
          marker = new google.maps.Marker({
            // @ts-ignore
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map ,
            icon: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-icon.png'
          });

          // @ts-ignore
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }

    }

    required =  (value: any) => !!value || 'Required';

    matchEmail(value: string): boolean | string {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (pattern.test(value) && value.length >= 8 && value.length < 50) {
        this.emailValidated = true;
        return true;
      } else {
        this.emailValidated = false;
        return 'Invalid Email (at least 8 and at most 50 characters and must match name@example.com)';
      }
    }

    nameLength(value: string): boolean | string {
      if (!!value) {
        if (value.length < 50) {
          this.nameLengthValidated = true;
          return true;
        } else {
          this.nameLengthValidated = false;
          return 'At most 50 characters';
        }
      } else {
        this.nameLengthValidated = false;
        return 'Required';
      }
    }

    async submitContact() {
      // @ts-ignore
      this.$refs.recaptcha.execute();
    }

    async onCaptchaVerified(token: any) {
      this.submitting = true;
      // @ts-ignore
      this.$refs.recaptcha.reset();
      try {
        this.submitDone();
      } catch (e) {

        this.snackIt({
          message: 'Failed to Verify Captcha',
          color: 'error',
          snackbar: true,
        })
      } finally {
        this.submitting = false;
      }
    }

    async submitDone() {
      if (this.emailValidated && this.nameLengthValidated) {
        try {
          const response = await Axios.post(`http://${alzuhudLink}:8080/api/guest/contact/add`, {
            subject: this.subject,
            message: this.message,
            email: this.email,
            name: this.name,
            recaptcha_token: '6LfowrkUAAAAALwp4QjB4KT1XhH4AhNKaABEsBT-',
          });



          this.snackIt({
            message: 'Message Sent Successfully',
            color: 'success',
            snackbar: true,
          })
        } catch (e) {

          this.snackIt({
            message: 'Failed to Send Message',
            color: 'error',
            snackbar: true,
          })
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  main {
    margin: 0 322px 137px;
    color: black;
    font-size: 22px;

    @media screen and (max-width: 1904px) {
      margin: 0 150px 137px;
    }

    @media screen and (max-width: 1264px) {
      margin: 0 50px 137px;
      font-size: 16px;
    }

    @media screen and (max-width: 960px) {
      margin: 0 30px 70px;
      font-size: 16px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-content {
    display: flex;
    margin-bottom: 70px;

    .content {
      width: 628px;
    }
  }

  .box {
        display: flex;
        align-items: center;
        .text {
            margin-left: 10px;
        }
    }
</style>
