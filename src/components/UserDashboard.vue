<template>
    <div class="dashboard">
        <div class="panel-title" :style="{'direction': language === 'ar'? 'rtl':''}">{{language === 'ar' ? makeArabic(panelTitle): panelTitle}}</div>
        <AdminPageInfo :adminUser="adminUser" :routes="routes"></AdminPageInfo>
        <!-- <div class="first-row"> -->
        <v-row class="first-row">        
            <v-col cols="12" md="6">
                <AdminCard style="margin-left: 0; margin-right: 0; margin-bottom: 0;" :action="language === 'ar'? 'مزید': 'More'" @click="$router.push('/user-admin/bookings')">
                    <div class="booking">
                        <img src="../assets/archive.svg" alt="archive">
                        <div class="subtitle">No Booking Found</div>
                        <v-btn outlined color="primary" rounded class="px-12" x-large style="font-size: 18px; text-transform: initial;" @click="$router.push('/user-admin/create-package')">{{language === 'ar'? 'اطلاع':'See Packages'}}</v-btn>
                    </div>
                </AdminCard>
            </v-col>
            <v-col cols="12" md="6">
                <AdminCard headerContent="My Recent Tickets" style="margin-left: 0; margin-right: 0;" class="pb-3" :action="language === 'ar'? 'مزید': 'More'" @click="$router.push('/user-admin/support')">
                    <v-data-table
                        :headers="headers"
                        :items="items"
                        :items-per-page="4"
                        hide-default-footer
                        class="table"
                        fixed-header
                        :mobile-breakpoint="mobileBreakPoint"
                    >
                        <template v-slot:item.action="{item}">
                            <v-icon color="blue" @click="checkTicket(item)">mdi-eye</v-icon>
                        </template>
                    </v-data-table>
                </AdminCard>
            </v-col>
        </v-row>
        <!-- </div> -->
        <div class="second-row px-0">
            <AdminCard headerContent="Latest Packages" :action="language === 'ar'? 'صمم برنامج':'CREATE A PACKAGE'" class="mx-0 mb-10" style="height: auto;" @click="$router.push('/user-admin/create-package')">
                <v-row justify="space-around" class="px-2 mb-3" style="width: 100%;" v-if="packages.length !== 0">
                    <v-col cols="12" md="4" v-for="item in packages.slice(0,3)" :key="item" >
                        <PackageCard 
                            :outline="true" 
                            :horizontal="true"
                            :title="p.name"
                            :packageCode="p.packageCode"
                            :rating="p.rating"
                            :startingPrice="split(p.price)"
                            :travelDate="p.travelDate"
                            :width="469"
                            class="ma-0"
                            style="width: 100%;"
                        ></PackageCard>
                    </v-col>
                </v-row>
                <v-row class="px-2 my-3" style="width: 100%;" v-else>
                    <v-col cols="12" class="d-flex justify-center grey--text title font-weight-regular my-3">
                        No packages available
                    </v-col>
                </v-row>
            </AdminCard>
        </div>
    </div>
</template>

<script lang="ts">
    import {PopRoute, AddRoute, ReplaceRoute, Ticket} from "../../types/store";
import {Vue, Component, Prop} from 'vue-property-decorator';
    import {Getter, Mutation, State} from "vuex-class";
import AdminPageInfo from './AdminPageInfo.vue';
import AdminCard from './AdminCard.vue';
import btn from './btn.vue';
import PackageCard from './PackageCard.vue';
import Axios from "axios";
    import alzuhudLink from "@/components/Functions/Functions";
    import {makeArabic} from "@/components/Functions/Functions";

@Component({
    components: {
        AdminPageInfo,
        AdminCard,
        btn,
        PackageCard
    }
})
export default class UserDashboard extends Vue {
    private panelTitle: string;
    @State adminUser: string;
    @State routes: string[];
    // @State username: string;
    @Getter token: string;
    @Mutation popRoute: PopRoute;
    @Mutation replaceRoute: ReplaceRoute;
    @Mutation setTicketId: Function;
    @State language: any;
    packages: any[] = [];
    headers: any[] = [];
    items: any = [];

    async mounted(): Promise<void> {
        this.replaceRoute(['Dashboard']);
        this.$parent.$emit('update route');
        this.headers = this.language === 'ar' ? [
            {
                text: 'الموضوع',
                align: 'right',
                value: 'subject',
            },
            {
                text: 'الحالة',
                align: 'right',
                value: 'status'
            },
            { text: 'التاريخ', value: 'date' },
            { text: 'OP', value: 'action', sortable: false },
        ]: [
            {
                text: 'Subject',
                align: 'left',
                value: 'subject',
            },
            {
                text: 'Status',
                align: 'left',
                value: 'status'
            },
            { text: 'Date', value: 'date' },
            { text: 'OP', value: 'action', sortable: false },
        ];
        try {
            let response = await Axios.get(`http://${alzuhudLink}:8080/api/users/tickets/all`, {
              params: {
                token: this.token
              }
            });
            let data = <Ticket[]>response.data.res.data;
            // this.items = data.filter(ticket => ticket.user_id.username === this.username).map(ticket => ({
            this.items = data.map(ticket => ({
            // this.items = data.filter(ticket => ticket.user_id.username === 'xhahn').map(ticket => ({
                subject: ticket.subject,
                status: ticket.status,
                date: new Date(ticket.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                }),
                id: ticket.id,
            }));

        } catch (e) {
            console.error(e);
        }

        try {
            const response = await Axios.get(`http://${alzuhudLink}:8080/api/packages/all`, {});

            this.packages = response.data.res.data.map((item: any) => ({
                name: item.name,
                rating: item.rate,
                date: item.start_date,
                packageCode: item.code,
                price: item.price,
            }))
        } catch (e) {
        }
    }

    makeArabic(str: string) {
        return makeArabic(str);
    }

    split(str: string): string {
        let strData = parseFloat(str);
        let data = strData.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return data.split('.')[0];
    }
    /**
     *
     */
    constructor() {
        super();
        this.panelTitle = 'Dashboard';
    }
    beforeDestroy(): void {
        this.popRoute();
        this.$parent.$emit('update route');
    }

    checkTicket(item: any) {
        // @ts-ignore
        this.setTicketId(item.id);
        this.$router.push('/user-admin/ticket');
    }
}
</script>

<style lang="scss">

    .dashboard {
        /*padding-left: 25px;*/
        .panel-title {
            font-size: 24px !important;
            font-weight: bold !important;
            color: black;
            @media screen and (max-width: 960px) {
                font-size: 20px !important;
            }
        }
    }
    .first-row {
        // display: flex;
        // justify-content: space-between;
        .card {
            width: 100% !important;
            height: initial !important;
            margin: 25px 10px;
            min-height: 365px;

            .header {
                @media screen and (max-width: 960px) {
                    padding: 20px 20px 0;
                }
            }
        }
    }

    .second-row {
        position: relative;
        z-index: 0;
        // padding: 0 30px 0 10px;
        >.card {
            height: initial !important;
            margin: 0;
            width: 100% !important;
        }
    }

    .booking {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        width: 100%;
        height: 100%;

        img {
            margin: 30px 0 12px;
            @media screen and (max-width: 960px) {
                margin: 40px 0 12px;
            }
        }

        .subtitle {
            font-size: 20px;
            color: #9E9E9E;
            margin-bottom: 25px;
            @media screen and (max-width: 960px) {
                font-size: 16px;
                margin-bottom: 50px;
            }
        }
    }

    .table {
        margin-top: .8rem;
        width: 100%;
        // * {
        //     td, th {
        //         font-size: 16pt !important;
        //         @media screen and (max-width: 1300px) {
        //             font-size: 1rem !important;
        //         }
        //     }
        //     th {
        //         i {
        //             font-size: 1.5rem !important;
        //             @media screen and (max-width: 1300px) {
        //                 font-size: 1.1rem !important;
        //             }
        //         }
        //     }
        // }
        // tr {
        //     height: 57px !important;
        // }
    }
</style>
