<template>
    <v-card flat class="payment transparent">
       <v-row>
           <v-col cols="12" md="6">
               <v-card class="px-9 py-8" style="border-radius: 20px;">
                   <v-card-title class="py-0 px-0 pb-5 title font-weight-regular" style="border-radius: 20px;">Billing Details</v-card-title>
                   <v-card-text class="px-0">
                       <v-row>
                           <v-col cols="12">
                               <div>
                                    <div class="input-title">First & Last Name</div>
                                    <v-text-field hide-details single-line outlined label="First & Last Name"></v-text-field>
                                </div>
                           </v-col>
                           <v-col cols="12">
                               <div>
                                    <div class="input-title">Email Address</div>
                                    <v-text-field hide-details single-line outlined label="Email Address"></v-text-field>
                                </div>
                           </v-col>
                           <v-col cols="12">
                               <div>
                                    <div class="input-title">Country</div>
                                    <v-text-field hide-details single-line outlined label="Country"></v-text-field>
                                </div>
                           </v-col>
                           <v-col cols="12" md="6">
                               <div>
                                    <div class="input-title">City / State</div>
                                    <v-text-field hide-details single-line outlined label="City / State"></v-text-field>
                                </div>
                           </v-col>
                           <v-col cols="12" md="6">
                               <div>
                                    <div class="input-title">Zip / Postal Code</div>
                                    <v-text-field hide-details single-line outlined label="Zip / Postal Code"></v-text-field>
                                </div>
                           </v-col>
                       </v-row>
                   </v-card-text>
               </v-card>
           </v-col>
           <v-col cols="12" md="6">
               <v-card outlined class="px-9 pt-8 pb-9" style="border-radius: 20px; background-color: #F3F7F3; border-color: #00897b;">
                   <v-card-title class="py-0 px-0 pb-10 title font-weight-regular" style="border-radius: 20px;">Summary</v-card-title>
                   <v-card-text class="px-0 payment-info">
                       <v-row>
                           <v-col cols="12">
                                   <div class="title">
                                        <div class="d-flex justify-space-between black--text" style="font-weight: 600;">
                                            <div>Hajj Ummrah</div>
                                            <div class="d-none d-md-block">$11,999</div>
                                        </div>
                                       <div class="grey--text font-weight-normal">From 02.09.2019 To 16.09.2019</div>
                                   </div>
                                   <div class="subtitle-1 d-flex justify-end d-md-none black--text" style="font-weight: 600;">$11,999</div>
                           </v-col>
                       </v-row>
                       <v-divider></v-divider>
                       <v-row>
                           <v-col cols="12">
                                   <div class="title">
                                        <div class="d-flex justify-space-between black--text" style="font-weight: 600;">
                                            <div>Family Trip (2 Persons)</div>
                                            <div class="d-none d-md-block">+ $950</div>
                                        </div>
                                       <div class="grey--text font-weight-normal">John Doe, Jane Doe</div>
                                       <div class="subtitle-1 d-flex justify-end d-md-none black--text" style="font-weight: 600;">+ $950</div>
                                   </div>
                           </v-col>
                       </v-row>
                       <v-divider></v-divider>
                       <v-row>
                           <v-col cols="12">
                                   <div class="title">
                                        <div class="d-flex justify-space-between black--text" style="font-weight: 600;">
                                            <div>DoubleTree by Hilton Hotel Dhahran</div>
                                            <div class="d-none d-md-block">$1,500</div>
                                        </div>
                                       <div class="grey--text font-weight-normal">5 Nights</div>
                                       <div class="subtitle-1 black--text d-flex d-md-none justify-end" style="font-weight: 600;">$1,500</div>
                                   </div>
                           </v-col>
                       </v-row>
                       <br>
                       <br>
                       <br class="d-none d-md-block">
                       <br class="d-none d-md-block">
                       <v-divider style="border: 1px solid black;"></v-divider>
                   </v-card-text>
                   <v-card-actions class="justify-end">
                        <div class="headline">Total Price: <span class="primary--text" style="font-weight: 600;">$14,449</span></div>
                   </v-card-actions>
               </v-card>
           </v-col>
           <v-col cols="12">
               <v-card class="px-9 pt-8 pb-9" style="border-radius: 20px;">
                   <v-card-title class="py-0 px-0 pb-6 title font-weight-regular" style="border-radius: 20px;">Payment Method</v-card-title>
                   <v-card-text class="px-0">
                        <v-radio-group mandatory v-model="Selection">
                            <v-row>
                                <v-col cols="12" md="4">
                                        <div class="d-flex justify-space-between align-center py-5 pl-7 pr-5 pr-md-7 radio-border"
                                        :style="{'border-color': selection === 'credit-card' ? '#00897B' : '#707070'}"
                                        @click="Selection = 'credit-card'">
                                            <v-radio class="mb-0" color="primary" value="credit-card">
                                                <template v-slot:label>
                                                    <span class=" font-weight-regular" :class="{'primary--text': selection === 'credit-card', 'title': $vuetify.breakpoint.mdAndUp, 'body-2': $vuetify.breakpoint.smAndDown}">Credit Card</span>
                                                </template>
                                            </v-radio>
                                            <div class="d-flex">
                                                <img src="../assets/visa.svg" class="mr-2 mr-md-5">
                                                <img src="../assets/masterCard.svg">
                                            </div>
                                        </div>
                                </v-col>
                                <v-col cols="12" md="4">
                                        <div class="d-flex justify-space-between align-center py-5 pl-7 pr-5 pr-md-7 radio-border"
                                        :style="{'border-color': selection === 'paypal' ? '#00897B' : '#707070'}"
                                        @click="Selection = 'paypal'">
                                            <v-radio class="mb-0" color="primary" value="paypal">
                                                <template v-slot:label>
                                                    <span class="title font-weight-regular" :class="{'primary--text': selection === 'paypal'}">PayPal</span>
                                                </template>
                                            </v-radio>
                                            <div class="d-flex">
                                                <img src="../assets/paypal.svg">
                                            </div>
                                        </div>
                                </v-col>
                                <v-col cols="12" md="4">
                                        <div class="d-flex justify-space-between align-center py-5 pl-7 pr-5 pr-md-7 radio-border"
                                        :style="{'border-color': selection === 'mada' ? '#00897B' : '#707070'}"
                                        @click="Selection = 'mada'">
                                            <v-radio class="mb-0" color="primary" value="mada">
                                                <template v-slot:label>
                                                    <span class="title font-weight-regular" :class="{'primary--text': selection === 'mada'}">Mada</span>
                                                </template>
                                            </v-radio>
                                            <div class="d-flex">
                                                <img src="../assets/Mada_Logo.svg">
                                            </div>
                                        </div>
                                </v-col>
                            </v-row>
                        </v-radio-group>
                        <v-row>
                            <template v-if="selection !== 'mada'">
                                <v-col cols="12" md="5">
                                    <div>
                                        <div class="input-title">Card Number</div>
                                        <v-text-field hide-details single-line outlined v-mask="'#### #### #### ####'" placeholder="____ ____ ____ ____" return-masked-value v-model="creditCard"></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="2">
                                    <div>
                                        <div class="input-title">Expiration Date</div>
                                        <v-select hide-details single-line outlined label="Month" :items="new Array(12).fill(0).map((v,i) => i+1)"></v-select>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="2">
                                    <div>
                                        <div class="input-title">Year</div>
                                        <v-select hide-details single-line outlined label="Year" :items="new Array(20).fill(0).map((v,i) => new Date().getFullYear() + i)"></v-select>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <div>
                                        <div class="input-title">Security Code</div>
                                        <v-text-field hide-details single-line outlined label="Three Digits" v-mask="'###'"></v-text-field>
                                    </div>
                                </v-col>
                            </template>
                            <template v-else>
                                <v-col cols="12" md="4">
                                    <div>
                                        <div class="input-title">Card Number</div>
                                        <v-text-field hide-details single-line outlined v-mask="'#### #### #### ####'" placeholder="____ ____ ____ ____" return-masked-value v-model="creditCard"></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="2">
                                    <div>
                                        <div class="input-title">Name on Card</div>
                                        <v-text-field hide-details single-line outlined label="Name"></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <div>
                                        <div class="input-title">Expiration Date</div>
                                        <v-select hide-details single-line outlined label="Month" :items="new Array(12).fill(0).map((v,i) => i+1)"></v-select>
                                    </div>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <div>
                                        <div class="input-title">Year</div>
                                        <v-select hide-details single-line outlined label="Year" :items="new Array(20).fill(0).map((v,i) => new Date().getFullYear() + i)"></v-select>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="2">
                                    <div>
                                        <div class="input-title">CVV</div>
                                        <v-text-field hide-details single-line outlined label="Three Digits" v-mask="'###'"></v-text-field>
                                    </div>
                                </v-col>
                            </template>
                        </v-row>
                   </v-card-text>
               </v-card>
           </v-col>
       </v-row>
    </v-card>
</template>

<script lang="ts">
import { PopRoute, AddRoute, ReplaceRoute } from '../../types/store';
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';
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
export default class Payment extends Vue {
    @State adminUser: string;
    @State routes: string[];
    @State selection: string;
    @Mutation popRoute: PopRoute;
    @Mutation replaceRoute: ReplaceRoute;
    @Mutation changeSelection: (value: string) => void;
    @Mutation setPage: Function;
    creditCard: string = '';

    get Selection(): string {
        return this.selection;
    }

    set Selection(value: string) {
        this.changeSelection(value);
    }

    mounted(): void {
        this.replaceRoute(['Booking', 'Reserve', 'Create Package', 'Information', 'Overview']);
        let date = new Date();
      this.setPage(4);
    }
    /**
     *
     */
    constructor() {
        super();
    }

    beforeDestroy(): void {
        this.popRoute();
    }
}
</script>

<style lang="scss">
    .v-input--radio-group {
        .v-input__control {
            width: 100% !important;
        }
    }

    .radio-border {
        border: 1px solid #707070;
        border-radius: 7px;
        height: 100%;
        transition: all .1s linear;
        &:hover {
            cursor: pointer;
        }
    }

    .payment {
        .v-input--radio-group__input {
            .radio-border {
                .title {
                    font-size: 16px !important;
                }

                img {
                    @media screen and (max-width: 960px) {
                        /*width: 28px;*/
                        height: 20px;
                    }
                }
            }
        }
        .payment-info {
            .title {
                @media screen and (max-width: 960px) {
                    font-size: 16px !important;
                    .grey--text {
                        font-size: 14px !important;
                    }
                }
            }
        }
    }
</style>
