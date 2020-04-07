<template>
    <v-app id="addFlight">
        <v-card  :loading="mainLoading" style="padding: 0 15px;">
            <v-card-title class="title font-weight-regular">Airline Information</v-card-title>
            <v-form @submit="addAirline">
                <div id="container00">
                    <v-text-field :rules="[rules.required]" v-model="airline.name" outlined label="Name"></v-text-field>
                    <v-autocomplete :rules="[rules.required]" v-model="airline.countryId" :items="countryList" label="From" outlined></v-autocomplete>
                    <v-select  outlined label="Ratings" :items="[1,2,3,4,5]" v-model="airline.rating" clearable>
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

                    <div class="input-title" style="grid-column: 1/4;">Upload Airline Logo</div>
                    <v-card flat outlined style="grid-column: 1/4; border: 1px solid #bdbdbd; margin-bottom: 20px;">
                        <v-card-text>
                            <v-row align="center" justify="center" justify-md="start">
                                <v-col class="d-none d-md-flex" md="1"></v-col>
                                <v-col cols="12" md="4"
                                       class="d-flex d-md-block justify-center justify-md-start title font-weight-regular overflow-hidden"
                                       style="text-overflow: ellipsis;"
                                       :class="[airline.logo !== null ? 'primary--text': '']"
                                       :style="{'white-space': $vuetify.breakpoint.mdAndUp ? 'nowrap': ''}">
                                    {{airline.logo !== null ? airline.logo.name : 'No File Selected'}}
                                </v-col>
                                <v-col cols="4" style="display: none;">
                                    <v-file-input readonly id="airline-file-input" v-model="airline.logo"></v-file-input>
                                </v-col>
                                <v-col class="d-flex justify-center justify-md-start" cols="12" md="4"
                                       justify-center>
                                    <v-btn outlined rounded color="primary" x-large class="px-12"
                                           @click="selectFile()">Select a File
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>

                </div>
                <div id="btn-container">
                    <v-btn type="submit" :loading="addLoading" max-width="150" class="body-1 px-12" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;   ">Add Airline</v-btn>
                </div>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
    import {mapMutations, mapActions, mapState, mapGetters} from 'vuex';
    import alzuhudLink, {toBase64} from "@/components/Functions/Functions";
    import Axios from 'axios';

    export default {
        data () {
            return {
                dateMenu: false,
                airline: {
                    name: null,
                    rating: null,
                    countryId: null,
                    logo: null,
                },
                countryList: [],
                addLoading: false,
                rules: {
                    required: value => !!value || 'Required',
                    passMin:  pass => {
                        const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                        return passPattern.test(pass) || 'At least 8 character and at least one letter and one number'
                    },
                    confirmedPass: cPass => cPass === this.newAgent.password || 'Confirm password Not match',
                    email: e => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(e) || 'Enter a valid e-mail address.'
                    }
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
            async addAirline (e) {
                e.preventDefault();
                this.addLoading = true;
                let logo = !!this.airline.logo ? await toBase64(this.airline.logo): undefined;
                try {
                    console.log('new f: ', this.airline);
                    let resp = await Axios.post(`http://${alzuhudLink}:8080/api/airlines/add`, {
                        country_id: this.airline.countryId,
                        name: this.airline.name,
                        logo_base64: logo,
                        rate_avg: this.airline.rating,
                        token: this.token,
                    });
                    this.snackIt({message: 'Airline added successfully', color: 'success', snackbar: true});
                } catch (e) {
                    console.log(e.response);
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
            async getAllCountries() {
                this.mainLoading = true;
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
                    }));
                    console.log(this.countryList);
                    // this.newFlight
                } catch (e) {
                    this.snackIt({
                        message: 'An error occurred! ' + e.response.data.error,
                        color: 'error',
                        snackbar: true
                    });
                }
                    this.mainLoading = false;
            },
            selectFile() {
                let el = null;
                el = document.getElementById('airline-file-input');
                if (el !== null) {
                    el.click();
                }
            }
        },
        mounted () {
            this.getAllCountries();
            this.replaceRoute(['Flights','New Airline']);
            this.$parent.$emit('update route');
        }
    }
</script>

<style lang="scss" scoped>
    #addFlight{
        padding: 20px 20px;
    }
    #container00{
        padding: 15px 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 25px;
        .v-sheet {
            border-radius: 5px !important;
        }
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
