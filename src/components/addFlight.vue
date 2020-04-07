<template>
    <v-app id="addFlight">
        <v-card  :loading="mainLoading" style="padding: 0 15px;">
            <v-card-title class="title font-weight-regular">Flight Information</v-card-title>
            <v-form @submit="addFlight">
                <div id="container00">
                    <v-autocomplete :rules="[rules.required]" v-model="newFlight.airlineId" :items="airlineList" label="Airline" outlined></v-autocomplete>
                    <v-dialog
                            ref="dialog"
                            v-model="dateMenu"
                            :return-value.sync="newFlight.takeOffDate"
                            persistent
                            full-width
                            width="290px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                    hide-details
                                    v-model="newFlight.takeOffDate"
                                    label="Departure Date"
                                    append-icon="mdi-calendar"
                                    readonly
                                    outlined
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="newFlight.takeOffDate" scrollable color="primary" :allowed-dates="allowedDates">
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="dateMenu = false">Cancel</v-btn>
                            <v-btn text color="primary" @click="$refs.dialog.save(newFlight.takeOffDate)">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>
                    <v-dialog
                            ref="dialog2"
                            v-model="dateMenu2"
                            :return-value.sync="newFlight.returnDate"
                            persistent
                            full-width
                            width="290px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                    hide-details
                                    v-model="newFlight.returnDate"
                                    label="Return Date"
                                    append-icon="mdi-calendar"
                                    readonly
                                    outlined
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="newFlight.returnDate" scrollable color="primary" :allowed-dates="allowedDates" :min="newFlight.takeOffDate">
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="dateMenu2 = false">Cancel</v-btn>
                            <v-btn text color="primary" @click="$refs.dialog2.save(newFlight.returnDate)">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>

                    <v-text-field :rules="[rules.required]" v-model="newFlight.seat" outlined label="Seat Availability Number"></v-text-field>
                    <v-text-field :rules="[rules.required]" v-model="newFlight.price" prefix="$"  outlined label="Price"></v-text-field>
                    <v-autocomplete :rules="[rules.required]" v-model="newFlight.FlightOriginCountryId" :items="countryList" label="From" outlined></v-autocomplete>

                </div>
                <div id="btn-container">
                    <v-btn type="submit" :loading="addLoading" max-width="150" class="body-1 px-12" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;   ">Add Flight</v-btn>
                </div>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
    import {mapMutations, mapActions, mapState, mapGetters} from 'vuex';
    import Axios from 'axios';
    import alzuhudLink from "@/components/Functions/Functions";

    export default {
        data () {
            return {
                dateMenu: false,
                dateMenu2: false,
                newFlight: {
                    name: null,
                    takeOffDate: null,
                    returnDate: null,
                    seat: null,
                    FlightOriginCountryId: null,
                    airlineId: null,
                    price: null,
                },
                countryList: [],
                airlineList: [],
                addLoading: false,
                // AgentStatusList: [{text: 'active', value: 1}, {text: 'inactive', value: 2}, {text: 'removed', value: 3}, {text: 'banned', value: 4}],
                rules: {
                    required: value => !!value || 'Required'
                },
                mainLoading: false
            }
        },
        computed: {
            ...mapGetters([
                'token'
            ])
        },
        methods: {
            ...mapMutations([
                'replaceRoute',
                'changePanelTitle'
            ]),
            ...mapActions([
                'snackIt'
            ]),
            async addFlight (e) {
                e.preventDefault();
                this.addLoading = true;
                try {
                    console.log('new f: ', this.newFlight);
                    let resp = await Axios.post(`http://${alzuhudLink}:8080/api/flights/add`, {
                        airline_id: this.newFlight.airlineId,
                        origin_id: this.newFlight.FlightOriginCountryId,
                        takeoff_date: this.newFlight.takeOffDate,
                        return_date: this.newFlight.returnDate,
                        price: this.newFlight.price,
                        seat_availability: this.newFlight.seat,
                        token: this.token,
                    });

                    this.snackIt({message: 'Flight added successfully', color: 'success', snackbar: true});
                } catch (e) {
                    this.snackIt({
                        message: 'An error occurred! ' + e.response.data.error,
                        color: 'error',
                        snackbar: true
                    });
                }
                finally {
                    this.addLoading = false;
                }
            },
            async getNeedData() {
                this.mainLoading = true;
                await this.getAllCountries();
                await this.getAllAirlines();
                this.mainLoading = false;
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
                    console.log('air: ', response);
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
                    console.log('countries: ', resp.data);
                    this.countryList = resp.data.res.map( country => ({
                        value: country.id,
                        text: country.name
                    }))
                    console.log(this.countryList);
                    // this.newFlight
                } catch (e) {
                    console.log(e.response);
                }
            },
            allowedDates (val) {return new Date(val) >= new Date(); }
        },
        mounted () {
            this.getNeedData();
            this.replaceRoute(['Flights','New Flight']);
            this.$parent.$emit('update route');
        }
    }
</script>

<style lang="scss" scoped>
    #addFlight{
        padding: 10px 20px;
    }
    #container00{
        padding: 15px 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 25px;
    }
    #btn-container{
        margin: 0 20px 25px 0;
        display: grid;
        grid-template-columns: auto;
    }

    @media screen and (max-width: 600px){
        #container00{
            padding: 15px 20px;
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 25px;
        }
    }
</style>
