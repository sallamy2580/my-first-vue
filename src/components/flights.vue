<template>
    <v-app id="flights">
        <v-card>
            <v-tabs  class="d-none d-sm-flex " style="width: 100%; border-bottom-color: #707070;">
                <v-tab style="margin-left: 0 !important;" @click="changeTab('availFlights')" class="body-1 ">Available Flights</v-tab>
                <v-tab @click="changeTab('airlines')" class="body-1 ">Airlines</v-tab>
            </v-tabs>
            <v-tabs  class="d-sm-none" style="border-radius: 25px;" :fixed-tabs="$vuetify.breakpoint.xsOnly">
                <v-tab style="margin-left: 0 !important;" @click="changeTab('availFlights')" class="subtitle-2 ">Available Flights</v-tab>
                <v-tab @click="changeTab('airlines')" class="subtitle-2 ">Airlines</v-tab>
            </v-tabs>
<!--            <v-spacer></v-spacer>-->
            <div class="justify-md-end justify-sm-center mx-sm-3" style="display: grid; grid-template-columns: auto;">
            <v-text-field id="searchBox" v-if="flightsTab === 'availFlights'"
                    outlined
                    label="Search In Origin"
                    prepend-inner-icon="mdi-magnify"
                    class="mx-0 mx-md-8 my-3 my-md-5"
                    style="max-width: 350px; padding: 0 12px;"
                    @input="searchInFlights"
                    v-model="flight"
                    hide-details
            ></v-text-field>
            <v-text-field v-if="flightsTab === 'airlines'"
                    outlined
                    label="Search In Airline Name"
                    prepend-inner-icon="mdi-magnify"
                    class="mx-0 mx-md-8 my-3 my-md-5 "
                    style="max-width: 350px; padding: 0 12px;"
                    @input="searchInAirlines"
                    v-model="airline"
                    hide-details
            ></v-text-field>
            </div>

<!--            <v-toolbar flat  class="d-none d-md-flex headline" style="padding: 25px 35px 0px 35px;">Agents List</v-toolbar>-->
<!--            <v-card-title class="d-md-none title mr-7 font-weight-regular" style="padding: 25px 35px 0px 35px;">Agents List</v-card-title>-->
            <v-data-table v-if="flightsTab === 'availFlights'"
                                     :headers="flightHeaders"
                                     :items="flights"
                                     disable-pagination
                                     hide-default-footer
                                     class="table"
                                     :loading="tableLoading"
                                     :mobile-breakpoint="mobileBreakPoint"
        >

            <template v-slot:item.action="{ item }">
                <v-icon
                        color="blue"
                        class="mr-2"
                        @click="editFlight(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                        color="red"
                        class="mr-2"
                        @click="deleteItem(item.id)"
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
            <v-data-table id="airlineTable" v-if="flightsTab === 'airlines'"
                          :headers="airlineHeaders"
                          :items="airlines"
                          disable-pagination
                          hide-default-footer
                          class="table"
                          :loading="tableLoading"
                          :mobile-breakpoint="mobileBreakPoint"
            >
                <template v-slot:header.name="{ header }">
                    <span class="d-flex d-sm-none">
                        <span class="font-weight-bold" style="align-self: center;">{{header.text}}</span>
                    </span>
                    <span class="d-none d-sm-flex">
                        <span class="font-weight-bold" style="align-self: center; ">{{header.text}}</span>
                    </span>
                </template>
                <template v-slot:item.name="{ item }">
                    <div style="display: grid; grid-template-columns: 60px auto; grid-column-gap: 10px; margin-top: 15px; margin-bottom: 11px;">
                        <img :src="item.airlineLogo" alt="Logo" style="width: 40px;">
                        <span class="font-weight-bold" style="align-self: center; justify-self: start;">{{item.name}}</span>
                    </div>
                    <!--<div class="d-sm-none" style="display: grid; grid-template-columns: 65px auto; margin-top: 15px; margin-bottom: 20px;">
                        <img :src="item.airlineLogo" alt="Logo" style="width: 40px;">
                        <span class="font-weight-bold" style="align-self: center;">{{item.name}}</span>
                    </div>-->
                </template>


                <template v-slot:item.rating="{ item }">
                    <div style="display: grid; grid-template-columns: 140px auto; margin-top: 10px;">
                        <v-rating background-color="grey lighten-2"
                                  color="yellow darken-1"
                                  empty-icon="mdi-star"
                                  dense
                                  v-model="item.rating"
                                  style="margin-bottom: 15px; justify-self: start;"
                        ></v-rating>
                        <p style="align-self: center; justify-self: start;"> ({{item.rating}})</p>
                    </div>
                </template>

                <template v-slot:item.action="{ item }">
                    <v-icon
                            color="blue"
                            class="mr-2"
                            @click="editAirline(item)"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                            color="red"
                            class="mr-2"
                            @click="deleteItem(item.id)"
                    >
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
            </v-card>
            <v-pagination v-if="flightsTab === 'availFlights'" v-model="page"
                          :length="pagesCount"
                          circle
                          :disabled="pagesCount === 1"
                          :total-visible="7"
                          class="mt-4"
                          @next="changePage($event)"
                          @previous="changePage($event)"
                          @input="changePage($event)"
            ></v-pagination>
            <v-pagination v-if="flightsTab === 'airlines'" v-model="page"
                          :length="pagesCount"
                          circle
                          :disabled="pagesCount === 1"
                          :total-visible="7"
                          class="mt-4"
                          @next="changePage($event)"
                          @previous="changePage($event)"
                          @input="changePage($event)"
            ></v-pagination>
        <v-dialog ref="mainDialog" v-if="flightsTab === 'availFlights'" v-model="editDialog" max-width="1200px">
            <v-card>
                <v-card-title>
                    <span class="headline">Edit Flight</span>
                </v-card-title>
                <v-form @submit="saveFlightEdit">
                    <v-card-text>
                        <v-row>
                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                <v-autocomplete :loading="dialogLoading" :rules="[rules.required]" v-model="editedFlight.airlineId" :items="airlineList" label="Airline" outlined></v-autocomplete>
                            </v-col>
                            <v-col style="margin-bottom: 3px" cols="12" sm="6" md="4">
                                <v-dialog
                                        ref="dialog1"
                                        v-model="dateMenu"
                                        :return-value.sync="editedFlight.originalTOffDate"
                                        persistent
                                        full-width
                                        width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                hide-details
                                                v-model="editedFlight.originalTOffDate"
                                                label="Departure Date"
                                                append-icon="mdi-calendar"
                                                readonly
                                                outlined
                                                clearable
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="editedFlight.originalTOffDate" scrollable color="primary" :allowed-dates="allowedDates">
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="dateMenu = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog1.save(editedFlight.originalTOffDate)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col style="margin-bottom: 3px" cols="12" sm="6" md="4">
                                <v-dialog
                                        ref="dialog2"
                                        v-model="dateMenu2"
                                        value=""
                                        :return-value.sync="editedFlight.originalRetDate"
                                        persistent
                                        full-width
                                        width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                hide-details
                                                v-model="editedFlight.originalRetDate"
                                                label="Return Date"
                                                append-icon="mdi-calendar"
                                                readonly
                                                outlined
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="editedFlight.originalRetDate" scrollable color="primary" :allowed-dates="allowedDates" :min="editedFlight.originalTOffDate">
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="dateMenu2 = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog2.save(editedFlight.originalRetDate)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                <v-text-field :rules="[rules.required]" v-model="editedFlight.seatAvail" outlined label="Seat Availability Number"></v-text-field>
                            </v-col>
                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                <v-text-field :rules="[rules.required]" v-model="editedFlight.origPrice" prefix="$"  outlined label="Price"></v-text-field>
                            </v-col>
                            <v-col style="margin-bottom: -20px" cols="12" sm="6" md="4">
                                <v-autocomplete :loading="dialogLoading" :rules="[rules.required]" v-model="editedFlight.originId" :items="countryList" label="From" outlined></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-actions style="margin-top: -25px" >
                        <div class="d-none d-sm-flex flex-grow-1"></div>
                        <div class="d-none d-sm-flex">
                            <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                            <v-btn type="submit" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 mr-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                        </div>
                        <div class="d-sm-none" style="display: grid; justify-content: end; width: 100%; margin-right: 18px; ">
                            <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                            <v-btn type="submit" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 ml-4" height="50" rounded large dark style="align-self: center; background-color:#00897B !important;">Save</v-btn>
                        </div>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
        <v-dialog ref="mainDialog" v-if="flightsTab === 'airlines'" v-model="editDialog" max-width="1200px">
            <v-card :loading="dialogLoading">
                <v-card-title>
                    <span class="headline">Edit Airline</span>
                </v-card-title>
                <v-form @submit="saveAirlineEdit">
                    <v-card-text>
                        <v-row>
                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                <v-text-field :rules="[rules.required]" v-model="editedAirline.name" outlined label="Name" class="text-capitalize"></v-text-field>
                            </v-col>
                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                <v-autocomplete :rules="[rules.required]" v-model="editedAirline.countryId" :items="countryList" label="From" outlined></v-autocomplete>
                            </v-col>
                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                <v-select  outlined label="Ratings" :items="[1,2,3,4,5]" v-model="editedAirline.rating" clearable>
                                    <template v-slot:item="{item}">
                                        <div style="display: grid; grid-template-columns: 145px auto; align-content: center; align-items: center;">
                                            <v-rating background-color="grey lighten-2"
                                                      color="yellow darken-1"
                                                      empty-icon="mdi-star"
                                                      dense
                                                      v-model="item"
                                            ></v-rating>
                                            <span style="margin-top: -5px; "> ({{item}})</span>
                                        </div>
                                    </template>
                                    <template v-slot:selection="{item}">
                                        <div style="display: grid; grid-template-columns: 145px auto; align-content: center; align-items: center;">
                                            <v-rating background-color="grey lighten-2"
                                                      color="yellow darken-1"
                                                      empty-icon="mdi-star"
                                                      dense
                                                      v-model="item"
                                            ></v-rating>
                                            <span style="margin-top: -5px; "> ({{item}})</span>
                                        </div>
                                    </template>
                                </v-select>
                            </v-col>
                            <v-col style="margin-bottom: -30px" cols="12">
                                <div class="input-title" style="grid-column: 1/4;">Upload Airline Logo</div>
                                <v-card flat outlined style="grid-column: 1/4; border: 1px solid #bdbdbd; margin-bottom: 20px;">
                                    <v-card-text>
                                        <v-row align="center" justify="center" justify-md="start">
                                            <v-col class="d-none d-md-flex" md="1"></v-col>
                                            <v-col cols="12" md="4"
                                                   class="d-flex d-md-block justify-center justify-md-start title font-weight-regular overflow-hidden"
                                                   style="text-overflow: ellipsis;"
                                                   :class="[newAirlineLogo !== null ? 'primary--text': '']"
                                                   :style="{'white-space': $vuetify.breakpoint.mdAndUp ? 'nowrap': ''}">
                                                {{newAirlineLogo !== null ? newAirlineLogo.name : 'No File Selected'}}
                                            </v-col>
                                            <v-col cols="4" style="display: none;">
                                                <v-file-input readonly id="airline-file-input" v-model="newAirlineLogo"></v-file-input>
                                            </v-col>
                                            <v-col class="d-flex justify-center justify-md-start" cols="12" md="4"
                                                   justify-center>
                                                <v-btn outlined rounded color="primary" x-large class="px-12"
                                                       @click="selectFile">Select a File
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions >
                        <div class="d-none d-sm-flex flex-grow-1"></div>
                        <div class="d-none d-sm-flex">
                            <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                            <v-btn type="submit" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 mr-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                        </div>
                        <div class="d-sm-none" style="display: grid; justify-content: end; width: 100%; margin-right: 18px">
                            <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                            <v-btn type="submit" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 ml-4" height="50" rounded large dark style="align-self: center; background-color:#00897B !important;">Save</v-btn>
                        </div>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
<!--            <v-dialog ref="mainDialog" v-if="flightsTab === 'availFlights'" v-model="editDialog" max-width="1200px">-->
<!--                <v-card>-->
<!--                    <v-card-title>-->
<!--                        <span class="headline">Edit Flight</span>-->
<!--                    </v-card-title>-->
<!--                    <v-card-text>-->
<!--                        <v-row>-->
<!--                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">-->
<!--                                <v-autocomplete :rules="[rules.required]" v-model="editedFlight.airlineId" :items="airlineList" label="Airline" outlined></v-autocomplete>-->
<!--                            </v-col>-->
<!--                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">-->
<!--                                <v-dialog-->
<!--                            ref="dialog1"-->
<!--                            v-model="dateMenu"-->
<!--                            :return-value.sync="editedFlight.takeOffDate"-->
<!--                            persistent-->
<!--                            full-width-->
<!--                            width="290px"-->
<!--                    >-->
<!--                        <template v-slot:activator="{ on }">-->
<!--                            <v-text-field-->
<!--                                    hide-details-->
<!--                                    v-model="editedFlight.takeOffDate"-->
<!--                                    label="Departure Date"-->
<!--                                    append-icon="mdi-calendar"-->
<!--                                    readonly-->
<!--                                    outlined-->
<!--                                    v-on="on"-->
<!--                            ></v-text-field>-->
<!--                        </template>-->
<!--                        <v-date-picker v-model="editedFlight.takeOffDate" scrollable color="primary" :allowed-dates="allowedDates">-->
<!--                            <v-spacer></v-spacer>-->
<!--                            <v-btn text color="primary" @click="dateMenu = false">Cancel</v-btn>-->
<!--                            <v-btn text color="primary" @click="$refs.dialog1.save(editedFlight.takeOffDate)">OK</v-btn>-->
<!--                        </v-date-picker>-->
<!--                    </v-dialog>-->
<!--                            </v-col>-->
<!--                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">-->
<!--                                <v-dialog-->
<!--                            ref="dialog2"-->
<!--                            v-model="dateMenu2"-->
<!--                            :return-value.sync="editedFlight.returnDate"-->
<!--                            persistent-->
<!--                            full-width-->
<!--                            width="290px"-->
<!--                    >-->
<!--                        <template v-slot:activator="{ on }">-->
<!--                            <v-text-field-->
<!--                                    hide-details-->
<!--                                    v-model="editedFlight.returnDate"-->
<!--                                    label="Return Date"-->
<!--                                    append-icon="mdi-calendar"-->
<!--                                    readonly-->
<!--                                    outlined-->
<!--                                    v-on="on"-->
<!--                            ></v-text-field>-->
<!--                        </template>-->
<!--                        <v-date-picker v-model="editedFlight.returnDate" scrollable color="primary" :allowed-dates="allowedDates" :min="editedFlight.takeOffDate">-->
<!--                            <v-spacer></v-spacer>-->
<!--                            <v-btn text color="primary" @click="dateMenu2 = false">Cancel</v-btn>-->
<!--                            <v-btn text color="primary" @click="$refs.dialog2.save(editedFlight.returnDate)">OK</v-btn>-->
<!--                        </v-date-picker>-->
<!--                    </v-dialog>-->
<!--                            </v-col>-->
<!--                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">-->
<!--                                <v-text-field :rules="[rules.required]" v-model="editedFlight.seat" outlined label="Seat Availability Number"></v-text-field>-->
<!--                            </v-col>-->
<!--                            <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">-->
<!--                                <v-text-field :rules="[rules.required]" v-model="editedFlight.price" outlined label="Price"></v-text-field>-->
<!--                            </v-col>-->
<!--                            <v-col style="margin-bottom: -20px" cols="12" sm="6" md="4">-->
<!--                                <v-autocomplete :rules="[rules.required]" v-model="editedFlight.FlightOriginCountryId" :items="countryList" label="From" outlined></v-autocomplete>-->
<!--                            </v-col>-->
<!--                        </v-row>-->
<!--                    </v-card-text>-->

<!--                    <v-card-actions style="margin-top: -25px" >-->
<!--                        <div class="d-none d-sm-flex flex-grow-1"></div>-->
<!--                        <div class="d-none d-sm-flex">-->
<!--                            &lt;!&ndash;                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>&ndash;&gt;-->
<!--                            <v-btn @click="saveFlightEdit" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 mr-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>-->
<!--                        </div>-->
<!--                        <div class="d-sm-none" style="display: grid; justify-content: center;">-->
<!--                            &lt;!&ndash;                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>&ndash;&gt;-->
<!--                            <v-btn @click="saveFlightEdit" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 ml-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>-->
<!--                        </div>-->
<!--                    </v-card-actions>-->
<!--                </v-card>-->
<!--            </v-dialog>-->

    </v-app>
</template>

<script>
    import {mapMutations, mapState, mapActions, mapGetters} from 'vuex';
    import Axios from 'axios';
    import alzuhudLink, {toBase64} from "@/components/Functions/Functions";


    export default {
        name: "flight",
        data () {
            return {
                tab: this.flightsTab,
                flight: '',
                airline: '',
                airlineHeaders: [
                    {
                        text: 'Name',
                        align: 'left',
                        value: 'name',
                        class: 'dBlock'
                    },
                    { text: 'Country', value: 'country' },
                    { text: 'Passenger Ratings', value: 'rating', sortable: false, align: 'left' },
                    { text: 'OP', value: 'action', sortable: false, align: 'center' }
                ],
                flightHeaders: [
                    {
                        text: 'Airline',
                        align: 'left',
                        sortable: false,
                        value: 'airline',
                    },
                    { text: 'Departure Date', value: 'takeOffDate' },
                    { text: 'Seat Availability', value: 'seatAvail' },
                    { text: 'Price', value: 'price' },
                    { text: 'From', value: 'origin' },
                    { text: 'OP', value: 'action', sortable: false, align: 'center' }
                ],
                rules: {
                    required: value => !!value || 'Required',
                },
                flights: [],
                airlines: [],
                tableLoading: true,
                saveLoading: false,

                pagesCount: 1,
                page: 1,

                dateMenu: false,
                dateMenu2: false,

                editDialog: false,
                dialogLoading: false,
                editedFlight: {
                    id: null,
                    name: null,
                    takeOffDate: null,
                    returnDate: null,
                    seatAvail: null,
                    originId: null,
                    airlineId: null,
                    origPrice: null,
                    originalTOffDate: null,
                    originalRetDate: null,
                    // takeOffDateNew: null,
                },
                countryList: [],
                airlineList: [],
                editedAirline: {
                    id: null,
                    name: null,
                    rating: null,
                    countryId: null,
                    airlineLogo: null,
                },
                newAirlineLogo: null
            }
        },
        computed: {
            ...mapState([
                'flightsTab'
            ]),
            ...mapGetters([
                'token',
            ])
        },
        methods: {
            ...mapMutations([
                'replaceRoute',
                'changeFlightsTab'
            ]),
            ...mapActions([
                'snackIt'
            ]),
            async searchInFlights (search) {
                if (search !== undefined || null) {
                    this.tableLoading = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/flights/all`,{
                            params: {
                                search:search,
                                token: this.token
                            }}).finally(() => {this.tableLoading = false});
                        // console.log(response.data.res.data);
                        this.pagesCount = response.data.res.last_page;
                        this.flights = response.data.res.data.map( flight => ({
                            id: flight.id,
                            airline: flight.airline_id !== null ? flight.airline_id.name : 'Unknown',
                            airlineId: flight.airline_id.id,
                            seatAvail: flight.seat_availability,
                            origPrice: flight.price,
                            price: '$' + this.split(flight.price),
                            origin: flight.origin_name,
                            originId: flight.origin_id,
                            takeOffDate: new Date(flight.takeoff_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            }),
                            returnDate: new Date(flight.return_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            }),
                            originalTOffDate: flight.takeoff_date.slice(0,10),
                            originalRetDate: flight.return_date.slice(0,10),
                            airlineLogo: flight.logo_base64,
                            // name: flight.airline_id.name,
                            // country: flight.airline_id.country,
                            rate: flight.rate_avg,
                        }));

                    } catch (e) {
                        console.log(e.responsne);
                        this.snackIt({message: 'An error occurred while getting Flights data ', color: 'error', snackbar: true});
                    }
                }
            },
            async searchInAirlines (search) {
                if (search !== undefined || null) {
                    this.tableLoading = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/airlines/all`,{
                            params: {
                                search: search,
                                token: this.token
                            }}).finally(() => {this.tableLoading = false});
                        // console.log('airlines: ', response.data.res.data);
                        this.pagesCount = response.data.res.last_page;
                        this.airlines = response.data.res.data.map( airline => ({
                            id: airline.id,
                            name: airline.name !== null ? airline.name : 'Unknown',
                            rating: airline.rate_avg,
                            country: airline.country_id.name,
                            countryId: airline.country_id.id,
                            airlineLogo: airline.logo_base64,
                        }));

                    } catch (e) {
                        console.log(e.responsne);
                        this.snackIt({message: 'An error occurred while getting Flights data ', color: 'error', snackbar: true});
                    }
                }
            },


            async deleteItem(id) {
                console.log('delete', this.flightsTab);
                switch (this.flightsTab) {
                    case "availFlights":
                        console.log('avail');
                        if(confirm('Do You Want To Delete This Flight?')) {
                            this.tableLoading = true;
                            try {
                                await Axios.get(`http://${alzuhudLink}:8080/api/flights/delete/`+ id + '?token=' + this.token);
                                await this.getFlights();
                                this.snackIt({message: 'Flight deleted successfully', color: 'success', snackbar: true});
                                this.tableLoading = false;
                            } catch (e) {
                                this.tableLoading = false;
                                this.snackIt({message: 'An error occurred! ' + e.response.data.error, color: 'error', snackbar: true});
                            }
                        }
                        break;
                    case "airlines":
                        console.log('airlines');
                        if (confirm('Do You Want To Delete This Airline?')) {
                            this.tableLoading = true;
                            try {
                                await Axios.get(`http://${alzuhudLink}:8080/api/airlines/delete/`+ id + '?token=' + this.token);
                                await this.getAirlines();
                                this.snackIt({message: 'Airline deleted successfully', color: 'success', snackbar: true});
                                this.tableLoading = false;
                            } catch (e) {
                                this.tableLoading = false;
                                this.snackIt({message: 'An error occurred! ' + e.response.data.error, color: 'error', snackbar: true});
                            }
                        }
                        break;
                }
            },
            async editFlight (item) {
                setTimeout(() => {
                    this.editedFlight = Object.assign(this.editedFlight, item);
                }, 10);
                this.editDialog = true;
                this.dialogLoading = true;
                // console.log('flight: ', this.editedFlight);
                await this.getNeedData();
                this.dialogLoading = false;
            },
            async editAirline (item) {
                this.editDialog = true;
                this.dialogLoading = true;
                this.editedAirline = Object.assign(this.editedAirline, item);
                // console.log('airline: ', this.editedAirline);
                await this.getAllCountries();
                this.dialogLoading = false;
            },
            async saveAirlineEdit (e) {
                e.preventDefault();
                this.saveLoading = true;
                let logo = !!this.newAirlineLogo ? await toBase64(this.newAirlineLogo): undefined;
                try {
                    await Axios.post(`http://${alzuhudLink}:8080/api/airlines/update`, {
                        id: this.editedAirline.id,
                        country_id: this.editedAirline.countryId,
                        name: this.editedAirline.name,
                        logo_base64: logo,
                        rate_avg: this.editedAirline.rating,
                        token: this.token,
                    });
                    this.getAirlines();
                    this.snackIt({message: 'Airline updated successfully', color: 'success', snackbar: true});
                } catch (e) {
                    console.log(e.response);
                    this.snackIt({
                        message: 'An error occurred! ' + e.response.data.error,
                        color: 'error',
                        snackbar: true
                    });
                }
                finally {
                    this.saveLoading = false;
                }
            },
            async saveFlightEdit (e) {
                e.preventDefault();
                this.saveLoading = true;
                try {
                    let resp = await Axios.post(`http://${alzuhudLink}:8080/api/flights/update`, {
                        id: this.editedFlight.id,
                        airline_id: this.editedFlight.airlineId,
                        origin_id: this.editedFlight.originId,
                        takeoff_date: this.editedFlight.originalTOffDate,
                        return_date: this.editedFlight.originalRetDate,
                        price: this.editedFlight.origPrice,
                        seat_availability: this.editedFlight.seatAvail,
                        token: this.token,
                    });
                    this.getFlights()
                    this.snackIt({message: 'Flight updated successfully', color: 'success', snackbar: true});
                } catch (e) {
                    this.snackIt({
                        message: 'An error occurred! ' + e.response.data.error,
                        color: 'error',
                        snackbar: true
                    });
                }
                finally {
                    this.saveLoading = false;
                }
            },

            async getAirlines () {
                try {
                    let response = await Axios.get(`http://${alzuhudLink}:8080/api/airlines/all`,{
                        params: {
                            token: this.token
                        }}).finally(() => {this.tableLoading = false});
                    // console.log('airlines: ', response.data.res.data);
                    this.pagesCount = response.data.res.last_page;
                    this.airlines = response.data.res.data.map( airline => ({
                        id: airline.id,
                        name: airline.name !== null ? airline.name : 'Unknown',
                        rating: airline.rate_avg,
                        country: airline.country_id.name,
                        countryId: airline.country_id.id,
                        airlineLogo: airline.logo_base64,
                    }));

                } catch (e) {
                    console.log(e.responsne);
                    this.snackIt({message: 'An error occurred while getting Flights data ', color: 'error', snackbar: true});
                }
            },

            async getFlights () {
                try {
                    let response = await Axios.get(`http://${alzuhudLink}:8080/api/flights/all`,{
                        params: {
                            token: this.token
                        }}).finally(() => {this.tableLoading = false});
                    // console.log(response.data.res.data);
                    this.pagesCount = response.data.res.last_page;
                    this.flights = response.data.res.data.map( flight => ({
                        id: flight.id,
                        airline: flight.airline_id !== null ? flight.airline_id.name : 'Unknown',
                        airlineId: flight.airline_id.id,
                        seatAvail: flight.seat_availability,
                        origPrice: flight.price,
                        price: '$' + this.split(flight.price),
                        origin: flight.origin_name,
                        originId: flight.origin_id,
                        takeOffDate: new Date(flight.takeoff_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        }),
                        returnDate: new Date(flight.return_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        }),
                        originalTOffDate: flight.takeoff_date.slice(0,10),
                        originalRetDate: flight.return_date.slice(0,10),
                        airlineLogo: flight.logo_base64,
                        // name: flight.airline_id.name,
                        // country: flight.airline_id.country,
                        rate: flight.rate_avg,
                    }));

                } catch (e) {
                    console.log(e.responsne);
                    this.snackIt({message: 'An error occurred while getting Flights data ', color: 'error', snackbar: true});
                }
            },
            split(str) {
                let strData = parseFloat(str);
                let data = strData.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                return data.split('.')[0];
            },
            changeTab(tab) {
                this.flight = '';
                this.airline = '';
                this.changeFlightsTab(tab);
                this.tableLoading = true;
                switch (tab) {
                    case 'availFlights' :
                        this.getFlights();
                        break;
                    case 'airlines' :
                        this.getAirlines();
                        break;
                }
            },
            async changePage(e) {
                if (e !== undefined) {
                    this.tableLoading = true;
                    if (this.flightsTab === 'availFlights') {
                        this.flights = [];
                        try {
                            let response = await Axios.get(`http://${alzuhudLink}:8080/api/flights/all`,{
                                params: {
                                    page: e,
                                    token: this.token
                                }}).finally(() => {this.tableLoading = false});
                            // console.log(response.data.res.data);
                            this.pagesCount = response.data.res.last_page;
                            this.flights = response.data.res.data.map( flight => ({
                                id: flight.id,
                                airline: flight.airline_id !== null ? flight.airline_id.name : 'Unknown',
                                seatAvail: flight.seat_availability,
                                origPrice: flight.price,
                                price: '$' + this.split(flight.price),
                                origin: flight.origin_name,
                                takeOffDate: new Date(flight.takeoff_date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                }),
                                returnDate: new Date(flight.return_date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                }),
                                airlineLogo: flight.logo_base64,
                                // name: flight.airline_id.name,
                                // country: flight.airline_id.country,
                                rate: flight.rate_avg,
                            }));

                        } catch (e) {
                            console.log(e.responsne);
                            this.snackIt({message: 'An error occurred while getting Flights data ', color: 'error', snackbar: true});
                        }
                    } else if (this.flightsTab === 'airlines') {
                        this.airlines = [];
                        try {
                            let response = await Axios.get(`http://${alzuhudLink}:8080/api/airlines/all`,{
                                params: {
                                    page: e,
                                    token: this.token
                                }}).finally(() => {this.tableLoading = false});
                            // console.log('airlines: ', response.data.res.data);
                            this.pagesCount = response.data.res.last_page;
                            this.airlines = response.data.res.data.map( airline => ({
                                id: airline.id,
                                name: airline.name !== null ? airline.name : 'Unknown',
                                rating: airline.rate_avg,
                                country: airline.country_id.name,
                                airlineLogo: airline.logo_base64,
                            }));

                        } catch (e) {
                            console.log(e.responsne);
                            this.snackIt({message: 'An error occurred while getting Flights data ', color: 'error', snackbar: true});
                        }
                    }
                }
            },

            async getNeedData() {
                await this.getAllCountries();
                await this.getAllAirlines();
            },
            async getAllAirlines () {
                try {
                    let response = await Axios.get(`http://${alzuhudLink}:8080/api/airlines/all`, {
                        params: {
                            type: 'all',
                            token: this.token
                        }
                    });
                    this.airlineList = response.data.res.data.map(airline => ({
                        value: airline.id,
                        text: airline.name
                    }));
                    // console.log('air: ', response);
                } catch (e) {
                    console.log(e.response);
                }
            },
            async getAllCountries() {
                try {
                    let resp = await Axios.get(`http://${alzuhudLink}:8080/api/guest/countries`, {
                        params: {
                            token: this.token
                        }
                    });
                    // console.log('countries: ', resp.data);
                    this.countryList = resp.data.res.map( country => ({
                        value: country.id,
                        text: country.name
                    }))
                    // console.log(this.countryList);
                    // this.newFlight
                } catch (e) {
                    console.log(e.response);
                }
            },
            allowedDates (val) {return new Date(val) >= new Date(); },
            selectFile() {
                console.log('s');
                let el = null;
                el = document.getElementById('airline-file-input');
                if (el !== null) {
                    el.click();
                }
            }
        },
        mounted () {
            this.replaceRoute(['Flights']);
            this.$parent.$emit('update route');
            this.getFlights();
            this.changeTab('availFlights');
        },
    }
</script>

<style lang="scss">
    #flights #airlineTable tr .v-data-table__mobile-row:nth-of-type(1) .v-data-table__mobile-row__wrapper {
        display: block !important;
        margin-top: 24px;
    }
    #flights #airlineTable tr .v-data-table__mobile-row:nth-of-type(3) .v-data-table__mobile-row__wrapper {
        display: block !important;
        margin-top: 27px;
    }
    #flights #airlineTable tr .v-data-table__mobile-row:nth-of-type(2) .v-data-table__mobile-row__wrapper {
        margin-top: 37px;
    }
    #flights #airlineTable tr .v-data-table__mobile-row:nth-of-type(4) .v-data-table__mobile-row__wrapper {
        margin-top: 30px;
        margin-bottom: 24px;
    }
</style>
<style lang="scss" scoped>
    #flights{
        padding: 20px 20px;
        .body-1 .v-tab > div
        {
            margin-left: 0 !important;
        }
    }
    .dBlock {
        display: block !important;
    }

    @media screen and (max-width: 960px) {
        #flights{
            margin-top: 73px;
        }
    }
    @media screen and (max-width: 1024px){
        #searchBox {
            margin-right: 15px !important;
        }
    }
</style>
