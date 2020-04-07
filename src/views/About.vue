<template>
  <div class="about white">
    <AlzuhudHeader :light="true"></AlzuhudHeader>
    <PageInfo :is-rtl="language === 'ar'" :pageName="language === 'en' ? 'About Us': (language === 'ar' ? 'من نحن': '')" :routes="['about us']"></PageInfo>
    <main>
      <div class="main-content">
        <div class="content" :style="{'direction': language === 'ar' ? 'rtl': ''}" v-html="language === 'ar'? `اخي المعتمر تتشرف الزهد للعمرة والزيارة بخدمة ضيوف الرحمن وسنسخر خبراتنا المتراكمة وعلاقاتنا المتميزة لخدمة ضيوف الرحمن. نسعى دائما للتطوير وتقديم افضل الخدمات التي تفرغ المعتمر للعبادة في إجواء روحانية مفعمة بعبق الايمان لا مثيل لها .
نركز في الزهد للعمرة والزيارة على راحة المعتمر , لانه من غير المناسب ان يدفع المعتمر ماله ويفرغ وقته ثم ياتي وقت العبادة المستهدفة فيزيغ عن تحقيقها على الوجه الأكمل وهو قد استنفذ المال والجهد والوقت في سبيل ادائها . كما نحرص على اختيار السكن الملائم ووسائط النقل المريحة وبما يتناسب واذواق المعتمرين الكرام .`: `Alzuhud for Ummrah and Visits- We are a leading Ummrah & Visit specialist providing Allah Guests with affordable Packages, premium Packages and VIP Packages. it’s our honour at Al-Zuhud for Ummrah to serve pilgrims and every Muslim whose dream is to visit the Kaaba in his/her life. We have designed best Ummrah packages for those who want the best value for their money that come with high affordability and quality facilities i.e. transportation, stay, food and guidance.<br><br>we are committed to provide excellent services and competitive prices to our agents. we always try to improve and offer the best service to our brothers, pilgrims, so that he/she can perform their journey with a peaceful mind and soul. In addition, we are also keen to choose suitable accommodation and convenient transportation in accordance with the tastes of the pilgrims.`"></div>
        <img src="../assets/mosque.png" alt="">
      </div>
      <div class="extra-content" :style="{'direction': language === 'ar' ? 'rtl': ''}" v-html="language === 'ar' ? `نقدم لكم برامج للعمرة طوال العام بعدة مستويات متنوعة لتختار البرنامج الذي يناسبك من حيث :<br>
 <br>
السفر بالطائرة بحجوزات مؤكدة . <br>
خدمة التوصيل من وإلى المطار .<br>
السفر بحافلات  مكيفه ومريحة وموديلات حديثة  <br>
مكننا الحجز لكم في فنادق مجاورة أو قريبة من الحرم المكي أو المدني وفقاً لاختياركم<br>
بكل فائت الفنادق (3 نجوم / 4 نجوم / 5 نجوم)<br>
للتواصل ولمزيد من المعلومات الرجاء التواصل معنا<br>
`: `We are providing several programs for Ummrah all year and we provide Airlines booking, confirmation, pick-up and drop from and to airport and traveling in air-conditioned and comfortable couch buses or VIP vehicles. Furthermore, we are operating several licenced housing buildings and have contracts with Five stars, four stars hotels in Makkah and Madinah.`"></div>
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
import {State} from "vuex-class";

@Component({
  components: {
    AlzuhudHeader,
    AppSection,
    Footer,
    PageInfo
  }
})
export default class About extends Vue {
  @State language: string;
  mounted() {
    document.title = 'About Us - Alzuhud';
  }
}
</script>

<style lang="scss" scoped>
  main {
    margin: 0 322px 137px;
    color: black;
    font-size: 22px;
    @media screen and (max-width: 1700px) {
      margin: 0 150px 137px;
    }

    @media screen and (max-width: 1464px) {
      margin: 0 20px 137px;
    }

    @media screen and (max-width: 1300px) {
      font-size: 18px;
    }
    @media screen and (max-width: 1150px) {
      font-size: 17px;
    }
    @media screen and (max-width: 980px) {
      font-size: 16px;
      margin-bottom: 40px;
    }
  }

  .page-info {
    @media screen and (max-width: 1700px) {
      margin: 0 100px;
    }

    @media screen and (max-width: 1464px) {
      margin: 0 70px;
    }
  }

  .main-content {
    display: flex;
    margin-bottom: 70px;
    justify-content: space-between;
    .content {
      width: 628px;
    }
    @media screen and (max-width: 960px) {
      flex-direction: column;
      margin-bottom: 30px;
      .content {
        width: 100%;
        margin-bottom: 30px;
      }

      img {
        height: 264px;
      }
    }
  }
</style>
