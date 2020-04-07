<template>
  <v-app id="addPackage">
      <v-card style="padding: 0 15px;">
        <v-card-title style="font-size:14pt; margin-bottom: 10px; ">Package Information</v-card-title>
        <v-form @submit="addPackage">
            <div id="container00">
                <v-text-field :rules="[rules.required]" v-model="newPackage.name" outlined label="Name"></v-text-field>
                <!--            <v-select :rules="[rules.required]" v-model="newPackage.type" :items="typeList" label="Type" outlined></v-select>-->
                <v-autocomplete :rules="[rules.required]" v-model="newPackage.airlineId" :items="airlineList" label="Airline" outlined></v-autocomplete>
                <v-autocomplete :rules="[rules.required]" v-model="newPackage.hotelId" :items="hotelList" label="Hotel" outlined></v-autocomplete>
                <v-text-field :rules="[rules.required]" v-model="newPackage.price" outlined label="Price" prefix="$" mask="##"></v-text-field>
                <v-select :rules="[rules.required]" v-model="newPackage.status" :items="packStatusList" label="Status" class="text-capitalize" outlined></v-select>
                <v-text-field :rules="[rules.required]" v-model="newPackage.packCode" outlined label="Package Code"></v-text-field>
            </div>
            <div id="btn-container">
                <v-btn type="submit" :loading="addLoading"  max-width="150" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important; font-weight:bold;">Add Package</v-btn>
            </div>
        </v-form>
      </v-card>
  </v-app>
</template>

<script>
  import {mapGetters, mapMutations, mapState, mapActions} from 'vuex';
import Axios from 'axios';
  import alzuhudLink from "@/components/Functions/Functions";
    export default {
        data () {
            return {
                newPackage: {
                    name: null,
                    type: null,
                    airlineId: null,
                    hotelId: null,
                    price: null,
                    status: null,
                    packCode: null
                },
                hotelList: [],
                airlineList: [],
                packStatusList: [{text: 'Active', value: 1}, {text: 'Deactive', value: 0}, {text: 'Expired', value: 3}, {text: 'Banned', value: 2}, {text: 'Removed', value: 4}],
                rules: {
                    required: value => !!value || 'Required',
                },
                addLoading: false,
            }
        },
        computed: {
            ...mapState([
                'userId'
            ]),
            ...mapGetters([
                'token'
            ])
        },
        methods: {
            ...mapMutations([
                'replaceRoute'
            ]),
            ...mapActions([
                'snackIt'
            ]),
            async getAllHotels () {
                try {
                    let response = await Axios.get(`http://${alzuhudLink}:8080/api/hotels/all`, {
                        params: {
                            type: 'all',
                            token: this.token
                        }
                    });
                    this.hotelList = response.data.res.data.map(hotel => ({
                        value: hotel.id,
                        text: hotel.en_name
                    }));
                    // console.log(response);
                } catch (e) {
                    console.log(e.response);
                    this.snackIt({
                        message: 'An error occurred while getting hotels data ',
                        color: 'error',
                        snackbar: true
                    });
                }
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

            async addPackage (e) {
                e.preventDefault();
                this.addLoading= true;
                try {
                    await Axios.post(`http://${alzuhudLink}:8080/api/packages/add`, {
                        creator: this.userId,
                        airline_id: this.newPackage.airlineId,
                        hotel_id: this.newPackage.hotelId,
                        name: this.newPackage.name,
                        price: this.newPackage.price,
                        status: this.newPackage.status,
                        code: this.newPackage.packCode,
                        // start_date: this.newPackage.
                        // end_date: this.newPackage.
                        token: this.token
                    });
                    this.snackIt({
                        message: 'package added successfully',
                        color: 'success',
                        snackbar: true
                    });
                } catch (e) {
                    console.log(e);
                    this.snackIt({
                        message: 'An error occurred!',
                        color: 'error',
                        snackbar: true
                    });
                }
                finally {
                    this.addLoading = false;
                }
            }

        },
        mounted () {
            this.replaceRoute(['Packages','Add Package']);
            this.$parent.$emit('update route');
            this.getAllHotels();
            this.getAllAirlines();
        }
    }
</script>

<style lang="scss" scoped>
    #addPackage{
        padding: 20px 20px;
    }
    #container00{
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 25px;
    }
    #btn-container{
        margin: 5px 20px 25px 0;
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
