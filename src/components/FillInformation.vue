<template>
  <v-card class="select-package " style="border-radius: 20px;">
    <v-card-text class="px-0">
    <v-row class="py-6 px-6 px-md-9">
        <v-col cols="12" md="4">
        <div>
            <v-text-field hide-details  outlined label="Name" v-model="Name"></v-text-field>
        </div>
        </v-col>
        <v-col cols="12" md="4">
        <div>
            <v-text-field hide-details  outlined label="Email Address" readonly v-model="email"></v-text-field>
        </div>
        </v-col>
        <v-col cols="12" md="4">
        <div>
            <v-text-field hide-details  outlined label="Phone Number" @keypress="isNumber($event)" v-model="Phone"></v-text-field>
        </div>
        </v-col>
        <v-col cols="12" md="4">
        <div>
            <v-autocomplete hide-details  outlined label="Country" :items="countries" v-model="selectedCountry"></v-autocomplete>
        </div>
        </v-col>
        <v-col cols="12" md="4">
        <div>
            <v-select hide-details  outlined label="Number of Nights" :items="numNightsList" v-model="NumNights"></v-select>
        </div>
        </v-col>
        <v-col cols="12" md="4">
        <div>
            <v-text-field hide-details  outlined label="Number of Adults" v-model="NumAdults"></v-text-field>
        </div>
        </v-col>
        <v-col cols="12" md="4">
        <div>
            <v-text-field hide-details  outlined label="Number of Children" v-model="NumChildren"></v-text-field>
        </div>
        </v-col>
        <v-col cols="12" md="8">
            <v-textarea auto-grow :rows="$vuetify.breakpoint.mdAndUp ? 1 : 4" hide-details  outlined label="Description" v-model="Remarks" class="textArea"></v-textarea>
<!--            <v-text-field class="d-none d-md-flex" hide-details  outlined label="Remarks"></v-text-field>-->
        </v-col>
    </v-row>
    <v-divider></v-divider>
        <template v-for="(adult, index) in localAdults">
            <v-card flat class="py-6 px-6 px-md-9" :key="index">
                <v-card-title class="title font-weight-regular px-0">{{order(index + 1)}} Adult Information
                </v-card-title>
                <v-card-text class="pa-0">
                    <v-row>
                        <v-col cols="12" md="4">
                            <div>
                                <v-text-field hide-details  outlined label="Full Name" v-model="adult.full_name"></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div>
                                <v-select hide-details  outlined label="Select Gender"
                                          :items="['Male', 'Female', 'Other']" v-model="adult.gender"></v-select>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div>
                                <v-menu
                                    v-model="adult.menu"
                                    persistent
                                    full-width
                                    :close-on-content-click="false"
                                    :min-width="'initial'"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            hide-details
                                            v-model="adult.date"
                                            label="Select Date"
                                            append-icon="mdi-calendar"
                                            readonly
                                            outlined

                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="adult.date" color="primary" @input="adult.menu = false">
<!--                                        <v-spacer></v-spacer>-->
<!--                                        <v-btn text color="primary" @click="adult.menu = false">Cancel</v-btn>-->
<!--                                        <v-btn text color="primary" @click="$refs.menu.save(adult.date)">OK</v-btn>-->
                                    </v-date-picker>
                                </v-menu>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div>
                                <div class="input-title">Upload Passport Picture</div>
                                <v-card flat outlined style="border: 1px solid #bdbdbd;">
                                    <v-card-text>
                                        <v-row align="center" justify="center" justify-md="start">
                                            <v-col class="d-none d-md-flex" md="1"></v-col>
                                            <v-col cols="12" md="4"
                                                   class="d-flex d-md-block justify-center justify-md-start title font-weight-regular overflow-hidden"
                                                   :class="[adult.file !== null ? 'primary--text': '']"
                                                   style="text-overflow: ellipsis;"
                                                   :style="{'white-space': $vuetify.breakpoint.mdAndUp ? 'nowrap': ''}">
                                                {{adult.file !== null ? adult.file.name : 'No File Selected'}}
                                            </v-col>
                                            <v-col cols="4" style="display: none;">
                                                <v-file-input accept="image/*" readonly :id="'file-input-'+index" v-model="adult.file"></v-file-input>
                                            </v-col>
                                            <v-col class="d-flex justify-center justify-md-start" cols="12" md="4"
                                                   justify-center>
                                                <v-btn outlined rounded color="primary" x-large class="px-12"
                                                       @click="selectFile(index)">Select a File
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <v-divider></v-divider>
        </template>
        <template v-for="(child, index) in localChildren">
            <v-card flat class="py-6 px-6 px-md-9">
                <v-card-title class="title font-weight-regular px-0">{{order(index + 1)}} Child Information
                </v-card-title>
                <v-card-text class="pa-0">
                    <v-row>
                        <v-col cols="12" md="4">
                            <div>
                                <v-text-field hide-details  outlined label="Full Name" v-model="child.name"></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div>
                                <v-select hide-details  outlined label="Select Gender"
                                          :items="['Male', 'Female', 'Other']" v-model="child.gender"></v-select>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div>
                                <v-menu
                                    v-model="child.menu"
                                    persistent
                                    full-width
                                    :close-on-content-click="false"
                                    :min-width="'initial'"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            hide-details
                                            v-model="child.date"
                                            label="Select Date"
                                            append-icon="mdi-calendar"
                                            readonly
                                            outlined

                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="child.date" color="primary" @input="child.menu = false">
                                    </v-date-picker>
                                </v-menu>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div>
                                <div class="input-title">Upload Passport Picture</div>
                                <v-card flat outlined style="border: 1px solid #bdbdbd;">
                                    <v-card-text>
                                        <v-row align="center" justify="center" justify-md="start">
                                            <v-col class="d-none d-md-flex" md="1"></v-col>
                                            <v-col cols="12" md="4"
                                                   class="d-flex d-md-block justify-center justify-md-start title font-weight-regular overflow-hidden"
                                                   style="text-overflow: ellipsis;"
                                                   :class="[child.file !== null ? 'primary--text': '']"
                                                   :style="{'white-space': $vuetify.breakpoint.mdAndUp ? 'nowrap': ''}">
                                                {{child.file !== null ? child.file.name : 'No File Selected'}}
                                            </v-col>
                                            <v-col cols="4" style="display: none;">
                                                <v-file-input readonly :id="'file-input-'+(index+numAdults+1)" v-model="child.file"></v-file-input>
                                            </v-col>
                                            <v-col class="d-flex justify-center justify-md-start" cols="12" md="4"
                                                   justify-center>
                                                <v-btn outlined rounded color="primary" x-large class="px-12"
                                                       @click="selectFile(index + numAdults+1)">Select a File
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <v-divider></v-divider>
        </template>
    </v-card-text>
    <v-card-actions class="justify-center justify-md-end px-9 pb-9">
        <div class="headline">Total Price: <span class="primary--text" style="font-weight: 600;">${{!isPriceApplied ? split(totalPrice || 0): 'Pending'}}</span></div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import {Getter, Mutation, State} from "vuex-class";
import { ReplaceRoute } from '../../types/store';
import Axios from "axios";
import alzuhudLink from "@/components/Functions/Functions";

@Component({
    data: () => ({
        date: '',
        date2: '',
        // files: null
    })
})
export default class FillInformation extends Vue {
    menu: boolean = false;
    menu2: boolean = false;
    // @ts-ignore
    file: File = null;
    // @ts-ignore
    file2: File = null;
    @Mutation replaceRoute: ReplaceRoute;
    @Mutation setPage: Function;
    @State numAdults: any;
    @State numChildren: any;
    @State numNights: any;
    @State remarks: any;
    @State countries: any[];
    @Mutation setNumAdults: Function;
    @Mutation setNumChildren: Function;
    @Mutation setNumNights: Function;
    @Mutation setRemarks: Function;
    @Getter totalPrice: any;
    @State adults: any[];
    @State children: any[];
    @State country: any;
    @Mutation setAdults: Function;
    @Mutation setChildren: Function;
    @Mutation setCountry: Function;
    numNightsList: number[] = [];
    localAdults: any[] = [];
    localChildren: any[] = [];
    email: string = '';
    @State bookingName: string;
    @State bookingPhone: string;
    @Mutation setBookingName: Function;
    @Mutation setBookingPhone: Function;
    @Getter token: string;
    @State isPriceApplied: any;
    @Watch('localChildren')
    updateChildren() {
        this.setChildren(this.localChildren);
    }

    @Watch('localAdults')
    updateAdults() {
        this.setAdults(this.localAdults);
    }

    allowedDates (val: any) {
        return new Date(val) <= new Date();
    };

    async mounted() {
        this.replaceRoute(['Booking', 'Reserve', 'Create Package', 'Information']);
        this.setPage(2);
        this.numNightsList = new Array(20).fill(0).map((item, index) => index + 1);
        // this.setNumAdults(1);
        // this.setNumChildren(0);
        if (this.numAdults !== 0) {
            for (let i = 0; i < this.numAdults; i++) {
                this.localAdults.push(this.adults[i]);
            }
        } else {
            this.setNumAdults(1);
            this.localAdults.push({
                full_name: '',
                file: null,
                gender: '',
                date: '',
                menu: false,
            })
        }

        for (let i = 0; i < this.numChildren; i++) {
            this.localChildren.push(this.children[i]);
        }

        try {
            const response = await Axios.get(`http://${alzuhudLink}:8080/api/auth/me`, {
                params: {
                    token: this.token,
                }
            })

            this.Name = response.data.full_name;
            this.Phone = response.data.phone;
            this.email = response.data.email;
        } catch(e) {

        }

        // setInterval(() => {
        //     this.setAdults(this.localAdults);
        // }, 0);
        //
        // setInterval(() => {
        //     this.setChildren(this.localChildren);
        // }, 0);
    }

    split(str: string): string {
        let strData = parseFloat(str);
        let data = strData.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return data.split('.')[0];
    }

    private get selectedCountry(): any {
        return this.country;
    }

    private set selectedCountry(val: any) {
        this.setCountry(val);
    }

    get NumNights(): any {
        return this.numNights;
    }
    set NumNights(val: any) {
        this.setNumNights(val);
    }
    get NumAdults(): any {
        return this.numAdults;
    }
    set NumAdults(val: any) {
        if (0 < val && val <= 20) {
            if (val > this.numAdults) {
                for (let i = 0; i < Math.abs(val - this.numAdults); i++) {
                    this.localAdults.push({
                        full_name: '',
                        file: null,
                        gender: '',
                        date: '',
                        menu: false,
                    });
                }
            } else {
                for (let i = 0; i < Math.abs(val - this.numAdults); i++) {
                    this.localAdults.pop();
                }
            }
            this.setNumAdults(parseInt(val));
        }
        else {
            const val1 = this.numAdults;
            this.setNumAdults(0);
            setTimeout(() => {
                this.setNumAdults(val1);
            }, 10);
        }
        this.$forceUpdate();
    }

    get NumChildren(): any {
        return this.numChildren;
    }
    set NumChildren(val: any) {
        if (0 <= val && val <= 20) {
            if (val > this.numChildren) {
                for (let i = 0; i < Math.abs(parseInt(val) - this.numChildren); i++) {
                    this.localChildren.push({
                        full_name: '',
                        file: null,
                        gender: '',
                        date: '',
                        menu: false,
                    });
                }
            } else {
                for (let i = 0; i < Math.abs(parseInt(val) - this.numChildren); i++) {
                    this.localChildren.pop();
                }
            }
            this.setNumChildren(parseInt(val));
        }
        else {
            const val1 = this.numAdults;
            this.setNumChildren(0);
            setTimeout(() => {
                this.setNumChildren(val1);
            }, 10);
        }
        this.$forceUpdate();
    }

    get Remarks(): any {
        return this.remarks;
    }
    set Remarks(val: any) {
        this.setRemarks(val);
    }

    selectFile(num: number): void {
        let el: HTMLElement | null = null;
        el = document.getElementById(`file-input-${num}`);
        if (el !== null) {
            el.click();
        }
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

    get Name(): any {
        return this.bookingName;
    }
    set Name(val: any) {
        this.setBookingName(val);
    }

    get Phone(): any {
        return this.bookingPhone;
    }
    set Phone(val: any) {
        this.setBookingPhone(val);
    }

    isNumber(evt: Event | undefined) {
        evt = (evt) ? evt : window.event;
        // @ts-ignore
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            // @ts-ignore
            evt.preventDefault();
        } else {
            return true;
        }
    }

    beforeDestroy() {
        this.setAdults(this.localAdults);
        this.setChildren(this.localChildren);
    }
}
</script>

<style lang="scss">
    .textArea {
        textarea {
            margin-top: 0 !important;
        }
    }
</style>
