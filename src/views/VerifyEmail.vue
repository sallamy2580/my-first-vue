<template>
  <div>
    <AlzuhudHeader :light="true"></AlzuhudHeader>
    <div class="d-flex flex-column align-center my-12 mx-4">
      <div class="d-flex flex-column my-12" :style="{'min-width': $vuetify.breakpoint.mdAndUp ? '40%': '100%'}">
        <div class="text-center secondary--text my-12" style="font-weight: 600;"
             :style="{'font-size': $vuetify.breakpoint.lgAndUp ? '50px': '30px'}">
            {{verified !== null ? ( verified === true ? 'Your Email has been verified.': 'Verification Failed!'): ''}}
        </div>
        <v-btn class="align-self-center px-12 mt-2 mb-12" :block="$vuetify.breakpoint.xsOnly" rounded depressed x-large color="primary" @click="$router.replace('/sign-in')">Go to Login Page</v-btn>
      </div>
    </div>
<!--    <AppSection></AppSection>-->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from "vue-property-decorator";
  import AlzuhudHeader from '@/components/AlzuhudHeader.vue';
  import AppSection from '@/components/AppSection.vue';
  import Footer from '@/components/Footer.vue';
  import Axios from "axios";
  import {Action} from "vuex-class";
  import alzuhudLink from "@/components/Functions/Functions";
  @Component({
    components: {Footer, AppSection, AlzuhudHeader}
  })
  export default class VerifyEmail extends Vue {
    @Prop() hashCode: string;
    @Action snackIt: Function;
    verified: boolean | null = null;

    async mounted() {
      try {
        const response = await Axios.get(`http://${alzuhudLink}:8080/api/auth/verification-email/${this.hashCode}`);

        this.verified = true;
      } catch (e) {

        this.verified = false;
      } finally {
      }
    }
  }
</script>

<style scoped>

</style>
