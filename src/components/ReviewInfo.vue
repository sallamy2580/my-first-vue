<template>
    <v-card class="mx-0 border-20" id="review-info">
<!--        <v-card-title class="title px-9 pt-6 pb-5 font-weight-regular">Information</v-card-title>-->
        <v-card-text class="px-4 px-md-9 pt-0">
            <v-row>
                <v-col cols="12" md="4"><Label title="Title" :titleName="package.name"></Label></v-col>
                <v-col cols="12" md="4"><Label title="From" :titleName="package.start_date"></Label></v-col>
                <v-col cols="12" md="4"><Label title="To" :titleName="package.end_date"></Label></v-col>
            </v-row>
            <v-card outlined style="border-radius: 20px !important;" id="hotel">
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
                    <Label title="Name" :titleName="bookingName"></Label>
                </v-col>
                <v-col cols="12" md="4">
                    <Label title="Email Address" :titleName="email"></Label>
                </v-col>
                <v-col cols="12" md="4">
                    <Label title="Phone Number" :titleName="bookingPhone"></Label>
                </v-col>
                <v-col cols="12" md="4">
                    <Label title="From" :titleName="countries.find((item) => item.value === country).text"></Label>
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
        <template v-for="(adult, i) in adults">
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
                        <Label title="Date of Birth" :titleName="adult.date"></Label>
                    </v-col>
                    <v-col cols="12" md="4">
                        <Label title="Passport" :titleName="adult.file.name"></Label>
                    </v-col>
                </v-row>
            </v-card-text>
        </template>
        <template v-for="(child, i) in children">
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
        <v-card-actions class="headline px-9 pb-7 justify-center justify-md-end">
            <div>Total Price:</div>
            <pre>  </pre>
            <div style="font-weight: 600;"><span class="primary--text">${{split(totalPrice || 0)}}</span></div>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { PopRoute, AddRoute, ReplaceRoute } from '../../types/store';
import {Vue, Component, Prop} from 'vue-property-decorator';
import { Mutation, State, Getter } from 'vuex-class';
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
export default class ReviewInfo extends Vue {
    @Mutation popRoute: PopRoute;
    @Mutation replaceRoute: ReplaceRoute;
    @Mutation setPage: Function;
    @Getter totalPrice: any;
    @State package: any;
    @State hotel: any;
    @State flight: any;
    @State bookingName: any;
    @State bookingPhone: any;
    email: string = '';
    @State country: any;
    @State countries: any[];
    @State numNights: any;
    @State numAdults: any;
    @State numChildren: any;
    @State remarks: any;
    @State adults: any;
    @State children: any;
    @Getter token: any;

    async mounted() {
        this.replaceRoute(['Booking', 'Reserve', 'Create Package', 'Information', 'Overview']);
        this.setPage(3);
        const response = await Axios.get(`http://${alzuhudLink}:8080/api/auth/me`, {
            params: {
                token: this.token,
            }
        });
        this.email = response.data.email;
        console.log(this.hotel);
        this.countries.find((item: any) => item.value === this.country);
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

    split(str: string): string {
        let strData = parseFloat(str);
        let data = strData.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return data.split('.')[0];
    }
}
</script>

<style lang="scss">

    @media screen and (max-width: 960px) {
        .v-application #review-info #hotel .title {
            font-size: 1rem !important;
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
