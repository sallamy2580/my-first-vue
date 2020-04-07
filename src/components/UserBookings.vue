<template>
    <div class="bookings">
        <div class="d-flex flex-column flex-md-row justify-space-between">
            <div class="flex-grow-1">
                <div class="panel-title">{{language === 'ar' ? makeArabic(panelTitle): panelTitle}}</div>
                <AdminPageInfo :adminUser="adminUser" :routes="routes"></AdminPageInfo>
            </div>
            <div class="align-self-end mt-3 mt-md-0 buttons d-flex flex-row justify-space-between" style="width: initial !important;">
                <v-btn class="px-4 px-md-10 mr-4" :class="[$vuetify.breakpoint.smAndDown ? 'caption': '']" :x-large="$vuetify.breakpoint.mdAndUp" large depressed color="primary" rounded @click="$router.push('create-package')">{{language === 'ar'? 'صمم برنامج':'Create Your Package'}}</v-btn>
                <v-btn class="px-6 px-md-10" :class="[$vuetify.breakpoint.smAndDown ? 'caption': '']" :x-large="$vuetify.breakpoint.mdAndUp" large depressed color="primary" rounded>{{language === 'ar'? 'احجز برنامج':'Book a Package'}}</v-btn>
            </div>
        </div>
        <div class="first-row">
            <v-card id="booking-card" style="min-height: initial" class="mt-5">
                <v-card-title class=" d-flex justify-space-between align-center">
                    <div class="title font-weight-regular">
                        My Recent Bookings
                    </div>
                    <v-spacer></v-spacer>
                    <v-text-field
                        outlined
                        label="Search in Name"
                        prepend-inner-icon="mdi-magnify"
                        class="mx-0 mx-md-4 my-3 my-md-0"
                        style="max-width: 300px;"
                        @input="searchBooking"
                        hide-details
                        v-model="search"
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                            :headers="headers"
                            :items="desserts"
                            hide-default-footer
                            class="table"
                            :items-per-page="20"
                            :mobile-breakpoint="mobileBreakPoint"
                            :loading="tableLoading"
                        >

                        <template v-slot:item.action="{item}">
                            <v-icon color="blue" @click="checkTicket(item.id)">mdi-eye</v-icon>
                        </template>
                </v-data-table>
            </v-card>
        </div>
        <v-pagination v-model="page"
            :length="pagesCount"
            circle
            :disabled="pagesCount === 1"
            :total-visible="7"
            class="mt-5"
            @next="changePage($event)"
            @previous="changePage($event)"
            @input="changePage($event)"
        ></v-pagination>
    </div>
</template>

<script lang="ts">
import { PopRoute, AddRoute, ReplaceRoute } from '../../types/store';
import {Vue, Component, Prop} from 'vue-property-decorator';
import {Getter, Mutation, State} from "vuex-class";
import AdminPageInfo from './AdminPageInfo.vue';
import AdminCard from './AdminCard.vue';
import btn from './btn.vue';
import PackageCard from './PackageCard.vue';
import Axios from "axios";
import alzuhudLink, {makeArabic} from "@/components/Functions/Functions";

@Component({
    components: {
        AdminPageInfo,
        AdminCard,
        btn,
        PackageCard
    }
})
export default class UserBookings extends Vue {
    private panelTitle: string;
    @State adminUser: string;
    @State routes: string[];
    @Mutation popRoute: PopRoute;
    @Mutation replaceRoute: ReplaceRoute;
    @Getter token: string;
    @Mutation setBookingId: Function;
    @State language: any;
    tableLoading: boolean = true;
    pagesCount: number = 1;
    page: number = 1;
    search: string = '';

    headers: any[] = [];

    desserts: any[] = [];

    async mounted() {
        this.replaceRoute(['Bookings']);
        this.$parent.$emit('update route');
        this.headers = this.language === 'ar'?  [
            {
                text: 'الاسم',
                align: 'left',
                value: 'name',
            },
            { text: 'التاریخ', value: 'date' },
            { text: 'السعر', value: 'price' },
            { text: 'الرکاب', value: 'passengers' },
            { text: 'OP', value: 'action', sortable: false },
        ]:[
            {
                text: 'Name',
                align: 'left',
                value: 'name',
            },
            { text: 'Date', value: 'date' },
            { text: 'Price', value: 'price' },
            { text: 'Passengers', value: 'passengers' },
            { text: 'OP', value: 'action', sortable: false },
        ];
        try {
            const response = await Axios.get(`http://${alzuhudLink}:8080/api/booking/all`, {
                params: {
                    token: this.token,
                }
            });

            this.pagesCount = response.data.res.last_page;
            this.desserts = response.data.res.data.map((item: any) => ({
              id: item.id,
              name: item.name,
              passengers: (item.num_childs + item.num_adults),
              price: item.total_price,
              date: item.package_id.start_date || '...',
            }));

        } catch (e) {
        } finally {
            this.tableLoading = false;
        }
        // const package = response.data.
    }
    /**
     *
     */
    constructor() {
        super();
        this.panelTitle = 'Bookings';
    }
    beforeDestroy(): void {
        this.popRoute();
        this.$parent.$emit('update route');
    }

    makeArabic(str: string): string {
        return makeArabic(str);
    }

    checkTicket(id: any): void {
        this.setBookingId(id);
        this.$router.push('booking');
    }

    async changePage(e: any) {
        if (e !== undefined) {
            this.tableLoading = true;
            this.desserts = [];
            try {
                const response = await Axios.get(`http://${alzuhudLink}:8080/api/booking/all`, {
                    params: {
                        token: this.token,
                        page: e,
                    }
                });

                this.desserts = response.data.res.data.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    passengers: (item.num_childs + item.num_adults),
                    price: item.total_price,
                    date: item.package_id.start_date || '...',
                }));

            } catch (e) {
            } finally {
                this.tableLoading = false;
            }
        }
    }

    async searchBooking() {
        this.tableLoading = true;
        this.desserts = [];
        try {
            const response = await Axios.get(`http://${alzuhudLink}:8080/api/booking/all`, {
                params: {
                    token: this.token,
                    search: this.search,
                }
            });

            this.desserts = response.data.res.data.map((item: any) => ({
                id: item.id,
                name: item.name,
                passengers: (item.num_childs + item.num_adults),
                price: item.total_price,
                date: item.package_id.start_date || '...',
            }));

        } catch (e) {
        } finally {
            this.tableLoading = false;
        }
    }
}
</script>

<style lang="scss" scoped>

    .panel-title {
        font-size: 24px !important;
        font-weight: bold !important;
        color: black;
        @media screen and (max-width: 960px) {
            font-size: 20px !important;
        }
    }
    .bookings {
        padding-left: 0;
    }
    #booking-card  {
        width: 100% !important;
        margin-left: 0;
        margin-right: 0;
        height: initial !important;
    }


    .buttons {
        width: 500px !important;
    }
</style>
