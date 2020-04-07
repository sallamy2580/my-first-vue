<template>
    <v-card class="px-9 py-6 complete" style="border-radius: 20px;">
       <v-row>
           <v-col class="d-flex justify-center" cols="12">
               <v-icon v-if="done !== null && done === true" color="primary" class="completed-icon" style="font-size: 130px;">mdi-check-circle</v-icon>
               <v-icon v-else-if="done !== null && done === false" color="red" class="completed-icon" style="font-size: 130px;">mdi-close-circle</v-icon>
           </v-col>
           <v-col class="d-flex justify-center" cols="12">
               <div v-if="done !== null && done === true" class="primary--text display-1 font-weight-bold text-center" style="font-family: 'Open Sans' !important;">
                   Congratulations!
                   <br>
                   <span class="headline font-weight-bold black--text" style="font-family: 'Open Sans' !important;">You have successfully completed your order, we will get in touch soon!</span>
               </div>
               <div v-else-if="done !== null && done === true" class="red--text display-1 font-weight-bold text-center" style="font-family: 'Open Sans' !important;">
                   Sorry
                   <br>
                   <span class="headline font-weight-bold black--text" style="font-family: 'Open Sans' !important;">Failed to Complete your order!</span>
               </div>
           </v-col>
       </v-row>
       <v-row style="margin-top: 70px;" v-if="done !== null && done === true">
<!--           <v-col cols="12" md="4">-->
<!--               <div>-->
<!--                   <div class="subtitle-1 font-weight-light grey&#45;&#45;text">Order Code</div>-->
<!--                   <div class="title font-weight-regular">35897432</div>-->
<!--               </div>-->
<!--           </v-col>-->
           <v-col cols="12" md="4">
               <div>
                   <div class="subtitle-1 font-weight-light">Status</div>
                   <div class="title font-weight-regular red--text">Not Paid</div>
               </div>
           </v-col>
           <v-col cols="12" md="4">
               <div>
                   <div class="subtitle-1 font-weight-light">Order Date</div>
                   <div class="title font-weight-regular">{{now}}</div>
               </div>
           </v-col>
       </v-row>
    </v-card>
</template>

<script lang="ts">
import { PopRoute, AddRoute, ReplaceRoute } from '../../types/store';
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import {Action, Mutation, State} from "vuex-class";
import AdminPageInfo from './AdminPageInfo.vue';
import AdminCard from './AdminCard.vue';
import btn from './btn.vue';
import Label from './Label.vue';

@Component({
    components: {
        AdminPageInfo,
        AdminCard,
        btn,
        Label,
    },
})
export default class BookingComplete extends Vue {
    @Mutation popRoute: PopRoute;
    @Mutation replaceRoute: ReplaceRoute;
    @Mutation setPage: Function;
    @Action addBooking: Function;
    done: boolean | null = null;


    async mounted() {
        try {
          await this.addBooking();
          this.done = true;
          setTimeout(() => {
              this.$router.replace('/user-admin');
          }, 3000);
        } catch (e) {
          this.done = false;
          setTimeout(() => {
              this.$router.replace('/user-admin');
          }, 3000);

        }
        this.replaceRoute(['Booking', 'Reserve', 'Create Package', 'Information', 'Overview', 'Completed']);
        this.setPage(5);
    }
    /**
     *
     */
    constructor() {
        super();

    }

    private get now(): any {
        return new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    }

    beforeDestroy(): void {
        this.popRoute();
    }
}
</script>

<style lang="scss">
 .completed-icon {
    
 }
    .complete {
        .col {
            .display-1 {
                @media screen and (max-width: 960px) {
                    font-size: 20px !important;
                }
            }

            .headline {
                @media screen and (max-width: 960px) {
                    font-size: 16px !important;
                }
            }
        }
    }
</style>
