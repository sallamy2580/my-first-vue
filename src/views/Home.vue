<template>
  <div class="home white">
    <AlzuhudHeader style="position: absolute;"/>
    <div class="image">
      <div class="center-title mt-12 mt-md-0">
        <h1>Ummrah Guide</h1>
        <div>The literal meaning of Ihram is to make haram (forbidden). When a Moutamer pronounces the Niyyah (intention) of Ummrah and utters Talbiyah, certain halaal (permissible) things become haram for him.</div>
        <v-btn depressed rounded class="px-9 primary--text" x-large @click="$router.push('/sign-in')">{{language === 'ar'? 'أحجز الان':'Book Now'}}</v-btn>
      </div>
      <img style="position: absolute; bottom: 30px;" src="../assets/mouse.svg">
      <img style="position: absolute; bottom: 0; width: 100%;" src="../assets/curve2.svg" class="curve">
    </div>
    <br>
    <br class="d-none d-md-block">
    <br class="d-none d-md-block">
    <br>
    <br>
    <HeaderSection
      :header="'Distinguished services for guests of Al-Rahman and visitors'"
      :subHeader="'INTRODUCING QUALITY SERVICES AND UTMOST DEDICATION'"
    ></HeaderSection>
    <FeatureSection></FeatureSection>
    <div class="cover">
      <img style="align-self: start;" src="../assets/people.png">
      <div class="description">
        <div class="heading">How to perform Ummrah</div>
        <p>The literal meaning of Ihram is to make haram (forbidden). When a Moutamer pronounces the Niyyah (intention) of Ummrah and utters Talbiyah, certain halaal (permissible) things become haram for him. This combined action (Niyyah and Talbiyah) is called Ihram. The two sheets that a Moutamer wears are figuratively known as Ihram but the real Ihram is Niyyah & Talbiyah. If someone wears these two sheets and does not declare his intention and utter Talbiyah, he does not become a Muhrim. That is why, before Niyyah and Talbiyah, he can cover his head during two rakahs of Nafl, an act which is not allowed in the real state of   Ihram.</p>
        <v-btn rounded depressed class="mt-n4 px-12" x-large style="font-size: 18px; font-weight: 600;" color="primary" @click="$router.push('/services/how-to-umrah')">{{language === 'ar'? 'مزيد':'More'}}</v-btn>
      </div>
    </div>
<!--    <TestimonialSection></TestimonialSection>-->
    <PackagesSection></PackagesSection>
<!--    <AppSection></AppSection>-->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AlzuhudHeader from '@/components/AlzuhudHeader.vue'; // @ is an alias to /src
import FeatureSection from '@/components/FeatureSection.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import HeaderSection from '@/components/HeaderSection.vue';
import PackagesSection from '@/components/PackagesSection.vue';
import AppSection from '@/components/AppSection.vue';
import Footer from '@/components/Footer.vue';
import btn from '@/components/btn.vue';
import { State } from 'vuex-class';

@Component({
  components: {
    AlzuhudHeader,
    FeatureSection,
    TestimonialSection,
    HeaderSection,
    PackagesSection,
    AppSection,
    Footer,
    btn
  },
})
export default class Home extends Vue {
  @State language: any;
  mounted() {
    document.title = 'Home - Alzuhud';
  }
}
</script>

<style lang="scss">


 .image {
   width: 100%;
   background-image: url('../assets/background.jpg');
   height: 100vh;
   position: relative;
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   display: flex;
   align-items: center;
   flex-direction: column;
 }

 .home {
   width: 100%;
 }

 .center-title {
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   text-align: center;
   color: white;
   h1 {
     font-size: 64px;
     @media screen and (max-width: 960px) {
       font-size: 30px;
     }
   }
   div {
     width: 70%;
     font-size: 20px;
     @media screen and (max-width: 960px) {
       font-size: 14px;
       width: auto;
     }
   }

   button {
     margin-top: 25px;
     background: white;
     color: $foreground;
     border: none;
     border-radius: 50px;
     padding: 20px 50px;
     font-size: 18px;
     transition: all .2s linear;

     &:hover {
       cursor: pointer;
       background: $foreground;
       color: $backcolor;
     }
   }
 }

 .cover {
    background-color: $backcolor;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    padding: 120px 40px;

    .description {
      width: 34%;
      margin-left: 25px;
      text-align: left;
      font-size: 18px;
      display: flex;
      flex-direction: column;

      .v-btn {
        align-self: flex-end;
      }
    }

    @media screen and (max-width: 960px) {
      flex-direction: column;
      padding: 60px 21px;
      img {
        width: 100%;
      }

      .description {
        width: 100%;
        margin-left: 0;
        font-size: 14px;
        
        .heading {
          font-size: 20px;
          margin-bottom: 0;
          margin-top: 40px;
        }

        .v-btn {
          align-self: center;
          margin-top: 32px !important;
          padding-left: 60px !important;
          padding-right: 60px !important;
          span {
            font-size: 18px;
          }
        }
      }
    }

  
 }

 .heading {
    font-weight: bold;
    font-size: 27px;
    margin-bottom: 20px;
 }


  .curve {
    @media screen and (max-width: 960px) {
       width: 105% !important;
     }
  }
</style>
