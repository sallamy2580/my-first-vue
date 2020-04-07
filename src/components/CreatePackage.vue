<template>
    <v-card flat class="create-package transparent" style="border-radius: 0 !important;">
        <div class="d-flex justify-space-between flex-grow-1">
            <div style="width: 100%;">
                <div class="panel-title">{{panelTitle}}</div>
                <AdminPageInfo :adminUser="adminUser" :routes="routes"></AdminPageInfo>
            </div>
        </div>
        <div class="d-flex d-md-none stepper" style="margin: 0 -12px !important;">
            <div class="step" :style="{'display': page > 2 ? 'none': ''}">
                <div class="step-icon green" style="padding-left: 4px; padding-top: 3px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30.001">
                        <path id="Path_179" data-name="Path 179" d="M9.632,8l4.615,4.615H32.709L28.431,8.338A1.153,1.153,0,0,0,27.615,8ZM8,9.632V27.615a1.153,1.153,0,0,0,.338.816l4.277,4.277V14.247Zm6.923,5.291V33.385H25.308V24.154a3.453,3.453,0,0,1,5.56-2.745.2.2,0,0,0,.023.016l2.495,1.783V14.923Zm13.864,8.063a1.155,1.155,0,0,0-1.172,1.278V34.538a1.153,1.153,0,0,0,1.154,1.154,1.139,1.139,0,0,0,.836-.37l.007,0,2.17-2.565,2.3,4.6a1.154,1.154,0,1,0,2.064-1.032L33.8,31.636l3.365-.6,0-.02a1.118,1.118,0,0,0,.3-2.035l0-.023-7.892-5.63A1.157,1.157,0,0,0,28.787,22.986Z" transform="translate(-8 -8)" 
                        fill="#fff"/>
                    </svg>
                </div>
                <div class="step-title green--text">Select Package</div>
            </div>
            <div :class="['step-divider', page > 1 ? 'green' : '']" :style="{'display': page >= 4 ? 'none': ''}"></div>
            <div class="step" :style="{'display': page > 3 ? 'none': ''}">
                <div :class="['step-icon', page > 1 ? 'green': '']">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.077" height="30" viewBox="0 0 23.077 30">
                        <g id="surface1" transform="translate(-10 -4)">
                            <path id="Path_180" data-name="Path 180" d="M32.739,11.838l-7.5-7.5A1.153,1.153,0,0,0,24.423,4H12.308A2.306,2.306,0,0,0,10,6.308V31.692A2.306,2.306,0,0,0,12.308,34H30.769a2.306,2.306,0,0,0,2.308-2.308V12.654A1.153,1.153,0,0,0,32.739,11.838ZM25,25.923H15.769a1.154,1.154,0,1,1,0-2.308H25a1.154,1.154,0,0,1,0,2.308Zm2.308-4.615H15.769a1.154,1.154,0,1,1,0-2.308H27.308a1.154,1.154,0,0,1,0,2.308ZM25,13.231a1.153,1.153,0,0,1-1.154-1.154V6.2l7.034,7.034Z" 
                            :fill="page > 1 ? '#fff' : '#bdbdbd'"/>
                        </g>
                    </svg>
                </div>
                <div class="step-title">Information</div>
            </div>
            <div class="step-divider" :style="{'display': page >= 4 ? 'none': ''}">
                <div :class="[page > 2 ? 'green' : '']"></div>
            </div>
            <div class="step" :style="{'display': page >= 4 || page < 3 ? 'none': ''}">
                <div :class="['step-icon', page > 2 ? 'green': '']" style="padding-left: 3px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27.417" height="30.705" viewBox="0 0 27.417 30.705">
                        <g id="surface1" transform="translate(-10 -4)">
                            <path id="Path_181" data-name="Path 181" d="M12.192,4A2.191,2.191,0,0,0,10,6.192V30.3A2.191,2.191,0,0,0,12.192,32.5H22.846a8.738,8.738,0,0,1-2.907-5.48H15.48a1.1,1.1,0,1,1,0-2.192h4.459a8.716,8.716,0,0,1,.569-2.192H15.48a1.1,1.1,0,0,1,0-2.192H21.8a8.8,8.8,0,0,1,2.6-2.192H15.48a1.1,1.1,0,0,1,0-2.192h10.96a1.1,1.1,0,0,1,1.1,1.1c0,.028-.013.049-.015.077a8.538,8.538,0,0,1,4.4.567V12.22a1.1,1.1,0,0,0-.321-.775L24.475,4.321A1.1,1.1,0,0,0,23.7,4Zm10.96,2.087,6.681,6.681H24.248a1.1,1.1,0,0,1-1.1-1.1Zm5.48,13.257a6.576,6.576,0,1,0,0,13.152,6.517,6.517,0,0,0,3.8-1.224l3.1,3.1a1.1,1.1,0,1,0,1.55-1.55l-3.1-3.1a6.517,6.517,0,0,0,1.224-3.8A6.592,6.592,0,0,0,28.633,19.344Zm0,2.192a4.384,4.384,0,1,1-4.384,4.384A4.368,4.368,0,0,1,28.633,21.537Z" 
                            :fill="page > 2 ? '#fff' : '#bdbdbd'"/>
                        </g>
                    </svg>
                </div>
                <div class="step-title">Overview</div>
            </div>
            <div class="step-divider" :style="{'display': page < 3 ? 'none': ''}">
                <div :class="[page > 3 ? 'green' : '']"></div>
            </div>
            <div class="step" :style="{'display': page < 4 ? 'none': ''}">
                <div :class="['step-icon', page > 3 ? 'green': '']">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.572" height="28.735" viewBox="0 0 36.572 28.735">
                        <path id="Path_182" data-name="Path 182" d="M4.612,8A2.611,2.611,0,0,0,2,10.612v1.306H32.042V10.612A2.611,2.611,0,0,0,29.429,8Zm30.042,5.225v3.918h3.918V15.837a2.611,2.611,0,0,0-2.612-2.612ZM2,15.837V27.592A2.611,2.611,0,0,0,4.612,30.2H29.429a2.611,2.611,0,0,0,2.612-2.612V15.837Zm32.654,5.225V30.2a2.611,2.611,0,0,1-2.612,2.612H8.531v1.306a2.611,2.611,0,0,0,2.612,2.612H35.96a2.611,2.611,0,0,0,2.612-2.612V21.062Z" transform="translate(-2 -8)" 
                        :fill="page > 3 ? '#fff' : '#bdbdbd'"/>
                    </svg>
                </div>
                <div class="step-title">Payment</div>
            </div>
            <div class="step-divider" :style="{'display': page <= 3 ? 'none': ''}">
                <div :class="[page > 4 ? 'green' : '']"></div>
            </div>
            <div class="step" :style="{'display': page < 4 ? 'none': ''}" style="margin-right: 35px;">
                <div :class="['step-icon', page > 4 ? 'green': '']">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32.735" height="30.735" viewBox="0 0 32.735 30.735">
                        <path id="Path_183" data-name="Path 183" d="M21.368,6A15.368,15.368,0,1,0,36.735,21.368,15.368,15.368,0,0,0,21.368,6Zm8.589,12.431-9.682,9.682a1.28,1.28,0,0,1-1.811,0l-4.422-4.422a1.28,1.28,0,1,1,1.811-1.811L19.369,25.4l8.777-8.777a1.281,1.281,0,0,1,1.811,1.811Z" transform="translate(-6 -6)" 
                        :fill="page > 4 ? '#fff' : '#bdbdbd'"/>
                    </svg>
                </div>
                <div class="step-title">Complete</div>
            </div>
        </div>
        <div class="d-none d-md-flex stepper">
            <div class="step">
                <div class="step-icon green" style="padding-left: 4px; padding-top: 3px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30.001">
                        <path id="Path_179" data-name="Path 179" d="M9.632,8l4.615,4.615H32.709L28.431,8.338A1.153,1.153,0,0,0,27.615,8ZM8,9.632V27.615a1.153,1.153,0,0,0,.338.816l4.277,4.277V14.247Zm6.923,5.291V33.385H25.308V24.154a3.453,3.453,0,0,1,5.56-2.745.2.2,0,0,0,.023.016l2.495,1.783V14.923Zm13.864,8.063a1.155,1.155,0,0,0-1.172,1.278V34.538a1.153,1.153,0,0,0,1.154,1.154,1.139,1.139,0,0,0,.836-.37l.007,0,2.17-2.565,2.3,4.6a1.154,1.154,0,1,0,2.064-1.032L33.8,31.636l3.365-.6,0-.02a1.118,1.118,0,0,0,.3-2.035l0-.023-7.892-5.63A1.157,1.157,0,0,0,28.787,22.986Z" transform="translate(-8 -8)"
                              fill="#fff"/>
                    </svg>
                </div>
                <div class="step-title green--text">Select Package</div>
            </div>
            <div :class="['step-divider', page > 1 ? 'green' : '']"></div>
            <div class="step">
                <div :class="['step-icon', page > 1 ? 'green': '']">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.077" height="30" viewBox="0 0 23.077 30">
                        <g id="surface1" transform="translate(-10 -4)">
                            <path id="Path_180" data-name="Path 180" d="M32.739,11.838l-7.5-7.5A1.153,1.153,0,0,0,24.423,4H12.308A2.306,2.306,0,0,0,10,6.308V31.692A2.306,2.306,0,0,0,12.308,34H30.769a2.306,2.306,0,0,0,2.308-2.308V12.654A1.153,1.153,0,0,0,32.739,11.838ZM25,25.923H15.769a1.154,1.154,0,1,1,0-2.308H25a1.154,1.154,0,0,1,0,2.308Zm2.308-4.615H15.769a1.154,1.154,0,1,1,0-2.308H27.308a1.154,1.154,0,0,1,0,2.308ZM25,13.231a1.153,1.153,0,0,1-1.154-1.154V6.2l7.034,7.034Z"
                                  :fill="page > 1 ? '#fff' : '#bdbdbd'"/>
                        </g>
                    </svg>
                </div>
                <div class="step-title" :class="[page > 1 ? 'green--text': '']">Information</div>
            </div>
            <div class="step-divider">
                <div :class="[page > 2 ? 'green' : '']"></div>
            </div>
            <div class="step">
                <div :class="['step-icon', page > 2 ? 'green': '']" style="padding-left: 3px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27.417" height="30.705" viewBox="0 0 27.417 30.705">
                        <g id="surface1" transform="translate(-10 -4)">
                            <path id="Path_181" data-name="Path 181" d="M12.192,4A2.191,2.191,0,0,0,10,6.192V30.3A2.191,2.191,0,0,0,12.192,32.5H22.846a8.738,8.738,0,0,1-2.907-5.48H15.48a1.1,1.1,0,1,1,0-2.192h4.459a8.716,8.716,0,0,1,.569-2.192H15.48a1.1,1.1,0,0,1,0-2.192H21.8a8.8,8.8,0,0,1,2.6-2.192H15.48a1.1,1.1,0,0,1,0-2.192h10.96a1.1,1.1,0,0,1,1.1,1.1c0,.028-.013.049-.015.077a8.538,8.538,0,0,1,4.4.567V12.22a1.1,1.1,0,0,0-.321-.775L24.475,4.321A1.1,1.1,0,0,0,23.7,4Zm10.96,2.087,6.681,6.681H24.248a1.1,1.1,0,0,1-1.1-1.1Zm5.48,13.257a6.576,6.576,0,1,0,0,13.152,6.517,6.517,0,0,0,3.8-1.224l3.1,3.1a1.1,1.1,0,1,0,1.55-1.55l-3.1-3.1a6.517,6.517,0,0,0,1.224-3.8A6.592,6.592,0,0,0,28.633,19.344Zm0,2.192a4.384,4.384,0,1,1-4.384,4.384A4.368,4.368,0,0,1,28.633,21.537Z"
                                  :fill="page > 2 ? '#fff' : '#bdbdbd'"/>
                        </g>
                    </svg>
                </div>
                <div class="step-title" :class="[page > 2 ? 'green--text': '']">Overview</div>
            </div>
            <div class="step-divider">
                <div :class="[page > 3 ? 'green' : '']"></div>
            </div>
            <div class="step">
                <div :class="['step-icon', page > 3 ? 'green': '']">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.572" height="28.735" viewBox="0 0 36.572 28.735">
                        <path id="Path_182" data-name="Path 182" d="M4.612,8A2.611,2.611,0,0,0,2,10.612v1.306H32.042V10.612A2.611,2.611,0,0,0,29.429,8Zm30.042,5.225v3.918h3.918V15.837a2.611,2.611,0,0,0-2.612-2.612ZM2,15.837V27.592A2.611,2.611,0,0,0,4.612,30.2H29.429a2.611,2.611,0,0,0,2.612-2.612V15.837Zm32.654,5.225V30.2a2.611,2.611,0,0,1-2.612,2.612H8.531v1.306a2.611,2.611,0,0,0,2.612,2.612H35.96a2.611,2.611,0,0,0,2.612-2.612V21.062Z" transform="translate(-2 -8)"
                              :fill="page > 3 ? '#fff' : '#bdbdbd'"/>
                    </svg>
                </div>
                <div class="step-title" :class="[page > 3 ? 'green--text': '']">Payment</div>
            </div>
            <div class="step-divider">
                <div :class="[page > 4 ? 'green' : '']"></div>
            </div>
            <div class="step">
                <div :class="['step-icon', page > 4 ? 'green': '']">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32.735" height="30.735" viewBox="0 0 32.735 30.735">
                        <path id="Path_183" data-name="Path 183" d="M21.368,6A15.368,15.368,0,1,0,36.735,21.368,15.368,15.368,0,0,0,21.368,6Zm8.589,12.431-9.682,9.682a1.28,1.28,0,0,1-1.811,0l-4.422-4.422a1.28,1.28,0,1,1,1.811-1.811L19.369,25.4l8.777-8.777a1.281,1.281,0,0,1,1.811,1.811Z" transform="translate(-6 -6)"
                              :fill="page > 4 ? '#fff' : '#bdbdbd'"/>
                    </svg>
                </div>
                <div class="step-title" :class="[page > 4 ? 'green--text': '']">Complete</div>
            </div>
        </div>
        <router-view></router-view>
        <div class="button-group d-flex justify-md-end mt-9" :class="[page !== 1 ? 'justify-space-between': 'justify-end']">
            <v-btn v-if="page > 1" x-large class="mb-12 mr-0 mr-md-5" :style="{'padding': page !== 5 ? ($vuetify.breakpoint.mdAndUp ? '0 62px !important': '0 54px !important') : '0 20px !important' }" rounded outlined color="primary" @click="page !== 5 ? changeStep('previous') : goToSupport()">{{page === 5 ? 'Ask Us Questions': 'Back'}}</v-btn>
            <v-btn x-large class="mb-12" :style="{'padding': page !== 4 ? ($vuetify.breakpoint.mdAndUp ? '0 62px !important': '0 54px !important') : '0 44px !important' }" rounded depressed color="primary" @click="page !== 5 ? changeStep('next') : goToBooking()">{{page !== 4 && page !== 5 ? 'Next': (page === 4 ? 'Confirm': 'OK')}}</v-btn>
        </div>
    </v-card>
</template>

<script lang="ts">
import { PopRoute, AddRoute, ReplaceRoute } from '../../types/store';
import {Vue, Component, Prop} from 'vue-property-decorator';
import {Action, Getter, Mutation, State} from "vuex-class";
import AdminPageInfo from './AdminPageInfo.vue';
import Axios from 'axios';
import alzuhudLink from "@/components/Functions/Functions";

@Component({
    components: {
        AdminPageInfo,
    }
})
export default class CreatePackage extends Vue {
    private _panelTitle: string;
    @State adminUser: string;
    @State routes: string[];
    @Mutation popRoute: PopRoute;
    @Mutation replaceRoute: ReplaceRoute;
    @State page: number;
    @Mutation incrementPage: () => void;
    @Mutation decrementPage: () => void;
    @Mutation setPage: () => void;
    @Mutation setNumAdults: Function;
    @Mutation setNumChildren: Function;
    @Mutation resetBooking: Function;
    @State tabModel: any;
    @State flight: any;
    @State hotel: any;
    @State userId: any;
    @State title: any;
    @State package: any;
    @State country: any;
    @State city: any;
    @Mutation setPackage: Function;
    @Mutation setHotel: Function;
    @Mutation setFlight: Function;
    @Mutation setPackageId: Function;
    @Getter token: string;
    // hasCreatedPackage: boolean = false;
    date: string = '';
    date2: string = '';
    @State children: any[];
    @State adults: any[];
    @Action snackIt: Function;
    @Mutation selectPackageId: Function;

    get panelTitle() : string {
        if (this.page === 1) {
            return 'Create Your Own Package';
        } else if (this.page === 2) {
            return 'Fill Out The Information';
        } else if (this.page === 3 || this.page === 4) {
            return 'Overview';
        } else if (this.page === 5) {
            return 'Order Completed';
        }

        return 'Create Your Own Package';
    }

    set panelTitle(value: string) {
        this._panelTitle = value;
    }
    
    mounted(): void {
        this.replaceRoute(['Booking', 'Reserve', 'Create Package']);
        this.setNumAdults(0);
        this.setNumChildren(0);
        this.resetBooking();
        this.$router.app.$on('set date', (payload: any) => {

            this.date = payload;
        })

        this.$router.app.$on('set date2', (payload: any) => {
            this.date2 = payload;
        })
        // this.$on('set package', (payload: any) => {
        //     this.date = payload.date;
        //     this.date2 = payload.date2;
        //     this.hasCreatedPackage = true;
        // })
    }
    /**
     *
     */
    constructor() {
        super();
        this.panelTitle = 'Create Your Own Package';
    }
    beforeDestroy(): void {
        this.popRoute();
    }

    async changeStep(type: string): Promise<void> {
        if (type === 'next') {
            if (this.page === 1) {
                if (this.tabModel === 0) {
                    // @ts-ignore
                    if (!!this.title && !!this.date && !!this.date2 && !!this.country) {
                        this.setPackage({
                            name: this.title,
                            // @ts-ignore
                            start_date: this.date,
                            // @ts-ignore
                            end_date: this.date2,
                            // @ts-ignore
                            price: this.hotel.price,
                            creator: this.userId,
                        });
                        try {
                            const response = await Axios.post(`http://${alzuhudLink}:8080/api/packages/add`, {
                                token: this.token,
                                creator: this.userId,
                                // @ts-ignore
                                airline_id: this.flight.id,
                                // @ts-ignore
                                hotel_id: this.hotel.id,
                                // @ts-ignore
                                price: this.hotel.price,
                                name: this.title,
                                // @ts-ignore
                                start_date: this.date,
                                // @ts-ignore
                                end_date: this.date2,
                            });



                            this.selectPackageId(response.data.id);

                        } catch(e) {

                            this.$router.replace('/user-admin/create-package');
                        }

                    } else {
                        this.$router.replace('/user-admin/create-package');
                        return;
                    }
                } else {
                    if (!!this.package && !!this.country && !!this.city) {
                        this.selectPackageId(this.package.id);
                        this.setFlight(this.package.airline_id);
                        this.setHotel(this.package.hotel_id);
                    } else {
                        this.$router.replace('/user-admin/create-package');
                        return;
                    }
                }
            } else if (this.page === 2) {
                let childrenIncomplete = true;
                let adultsIncomplete = true;


                if (this.children.length === 0)
                    childrenIncomplete = false;
                else {
                    for (const child of this.children) {
                        if (!child.full_name || !child.file || !child.gender || !child.date) {
                            break;
                        } else if (this.children.findIndex((ch) => ch === child) === this.children.length - 1) {
                            childrenIncomplete = false;
                        }
                    }
                }
                if (this.adults.length === 0)
                    adultsIncomplete = false;
                else {
                    for (const adult of this.adults) {
                        console.log('enter', this.adults.findIndex((ad) => ad === adult))
                        if (adult.full_name === '' || adult.file === null || adult.gender === '' || adult.date === '') {
                            console.log('enter if');
                            break;
                        } else if (this.adults.findIndex((ad) => ad === adult) === this.adults.length - 1) {
                            console.log('enter else');
                            adultsIncomplete = false;
                        }
                    }
                }

                console.log(childrenIncomplete ,adultsIncomplete, this.adults)

                if (childrenIncomplete || adultsIncomplete) {
                    this.snackIt({
                        message: 'please fill all the required fields',
                        color: 'error',
                        snackbar: true,
                    });
                    return;
                }
            }
            this.incrementPage();
        } else
            this.decrementPage();
        this.$router.push(`/user-admin/create-package/${this.page !== 1 ? `step-${this.page}`: ''}`);
    }

    goToBooking() {
        this.resetBooking();
        this.$router.replace('/user-admin/bookings');
    }

    goToSupport() {
        this.resetBooking();
        this.$router.replace('/user-admin/new-ticket');
    }
}
</script>

<style lang="scss">
    .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 150px;
        z-index: 1;
        white-space: nowrap;
    }

    .step-icon {
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 75px;
        background-color: #eee;
        transition: all .15s ease-in-out;
    }

    .step-title {
        color: #707070;
        @media screen and (max-width: 960px) {
            font-size: 12px;
        }
    }

    .step-divider {
        height: 10px;
        background-color: #eee;
        width: 100%;
        margin: 35px -2% 0;
        position: relative;
        z-index: 0;
        transition: all .1s ease-in-out;
        >div {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }

    .stepper {
        position: relative;
        padding: 35px 120px;
        @media screen and (max-width: 960px) {
            padding: 35px 0;
        }
    }

</style>
