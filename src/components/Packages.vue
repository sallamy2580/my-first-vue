<template>
  <v-app id="packages">
      <v-card>
          <v-card-title class="d-none d-md-flex headline" style="padding: 25px 35px 0px 35px;">Packages List
          <v-spacer></v-spacer>
          <v-text-field
                  outlined
                  label="Search In Name"
                  prepend-inner-icon="mdi-magnify"
                  class="mx-0 mx-md-2 my-3 my-md-0"
                  style="max-width: 300px;"
                  @input="searchInPackage"
                  hide-details
          ></v-text-field>
          </v-card-title>
          <v-card-title class="d-md-none title mr-7 font-weight-regular" style="padding: 25px 35px 0px 35px;">Packages List
          <v-spacer></v-spacer>
          <v-text-field
                  outlined
                  label="Search In Name"
                  prepend-inner-icon="mdi-magnify"
                  class="mx-0 mx-md-4 my-3 my-md-0"
                  style="max-width: 300px;"
                  @input="searchInPackage"
                  hide-details
          ></v-text-field>
          </v-card-title>
        <v-data-table
            :headers="headers"
            :items="Packages"
            items-per-page="20"
            :page.sync="page"
            :loading = "tableLoading"
            hide-default-footer
            class="table"
            :mobile-breakpoint="mobileBreakPoint"
        >

        <template v-slot:item.action="{ item }">
            <v-icon
                color="blue"
                class="mr-2"
                @click="editPackage(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                color="red"
                class="mr-2"
                @click="deletePackage(item.id)"
            >
                mdi-delete
            </v-icon>
        </template>
        </v-data-table>
      </v-card>
      <v-pagination v-model="page"
                    :length="pagesCount"
                    circle
                    :disabled="pagesCount === 1"
                    :total-visible="7"
                    class="mt-4"
                    @next="changePage($event)"
                    @previous="changePage($event)"
                    @input="changePage($event)"
      ></v-pagination>
      <v-dialog v-model="editPackageDialog" max-width="1200px">
          <v-card :loading="dialogLoading">
              <v-card-title>
                  <span class="headline">Edit Package</span>
              </v-card-title>
              <v-form @submit="saveEdit">
                  <v-card-text>
                      <v-row>
                          <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                              <v-text-field :rules="[rules.required]" v-model="editedPackage.name" outlined label="Name"></v-text-field>
                          </v-col>
                          <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                              <v-autocomplete :rules="[rules.required]" v-model="editedPackage.airlineId" :items="airlineList" label="Airline" outlined></v-autocomplete>
                          </v-col>
                          <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                              <v-autocomplete :rules="[rules.required]" v-model="editedPackage.hotelId" :items="hotelList" label="Hotel" outlined></v-autocomplete>
                          </v-col>
                          <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                              <v-text-field :rules="[rules.required]" v-model="editedPackage.originalPrice" outlined label="Price" prefix="$" mask="##"></v-text-field>
                          </v-col>
                          <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                              <v-select :rules="[rules.required]" v-model="editedPackage.status" :items="packStatusList" label="Status" class="text-capitalize" outlined></v-select>
                          </v-col>
                          <v-col style="margin-bottom: -20px" cols="12" sm="6" md="4">
                              <v-text-field :rules="[rules.required]" v-model="editedPackage.packCode" outlined label="Package Code"></v-text-field>
                          </v-col>
                      </v-row>
                  </v-card-text>

                  <v-card-actions style="margin-top: -25px" >
                      <div class="d-none d-sm-flex flex-grow-1"></div>
                      <div class="d-none d-sm-flex">
                          <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                          <v-btn type="submit" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 mr-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                      </div>
                      <div class="d-sm-none" style="display: grid; justify-content: end; width: 100%; margin-right: 18px">
                          <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                          <v-btn type="submit" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 ml-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                      </div>
                  </v-card-actions>
              </v-form>
          </v-card>
      </v-dialog>
  </v-app>
</template>

<script>
  import {mapGetters, mapMutations, mapState, mapActions} from 'vuex';
import Axios from 'axios';
  import alzuhudLink from "@/components/Functions/Functions";

    export default {
        data () {
            return {
                headers: [
                {
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Package Code', value: 'packCode' },
                // { text: 'Type', value: 'type' },
                { text: 'Hotel', value: 'hotel' },
                { text: 'Airline', value: 'airline' },
                { text: 'Price', value: 'price' },
                { text: 'Status', value: 'status' },
                { text: 'OP', value: 'action', sortable: false, align: 'center' }
                ],
                Packages: [],
                page: 1,
                tableLoading: false,
                pagesCount: null,
                editPackageDialog: false,

                editedPackage: {
                    id: null,
                    name: null,
                    type: null,
                    airlineId: null,
                    hotelId: null,
                    originalPrice: null,
                    status: null,
                    packCode: null
                },
                hotelList: [],
                airlineList: [],
                packStatusList: [{text: 'Active', value: 1}, {text: 'Deactive', value: 0}, {text: 'Expired', value: 3}, {text: 'Banned', value: 2}, {text: 'Removed', value: 4}],
                rules: {
                    required: value => !!value || 'Required',
                },
                dialogLoading: false,
                saveLoading: false,
            }
        },
        computed: {
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
            async searchInPackage (search) {
                if (search !== undefined || null) {
                    this.tableLoading = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/packages/all`, {
                            params: {
                                search: search,
                                token: this.token
                            }}).finally(() => this.tableLoading = false);
                        let packagesData = response.data.res.data;
                        this.pagesCount = response.data.res.last_page;
                        this.Packages= packagesData.map( pgk => ({
                            id: pgk.id,
                            name: pgk.name,
                            packCode: pgk.code !== null ? pgk.code : 'Not Set!',
                            // type: typeof pgk.type === ,
                            hotel: pgk.hotel_id !== null ? pgk.hotel_id.en_name : 'Unknown',
                            airline: pgk.airline_id !== null ? pgk.airline_id.airline_id.name : 'Unknown',
                            airlineId: pgk.airline_id !== null ?  pgk.airline_id.id : 'Unknown',
                            hotelId:  pgk.hotel_id !== null ? pgk.hotel_id.id : 'Unknown',
                            originalPrice: pgk.price,
                            price: '$' + this.split(pgk.price),
                            status: pgk.status,
                            /*lastAct: new Date(user.updated_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })*/
                        }));
                    } catch (e) {
                        console.log(e);
                        this.snackIt({message: 'An error occurred while getting packages data ', color: 'error', snackbar: true});
                    }
                }
            },

            async getAllPackages () {
                this.tableLoading = true;
                try {
                    let response = await Axios.get(`http://${alzuhudLink}:8080/api/packages/all`, {
                        params: {
                            page: this.page,
                            token: this.token
                        }}).finally(() => this.tableLoading = false);
                    let packagesData = response.data.res.data;
                    this.pagesCount = response.data.res.last_page;
                    this.Packages= packagesData.map( pgk => ({
                        id: pgk.id,
                        name: pgk.name,
                        packCode: pgk.code !== null ? pgk.code : 'Not Set!',
                        // type: typeof pgk.type === ,
                        hotel: pgk.hotel_id !== null ? pgk.hotel_id.en_name : 'Unknown',
                        airline: pgk.airline_id !== null ? pgk.airline_id.airline_id.name : 'Unknown',
                        airlineId: pgk.airline_id !== null ?  pgk.airline_id.id : 'Unknown',
                        hotelId:  pgk.hotel_id !== null ? pgk.hotel_id.id : 'Unknown',
                        originalPrice: pgk.price,
                        price: '$' + this.split(pgk.price),
                        status: pgk.status,
                        /*lastAct: new Date(user.updated_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        })*/
                    }));
                } catch (e) {
                    console.log(e);
                    this.snackIt({message: 'An error occurred while getting packages data ', color: 'error', snackbar: true});
                }
            },
            split(str) {
                let strData = parseFloat(str);
                let data = strData.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                return data.split('.')[0];
            },
            async editPackage (item) {
                try {
                    this.editedPackage = [];
                    this.editPackageDialog = true;
                    this.dialogLoading = true;
                    await this.getAllHotels();
                    await this.getAllAirlines();
                    this.editedPackage = Object.assign(this.editedPackage, item);
                    // this.editedPackage.price = this.editedPackage.price.slice(1);
                    switch (this.editedPackage.status) {
                        case 'active' :
                            this.editedPackage.status = 1;
                            break;
                        case 'deactive' :
                            this.editedPackage.status = 0;
                            break;
                        case 'expired' :
                            this.editedPackage.status = 2;
                            break;
                        case 'banned' :
                            this.editedPackage.status = 3;
                            break;
                        case 'removed' :
                            this.editedPackage.status = 4;
                            break;
                    }
                } catch (e) {
                    console.log(e);
                }
                finally {
                    this.dialogLoading = false;
                }
            },
            async deletePackage (id) {
                if (confirm('Are you sure to close this package?')) {
                    this.tableLoading = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/packages/delete/${id}`, {
                            params: {
                                token: this.token
                            }
                        });
                        this.snackIt({message: 'Package deleted', color: 'success', snackbar: true});
                    } catch (e) {
                        this.snackIt({
                            message: 'An error occurred while deleting package',
                            color: 'error',
                            snackbar: true
                        });
                    } finally {
                        this.tableLoading = false;
                        this.getAllPackages();
                    }
                }
            },

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
                    // console.log('air: ', response);
                } catch (e) {
                    console.log(e.response);
                }
            },
            async saveEdit (e) {
                e.preventDefault();
                this.saveLoading = true;
                try {
                    await Axios.post(`http://${alzuhudLink}:8080/api/packages/update`, {
                        id: this.editedPackage.id,
                        airline_id: this.editedPackage.airlineId,
                        hotel_id: this.editedPackage.hotelId,
                        name: this.editedPackage.name,
                        price: this.editedPackage.originalPrice,
                        status: this.editedPackage.status,
                        code: this.editedPackage.packCode,
                        // start_date: this.newPackage.
                        // end_date: this.newPackage.
                        token: this.token,
                        // id
                        // airline_id
                        // hotel_id
                        // name
                        // price
                        // status
                        // code
                    });
                    this.snackIt({message: 'Package updated', color: 'success', snackbar: true});
                    this.getAllPackages();
                } catch (e) {
                    console.log(e.response);
                    this.snackIt({
                        message: 'An error occurred while updating package',
                        color: 'error',
                        snackbar: true
                    });
                }
                finally {
                    this.saveLoading = false;
                }
            },
            async changePage(e) {
                if (e !== undefined) {
                    this.Packages = [];
                    this.tableLoading = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/packages/all`, {
                            params: {
                                page: e,
                                token: this.token
                            }}).finally(() => this.tableLoading = false);
                        this.pagesCount = response.data.res.last_page;
                        let packagesData = response.data.res.data;
                        this.Packages= packagesData.map( pgk => ({
                            id: pgk.id,
                            name: pgk.name,
                            packCode: pgk.code !== null ? pgk.code : 'Not Set!',
                            // type: typeof pgk.type === ,
                            hotel: typeof pgk.hotel_id === "object" ? pgk.hotel_id.en_name : 'Unknown',
                            airline: typeof pgk.airline_id === "object" ? pgk.airline_id.name : 'Unknown',
                            airlineId: pgk.airline_id.id,
                            hotelId: pgk.hotel_id.id,
                            price: '$' + this.split(pgk.price),
                            status: pgk.status,
                            /*lastAct: new Date(user.updated_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })*/
                        }));
                    } catch (e) {
                        console.log(e.response);
                        this.snackIt({message: 'An error occurred while getting packages data ', color: 'error', snackbar: true});
                    }
                }
            }
        },
        mounted () {
            this.replaceRoute(['Packages']);
            this.$parent.$emit('update route');
            this.getAllPackages();
        }
    }
</script>

<style lang="scss" scoped>
    #packages{
        padding: 20px 20px;
    }
    @media screen and (max-width: 960px) {
        #packages{
            margin-top: 73px;
        }
    }
</style>
