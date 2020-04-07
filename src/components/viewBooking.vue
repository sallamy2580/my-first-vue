<template>
  <v-app id="booking">
      <div id="FakeTitleContainer">
          <div id="btnsContainer">
              <v-btn class="body-1 px-7 " id="pdfBtn" height="50"  rounded color="#00897B" dark @click="downloadPdf">Download PDF</v-btn>
              <v-btn class="body-1 px-7" height="50" rounded outlined color="#00897B">Message User</v-btn>
              <v-btn class="body-1 px-7" height="50"  rounded outlined color="#FF1744" @click="cancelBooking">Cancel The Order</v-btn>
          </div>
      </div>
      <v-card :loading="mainLoading">
        <v-card-title class="headline font-weight-regular" style="margin-bottom: 35px; margin-left: 10px;">Information</v-card-title>
        <div class="display-none-on-sm container01">
            <p class="font-weight-light body-1 grey--text">Title</p>
            <p class="font-weight-light body-1 grey--text">From</p>
            <p class="font-weight-light body-1 grey--text">To</p>
            <p class="title font-weight-regular black--text">{{bookingData.name}}</p>
            <p class="title font-weight-regular black--text">{{bookingData.startDate}}</p>
            <p class="title font-weight-regular black--text">{{bookingData.endDate}}</p>
        </div>
        <div class="d-sm-none container01">
            <p class="font-weight-light body-1 grey--text">Title</p>
            <p class="title font-weight-regular black--text">{{bookingData.name}}</p>
            <p class="font-weight-light body-1 grey--text">From</p>
            <p class="title font-weight-regular black--text">{{bookingData.startDate}}</p>
            <p class="font-weight-light body-1 grey--text">To</p>
            <p class="title font-weight-regular black--text">{{bookingData.endDate}}</p>
        </div>
        <div class="container00">
            <v-card outlined>
                <div class="container02">
                   <img class="d-none d-md-flex" style="border-radius: 20px 0 0 20px; width: 100%; max-width: 310px; height: 100%;" width="310px" height="210px" :src="hotel.main_image_base64" alt="Hotel Image">
                    <img class="d-none d-sm-flex d-md-none" style="border-radius: 20px 0 0 20px; max-width: 250px; width: 100%; height: 100%;" width="230px" height="250px" :src="hotel.main_image_base64" alt="Hotel Image">
                    <img class="d-sm-none" style="border-radius: 20px 20px 0 0; width: 100%; height: 100%;" width="400" height="280" :src="hotel.main_image_base64" alt="Hotel Image">

                    <div class="container03">
                        <h3>{{hotel.en_name}}</h3>
                        <v-rating background-color="grey lighten-2"
                                  color="yellow darken-1"
                                  empty-icon="mdi-star"
                                  dense
                                  v-model="hotel.accomodation"
                        style="margin-bottom: 15px;"
                        ></v-rating>
                        <div class="container04">
                            <p style="color:grey; font-size:14pt;">Location</p>
                            <div style="overflow:hidden">
                                <h5 style="white-space: nowrap; color:grey; letter-spacing: 10px;">{{dashLine}}</h5>
                            </div>
                            <p style="font-weight:bold; font-size:14pt;">{{hotel.address}}</p>
                        </div>
                        <div style="margin-top: -20px;" class="container04">
                            <p style="color:grey; font-size:14pt;">Price</p>
                            <div style="overflow:hidden">
                                <h5 style="white-space: nowrap; color:grey; letter-spacing: 10px;">{{dashLine}}</h5>
                            </div>
                            <p style="font-weight:bold; font-size:14pt;">${{split(hotel.price)}}</p>
                        </div>
                    </div>
                </div>
            </v-card>
             <v-card v-if="windowSize.width > 600" outlined>
                    <div style="padding: 20px 20px;" class="container04">
                        <img style="grid-column:1/2;" width="50px" height="50px" :src="flight.log_base64" alt="Airline Logo">
                        <div style="display:grid; align-content:center;">
                            <h3>{{flight.name}}</h3>
                            <v-rating background-color="grey lighten-2"
                                      color="yellow darken-1"
                                      empty-icon="mdi-star"
                                      dense
                                      v-model="flight.rate_avg"
                            style=""
                            ></v-rating>
                        </div>
                        <h2 style="align-self:center;">${{split(parseInt(bookingData.price) - parseInt(hotel.price) * parseInt(bookingData.numNights))}}</h2>
                        <v-btn style="align-self:center;" @click="dialog = true" icon color="blue"><v-icon>mdi-pencil</v-icon></v-btn>
                    </div>
                    <div class="container05">
                        <div style="grid-row: 1/3; align-content:center; justify-self:center; display:grid; justify-content:center;">
                            <p style=" color:grey; font-size:14pt; justify-self:center; margin-bottom:-5px;">{{getDay(flight.takeoff_date)}}</p>
                            <p style="color:grey; font-size:14pt;">{{getDate(flight.takeoff_date)}}</p>
                        </div>
                        <div style="grid-row: 1/3;" class="container06">
                            <h2 style="align-self:center; justify-self:center;">{{flight.origin_name}}</h2>
                            <svg style="justify-self: center" xmlns="http://www.w3.org/2000/svg" width="48" height="33.998" viewBox="0 0 48 33.998">
                                <g id="surface1" transform="translate(0 0)">
                                    <path id="Path_221" data-name="Path 221" d="M20.254,8.035a4,4,0,0,0-3.348,1.137L16,10.078,23.422,16.5l8.285-3.289L21.438,8.379A3.941,3.941,0,0,0,20.254,8.035ZM50,10a4.009,4.009,0,0,0-1.812.434L14,24l-3.57-3.145a3.336,3.336,0,0,0-3.7-.48L6,20.742l4.281,8.723A3.983,3.983,0,0,0,15.7,31.617L29.133,26.4,28,42h1.285a4,4,0,0,0,3.762-2.645l6.07-16.836,12.332-4.793c.008,0,.016,0,.023-.008v0A4,4,0,0,0,50,10Z" transform="translate(-6 -8.002)" fill="#9e9e9e"/>
                                </g>
                            </svg>
                            <h2 style="align-self:center; justify-self:center;">{{flight.destination_name}}</h2>
                            <p style="color:grey; font-size:14pt; justify-self:center;">{{flight.takeoff_time}}</p>
                            <div style="overflow:hidden">
                                <h5 class="d-none d-sm-flex" style="white-space: nowrap; color:grey; letter-spacing: 10px;">{{dashLine}}</h5>
                            </div>
                            <p style="color:grey; font-size:14pt; justify-self:center;">{{flight.return_time}}</p>
                        </div>
                        <div style="grid-row: 1/3; align-content:center; justify-self:center; display:grid; justify-content:center;">
                            <p style="color:grey; justify-self:center; font-size:14pt; margin-bottom:-5px;">{{getDay(flight.return_date)}}</p>
                            <p style="color:grey; justify-self:center; font-size:14pt;">{{getDate(flight.return_date)}}</p>
                        </div>
                    </div>
            </v-card>
            <v-card v-else outlined style="display: grid">
                <div style="padding: 20px 20px;" class="container04">
                    <img style="grid-column:1/2;" width="60px" height="60px" :src="flight.log_base64" alt="Airline Logo">
                    <div style="display:grid; align-content:center;">
                        <h3>{{flight.name}}</h3>
                        <v-rating background-color="grey lighten-2"
                                  color="yellow darken-1"
                                  empty-icon="mdi-star"
                                  dense
                                  v-model="flight.rate_avg"
                                  style=""
                        ></v-rating>
                    </div>
                </div>
                    <div class="container06">
                        <h3 style="align-self:center; justify-self:center;">{{flight.origin_name}}</h3>
                        <svg style="align-self:center; justify-self:center;" xmlns="http://www.w3.org/2000/svg" width="48" height="33.998" viewBox="0 0 48 33.998">
                            <g id="surface1" transform="translate(0 0)">
                                <path id="Path_221" data-name="Path 221" d="M20.254,8.035a4,4,0,0,0-3.348,1.137L16,10.078,23.422,16.5l8.285-3.289L21.438,8.379A3.941,3.941,0,0,0,20.254,8.035ZM50,10a4.009,4.009,0,0,0-1.812.434L14,24l-3.57-3.145a3.336,3.336,0,0,0-3.7-.48L6,20.742l4.281,8.723A3.983,3.983,0,0,0,15.7,31.617L29.133,26.4,28,42h1.285a4,4,0,0,0,3.762-2.645l6.07-16.836,12.332-4.793c.008,0,.016,0,.023-.008v0A4,4,0,0,0,50,10Z" transform="translate(-6 -8.002)" fill="#9e9e9e"/>
                            </g>
                        </svg>
                        <h3 style="align-self:center; justify-self:center;">{{flight.destination_name}}</h3>
                        <p style="color:grey; font-size:14pt; justify-self:center; white-space: nowrap;">{{flight.takeoff_time}}</p>
                        <div style="overflow:hidden">
                            <h5 class="d-none d-sm-flex" style="color:grey; letter-spacing: 10px;">{{dashLine}}</h5>
                        </div>
                        <p style="color:grey; font-size:14pt; justify-self:center; white-space: nowrap;">{{flight.return_time}}</p>
                        <div style="grid-row: 3/4; align-content:center; justify-self:center; display:grid; justify-content:center;">
                            <p style=" color:grey; font-size:14pt; justify-self:center; margin-bottom:-5px;">{{getDay(flight.takeoff_date)}}</p>
                            <p style="color:grey; justify-self:center; font-size:14pt;">{{getDate(flight.takeoff_date)}}</p>
                        </div>
                        <div style="grid-row: 3/4; grid-column: 3/4; align-content:center; justify-self:center; display:grid; justify-content:center;">
                            <p style="color:grey; justify-self:center; font-size:14pt; margin-bottom:-5px;">{{getDay(flight.return_date)}}</p>
                            <p style="color:grey; justify-self:center; font-size:14pt;">{{getDate(flight.return_date)}}</p>
                        </div>
                    </div>
                <div style="margin-bottom: 30px; display: grid; grid-template-columns: auto auto;">
                    <h1 style="align-self:center; justify-self: end;">${{split(parseInt(bookingData.price) - parseInt(hotel.price) * parseInt(bookingData.numNights))}}</h1>
                    <v-btn style="align-self:center;" @click="dialog = true" icon color="blue"><v-icon>mdi-pencil</v-icon></v-btn>
                </div>
            </v-card>
                <v-row class="d-none d-sm-flex">
                        <v-col cols="4">
                            <Label title="Name" :titleName="bookingData.user.full_name"></Label>
                        </v-col>
                        <v-col cols="4">
                            <Label title="Email Address" :titleName="bookingData.user.email"></Label>
                        </v-col>
                        <v-col cols="4">
                            <Label title="Phone Number" :titleName="bookingData.user.phone"></Label>
                        </v-col>
                        <v-col cols="4">
                            <Label title="From" :titleName="bookingData.country"></Label>
                        </v-col>
                        <v-col cols="4">
                            <Label title="Number of Nights" :titleName="bookingData.numNights"></Label>
                        </v-col>
                        <v-col cols="4">
                            <Label title="Number of Adults" :titleName="bookingData.numAdults"></Label>
                        </v-col>
                        <v-col cols="4">
                            <Label title="Number of Children" :titleName="bookingData.numChilds"></Label>
                        </v-col>
                        <v-col cols="4">
                            <Label title="Remarks" :titleName="bookingData.remarks"></Label>
                        </v-col>
                </v-row>
                <v-row class="d-sm-none px-2">
                    <v-col cols="12">
                        <Label title="Name" titleName="John Doe"></Label>
                    </v-col>
                    <v-col cols="12">
                        <Label title="Email Address" titleName="info@john.com"></Label>
                    </v-col>
                    <v-col cols="12">
                        <Label title="Phone Number" titleName="+14153265909"></Label>
                    </v-col>
                    <v-col cols="12">
                        <Label title="From" titleName="United States"></Label>
                    </v-col>
                    <v-col cols="12">
                        <Label title="Number of Nights" titleName="14"></Label>
                    </v-col>
                    <v-col cols="12">
                        <Label title="Number of Adults" titleName="2"></Label>
                    </v-col>
                    <v-col cols="12">
                        <Label title="Number of Children" titleName="0"></Label>
                    </v-col>
                    <v-col cols="12">
                        <Label title="Remarks" titleName="This is a Test"></Label>
                    </v-col>
                </v-row>

        </div>
        <template v-if="windowSize.width > 600" v-for="i in bookingData.countPassengers">
                    <v-divider :key="order(i)"></v-divider>
                    <v-card-text class="px-9" :key="order(i)">
                        <v-row>
                            <v-col cols="12" class="title font-weight-regular black--text">{{order(i)}} Person Identification</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <Label title="Name" titleName="John Doe"></Label>
                            </v-col>
                            <v-col cols="4">
                                <Label title="Gender" titleName="Male"></Label>
                            </v-col>
                            <v-col cols="4">
                                <Label title="Date of Birth" titleName="12.12.1975"></Label>
                            </v-col>
                            <v-col md="auto">
                                <Label style="white-space: nowrap" title="Passport" titleName="Passport Picture.jpeg"></Label>
                            </v-col>
                            <v-col>
                                <v-btn style="margin-top:35px; margin-left: 3%;" text large rounded color="#00897B" class="title font-weight-bold">DOWNLOAD</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
        </template>
        <template v-if="windowSize.width <= 600" v-for="i in bookingData.countPassengers">
          <v-divider :key="order(i)"></v-divider>
          <v-card-text class="px-9" :key="order(i)">
              <v-row>
                  <v-col cols="12" class="title font-weight-regular black--text">{{order(i)}} Person Identification</v-col>
              </v-row>
              <v-row>
                  <v-col cols="12">
                      <Label title="Name" titleName="John Doe"></Label>
                  </v-col>
                  <v-col cols="12">
                      <Label title="Gender" titleName="Male"></Label>
                  </v-col>
                  <v-col cols="12">
                      <Label title="Date of Birth" titleName="12.12.1975"></Label>
                  </v-col>
                  <v-col cols="12">
                      <Label title="Passport" titleName="Passport Picture.jpeg"></Label>
                  </v-col>
                  <v-row  class="justify-center">
                          <v-btn text large rounded color="#00897B" class="title font-weight-bold mb-10">DOWNLOAD</v-btn>
                  </v-row>
              </v-row>
          </v-card-text>
        </template>
        <v-card-actions class="headline px-9 pb-7">
              <v-spacer class="d-sm-flex"></v-spacer>
              <div>Total Price:</div>
              <pre>  </pre>
              <div style="font-weight: 600;"><span class="primary--text">${{split(bookingData.price)}}</span>
                  <span class="green--text"> (PAID)</span>
              </div>
              <v-spacer class="d-sm-none"></v-spacer>
        </v-card-actions>
      </v-card>
      <v-dialog v-model="dialog" max-width="300px">
          <v-card>
              <v-card-title>
                  <span class="headline">Edit Flight Price</span>
              </v-card-title>
              <v-card-text>
                  <v-row>
                      <v-col style="margin-bottom: -30px" cols="12">
                          <v-text-field @keyup.enter="saveEdit" :rules="[]" v-model="newPrice" prefix="$" v-mask="mask" outlined label="New Price"></v-text-field>
                      </v-col>
                  </v-row>
              </v-card-text>

              <v-card-actions style="margin-top: -25px">
                  <div class="d-none d-sm-flex flex-grow-1"></div>
                  <div class="d-none d-sm-flex">
                      <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                      <v-btn @click="saveEdit" :disabled="!newPrice" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 mr-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                  </div>
                  <div class="d-sm-none" style="display: grid; justify-content: end; width: 100%; margin-right: 18px">
                      <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                      <v-btn @click="saveEdit" :disabled="!newPrice" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 mr-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                  </div>
              </v-card-actions>
          </v-card>
      </v-dialog>

  </v-app>
</template>

<script>
  import {mapMutations, mapState, mapActions, mapGetters} from 'vuex';
import { consoleInfo } from 'vuetify/src/util/console';
import Axios from 'axios';
import Label from './Label.vue';
  import alzuhudLink from "@/components/Functions/Functions";

    export default {
        components: {
            Label
        },
        data () {
            return {
                mask: '##################################################################################################',
                dialog: false,
                saveLoading: false,
                mainLoading: false,
                bookingData: {
                    id: '',
                    name: '',
                    startDate: '',
                    endDate: '',
                    location: '',
                    price: '',
                    hotelRating: '',
                    origin: '',
                    destination: '',
                    countPassengers: '',
                    packageId: {},
                    user:{},
                    country: '',
                    numNights: '',
                    numAdults: '',
                    numChilds: '',
                    remarks: '',
                    // departureDate: {
                    //     date: 'August 9',
                    //     day: 'Friday'
                    // },
                    // returnDate: {
                    //     date: 'August 17',
                    //     day: 'Saturday'
                    // }
                },
                newPrice: null,
                dashLine: '_',
                windowSize: {
                    width: 0,
                    height: 0
                },
                hotel: {},
                flight: {},
                weekday: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ]
            }
        },
        computed: {
          ...mapState([
              'bookingId',
          ]),
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
            async saveEdit() {
                this.saveLoading = true;
                try {
                    await Axios.post('http://165.22.234.156:8080/api/booking/update', {
                        id: this.bookingId,
                        total_price: parseInt(this.newPrice) + parseInt(this.hotel.price) * parseInt(this.bookingData.numNights),
                        token: this.token
                    });
                    this.mainLoading = true;
                    this.snackIt({message: 'Price Updated successfully', color: 'success', snackbar: true});
                } catch (e) {
                    console.log(e.response);
                    this.snackIt({
                        message: 'An Error Occurred: ' + e.response.data.message,
                        color: 'error',
                        snackbar: true
                    });
                }
                finally {
                    this.saveLoading = false;
                    await this.getBookingData();
                }
            },
            async getBookingData() {
                let bokData = null;
                try {
                    let resp = await Axios.get(`http://${alzuhudLink}:8080/api/booking/all`, {
                        params: {
                            id: this.bookingId,
                            token: this.token
                        }
                    }).finally();
                    bokData = resp.data.res.data;
                    console.log(bokData);

                    this.bookingData.id = bokData[0].id;
                    this.bookingData.name = bokData[0].name;
                    this.bookingData.startDate = bokData[0].package_id.takeoff_date;
                    this.bookingData.endDate = bokData[0].package_id.end_date;
                    // this.bookingData.location = bokData[0];
                    this.bookingData.price = bokData[0].total_price;
                    this.bookingData.countPassengers = bokData[0].num_adults + bokData[0].num_childs;
                    this.bookingData.packageId = bokData[0].package_id;
                    this.bookingData.user= bokData[0].user_id;
                    this.bookingData.country = bokData[0].country_id.name;
                    this.bookingData.numNights = bokData[0].num_nights;
                    this.bookingData.numAdults = bokData[0].num_adults;
                    this.bookingData.numChilds = bokData[0].num_childs;
                    this.bookingData.remarks = bokData[0].remarks;
                    // this.bookingData.hotelRating = bokData[0];
                    // this.bookingData.origin = bokData[0];
                    // this.bookingData.destination = bokData[0];
                    // this.bookingData.departureDate = bokData[0];
                    // this.bookingData.returnDate = bokData[0];

                } catch (e) {
                    this.snackIt({
                        message: 'An Error Occurred: ' + e.response.data.message,
                        color: 'error',
                        snackbar: true
                    });
                }
                await this.getHotelData();
                await this.getFlightData();
                this.mainLoading = false;
            },
            async getHotelData() {
                try {
                    let response2 = await Axios.get(`http://${alzuhudLink}:8080/api/hotels/all`, {
                        params: {
                            token: this.token,
                            id: this.bookingData.packageId.hotel_id.id,
                        }
                    });
                    this.hotel = response2.data.res.data[0];

                } catch (e) {
                    this.snackIt({
                        message: 'An Error Occurred: ' + e.response.data.message,
                        color: 'error',
                        snackbar: true
                    });
                }
            },
            async getFlightData () {
                try {
                    const response3 = await Axios.get(`http://${alzuhudLink}:8080/api/flights/all`, {
                        params: {
                            token: this.token,
                            id: this.bookingData.packageId.airline_id.id,
                        }
                    });
                    this.flight = response3.data.res.data[0];


                } catch (e) {
                    this.snackIt({
                        message: 'An Error Occurred: ' + e.response.data.message,
                        color: 'error',
                        snackbar: true
                    });
                }
            },
            async deleteBooking () {
                if (confirm('Are you sure to cancel this booking?')) {
                    try {
                        await Axios.post(`http://165.22.234.156:8080/api/booking/delete${this.bookingId}`, {
                            params: {
                                token: this.token
                            }
                        });
                        this.mainLoading = true;
                        this.snackIt({message: 'booking canceled successfully', color: 'success', snackbar: true});
                        this.$router.push("/admin/bookings");
                    } catch (e) {
                        console.log(e.response);
                        this.snackIt({
                            message: 'An Error Occurred: ' + e.response.data.message,
                            color: 'error',
                            snackbar: true
                        });
                    } finally {
                        this.saveLoading = false;
                        await this.getBookingData();
                    }
                }
            },
            creatDashedLine(){
                let i = 0;
                while(i <= 4000 ) {
                    this.dashLine += '_';
                    i++;
                }
            },
            order(i){
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
            },
            split(str) {
                let strData = parseFloat(str);
                let data = strData.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                return data.split('.')[0];
            },
            getDay(dateStr) {
                const date = new Date(dateStr).getDay();
                return this.weekday[date];
            },
            getDate(dateStr) {
                return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric'});
            },
            watch: {
            },
            onResize () {
                this.windowSize = { height: document.documentElement.clientHeight, width: document.documentElement.clientWidth }

            },
            async downloadPdf() {
              const response = await Axios.get(`http://${alzuhudLink}:8080/api/pdf/booking/${this.bookingId}`, {
                  params: {
                      token: this.token,
                      id: this.id,
                  }
              });

            },
            async cancelBooking() {
                try {
                    const response = await Axios.post(`http://${alzuhudLink}:8080/api/booking/delete/${this.bookingId}`, {
                        token: this.token,
                        id: this.id,
                    });
                    this.$router.replace('bookings');
                    this.snackIt({
                        message: 'Order cancelled successfully',
                        color: 'success',
                        snackbar: true,
                    })
                } catch (e) {
                    console.log(e.response);
                    this.snackIt({
                        message: 'Failed to cancel order',
                        color: 'error',
                        snackbar: true,
                    })
                }
            }
        },
        async mounted () {
            this.mainLoading = true;
            await this.getBookingData();

            this.changePanelTitle('Booking');
            this.replaceRoute(['Bookings', 'Booking']);
            this.creatDashedLine();

            this.$nextTick(function() {
                window.addEventListener('resize', this.onResize);
                this.onResize();
            })

            this.$parent.$emit('update route');
        },
        destroyed() {
            window.removeEventListener('resize', this.onResize);
        }
    }
</script>

<style lang="scss" scoped>
    #booking{
        padding: 20px 20px;
    }
    .container00{
        padding: 0 25px;
        display: grid;
        grid-row-gap: 40px;
    }
    .container01{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
        padding: 0 25px;
    }
    .container02 {
        display: grid;
        grid-template-columns: auto 1fr;
    }
    .container03{
        padding: 17px 20px 9px 20px;
        display: grid;
    }
    .container04 {
        display: grid;
        grid-template-columns: auto 1fr auto auto;
        grid-column-gap: 10px;
        padding: 10px 0;
    }
    .container05 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
        // grid-column-gap: 10px;
        padding: 15px 0;
    }
    .container06{
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-column-gap: 25px;

    }
    #FakeTitleContainer{
        display: grid;
        position: relative;
        // z-index: +1;
        top: -65px;
        margin-bottom: -40px;
    }
    #btnsContainer{
        grid-column: 2/3;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 15px;
        justify-content: right;
    }


    @media screen and (max-width: 960px) {
        #booking{
            padding: 80px 20px;
        }
    }
    @media screen and (max-width: 600px) {
        #booking{
            padding: 73px 20px;
        }
        #btnsContainer{
            grid-column: 1/4;
            grid-row: 2/3;
            display: grid;
            grid-template-columns: auto auto;
            grid-column-gap: 10px;
            grid-row-gap: 20px;
            justify-content: stretch;
        }
        #pdfBtn{
            grid-column: 1/3;
        }

        .display-none-on-sm *{
            display: none;
        }
        .container01{
            display: grid;
            grid-template-columns: 1fr;
            padding: 0 25px;
        }
        .container02 {
            display: grid;
            grid-template-columns: auto;
        }
        .container06 {
            display: grid;
            grid-template-columns: auto 0.5fr auto;
            padding: 25px 0;
            grid-column-gap: 0;
            justify-content: space-around;
        }
    }
</style>
