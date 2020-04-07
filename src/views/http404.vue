<template>
  <div>
    <AlzuhudHeader :light="true"></AlzuhudHeader>
    <div class="d-flex flex-column align-center mb-12 mx-4">
      <div class="d-flex flex-column" :style="{'min-width': $vuetify.breakpoint.mdAndUp ? '40%': '100%'}">
        <v-img src="../assets/cloud.svg" class="my-12" :max-height="$vuetify.breakpoint.lgAndUp ? '418px': '230px'" contain>
          <div class="text-center secondary--text" style="font-weight: 600;"
               :style="{'font-size': $vuetify.breakpoint.lgAndUp ? '200px': '105px'}">404
          </div>
          <div class="text-center" :class="[$vuetify.breakpoint.lgAndUp ? 'display-3': 'display-1']">Oops!</div>
          <div class="text-center grey--text font-weight-regular" :class="[$vuetify.breakpoint.lgAndUp ? 'display-1': 'title']">The page was not found...</div>
        </v-img>
        <div class="text-center text-uppercase font-weight-light mt-5">Feel Lost?</div>
        <v-btn class="align-self-center px-12 mt-2 mb-12" :block="$vuetify.breakpoint.xsOnly" rounded depressed large color="primary" @click="$router.push('/')">Go Back to Home</v-btn>
      </div>
    </div>
<!--    <AppSection></AppSection>-->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import AlzuhudHeader from '@/components/AlzuhudHeader.vue';
  import AppSection from '@/components/AppSection.vue';
  import Footer from '@/components/Footer.vue';
  @Component({
    components: {Footer, AppSection, AlzuhudHeader}
  })
  export default class http404 extends Vue {

  }
</script>

<style scoped>

</style>
