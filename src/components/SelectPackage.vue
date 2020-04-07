<template>
    <v-card class="select-package" style="border-radius: 20px;">
        <v-tabs
            v-model="TabModel"
            slider-size="5"
            fixed-tabs>
            <v-tab
                color="primary" style="margin-left: 0 !important;">Create Package</v-tab>
            <v-tab
                color="primary">Select Package</v-tab>
        </v-tabs>
        <div style="position: relative; width: 100%;">
            <v-divider style="position: absolute; width: 100%; top: -2.5px;"></v-divider>
        </div>
        <v-tabs-items v-model="TabModel">
            <v-tab-item class="px-9 pt-6 pb-4 pb-md-9">
                <v-row>
                    <v-col class="px-0 px-md-3" cols="12" md="4">
                        <div>
                            <div class="input-title">Title</div>
                            <v-text-field hide-details single-line outlined label="Title" v-model="Title"></v-text-field>
                        </div>
                    </v-col>
                    <v-col class="px-0 px-md-3" cols="12" md="4">
                        <div>
                            <div class="input-title">From</div>
                            <v-dialog
                                ref="dialog"
                                v-model="menu"
                                :return-value.sync="date"
                                persistent
                                full-width
                                width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        hide-details
                                        v-model="date"
                                        label="Select Date"
                                        append-icon="mdi-calendar"
                                        readonly
                                        outlined
                                        single-line
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" :allowed-dates="allowedDates" scrollable color="primary">
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </div>
                    </v-col>
                    <v-col class="px-0 px-md-3" cols="12" md="4">
                        <div>
                            <div class="input-title">To</div>
                            <v-dialog
                                ref="dialog2"
                                v-model="menu2"
                                :return-value.sync="date2"
                                persistent
                                full-width
                                width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        hide-details
                                        v-model="date2"
                                        label="Select Date"
                                        append-icon="mdi-calendar"
                                        readonly
                                        outlined
                                        single-line
                                        v-on="on"
                                        :disabled="date === ''"
                                    ></v-text-field>
                                </template>
                                <v-date-picker :min="date" v-model="date2" scrollable color="primary">
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog2.save(date2)">OK</v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </div>
                    </v-col>
                    <v-col class="px-0 px-md-3" cols="12" md="4">
                        <div>
                            <div class="input-title">Your Country</div>
                            <v-autocomplete hide-details single-line outlined label="Your Country" v-model="selectedCountry" :items="countries"></v-autocomplete>
                        </div>
                    </v-col>
                    <v-col class="px-0 px-md-3" cols="12" md="4">
                        <div>
                            <div class="input-title">Your State</div>
                            <v-autocomplete hide-details single-line outlined label="Your State" :items="states" :disabled="!country || states.length === 0 || statesLoading" :loading="statesLoading" v-model="selectedState"></v-autocomplete>
                        </div>
                    </v-col>
                    <v-col class="px-0 px-md-3" cols="12" md="4">
                        <div>
                            <div class="input-title">Your City</div>
                            <v-autocomplete hide-details single-line outlined label="Your City" :items="cities" :disabled="!country || cities.length === 0 || citiesLoading" :loading="citiesLoading" v-model="selectedCity"></v-autocomplete>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="px-0 px-md-3" cols="12" md="6">
                        <div>
                            <div class="input-title">Select Hotel</div>
                            <v-card flat outlined :height="$vuetify.breakpoint.smAndDown ? 280: 232">
                                <v-row justify="center" align="center" style="height: 100%; margin: 0;">
                                    <v-col cols="12" md="4">
                                        <div class="d-flex flex-column align-center mt-12 mt-md-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="64" viewBox="0 0 40.059 46">
                                                <path id="Path_129" data-name="Path 129" d="M16,6a.445.445,0,0,0-.434.313L14.512,9.43l-3.289.035a.462.462,0,0,0-.27.832l2.637,1.965-.98,3.137a.46.46,0,0,0,.707.512L16,14.012l2.684,1.9a.46.46,0,0,0,.707-.512l-.98-3.137L21.047,10.3a.462.462,0,0,0-.274-.832L17.484,9.43,16.434,6.313A.45.45,0,0,0,16,6ZM30,6a.45.45,0,0,0-.437.313L28.512,9.43l-3.289.035a.462.462,0,0,0-.27.832l2.641,1.965-.98,3.137a.458.458,0,0,0,.7.512L30,14.012l2.684,1.9a.46.46,0,0,0,.707-.512l-.98-3.137L35.047,10.3a.462.462,0,0,0-.27-.832L31.488,9.43,30.438,6.313A.45.45,0,0,0,30,6ZM44,6a.45.45,0,0,0-.437.313L42.512,9.43l-3.289.035a.462.462,0,0,0-.27.832l2.641,1.965-.98,3.137a.458.458,0,0,0,.7.512L44,14.012l2.684,1.9a.46.46,0,0,0,.707-.512l-.98-3.137L49.047,10.3a.462.462,0,0,0-.27-.832L45.488,9.43,44.438,6.313A.45.45,0,0,0,44,6ZM12,20a2,2,0,1,0,0,4V52H24V42H36V52H48V24a2,2,0,1,0,0-4Zm4,6h4v4H16Zm8,0h4v4H24Zm8,0h4v4H32Zm8,0h4v4H40ZM16,34h4v4H16Zm8,0h4v4H24Zm8,0h4v4H32Zm8,0h4v4H40ZM16,42h4v4H16Zm24,0h4v4H40Z" transform="translate(-9.971 -6)"
                                                      fill="#bdbdbd"/>
                                            </svg>
                                            <div class="lighten-1 mt-7" :class="[hotelIndex !== -1 ? 'primary--text': 'grey--text']">{{hotelIndex === -1 ? 'No Hotel Selected': 'Hotel Selected'}}</div>
                                        </div>
                                    </v-col>
                                    <v-col cols="1" class="d-none d-md-flex"></v-col>
                                    <v-col cols="12" md="5" class="d-flex justify-center">
                                        <v-dialog
                                            v-model="modal"
                                            :scrollable="$vuetify.breakpoint.mdAndUp"
                                            content-class="modal"
                                            v-resize="changeFont">
                                            <template v-slot:activator="{on}">
                                                <v-btn v-on="on" color="primary" outlined rounded x-large style="padding-right: 58px !important; padding-left: 58px !important;">Pick a Hotel</v-btn>
                                            </template>
                                            <v-card>
                                                <v-row class="pa-0 mx-0 main-content">
                                                    <v-col cols="12" md="4" class="modal-right">
                                                        <v-card flat height="100%" class="d-flex flex-column">
                                                            <v-card-title class="grey--text text--darken-3 title font-weight-regular">
                                                                Select a Hotel
                                                            </v-card-title>
                                                            <v-card-text class="d-flex flex-column">
                                                                <div class="modal-input">
                                                                    <div class="mt-6 input-title">Search</div>
                                                                    <v-text-field hide-details single-line outlined label="Search" append-icon="mdi-magnify" v-model="search"></v-text-field>
                                                                </div>
                                                                <!--                                                                <div class="mt-6 modal-input">-->
                                                                <!--                                                                    <div class="input-title">Location</div>-->
                                                                <!--                                                                    <v-select hide-details single-line outlined label="Location" :items="cities"></v-select>-->
                                                                <!--                                                                </div>-->
                                                                <div class="mt-6 modal-input">
                                                                    <div class="input-title">Accommodation</div>
                                                                    <v-select hide-details single-line outlined label="Accommodation" :items="[1,2,3,4,5]" v-model="rating" clearable>
                                                                        <template v-slot:item="{item}">
                                                                            <div class="d-flex align-center pl-2">
                                                                                <div class="hotel-rating">{{item}}-Star Hotels</div>
                                                                                <v-divider vertical inset class="mx-2 my-0 black"></v-divider>
                                                                                <v-rating readonly
                                                                                          background-color="grey lighten-2"
                                                                                          empty-icon="mdi-star"
                                                                                          color="yellow darken-2"
                                                                                          dense
                                                                                          :size="ratingSize"
                                                                                          :value="item">
                                                                                </v-rating>
                                                                            </div>
                                                                        </template>
                                                                        <template v-slot:selection="{item}">
                                                                            <div class="d-flex align-center pl-2">
                                                                                <div class="hotel-rating">{{item}}-Star Hotels</div>
                                                                                <v-divider vertical inset class="mx-2 my-0 black"></v-divider>
                                                                                <v-rating readonly
                                                                                          background-color="grey lighten-2"
                                                                                          empty-icon="mdi-star"
                                                                                          color="yellow darken-2"
                                                                                          dense
                                                                                          :size="ratingSize"

                                                                                          :value="item">
                                                                                </v-rating>
                                                                            </div>
                                                                        </template>
                                                                    </v-select>
                                                                </div>
                                                                <div class="mt-6 modal-input">
                                                                    <div class="input-title ">Rooms</div>
                                                                    <v-select hide-details single-line outlined label="Rooms" :items="rooms"></v-select>
                                                                </div>
                                                            </v-card-text>
                                                            <v-spacer></v-spacer>
                                                            <v-card-actions class="flex-column">
                                                                <v-btn block rounded outlined color="grey" x-large @click="resetHotel">Reset</v-btn>
                                                                <v-btn block rounded depressed color="blue accent-3" dark x-large class="mt-5" @click="searchHotel">Search</v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-col>
                                                    <v-col cols="12" md="8" class="hotels">
                                                        <v-card flat class="hotels">
                                                            <v-card-text class="hotels-content">
                                                                <v-row justify="center" align="center" v-if="hotelsLoading" style="min-height: 100%;">
                                                                    <v-progress-circular
                                                                        :size="70"
                                                                        :width="7"
                                                                        color="secondary"
                                                                        indeterminate
                                                                    ></v-progress-circular>
                                                                </v-row>
                                                                <v-row justify="center" align="center" v-else-if="!hotelsLoading && hotels.length === 0" style="min-height: 100%;">
                                                                    <span class="grey--text text--lighten-1 title">No Hotels Available</span>
                                                                </v-row>
                                                                <v-row v-else>
                                                                    <v-col cols="12" md="6" lg="4" v-for="(i, index) in hotels" :key="index">
                                                                        <v-card flat outlined class="hotel-card" style="border-radius: 20px !important;">
                                                                            <v-img :src="i.main_img_base64"></v-img>
                                                                            <v-card-title class="title" style="line-height: 27px;">{{i.name}}</v-card-title>
                                                                            <v-card-text>
                                                                                <v-rating :value="i.rating" :size="ratingSize" readonly dense color="yellow darken-2" empty-icon="mdi-star" background-color="grey lighten-2"></v-rating>
                                                                                <div class="d-flex px-1" >
                                                                                    <div class="grey--text subtitle-1">Location</div>
                                                                                    <v-spacer></v-spacer>
                                                                                    <v-tooltip
                                                                                        attach
                                                                                        absolute
                                                                                        bottom
                                                                                        nudge-top="-20px">
                                                                                        <template v-slot:activator="{on}">
                                                                                            <div class="black--text subtitle-1 text-no-wrap" style="overflow: hidden; text-overflow: ellipsis; max-width: 120px;" v-on="on">{{i.location}}</div>
                                                                                        </template>
                                                                                        <span>{{i.location}}</span>
                                                                                    </v-tooltip>
                                                                                </div>
                                                                                <div class="d-flex px-1">
                                                                                    <div class="grey--text subtitle-1">Price</div>
                                                                                    <v-spacer></v-spacer>
                                                                                    <div class="black--text subtitle-1">${{i.price}}</div>
                                                                                </div>
                                                                                <v-btn block rounded depressed color="primary" class="mt-5" x-large @click="selectHotel(i), hotelIndex = index" :disabled="index === hotelIndex">{{hotelIndex === index ? 'Selected' : 'Select'}}</v-btn>
                                                                            </v-card-text>
                                                                        </v-card>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </v-card>
                                        </v-dialog>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </div>
                    </v-col>
                    <v-col class="px-0 px-md-3" cols="12" md="6">
                        <div>
                            <div class="input-title">Select Flight</div>
                            <v-card flat outlined :height="$vuetify.breakpoint.smAndDown ? 280: 232" style="position: relative;">
                                <v-checkbox style="position: absolute; top: 7px; left: 10px; margin: 0;" color="primary" v-model="IsPriceApplied"></v-checkbox>
                                <v-row justify="center" align="center" style="height: 100%; margin: 0;">
                                    <v-col cols="12" md="4">
                                        <div class="d-flex flex-column align-center mt-12 mt-md-0">
                                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="56" height="64" viewBox="0 0 44.213 47.897">
                                                <path id="Path_151" data-name="Path 151" d="M28.107,4a3.682,3.682,0,0,0-3.684,3.684V21.918L6,35.318V39l18.422-5.023V45.633l-7.369,4.422V51.9H39.16V50.055l-7.369-4.422V33.979L50.213,39V35.318l-18.422-13.4V7.684A3.682,3.682,0,0,0,28.107,4Z" transform="translate(-6 -4)"
                                                      fill="#bdbdbd"/>
                                            </svg>
                                            <div class="lighten-1 mt-7" :class="[flightIndex !== -1 ? 'primary--text': 'grey--text']">{{flightIndex !== -1 ? 'Flight Selected' : 'No Flight Selected'}}</div>
                                        </div>
                                    </v-col>
                                    <v-col cols="1" class="d-none d-md-flex"></v-col>
                                    <v-col cols="12" md="5" class="d-flex justify-center">
                                        <v-dialog
                                            :scrollable="$vuetify.breakpoint.mdAndUp"
                                            v-model="modal2"
                                            content-class="modal">
                                            <template v-slot:activator="{on}">
                                                <v-btn v-on="on" color="primary" outlined rounded x-large style="padding-right: 58px !important; padding-left: 58px !important;">Pick a Flight</v-btn>
                                            </template>
                                            <v-card>
                                                <v-row class="pa-0 mx-0 main-content">
                                                    <v-col cols="12" md="4" class="modal-right">
                                                        <v-card flat style="height: 100%" class="d-flex flex-column">
                                                            <v-card-title class="grey--text text--darken-3 title font-weight-regular">
                                                                Select a Flight
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <div class="mt-6">
                                                                    <div class="input-title">Search</div>
                                                                    <v-text-field hide-details single-line outlined label="Search" append-icon="mdi-magnify" v-model="flightSearch"></v-text-field>
                                                                </div>
                                                                <!--                                                                <div class="mt-6">-->
                                                                <!--                                                                    <div class="input-title">Airline</div>-->
                                                                <!--                                                                    <v-select hide-details single-line outlined label="Select Airline" :items="airlines"></v-select>-->
                                                                <!--                                                                </div>-->
                                                                <div class="mt-6">
                                                                    <div class="input-title">Passenger Rating</div>
                                                                    <v-select hide-details single-line outlined label="Passenger Rating" v-model="flightRating" :items="[1,2,3,4,5]">
                                                                        <template v-slot:item="{item}">
                                                                            <div class="d-flex align-center pl-2">
                                                                                <v-rating readonly
                                                                                          background-color="grey lighten-2"
                                                                                          empty-icon="mdi-star"
                                                                                          color="yellow darken-2"
                                                                                          :size="ratingSize"
                                                                                          dense
                                                                                          :value="item">
                                                                                </v-rating>
                                                                            </div>
                                                                        </template>
                                                                        <template v-slot:selection="{item}">
                                                                            <div class="d-flex align-center pl-2">
                                                                                <v-rating readonly
                                                                                          background-color="grey lighten-2"
                                                                                          empty-icon="mdi-star"
                                                                                          color="yellow darken-2"
                                                                                          :size="ratingSize"
                                                                                          dense
                                                                                          :value="item">
                                                                                </v-rating>
                                                                            </div>
                                                                        </template>
                                                                    </v-select>
                                                                </div>
                                                                <!--                                                                <div class="mt-6">-->
                                                                <!--                                                                    <div class="input-title">Passenger Seat Availability</div>-->
                                                                <!--                                                                    <v-select hide-details single-line outlined label="Passenger Seat Availability" :items="[1,2,3,4,5,6]"></v-select>-->
                                                                <!--                                                                </div>-->
                                                            </v-card-text>
                                                            <v-spacer></v-spacer>
                                                            <v-card-actions class="flex-column">
                                                                <v-btn block rounded outlined color="grey" x-large @click="resetFlight">Reset</v-btn>
                                                                <v-btn block rounded depressed color="blue accent-3" dark x-large class="mt-5" @click="searchFlight">Search</v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-col>
                                                    <v-col cols="12" md="8" class="hotels">
                                                        <v-card flat class="hotels">
                                                            <v-row justify="center" align="center" v-if="flightsLoading" style="min-height: 100%;">
                                                                <v-progress-circular
                                                                    :size="70"
                                                                    :width="7"
                                                                    color="secondary"
                                                                    indeterminate
                                                                ></v-progress-circular>
                                                            </v-row>
                                                            <v-row justify="center" align="center" v-else-if="!flightsLoading && flights.length === 0" style="min-height: 100%;">
                                                                <span class="grey--text text--lighten-1 title">No Flights Available</span>
                                                            </v-row>
                                                            <v-row justify="space-between" class="hotels-content" v-else>
                                                                <v-col cols="12" v-for="(i, index) in flights" :key="index">
                                                                    <v-card class=" pb-7" outlined style="border-radius: 20px !important;">
                                                                        <v-row justify="space-between" class="px-7">
                                                                            <v-col cols="12" md="6">
                                                                                <v-row align="start">
                                                                                    <v-col cols="4" sm="3" lg="2" class="px-0 pt-2"><img style="width: 45px; height: 45px;" :src="i.logo"></v-col>
                                                                                    <v-col cols="8" sm="9" lg="10" class="pa-0 ml-n4 mt-md-0">
                                                                                        <div class="title font-weight-bold">{{i.airline}}</div>
                                                                                        <v-rating
                                                                                            background-color="grey lighten-2"
                                                                                            color="yellow darken-1"
                                                                                            empty-icon="mdi-star"
                                                                                            dense
                                                                                            readonly
                                                                                            :value="i.rating"
                                                                                            :size="24"
                                                                                        ></v-rating>
                                                                                    </v-col>
                                                                                </v-row>
                                                                            </v-col>
                                                                            <v-col style="font-weight: 600; font-size: 30px;" class="d-none d-md-flex">
                                                                                <v-row justify="end" class="pr-3">
                                                                                    ${{split(i.price)}}
                                                                                </v-row>
                                                                            </v-col>
                                                                        </v-row>
                                                                        <v-row class="mx-0 mt-5 mt-md-0 px-0 px-md-12 flight-content" justify="space-between">
                                                                            <v-col cols="2" class="pa-0 d-none d-md-flex flex-column justify-center align-center">
                                                                                <div class="title font-weight-regular" style="line-height: 1.5rem;">{{weekday[i.takeoff_date.getDay()]}}</div><div class="title font-weight-regular" style="line-height: 1.5rem;">{{i.takeoff_date.toLocaleDateString('en-US', { month: 'long', day: 'numeric'})}}</div>
                                                                            </v-col>
                                                                            <!--                                                                            <v-col cols="1" class="pa-0 d-none d-md-flex"></v-col>-->
                                                                            <v-col cols="5" md="2" class="pa-0">
                                                                                <div class="departure">
                                                                                    <div class="font-weight-bold mb-1 mb-md-2 departure-places text-no-wrap text-center " :class="[$vuetify.breakpoint.mdAndUp ? '' : 'overflow-hidden']" :style="{'text-overflow': $vuetify.breakpoint.mdAndUp ? '' : 'ellipsis'}">{{i.origin}}</div>
                                                                                    <div class="title font-weight-regular grey--text text--darken-1 text-center mt-0 mt-md-n1">{{i.takeoff_time}}</div>
                                                                                </div>
                                                                            </v-col>
                                                                            <v-col cols="2" class="pa-0 mx-0 mx-md-2">
                                                                                <div class="d-flex flex-column align-center justify-center fill-height">
                                                                                    <img src="../assets/airplane.svg" class="mb-0 mt-n2 mb-md-4 mt-md-n1">
                                                                                    <div style="border-bottom: 2px dashed #bdbdbd; width: 100%;" class="d-none d-md-block"></div>
                                                                                </div>
                                                                            </v-col>
                                                                            <v-col cols="5" md="2" class="pa-0">
                                                                                <div class="departure">
                                                                                    <div class="departure-places font-weight-bold mb-1 mb-md-2 text-no-wrap text-center" style="overflow: hidden; text-overflow: ellipsis;">{{i.destination}}</div>
                                                                                    <div class="title font-weight-regular grey--text text--darken-1 text-center mt-0 mt-md-n1">{{i.return_time}}</div>
                                                                                </div>
                                                                            </v-col>
                                                                            <!--                                                                            <v-col cols="1" class="pa-0 d-none d-md-flex"></v-col>-->
                                                                            <v-col cols="2" class="pa-0 d-none d-md-flex flex-column align-center justify-center">
                                                                                <div class="title font-weight-regular" style="line-height: 1.5rem;">{{weekday[i.return_date.getDay()]}}</div><div class="title font-weight-regular" style="line-height: 1.5rem;">{{i.return_date.toLocaleDateString('en-US', { month: 'long', day: 'numeric'})}}</div>
                                                                            </v-col>
                                                                        </v-row>
                                                                        <v-row class="mx-0 my-8 d-flex d-md-none" justify="space-between">
                                                                            <v-col cols="5" class="pa-0 d-flex justify-center d-md-none">
                                                                                <div class="subtitle-1 text-center  font-weight-regular" style="line-height: 1.5rem;">{{weekday[i.takeoff_date.getDay()]}}<br>{{i.takeoff_date.toLocaleDateString('en-US', { month: 'long', day: 'numeric'})}}</div>
                                                                            </v-col>
                                                                            <v-col cols="5" class="pa-0 d-flex justify-center d-md-none">
                                                                                <div class="subtitle-1 text-center font-weight-regular" style="line-height: 1.5rem;">{{weekday[i.return_date.getDay()]}}<br>{{i.return_date.toLocaleDateString('en-US', { month: 'long', day: 'numeric'})}}</div>
                                                                            </v-col>
                                                                        </v-row>
                                                                        <v-row class="mx-0 d-flex d-md-none my-8" style="font-weight: 600; font-size: 30px;" justify="center">
                                                                            ${{split(i.price)}}
                                                                        </v-row>
                                                                        <v-row justify-md="end" justify="stretch" class="px-7 mt-4">
                                                                            <v-btn depressed color="primary" rounded x-large class="d-none d-md-flex" style="padding: 0 120px;" @click="selectFlight(i, index)">{{flightIndex === index ? 'Selected' : 'Select'}}</v-btn>
                                                                            <v-btn depressed color="primary" rounded x-large block class="d-flex d-md-none" @click="selectFlight(i, index)">{{flightIndex === index ? 'Selected' : 'Select'}}</v-btn>
                                                                        </v-row>
                                                                    </v-card>
                                                                </v-col>
                                                            </v-row>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </v-card>
                                        </v-dialog>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-tab-item>
            <v-tab-item class="px-9 pt-6 pb-9">
                <v-row>
                    <v-col class="px-0 px-md-3" cols="12" md="4">
                        <div>
                            <div class="input-title">Your Country</div>
                            <v-autocomplete hide-details single-line outlined label="Your Country" :items="countries" v-model="selectedCountry"></v-autocomplete>
                        </div>
                    </v-col>
                    <v-col class="px-0 px-md-3" cols="12" md="4">
                        <div>
                            <div class="input-title">Your State</div>
                            <v-autocomplete hide-details single-line outlined label="Your State" :disabled="!selectedCountry || states.length === 0 || statesLoading" :loading="statesLoading" :items="states" v-model="selectedState"></v-autocomplete>
                        </div>
                    </v-col>
                    <v-col class="px-0 px-md-3" cols="12" md="4">
                        <div>
                            <div class="input-title">Your City</div>
                            <v-autocomplete hide-details single-line outlined label="Your City" :disabled="!selectedCountry || cities.length === 0 || citiesLoading" :loading="citiesLoading" :items="cities" v-model="selectedCity"></v-autocomplete>
                        </div>
                    </v-col>
                    <v-col cols="4"></v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="d-flex justify-center align-center" v-if="packagesLoading">
                        <v-progress-circular
                            :size="70"
                            :width="7"
                            color="secondary"
                            indeterminate
                        ></v-progress-circular>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-center align-center" v-if="!packagesLoading && packages.length === 0">
                        <div class="grey--text">No Packages Available</div>
                    </v-col>
                    <v-col class="px-0 px-md-3" cols="12" md="4" v-for="item in packages" v-else>
                        <v-card flat outlined class="border-20">
                            <div class="pa-5 ">
                                <div class="d-flex flex-column flex-md-row-reverse justify-space-between">
                                    <div class="title-image align-self-center my-5 my-md-0">
                                        <img style="width: 43px; height: 43px;" src="../assets/mosque_moon.svg">
                                    </div>
                                    <div class="title-container">
                                        <div class="title">{{item.name}}</div>
                                        <v-rating 
                                            color="yellow darken-2" 
                                            background-color="grey lighten-2"
                                            empty-icon="mdi-star"
                                            :size="24"
                                            dense
                                            :value="item.rating"
                                            readonly></v-rating>
                                    </div>
                                </div>
                                <div class="d-flex justify-space-between mt-11">
                                    <div class="info-title grey--text">Package Code</div>
                                    <div class="package-info">{{item.packageCode}}</div>
                                </div>
                                <div class="d-flex justify-space-between my-3">
                                    <div class="info-title grey--text">Travel Date</div>
                                    <div class="package-info">{{item.start_date}}</div>
                                </div>
                                <div class="d-flex justify-space-between mb-12">
                                    <div class="info-title grey--text">Starting From</div>
                                    <div class="package-info font-weight-bold">${{split(item.price)}}</div>
                                </div>
                                <v-btn depressed rounded :color="selectedPackageId === item.id ? 'primary': 'grey--text'" block x-large class="mt-5" @click="togglePackage(item)">{{selectedPackageId === item.id ? 'Selected': 'Select'}}</v-btn>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-tab-item>

        </v-tabs-items>
        <v-card-actions class="justify-center justify-md-end px-12 pb-9 pt-0 mt-0">
            <div class="headline" style="white-space: pre;">Total Price:   <span class="primary--text" style="font-weight: 600;">{{!isPriceApplied ? ('$' + split(totalPrice)): 'Pending'}}</span></div>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { PopRoute, AddRoute, ReplaceRoute } from '../../types/store';
import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import {Action, Getter, Mutation, State} from "vuex-class";
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
    },
    data: () => ({
        date: '',
        date2: '',
    })
})
export default class SelectPackage extends Vue {
    @State tabModel: number;
    private menu: boolean = false;
    private menu2: boolean = false;
    private modal: boolean = false;
    private modal2: boolean = false;
    ratingSize: number = 24;
    @Mutation setPage: (page: number) => void;
    @Mutation setHotel: (hotel: {props?:any}) => void;
    @Mutation setFlight: (flight: {props?:any}) => void;
    @Getter token: string;
    @State hotel: { props?:any };
    @State flight: { props?:any };
    @State countries: any[];
    @State userId: number;
    @Mutation setCountry: Function;
    @Mutation setState: Function;
    @Mutation setCity: Function;
    @State country: any;
    private states: any[] = [];
    @State state: any;
    private cities: any[] = [];
    @State city: any;
    private now: any = '';
    private packages: any[] = [];
    @Mutation selectPackageId: Function;
    packagesLoading: boolean = true;
    @State package: any;
    @State title: string;
    @Mutation setPackage: Function;
    @Mutation setNumAdults: Function;
    @Mutation setNumChildren: Function;
    @Mutation setTabModel: Function;
    @Mutation setTitle: Function;
    @Action snackIt: Function;
    @State packageId: any;
    // @Getter totalPrice: any;
    // @Getter totalPackagePrice: any;
    statesLoading: boolean = false;
    citiesLoading: boolean = false;
    hotelsLoading: boolean = true;
    flightsLoading: boolean = true;
    @State isPriceApplied: any;
    @Mutation setPriceApplied: Function;

    @Watch('date')
    setDate(newVal:any, oldVal: any) {
        if (!!newVal){

            this.$router.app.$emit('set date', newVal);
        }
        else
            this.$router.app.$emit('set date', oldVal);
    }

    @Watch('date2')
    setDate2(newVal:any, oldVal: any) {
        if (!!newVal)
            this.$router.app.$emit('set date2', newVal);
        else
            this.$router.app.$emit('set date2', oldVal);
    }

    private get IsPriceApplied(): any {
        return this.isPriceApplied;
    }

    private set IsPriceApplied(payload: any) {
        this.setPriceApplied(payload);
    }

    private get totalPrice(): any {
        // @ts-ignore
        return (this.hotel.price || 0) + (this.package.price || 0);
    }

    private get Title(): any {
        return this.title;
    }

    private set Title(title: any) {
        this.setTitle(title);
    }

    private get TabModel(): any {
        return this.tabModel;
    }

    private set TabModel(item: any) {
        if (this.tabModel === item) {
        } else {
            this.setFlight({});
            this.setHotel({});
            this.setPackage({});
            // this.selectedPackageId = -1;
            this.flightIndex = -1;
            this.hotelIndex = -1;
            this.setTabModel(item);
        }
    }

    private get selectedCountry(): any {
        return this.country;
    }

    private set selectedCountry(val: any) {
        this.setCountry(val);
        this.setState({});
        this.setCity({});
        this.getStates();
        this.getCities();
    }

    private get selectedState(): any {
        return this.state;
    }

    private set selectedState(val: any) {
        this.setState(val);
        this.getCities(true, true);
    }

    private get selectedCity(): any {
        return this.city;
    }

    private set selectedCity(val: any) {
        this.setCity(val);
    }

    split(str: string): string {
        let strData = parseFloat(str);
        let data = strData.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return data.split('.')[0];
    }

    async getStates(selected: boolean = true) {
        this.statesLoading = true;

        try {
            const response = await Axios.get(`http://${alzuhudLink}:8080/api/guest/states`, {
                params: {
                    country_id: this.selectedCountry,
                }
            });

            this.states = response.data.res.map((item: any) => ({
                text: item.stateName,
                value: item.stateId,
            }));


        } catch (e) {

        } finally {
            this.statesLoading = false;
        }
    }

    async getCities(hasState: boolean = false, selected: boolean = true) {
        this.citiesLoading = true;
        if (hasState) {
            try {
                const response = await Axios.get(`http://${alzuhudLink}:8080/api/guest/cities`, {
                    params: {
                        country_id: this.selectedCountry,
                        state_id: this.selectedState,
                    }
                });

                this.cities = response.data.res.map((item: any) => ({
                    text: item.cityName,
                    value: item.cityId,
                }));


            } catch (e) {

            } finally {
                this.citiesLoading = false;
            }
        } else {
            try {
                const response = await Axios.get(`http://${alzuhudLink}:8080/api/guest/cities`, {
                    params: {
                        country_id: this.selectedCountry,
                    }
                });

                this.cities = response.data.res.map((item: any) => ({
                    text: item.cityName,
                    value: item.cityId,
                }))


            } catch (e) {

            } finally {
                this.citiesLoading = false;
            }
        }
    }

    togglePackage(p: any) {
        if (p.id !== this.packageId) {

            this.setPackage(p);
            this.selectPackageId(p.id);
        } else {
            this.setPackage({});
            this.selectPackageId(-1);
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

    rooms: {text: string, value: string , more?:any }[] = [
        {
            text: 'One-person Room',
            value: '1',
        },
        {
            text: 'Two-person Room',
            value: '2',
        },
        {
            text: 'Three-person Room',
            value: '3',
        },
        {
            text: 'Four-person Room',
            value: '4',
        },
    ];

    hotels: any[] = [];

    rating: number = 0;

    search: string = '';

    flights: any[] = [];

    flightRating: number = 0;

    flightSearch: string = '';

    flightIndex = -1;
    hotelIndex = -1;

    async mounted() {
        this.setPage(1);
        this.setTabModel(0);
        this.changeFont();

        // this.setNumChildren(0);

        this.setFlight({});
        this.setHotel({});

        this.hotelsLoading = true;
        this.flightsLoading = true;

        try {
            const res = await Axios.get(`http://${alzuhudLink}:8080/api/hotels/all`, {
                params: {
                    token: this.token,
                    // accomodation: 2,
                    // search: this.search,
                }
            });

            console.log(res);

            this.hotels = res.data.res.data.map((item: any) => ({
                id: item.id,
                name: item.name,
                location: item.address,
                price: item.price,
                rating: this.getInt(item.accomodation),
                main_img_base64: item.main_img_base64,
            }));

            console.log(this.hotels);

        } catch(e) {
            console.log(e);
        } finally {
            this.hotelsLoading = false;
        }
        try {
            const res2 = await Axios.get(`http://${alzuhudLink}:8080/api/flights/all`, {
                params: {
                    token: this.token,
                }
            });
            this.flights = res2.data.res.data.map((item: any) => ({
                id: item.id,
                logo: !!item.logo_url ? item.logo_url : (!!item.logo_base64 ? item.logo_base64 : ""),
                airline: item.name,
                origin: item.origin_name,
                destination: item.destination_name,
                price: item.price,
                rating: item.rate_avg,
                takeoff_time: item.takeoff_time,
                takeoff_date: new Date(item.takeoff_date),
                return_time: item.return_time,
                return_date: new Date(item.return_date),
            }));
        } catch(e) {
            console.log(e);
        } finally {
            this.flightsLoading = false;
        }


        this.now = new Date(Date.now() - 24 * 60 * 60 * 1000);

        try {
            const response = await Axios.get(`http://${alzuhudLink}:8080/api/packages/all`, {});

            this.packages = response.data.res.data.map((item: any) => ({
                id: item.id,
                name: item.name,
                rating: item.rate,
                start_date: item.start_date,
                end_date: item.end_date,
                packageCode: item.code,
                hotel_id: item.hotel_id,
                airline_id: item.airline_id,
                price: item.price,
            }))
        } catch (e) {
        } finally {
            this.packagesLoading = false;
        }

        this.setFlight({});
        this.setHotel({});
    }

    // formatDate(date: any) {
    //     let month = `${date.getMonth() + 1}`;
    //     let day = `${date.getDate()}`;
    //     const year = date.getFullYear();
    //
    //     if (month.length < 2) month = `0${month}`;
    //     if (day.length < 2) day = `0${day}`;
    //
    //     return [year, month, day].join('-');
    // }

    allowedDates (val: any) {return new Date(val) >= this.now};
    /**
     *
     */
    constructor() {
        super();
    }

    async searchHotel() {
        this.hotels = [];
        this.hotelsLoading = true;
        try {
            console.log('search params', this.rating, this.search);
            const res = await Axios.get(`http://${alzuhudLink}:8080/api/hotels/all`, {
                params: {
                    token: this.token,
                    accomodation: this.rating,
                    search: this.search,
                }
            });

            console.log(res)

            this.hotels = res.data.res.data.map((item: any) => ({
                id: item.id,
                name: item.name,
                location: item.address,
                price: item.price,
                rating: this.getInt(item.accomodation),
                main_img_base64: item.main_img_base64,
            }));
        } catch(e) {
            console.log(e);
            this.snackIt({
                message: 'Error loading hotels',
                color: 'error',
                snackbar: true,
            })
        } finally {
            this.hotelsLoading = false;
        }
    }

    async searchFlight() {
        this.flights = [];
        this.flightsLoading = true;
        try {
            const res = await Axios.get(`http://${alzuhudLink}:8080/api/flights/all`, {
                params: {
                    token: this.token,
                    rate: this.flightRating,
                    search: this.flightSearch,
                }
            });


            this.flights = res.data.res.data.map((item: any) => ({
                id: item.id,
                name: item.name,
                location: item.address,
                price: item.price,
                rating: this.getInt(item.accomodation),
            }));
        } finally {
            this.flightsLoading = false;
        }
    }

    getInt(str: string): number {
        const num = str.split(' ');
        switch (num[0].toLowerCase()) {
            case 'one':
                return 1;
            case 'two':
                return 2;
            case 'three':
                return 3;
            case 'four':
                return 4;
            case 'five':
                return 5;
            case 'six':
                return 6;
            default:
                return 0;
        }
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

    selectHotel(item: any) {
        this.setHotel(item);
    }

    selectFlight(item: any, index: number) {
        if (item !== this.flight) {
            this.setFlight(item);
            this.flightIndex = index;
        } else {
            this.setFlight({});
            this.flightIndex = -1;
        }
    }

    resetHotel() {
        this.setHotel({});
        this.rating = 0;
        this.search = '';
    }

    resetFlight() {
        this.setFlight({});
        this.flightSearch = '';
        this.flightRating = 0;
    }

    changeFont(): void {
        if (document.body.clientWidth < 1200) {
            this.ratingSize = 18;
        }
    }

    async beforeDestroy() {

    }
}
</script>

<style lang="scss">
    .input-title {
        font-size: 16px;
        font-weight: lighter;
        margin-bottom: 5px;
        color: #707070;
    }

    .modal {
        border-radius: 20px !important;
        height: 100%;
        >.v-card {
            max-height: 100% !important;
            @media screen and (max-width: 960px) {
                max-height: initial !important;
                /*height: 100%;*/
            }
        }

        .modal-right {
            border-right: 1px solid #bdbdbd;
            @media screen and (max-width: 960px) {
                border-right: none;
            }
        }

        .main-content {
            height: 100%;
            @media screen and (max-width: 960px) {
                height: initial;
            }
        }

        .hotels {
            height: 100%;
            @media screen and (max-width: 960px) {
                height: initial;
            }

            .title {
                font-family: 'Open Sans' !important;
            }
        }

        .hotels-content {
            overflow-y: scroll;
            height: 100%;
            scrollbar-width: thin;
            @media screen and (min-width: 960px) {
                padding: 0 16px;
            }
            @media screen and (max-width: 960px) {
                overflow-y: hidden;
            }
        }

        .flight-content {
            @media screen and (max-width: 1904px) {
                .departure-places {
                    font-size: 20px !important;
                }
            }

            @media screen and (max-width: 960px) {
                .departure-places {
                    &+.title {
                        font-size: 16px !important;
                    }
                }
            }
        }
    }

    .modal-input {
        @media screen and (max-width: 1200px) {
            div, .hotel-rating {
                font-size: 14px !important;
            }
        }
    }

    .hotel-card {
        @media screen and (max-width: 1200px) {
            font-size: .9rem !important;
        }
    }

    .hotel-card-title, .card-subtitle {
        @extend .hotel-card
    }
</style>
