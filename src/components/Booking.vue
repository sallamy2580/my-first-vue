<template>
    <div class="bookings user-booking pl-0">
        <div class="d-block d-md-flex justify-space-between">
            <div class="flex-grow-1">
                <div class="panel-title">{{panelTitle}}</div>
                <AdminPageInfo :adminUser="adminUser" :routes="routes"></AdminPageInfo>
            </div>
            <div class="align-self-center d-flex justify-end justify-md-start mt-3 mb-5 mt-md-0">
                <v-btn class="px-8 px-md-10" :x-large="$vuetify.breakpoint.mdAndUp" large depressed color="primary" rounded @click="downloadPdf">Download PDF</v-btn>
            </div>
        </div>
        <div class="first-row mb-10">
            <v-card class="mx-0 border-20">
                <v-card-title class="title px-9 pt-6 pb-5 font-weight-regular">Information</v-card-title>
                <v-card-text class="px-4 px-md-9 pt-0">
                    <v-row>
                        <v-col cols="12" md="4"><Label title="Title" :titleName="package.name"></Label></v-col>
                        <v-col cols="12" md="4"><Label title="From" :titleName="package.start_date"></Label></v-col>
                        <v-col cols="12" md="4"><Label title="To" :titleName="package.end_date"></Label></v-col>
                    </v-row>
                    <v-card outlined style="border-radius: 20px !important;">
                        <v-row justify="start" style="height: 100%;">
                            <v-col cols="12" lg="3" md="4" class="py-0" style="height: 100%;">
                                <img style="height: 100%;  width:100%;"
                                     :src="hotel.main_img_base64" class="hotel-image"
                                ></img>
                            </v-col>
                            <v-col lg="9" md="8" class="px-10 pb-4 px-md-0 pb-md-0 pr-md-6">
                                <div class="font-weight-bold title">{{hotel.name}}</div>
                                <v-rating
                                    background-color="grey lighten-2"
                                    color="yellow darken-1"
                                    empty-icon="mdi-star"
                                    dense
                                    readonly
                                    :value="hotel.accomodation"
                                    :size="24"
                                >
                                </v-rating>
                                <div class="d-flex align-center mt-4" style="width: 98%;">
                                    <div class="grey--text title font-weight-regular" style="white-space: nowrap;">Location</div><div class="dashed-border"></div><div class="title font-weight-regular" style="font-weight: 600; white-space: nowrap;">{{hotel.address}}</div>
                                </div>
                                <div class="d-flex align-center mt-2" style="width: 98%;">
                                    <div class="grey--text title font-weight-regular" style="white-space: nowrap;">Price</div><div class="dashed-border"></div><div class="title font-weight-regular" style="font-weight: 600; white-space: nowrap;">${{split(hotel.price || 0)}}</div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-card class="mt-12 pt-2 pb-7" outlined style="border-radius: 20px !important;">
                        <v-row justify="space-between" class="px-7">
                            <v-col cols="12" md="6">
                                <v-row align="start">
                                    <v-col cols="4" sm="3" lg="2" class="px-0 pt-2"><img :src="flight.logo_base64"></v-col>
                                    <v-col class="pa-0 ml-n4 mt-md-0">
                                        <div class="title">{{flight.name}}</div>
                                        <v-rating
                                            background-color="grey lighten-2"
                                            color="yellow darken-1"
                                            empty-icon="mdi-star"
                                            dense
                                            readonly
                                            :value="flight.rate_avg"
                                            :size="24"
                                        ></v-rating>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col style="font-weight: 600; font-size: 30px;" class="d-none d-md-flex">
                                <v-row justify="end" class="pr-3 mt-4">
                                    ${{split(flight.price || 0)}}
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row class="mx-0 px-0 px-md-12" justify="space-between" justify-md="center">
                            <v-col cols="1" class="pa-0 d-none d-md-flex">
                                <div class="title font-weight-regular" style="line-height: 1.5rem;">{{getDay(flight.takeoff_date)}}<br>{{getDate(flight.takeoff_date)}}</div>
                            </v-col>
                            <v-col cols="1" class="pa-0 d-none d-md-flex"></v-col>
                            <v-col cols="5" md="1" class="pa-0">
                                <div class="departure d-flex flex-column align-center">
                                    <div class="font-weight-bold mb-2 departure-places text-no-wrap overflow-hidden" style="text-overflow: ellipsis; max-width: 100%;">{{flight.origin_name}}</div>
                                    <div class="title font-weight-regular grey--text">{{flight.takeoff_time}}</div>
                                </div>
                            </v-col>
                            <v-col cols="2" class="pa-0 mx-0 mx-md-2">
                                <div class="d-flex flex-column align-center justify-center">
                                    <img src="../assets/airplane.svg" class="mb-0 mt-0 mb-md-4 mt-md-n1">
                                    <div style="border-bottom: 2px dashed #bdbdbd; width: 100%;" class="d-none d-md-block"></div>
                                </div>
                            </v-col>
                            <v-col cols="5" md="1" class="pa-0">
                                <div class="departure d-flex flex-column align-center">
                                    <div class="departure-places font-weight-bold mb-2">{{flight.destination_name}}</div>
                                    <div class="title font-weight-regular grey--text">{{flight.return_time}}</div>
                                </div>
                            </v-col>
                            <v-col cols="1" class="pa-0 d-none d-md-flex"></v-col>
                            <v-col cols="1" class="pa-0 d-none d-md-flex">
                                <div class="title font-weight-regular" style="line-height: 1.5rem;">{{getDay(flight.return_date)}}<br>{{getDate(flight.return_date)}}</div>
                            </v-col>
                        </v-row>
                        <v-row class="mx-0 d-flex d-md-none" justify="space-between">
                            <v-col cols="5" class="pa-0 d-flex justify-center d-md-none">
                                <div class="subtitle-1 text-center  font-weight-regular" style="line-height: 1.5rem;">{{getDay(flight.takeoff_date)}}<br>{{getDate(flight.takeoff_date)}}</div>
                            </v-col>
                            <v-col cols="5" class="pa-0 d-flex justify-center d-md-none">
                                <div class="subtitle-1 text-center font-weight-regular" style="line-height: 1.5rem;">{{getDay(flight.return_date)}}<br>{{getDate(flight.return_date)}}</div>
                            </v-col>
                        </v-row>
                        <v-row class="mx-0 d-flex d-md-none mt-8" style="font-weight: 600; font-size: 30px;" justify="center">
                            ${{split(flight.price || 0)}}
                        </v-row>
                    </v-card>
                    <v-row class="mt-9">
                        <v-col cols="12" md="4">
                            <Label title="Name" :titleName="name"></Label>
                        </v-col>
                        <v-col cols="12" md="4">
                            <Label title="Email Address" :titleName="email"></Label>
                        </v-col>
                        <v-col cols="12" md="4">
                            <Label title="Phone Number" :titleName="phone"></Label>
                        </v-col>
                        <v-col cols="12" md="4">
                            <Label title="From" :titleName="country"></Label>
                        </v-col>
                        <v-col cols="12" md="4">
                            <Label title="Number of Nights" :titleName="numNights"></Label>
                        </v-col>
                        <v-col cols="12" md="4">
                            <Label title="Number of Adults" :titleName="numAdults"></Label>
                        </v-col>
                        <v-col cols="12" md="4">
                            <Label title="Number of Children" :titleName="numChildren"></Label>
                        </v-col>
                        <v-col cols="12" md="4">
                            <Label title="Remarks" :titleName="remarks"></Label>
                        </v-col>
                    </v-row>
                </v-card-text>
                <template v-for="(adult, i) in passengers.slice(0, numAdults)">
                    <v-divider :key="order(i)"></v-divider>
                    <v-card-text class="px-9" :key="order(i)">
                        <v-row>
                            <v-col cols="12" class="title font-weight-regular black--text">{{order(i + 1)}} Adult Identification</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <Label title="Name" :titleName="adult.full_name"></Label>
                            </v-col>
                            <v-col cols="12" md="4">
                                <Label title="Gender" :titleName="adult.gender"></Label>
                            </v-col>
                            <v-col cols="12" md="4">
                                <Label title="Date of Birth" :titleName="adult.birth_date"></Label>
                            </v-col>
                            <v-col cols="12" md="4">
                                <img :src="adult.passport_img_b64">
                            </v-col>
                        </v-row>
                    </v-card-text>
                </template>
                <template v-for="(child, i) in passengers.slice(numAdults, numChildren)">
                    <v-divider :key="order(i)"></v-divider>
                    <v-card-text class="px-9" :key="order(i)">
                        <v-row>
                            <v-col cols="12" class="title font-weight-regular black--text">{{order(i + 1)}} Child Identification</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <Label title="Name" :titleName="child.name"></Label>
                            </v-col>
                            <v-col cols="12" md="4">
                                <Label title="Gender" :titleName="child.gender"></Label>
                            </v-col>
                            <v-col cols="12" md="4">
                                <Label title="Date of Birth" :titleName="child.date"></Label>
                            </v-col>
                            <v-col cols="12" md="4">
                                <Label title="Passport" :titleName="child.file.name"></Label>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </template>
                <v-card-actions class="headline px-9 pb-7 flex-column flex-md-row">
                    <v-spacer></v-spacer>
                    <div>Total Price:</div>
                    <pre class="d-none d-md-block">  </pre>
                    <div style="font-weight: 600;"><span class="primary--text">${{split(price || 0)}}</span><span class="green--text"> (PAID)</span></div>
                    <v-spacer class="d-sm-none"></v-spacer>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts">
import { PopRoute, AddRoute, ReplaceRoute } from '../../types/store';
import {Vue, Component, Prop} from 'vue-property-decorator';
import {Getter, Mutation, State} from "vuex-class";
import AdminPageInfo from './AdminPageInfo.vue';
import AdminCard from './AdminCard.vue';
import btn from './btn.vue';
import Label from './Label.vue';
import Axios from "axios";
import alzuhudLink from "@/components/Functions/Functions";

@Component({
    components: {
        AdminPageInfo,
        AdminCard,
        btn,
        Label,
    }
})
export default class Booking extends Vue {
    private panelTitle: string;
    @State adminUser: string;
    @State routes: string[];
    @Mutation popRoute: PopRoute;
    @Mutation replaceRoute: ReplaceRoute;
    @State bookingId: number | null;
    @Getter token: string;
    @Mutation setBookingId: Function;
    hotel: any = {};
    flight: any = {};
    user: any = {};
    children: any[] = [];
    adults: any[] = [];
    title: string = '';
    startDate: string = '';
    endDate: string = '';
    price: string = '';
    country: string = '';
    numNights: number = 0;
    numAdults: number = 0;
    numChildren: number = 0;
    remarks: string = '';
    passengers: any[] =[];
    package: any = {};
    phone: string = '';
    email: string = '';
    name:string = '';

    async mounted(): Promise<void> {
        this.replaceRoute(['Bookings', 'Booking']);
        if(this.bookingId === null) {
            this.$router.push('bookings');
        } else {
            const response = await Axios.get(`http://${alzuhudLink}:8080/api/booking/all`, {
                params: {
                    token: this.token,
                    id: this.bookingId,
                }
            });

            console.log('hello', response)

            this.email = response.data.res.data[0].email;
            this.title = response.data.res.data[0].name;
            this.startDate = response.data.res.data[0].package_id.start_date;
            this.endDate = response.data.res.data[0].package_id.end_date;
            this.package = response.data.res.data[0].package_id;
            // @ts-ignore
            this.numNights = Math.ceil((new Date(this.endDate) - new Date(this.startDate))/ (1000 * 60 * 60 * 24));
            this.price = response.data.res.data[0].total_price;
            this.user = response.data.res.data[0].user_id;
            this.country = response.data.res.data[0].region;
            this.passengers = response.data.res.data[0].passengers;
            this.numAdults = response.data.res.data[0].num_adults;
            this.numChildren = response.data.res.data[0].num_childs;
            this.remarks = response.data.res.data[0].remarks;
            this.hotel = response.data.res.data[0].package_id.hotel_id;
            this.flight = response.data.res.data[0].package_id.airline_id;
            this.phone = response.data.res.data[0].phone;
            this.name = response.data.res.data[0].user_id.full_name;
        }
    }
    /**
     *
     */
    constructor() {
        super();
        this.panelTitle = 'Booking';
    }
    beforeDestroy(): void {
        this.popRoute();
        this.setBookingId(null);
    }

    checkTicket(e: MouseEvent): void {
        alert('hello');
    }

    order(i: number): string {
        if (i === 11 || i === 12 || i === 13) {
            return i+'th';
        }
        switch (i % 10) {
            case 1:
                return i+'st';
            case 2:
                return i+'nd';
            case 3:
                return i+'rd';
            default:
                return i+'th';
        }
    }

    split(str: string): string {
        let strData = parseFloat(str);
        let data = strData.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return data.split('.')[0];
    }
    weekday: string[] = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    getDay(dateStr: string) {
        const date = new Date(dateStr).getDay();
        return this.weekday[date];
    }
    getDate(dateStr: string): string {
        return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric'});
    }

    async downloadPdf() {
        const response = await Axios.get(`http://${alzuhudLink}:8080/api/pdf/booking/${this.bookingId}`, {
            params: {
                token: this.token,
                id: this.bookingId,
            }
        });
    }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
    .hotel-image {
        border-radius: 20px 0 0 20px;
        @media screen and (max-width: 960px) {
            border-radius: 20px 20px 0 0;
        }
    }
    .user-booking {
        .title {
            @media screen and (max-width: 960px) {
                font-size: 20px;
            }
        }
        .departure {
            div.title {
                @media screen and (max-width: 960px) {
                    font-size: 14px !important;
                }
            }
        }
    }
    .departure-places {
        font-size: 30px;
        @media screen and (max-width: 960px) {
            font-size: 20px;
        }
    }


    .panel-title {
        font-size: 24px !important;
        font-weight: bold !important;
        color: black;
        @media screen and (max-width: 960px) {
            font-size: 20px !important;
        }

    }
    .bookings {
        padding-left: 25px;
    }
    #booking-card  {
        width: 100% !important;
        margin-left: 20px;
        margin-right: 30px;
        height: initial !important;
    }

    .dashed-border {
        width: 100%;
        margin: 5px 10px 0;
        border-top: 2px dashed #BDBDBD;
    }


    .buttons {
        width: 580px;
        >.v-btn {
            text-transform: none;
            font-size: 18px;
            font-weight: 600;
        }
    }

    .first-row .v-card {
        border-radius: 20px !important;
    }
</style>
