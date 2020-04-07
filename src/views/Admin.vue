<template>
    <div class="admin">
        <AlzuhudAdminHeader :tabs="tabs" style="position: fixed; width: 100%;"></AlzuhudAdminHeader>
        <main style="min-height: calc(100vh - 90px)">
          <v-navigation-drawer class="d-none d-md-flex" id="drawer" :permanent="!mobile()" hide-overlay fixed color="#f5f5f5" :mini-variant="Drawer" v-model="open"
                :style="{'height': '100%', 'margin-top': !mobile() ? '90px' : '', 'z-index': !mobile() ? '1' : ''}">
                <div class="d-flex flex-column mt-10" style="height: calc(100% - 40px);">
                    <div class="tab" @click="selectThis('')" :class="['tab', selected === 'dashboard' ? 'active': '', adminUser.toLowerCase() === 'admin' ? 'tab-admin' : '']" id="dashboard">
                        <div class="shape">
                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="26.484" height="26.484" viewBox="0 0 26.484 26.484">
                                <path id="Path_171" data-name="Path 171" d="M19.242,6A13.242,13.242,0,1,0,32.484,19.242,13.242,13.242,0,0,0,19.242,6Zm0,2.207a1.1,1.1,0,1,1-1.1,1.1A1.1,1.1,0,0,1,19.242,8.207ZM9.31,20.345a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,9.31,20.345Zm3.69,6.7a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,13,27.044ZM13,13a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,13,13Zm4.681,7.8a2.206,2.206,0,0,1,0-3.121c.541-.541,4.94-3.707,8.134-5.987a.7.7,0,0,1,.974.974c-2.28,3.194-5.446,7.593-5.987,8.134A2.206,2.206,0,0,1,17.681,20.8Zm9.362,6.242a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,27.044,27.044Zm2.129-6.7a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,29.173,20.345Z" transform="translate(-6 -6)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">Dashboard</div>
                        <div class="rect"></div>
                    </div>
                    <div class="tab" @click="selectThis('Bookings')" :class="['tab', selected === 'bookings' ? 'active': '', adminUser.toLowerCase() === 'admin' ? 'tab-admin' : '']" id="bookings">
                        <div class="shape">
                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="24.277" height="25.38" viewBox="0 0 24.277 25.38">
                                <path id="Path_170" data-name="Path 170" d="M9.655,6a.637.637,0,0,0-.606.42L8,9.22v1.194h3.31V9.22l-1.05-2.8A.637.637,0,0,0,9.655,6ZM30.622,6a.637.637,0,0,0-.606.42l-1.05,2.8v1.194h3.31V9.22l-1.05-2.8A.637.637,0,0,0,30.622,6ZM20.138,8.759s-5.517,2.759-5.517,6.069a3.917,3.917,0,0,0,1.573,3.31h-.47a2.206,2.206,0,0,0-2.207,2.207V31.38h4.414V28.07A5.4,5.4,0,0,1,20.138,24.1a5.4,5.4,0,0,1,2.207,3.972v3.31h4.414V20.345a2.206,2.206,0,0,0-2.207-2.207h-.47a3.917,3.917,0,0,0,1.573-3.31C25.656,11.517,20.138,8.759,20.138,8.759ZM8,12.621V31.38h3.31V12.621Zm20.966,0V31.38h3.31V12.621Z" transform="translate(-8 -6)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">Bookings</div>
                        <div class="rect"></div>
                    </div>
                    <div class="tab" @click="selectThis('Flights')" :class="['tab', selected === 'flights' ? 'active': '', adminUser.toLowerCase() === 'admin' ? 'tab-admin' : '']" id="flights">
                        <div class="shape">
                            <svg style="justify-self: center" xmlns="http://www.w3.org/2000/svg" width="48" height="33.998" viewBox="0 0 48 33.998">
                                <g id="surface1" transform="translate(0 0)">
                                    <path id="Path_221" data-name="Path 221" d="M20.254,8.035a4,4,0,0,0-3.348,1.137L16,10.078,23.422,16.5l8.285-3.289L21.438,8.379A3.941,3.941,0,0,0,20.254,8.035ZM50,10a4.009,4.009,0,0,0-1.812.434L14,24l-3.57-3.145a3.336,3.336,0,0,0-3.7-.48L6,20.742l4.281,8.723A3.983,3.983,0,0,0,15.7,31.617L29.133,26.4,28,42h1.285a4,4,0,0,0,3.762-2.645l6.07-16.836,12.332-4.793c.008,0,.016,0,.023-.008v0A4,4,0,0,0,50,10Z" transform="translate(-6 -8.002)" fill="#9e9e9e"/>
                                </g>
                            </svg>
                        </div>
                        <div class="content">Flights</div>
                        <div class="rect"></div>
                    </div>
                    <div class="tab" @click="selectThis('Support')" :class="['tab', selected === 'support' ? 'active': '', adminUser.toLowerCase() === 'admin' ? 'tab-admin' : '']" id="support" >
                        <div class="shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.553" height="26.6" viewBox="0 0 24.553 26.6">
                                <g id="surface1" transform="translate(-6 -4)">
                                    <path id="Path_203" data-name="Path 203" d="M17.254,4v8.328a4.083,4.083,0,0,1,3.069,3.948,4.038,4.038,0,0,1-.43,1.792L22.569,20.4a1.446,1.446,0,0,1,.312-.032,1.535,1.535,0,1,1-1.519,1.692l-2.793-2.434a4.084,4.084,0,1,1-3.361-7.3V4.194A11.251,11.251,0,0,0,6,15.254a11.536,11.536,0,0,0,3.818,8.372,4.081,4.081,0,0,1,1.3,2.987V30.6H21.346V29.005a2.044,2.044,0,0,1,1.4-1.94l2.642-.879a3.073,3.073,0,0,0,2.1-2.913V20.107l2.32-.8a1.02,1.02,0,0,0,.518-1.631l-.028-.034-.03-.034-2.819-3.381C27.027,8.494,23.122,4,17.254,4ZM16.231,14.231a2.046,2.046,0,1,0,2.046,2.046A2.045,2.045,0,0,0,16.231,14.231Z" fill="#9e9e9e"/>
                                </g>
                            </svg>

                        </div>
                        <div class="content">Support</div>
                        <div class="rect"></div>
                    </div>

                    <div class="tab" @click="selectThis('Agents')" :class="['tab', selected === 'agents' ? 'active': '', adminUser.toLowerCase() === 'admin' ? 'tab-admin' : '']" id="agents" v-if="adminUser.toLowerCase() === 'admin'">
                        <div class="shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34.249" height="27.399" viewBox="0 0 34.249 27.399">
                            <path id="Path_209" data-name="Path 209" d="M7.537,6A2.667,2.667,0,0,0,5.708,7.142c-5.976,0-2.68,9.539-4.435,10.946,0,0,1.077,1.331,4.435,1.331v1.139C4.781,22.975,0,22.083,0,26.55H5.994l.856-3.425-.571-1.142H8.562l-.571,1.142.856,3.425H9.16c.8-.486,3.4-1.835,3.4-1.835a9.855,9.855,0,0,1-1.84-2.673,2.929,2.929,0,0,1-1.585-1.483V19.405a7.838,7.838,0,0,0,1.081-.1,8.42,8.42,0,0,1-.939-3.574,7.138,7.138,0,0,1,2.919-5.96C11.646,7.668,10.426,6,7.537,6ZM26.258,6a4.433,4.433,0,0,0-4.473,4.034,6.341,6.341,0,0,1,3.046,5.8,7.247,7.247,0,0,1-.408,2.272,4.226,4.226,0,0,1,.123,1.037c0,2.821-2.854,5.632-2.854,5.632.62.27,2.6,1.278,3.414,1.77h.011l.571-4.567-.571-1.142H27.4l-.571,1.142L27.4,26.55h6.85c0-5.994-4.868-4.281-5.708-6.85V17.987a4.394,4.394,0,0,0,1.4-2.529,1.631,1.631,0,0,0,.887-1.4c0-.649-.207-.923-.386-1.028a5.147,5.147,0,0,0,.386-1.9c0-2.078-.562-4-2.283-4A2.344,2.344,0,0,0,26.258,6Zm-9.133,4.567c-3.073,0-5.565,1.851-5.565,5.164a4.724,4.724,0,0,0,.785,2.493s-.357.176-.357.923a1.777,1.777,0,0,0,.934,1.8c.129,1.151,1.92,2.836,1.92,2.836v1.924c-.961,2.883-6.85.983-6.85,7.69h7.991l.571-4.567-.571-1.142h2.283L17.7,28.833l.571,4.567h7.991c0-6.729-5.889-4.807-6.85-7.69V23.785s1.79-1.686,1.92-2.836a2.338,2.338,0,0,0,.934-1.8c0-.8-.357-.923-.357-.923a6.015,6.015,0,0,0,.642-2.386c0-2.335-1.171-4.13-3.14-4.13A3.032,3.032,0,0,0,17.125,10.567Z" transform="translate(0 -6)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">Agents</div>
                        <div class="rect"></div>
                    </div>
                    <div class="tab" @click="selectThis('Users')" :class="['tab', selected === 'users' ? 'active': '', adminUser.toLowerCase() === 'admin' ? 'tab-admin' : '']" id="users" v-if="adminUser.toLowerCase() === 'admin'">
                        <div class="shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34.249" height="27.399" viewBox="0 0 34.249 27.399">
                            <path id="Path_208" data-name="Path 208" d="M10.846,6C6.863,6,4.567,9.106,4.567,12.85a6.823,6.823,0,0,0,.6,2.529,1.333,1.333,0,0,0-.54,1.367c.187,1.465.823,1.835,1.226,1.866a5.966,5.966,0,0,0,2.136,3.371v2.283C6.85,27.691,0,25.408,0,33.4H10.275c0-4.767,2.127-6.863,4.205-8a2.516,2.516,0,0,1-.78-1.133V21.983a6.239,6.239,0,0,0,1.98-2.734,5.333,5.333,0,0,1-.758-2.216,3.835,3.835,0,0,1,.254-2,8.082,8.082,0,0,1-.334-2.181,10.141,10.141,0,0,1,.912-4.29A2.8,2.8,0,0,0,13.7,7.712S13.274,6,10.846,6ZM23.4,6c-3.982,0-6.279,3.1-6.279,6.848a6.823,6.823,0,0,0,.6,2.529,1.333,1.333,0,0,0-.54,1.367c.187,1.465.823,1.835,1.226,1.866a5.966,5.966,0,0,0,2.136,3.371v2.283c-1.142,3.425-7.991,1.142-7.991,9.133H34.249c0-7.991-6.85-5.708-7.991-9.133V21.983a5.96,5.96,0,0,0,2.136-3.369c.4-.031,1.039-.4,1.226-1.869a1.331,1.331,0,0,0-.54-1.367,6.038,6.038,0,0,0,.6-2.526c0-2.772-1.088-5.137-3.425-5.137C26.258,7.715,25.832,6,23.4,6Z" transform="translate(0 -6)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">Users</div>
                        <div class="rect"></div>
                    </div>
                    <div class="tab" @click="selectThis('Packages')" :class="['tab', selected === 'packages' ? 'active': '', adminUser.toLowerCase() === 'admin' ? 'tab-admin' : '']" id="packages" v-if="adminUser.toLowerCase() === 'admin'">
                        <div class="shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.065" height="22.976" viewBox="0 0 25.065 22.976">
                            <path id="Path_210" data-name="Path 210" d="M8.089,8A2.088,2.088,0,0,0,6,10.089v2.089H31.065V10.089A2.088,2.088,0,0,0,28.976,8ZM7.044,14.266V28.887a2.088,2.088,0,0,0,2.089,2.089h18.8a2.088,2.088,0,0,0,2.089-2.089V14.266ZM15.4,17.4h6.266a1.044,1.044,0,0,1,0,2.089H15.4a1.044,1.044,0,0,1,0-2.089Z" transform="translate(-6 -8)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">Packages</div>
                        <div class="rect"></div>
                    </div>

                    <div class="tab" @click="selectThis('Transactions')" :class="['tab', selected === 'transactions' ? 'active': '', adminUser.toLowerCase() === 'admin' ? 'tab-admin' : '']" id="transactions">
                        <div class="shape">
                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="22.07" height="28.691" viewBox="0 0 22.07 28.691">
                                <path id="Path_173" data-name="Path 173" d="M29.863,5.1,27.656,4,25.449,5.1,23.242,4,21.035,5.1,18.828,4,16.621,5.1,14.414,4,12.207,5.1,10,4V30.484a2.206,2.206,0,0,0,2.207,2.207H29.863a2.206,2.206,0,0,0,2.207-2.207V4Zm-7.724,22.07H15.517a1.1,1.1,0,1,1,0-2.207h6.621a1.1,1.1,0,1,1,0,2.207Zm-7.724-5.517a1.1,1.1,0,0,1,1.1-1.1h4.414a1.1,1.1,0,1,1,0,2.207H15.517A1.1,1.1,0,0,1,14.414,21.656Zm7.724-3.31H15.517a1.1,1.1,0,1,1,0-2.207h6.621a1.1,1.1,0,1,1,0,2.207Zm4.414,8.828a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,27.173Zm0-4.414a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,22.759Zm0-4.414a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,18.345Zm0-6.621H15.517a1.1,1.1,0,1,1,0-2.207H26.552a1.1,1.1,0,1,1,0,2.207Z" transform="translate(-10 -4)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">Transactions</div>
                        <div class="rect"></div>
                    </div>
                    <div :class="['tab', selected === 'logout' ? 'active': '', adminUser.toLowerCase() === 'admin' ? 'tab-admin' : '']" @click="(e) => {logout(), changeTab(e, 'logout')}">
                        <div class="shape" :class="{'ml-n2': Drawer}" style="transition: margin .1s linear">
                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="29.795" height="26.483" viewBox="0 0 29.795 26.483">
                                <path id="Path_172" data-name="Path 172" d="M33.587,6a2.208,2.208,0,0,1,2.207,2.207V30.276a2.208,2.208,0,0,1-2.207,2.207H18.138a2.208,2.208,0,0,1-2.207-2.207V20.345h8.828a1.1,1.1,0,1,0,0-2.207H15.931V8.207A2.208,2.208,0,0,1,18.138,6ZM15.931,18.138v2.207H9.767l2.53,2.53a1.1,1.1,0,1,1-1.56,1.56L6.323,20.022a1.1,1.1,0,0,1,0-1.56l4.414-4.414a1.1,1.1,0,1,1,1.56,1.56l-2.53,2.53Z" transform="translate(-6 -6)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">Logout</div>
                        <div class="rect"></div>
                    </div>
                </div>
            </v-navigation-drawer>
            <div class="tab-content" :style="{'width': `calc(100% - ${!Drawer ? '256px' : '80px'})`, 'margin-left': !Drawer ? '256px': '80px'}">
                <div id="title-tab-container" >
                    <div class="font-weight-bold admin-title">{{PanelTitle}}</div>
                    <AdminPageInfo style="grid-row:2/3; padding-left: 25px;" :adminUser="adminUser" :routes="routes"></AdminPageInfo>
                    <v-btn @click="goToAddAgentPage" v-if="$route.path === '/admin/agents'" class="d-none d-md-flex body-1 px-9" height="50" rounded min-width="180"  dark style="grid-row:1/3; justify-self:right; align-self: center; background-color:#00897B !important;">New Agent</v-btn>
                    <v-btn @click="goToAddAgentPage" v-if="$route.path === '/admin/agents'" class="d-md-none body-1 px-9" height="50" rounded min-width="180"  dark style="grid-row:1/3; justify-self:right; align-self: end; background-color:#00897B !important; top: 70px;">New Agent</v-btn>

                    <v-btn @click="goToAddUserPage" v-if="$route.path === '/admin/users'" class="d-none d-md-flex body-1 px-9" height="50" rounded min-width="180"  dark style="grid-row:1/3; justify-self:right; align-self: center; background-color:#00897B !important;">New User</v-btn>
                    <v-btn @click="goToAddUserPage" v-if="$route.path === '/admin/users'" class="d-md-none body-1 px-9" height="50" rounded min-width="180"  dark style="grid-row:1/3; justify-self:right; align-self: end; background-color:#00897B !important; top: 70px;">New User</v-btn>

                    <v-btn @click="goToAddPackagePage" v-if="$route.path === '/admin/packages'" class="d-none d-md-flex body-1 px-9" height="50" rounded min-width="180"  dark style="grid-row:1/3; justify-self:right; align-self: center; background-color:#00897B !important;">New Package</v-btn>
                    <v-btn @click="goToAddPackagePage" v-if="$route.path === '/admin/packages'" class="d-md-none body-1 px-9" height="50" rounded min-width="180"  dark style="grid-row:1/3; justify-self:right; align-self: end; background-color:#00897B !important; top: 70px;">New Package</v-btn>

                    <v-btn @click="goToAddFlight" v-if="($route.path === '/admin/flights' && flightsTab === 'availFlights')" class="d-none d-md-flex body-1 px-9" height="50" rounded min-width="180"  dark style="grid-row:1/3; justify-self:right; align-self: center; background-color:#00897B !important;">New Flight</v-btn>
                    <v-btn @click="goToAddFlight" v-if="($route.path === '/admin/flights' && flightsTab === 'availFlights')" class="d-md-none body-1 px-9" height="50" rounded min-width="180"  dark style="grid-row:1/3; justify-self:right; align-self: end; background-color:#00897B !important; top: 70px;">New Flight</v-btn>

                    <v-btn @click="goToAddAirline" v-if="($route.path === '/admin/flights' && flightsTab === 'airlines')" class="d-none d-md-flex body-1 px-9" height="50" rounded min-width="180"  dark style="grid-row:1/3; justify-self:right; align-self: center; background-color:#00897B !important;">New Airline</v-btn>
                    <v-btn @click="goToAddAirline" v-if="($route.path === '/admin/flights' && flightsTab === 'airlines')" class="d-md-none body-1 px-9" height="50" rounded min-width="180"  dark style="grid-row:1/3; justify-self:right; align-self: end; background-color:#00897B !important; top: 70px;">New Airline</v-btn>
                </div>
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import AlzuhudAdminHeader from '@/components/AlzuhudAdminHeader.vue';
import AdminPageInfo from '@/components/AdminPageInfo.vue';
import { ChangePanelTitle } from '../../types/store';
import {State, Mutation, Action} from 'vuex-class';

@Component({
    components: {
        AlzuhudAdminHeader,
        AdminPageInfo
    }
})
export default class Admin extends Vue {
    // private panelTitle: string;
    private selected: string;
    @State routes: string[];
    @State adminUser: string;
    @State panelTitle: string;
    @State drawer: boolean;
    @State flightsTab: string;
    @Mutation changePanelTitle: ChangePanelTitle;
    @Mutation setDrawer: (isOpen: boolean) => void;
    @Mutation changeUser: (user: string) => void;
    @Action logout: Function;

    @Watch('$route')
    onRouteChanged(){
        this.resetTitleAndSelectedItemInNavBar();
    }

     tabs: {name: string, shape: string}[] = [
        {
            name: 'dashboard',
            shape: `<svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="26.484" height="26.484" viewBox="0 0 26.484 26.484">
                        <path id="Path_171" data-name="Path 171" d="M19.242,6A13.242,13.242,0,1,0,32.484,19.242,13.242,13.242,0,0,0,19.242,6Zm0,2.207a1.1,1.1,0,1,1-1.1,1.1A1.1,1.1,0,0,1,19.242,8.207ZM9.31,20.345a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,9.31,20.345Zm3.69,6.7a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,13,27.044ZM13,13a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,13,13Zm4.681,7.8a2.206,2.206,0,0,1,0-3.121c.541-.541,4.94-3.707,8.134-5.987a.7.7,0,0,1,.974.974c-2.28,3.194-5.446,7.593-5.987,8.134A2.206,2.206,0,0,1,17.681,20.8Zm9.362,6.242a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,27.044,27.044Zm2.129-6.7a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,29.173,20.345Z" transform="translate(-6 -6)" fill="#9e9e9e"/>
                    </svg>`
        },
        {
            name: 'bookings',
            shape: `<svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="24.277" height="25.38" viewBox="0 0 24.277 25.38">
                        <path id="Path_170" data-name="Path 170" d="M9.655,6a.637.637,0,0,0-.606.42L8,9.22v1.194h3.31V9.22l-1.05-2.8A.637.637,0,0,0,9.655,6ZM30.622,6a.637.637,0,0,0-.606.42l-1.05,2.8v1.194h3.31V9.22l-1.05-2.8A.637.637,0,0,0,30.622,6ZM20.138,8.759s-5.517,2.759-5.517,6.069a3.917,3.917,0,0,0,1.573,3.31h-.47a2.206,2.206,0,0,0-2.207,2.207V31.38h4.414V28.07A5.4,5.4,0,0,1,20.138,24.1a5.4,5.4,0,0,1,2.207,3.972v3.31h4.414V20.345a2.206,2.206,0,0,0-2.207-2.207h-.47a3.917,3.917,0,0,0,1.573-3.31C25.656,11.517,20.138,8.759,20.138,8.759ZM8,12.621V31.38h3.31V12.621Zm20.966,0V31.38h3.31V12.621Z" transform="translate(-8 -6)" fill="#9e9e9e"/>
                    </svg>`
        },
         {
             name: 'flights',
             shape: `<svg style="justify-self: center" xmlns="http://www.w3.org/2000/svg" width="48" height="33.998" viewBox="0 0 48 33.998">
                                <g id="surface1" transform="translate(0 0)">
                                    <path id="Path_221" data-name="Path 221" d="M20.254,8.035a4,4,0,0,0-3.348,1.137L16,10.078,23.422,16.5l8.285-3.289L21.438,8.379A3.941,3.941,0,0,0,20.254,8.035ZM50,10a4.009,4.009,0,0,0-1.812.434L14,24l-3.57-3.145a3.336,3.336,0,0,0-3.7-.48L6,20.742l4.281,8.723A3.983,3.983,0,0,0,15.7,31.617L29.133,26.4,28,42h1.285a4,4,0,0,0,3.762-2.645l6.07-16.836,12.332-4.793c.008,0,.016,0,.023-.008v0A4,4,0,0,0,50,10Z" transform="translate(-6 -8.002)" fill="#9e9e9e"/>
                                </g>
                    </svg>`
         },
        {
            name: 'support',
            shape: `<svg xmlns="http://www.w3.org/2000/svg" width="24.553" height="26.6" viewBox="0 0 24.553 26.6">
                        <g id="surface1" transform="translate(-6 -4)">
                            <path id="Path_203" data-name="Path 203" d="M17.254,4v8.328a4.083,4.083,0,0,1,3.069,3.948,4.038,4.038,0,0,1-.43,1.792L22.569,20.4a1.446,1.446,0,0,1,.312-.032,1.535,1.535,0,1,1-1.519,1.692l-2.793-2.434a4.084,4.084,0,1,1-3.361-7.3V4.194A11.251,11.251,0,0,0,6,15.254a11.536,11.536,0,0,0,3.818,8.372,4.081,4.081,0,0,1,1.3,2.987V30.6H21.346V29.005a2.044,2.044,0,0,1,1.4-1.94l2.642-.879a3.073,3.073,0,0,0,2.1-2.913V20.107l2.32-.8a1.02,1.02,0,0,0,.518-1.631l-.028-.034-.03-.034-2.819-3.381C27.027,8.494,23.122,4,17.254,4ZM16.231,14.231a2.046,2.046,0,1,0,2.046,2.046A2.045,2.045,0,0,0,16.231,14.231Z" fill="#9e9e9e"/>
                        </g>
                    </svg>`
        },
         {
             name: 'agents',
             shape: `<svg xmlns="http://www.w3.org/2000/svg" width="34.249" height="27.399" viewBox="0 0 34.249 27.399">
                            <path id="Path_209" data-name="Path 209" d="M7.537,6A2.667,2.667,0,0,0,5.708,7.142c-5.976,0-2.68,9.539-4.435,10.946,0,0,1.077,1.331,4.435,1.331v1.139C4.781,22.975,0,22.083,0,26.55H5.994l.856-3.425-.571-1.142H8.562l-.571,1.142.856,3.425H9.16c.8-.486,3.4-1.835,3.4-1.835a9.855,9.855,0,0,1-1.84-2.673,2.929,2.929,0,0,1-1.585-1.483V19.405a7.838,7.838,0,0,0,1.081-.1,8.42,8.42,0,0,1-.939-3.574,7.138,7.138,0,0,1,2.919-5.96C11.646,7.668,10.426,6,7.537,6ZM26.258,6a4.433,4.433,0,0,0-4.473,4.034,6.341,6.341,0,0,1,3.046,5.8,7.247,7.247,0,0,1-.408,2.272,4.226,4.226,0,0,1,.123,1.037c0,2.821-2.854,5.632-2.854,5.632.62.27,2.6,1.278,3.414,1.77h.011l.571-4.567-.571-1.142H27.4l-.571,1.142L27.4,26.55h6.85c0-5.994-4.868-4.281-5.708-6.85V17.987a4.394,4.394,0,0,0,1.4-2.529,1.631,1.631,0,0,0,.887-1.4c0-.649-.207-.923-.386-1.028a5.147,5.147,0,0,0,.386-1.9c0-2.078-.562-4-2.283-4A2.344,2.344,0,0,0,26.258,6Zm-9.133,4.567c-3.073,0-5.565,1.851-5.565,5.164a4.724,4.724,0,0,0,.785,2.493s-.357.176-.357.923a1.777,1.777,0,0,0,.934,1.8c.129,1.151,1.92,2.836,1.92,2.836v1.924c-.961,2.883-6.85.983-6.85,7.69h7.991l.571-4.567-.571-1.142h2.283L17.7,28.833l.571,4.567h7.991c0-6.729-5.889-4.807-6.85-7.69V23.785s1.79-1.686,1.92-2.836a2.338,2.338,0,0,0,.934-1.8c0-.8-.357-.923-.357-.923a6.015,6.015,0,0,0,.642-2.386c0-2.335-1.171-4.13-3.14-4.13A3.032,3.032,0,0,0,17.125,10.567Z" transform="translate(0 -6)" fill="#9e9e9e"/>
                        </svg>`
         },
         {
             name: 'users',
             shape: `<svg xmlns="http://www.w3.org/2000/svg" width="34.249" height="27.399" viewBox="0 0 34.249 27.399">
                            <path id="Path_208" data-name="Path 208" d="M10.846,6C6.863,6,4.567,9.106,4.567,12.85a6.823,6.823,0,0,0,.6,2.529,1.333,1.333,0,0,0-.54,1.367c.187,1.465.823,1.835,1.226,1.866a5.966,5.966,0,0,0,2.136,3.371v2.283C6.85,27.691,0,25.408,0,33.4H10.275c0-4.767,2.127-6.863,4.205-8a2.516,2.516,0,0,1-.78-1.133V21.983a6.239,6.239,0,0,0,1.98-2.734,5.333,5.333,0,0,1-.758-2.216,3.835,3.835,0,0,1,.254-2,8.082,8.082,0,0,1-.334-2.181,10.141,10.141,0,0,1,.912-4.29A2.8,2.8,0,0,0,13.7,7.712S13.274,6,10.846,6ZM23.4,6c-3.982,0-6.279,3.1-6.279,6.848a6.823,6.823,0,0,0,.6,2.529,1.333,1.333,0,0,0-.54,1.367c.187,1.465.823,1.835,1.226,1.866a5.966,5.966,0,0,0,2.136,3.371v2.283c-1.142,3.425-7.991,1.142-7.991,9.133H34.249c0-7.991-6.85-5.708-7.991-9.133V21.983a5.96,5.96,0,0,0,2.136-3.369c.4-.031,1.039-.4,1.226-1.869a1.331,1.331,0,0,0-.54-1.367,6.038,6.038,0,0,0,.6-2.526c0-2.772-1.088-5.137-3.425-5.137C26.258,7.715,25.832,6,23.4,6Z" transform="translate(0 -6)" fill="#9e9e9e"/>
                        </svg>`
         },
         {
             name: 'packages',
             shape: `<svg xmlns="http://www.w3.org/2000/svg" width="25.065" height="22.976" viewBox="0 0 25.065 22.976">
                            <path id="Path_210" data-name="Path 210" d="M8.089,8A2.088,2.088,0,0,0,6,10.089v2.089H31.065V10.089A2.088,2.088,0,0,0,28.976,8ZM7.044,14.266V28.887a2.088,2.088,0,0,0,2.089,2.089h18.8a2.088,2.088,0,0,0,2.089-2.089V14.266ZM15.4,17.4h6.266a1.044,1.044,0,0,1,0,2.089H15.4a1.044,1.044,0,0,1,0-2.089Z" transform="translate(-6 -8)" fill="#9e9e9e"/>
                        </svg>`
         },
        {
            name: 'transactions',
            shape: `<svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="22.07" height="28.691" viewBox="0 0 22.07 28.691">
                        <path id="Path_173" data-name="Path 173" d="M29.863,5.1,27.656,4,25.449,5.1,23.242,4,21.035,5.1,18.828,4,16.621,5.1,14.414,4,12.207,5.1,10,4V30.484a2.206,2.206,0,0,0,2.207,2.207H29.863a2.206,2.206,0,0,0,2.207-2.207V4Zm-7.724,22.07H15.517a1.1,1.1,0,1,1,0-2.207h6.621a1.1,1.1,0,1,1,0,2.207Zm-7.724-5.517a1.1,1.1,0,0,1,1.1-1.1h4.414a1.1,1.1,0,1,1,0,2.207H15.517A1.1,1.1,0,0,1,14.414,21.656Zm7.724-3.31H15.517a1.1,1.1,0,1,1,0-2.207h6.621a1.1,1.1,0,1,1,0,2.207Zm4.414,8.828a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,27.173Zm0-4.414a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,22.759Zm0-4.414a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,18.345Zm0-6.621H15.517a1.1,1.1,0,1,1,0-2.207H26.552a1.1,1.1,0,1,1,0,2.207Z" transform="translate(-10 -4)" fill="#9e9e9e"/>
                    </svg>`
        },
        {
            name: 'logout',
            shape: `<svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="29.795" height="26.483" viewBox="0 0 29.795 26.483">
                        <path id="Path_172" data-name="Path 172" d="M33.587,6a2.208,2.208,0,0,1,2.207,2.207V30.276a2.208,2.208,0,0,1-2.207,2.207H18.138a2.208,2.208,0,0,1-2.207-2.207V20.345h8.828a1.1,1.1,0,1,0,0-2.207H15.931V8.207A2.208,2.208,0,0,1,18.138,6ZM15.931,18.138v2.207H9.767l2.53,2.53a1.1,1.1,0,1,1-1.56,1.56L6.323,20.022a1.1,1.1,0,0,1,0-1.56l4.414-4.414a1.1,1.1,0,1,1,1.56,1.56l-2.53,2.53Z" transform="translate(-6 -6)" fill="#9e9e9e"/>
                    </svg>`
        }
    ];

    get open(): boolean {
        if(this.mobile()) {
            return this.drawer;
        }
        return true;
    }

    set open(val: boolean) {
        if (this.mobile()) {
            this.setDrawer(val);
        }
    }

    mobile(): boolean {
        switch(this.$vuetify.breakpoint.name) {
            case 'xl':
                return false;
            case 'lg':
                return false;
            default:
                return true;
        }
    }


    get Drawer(): boolean {
        if(this.mobile()) {
            return false;
        }
        return this.drawer;
    }

    set Drawer(val: boolean) {
        
            this.setDrawer(val);
    }

    resizeDrawer(): void {
        this.Drawer = this.drawer;
    }

    get PanelTitle(): string {
        return this.panelTitle;
    }
    set PanelTitle(value: string) {
        this.changePanelTitle(value);
    }

    

    /**
     *
     */
    constructor() {
        super();
        // this.panelTitle = 'Dashboard';
    }

    mounted(): void {
        if (this.$route.name !== undefined) {
            this.selected = this.$route.name;
            this.$on('update route', () => {
                if (this.$route.name !== undefined)
                    this.selected = this.$route.name;
                this.$forceUpdate();
            });
            this.$forceUpdate();

        }

        this.resetTitleAndSelectedItemInNavBar();
        // this.changeUser('Admin');

        this.changeTabsForAgent();

        document.title = 'Admin - Alzuhud';

    }

    resetTitleAndSelectedItemInNavBar() {

        let routeName = this.$route.name;
            if (this.tabs.find(item => item.name === routeName) === null)
                this.selected = '';
        this.setTitleOfPanelOnLoading();
    }

    setTitleOfPanelOnLoading() {

        switch (this.$route.path) {
            case '/admin/dashboard' :
                this.PanelTitle = 'Dashboard';
                break;
            case '/admin/bookings' :
                this.PanelTitle = 'Bookings';
                break;
            case '/admin/support' :
                this.PanelTitle = 'Support';
                break;
            case '/admin/agents' :
                this.PanelTitle = 'Agents';
                break;
            case '/admin/addAgent' :
                this.PanelTitle = 'New Agent';
                break;
            case '/admin/users' :
                this.PanelTitle = 'Users';
                break;
            case '/admin/addUser' :
                this.PanelTitle = 'New User';
                break;
            case '/admin/packages' :
                this.PanelTitle = 'Packages';
                break;
            case '/admin/addPackage' :
                this.PanelTitle = 'New Package';
                break;
            case '/admin/transactions' :
                this.PanelTitle = 'Transactions';
                break;
            case '/admin/settings' :
                this.PanelTitle = 'Settings';
                break;
            case '/admin/flights' :
                this.PanelTitle = 'Flights';
                break;
            case '/admin/addFlights' :
                this.PanelTitle = 'Flights';
                break;
            case '/admin/addAirline' :
                this.PanelTitle = 'Flights';
                break;
        }
    }

    changeTab(e: MouseEvent, route: string) {
        this.selected = route;
        if (route === 'logout') {
            setTimeout(() => {
                this.$router.push('/');
            }, 100);
        }
        else {
            if (this.adminUser.toLowerCase() === 'admin' || this.adminUser.toLowerCase() === 'agent') {
                this.$router.push(`/Admin/${route}`);
            }
        }
    }
    
    selectThis(tab: string) {
        if (tab === '') {
            this.PanelTitle = 'Dashboard';
        }
        else {
            this.PanelTitle = tab;
        }
        switch (tab) {
            case '' :
                this.goToDashboardPage() ;
                this.selected = 'dashboard';
                break;
            case 'Bookings' :
                this.goToBookingsPage() ;
                this.selected = 'bookings';
                break;
            case 'Support' :
                this.goToSupportPage();
                this.selected = 'support';
                break;
            case 'Agents' :
                if (this.adminUser.toLowerCase() === 'admin') {
                    this.goToAgentsPage();
                    this.selected = 'agents'
                }
                break;
            case 'Users' :
                if (this.adminUser.toLowerCase() === 'admin') {
                    this.goToUsersPage();
                    this.selected = 'users'
                }
                break;
            case 'Packages' :
                if (this.adminUser.toLowerCase() === 'admin') {
                    this.goToPackagesPage();
                    this.selected = 'packages'
                }
                break;
            case 'Transactions' :
                this.goToTransactionsPage() ;
                this.selected = 'transactions'
                break;
            case 'Flights' :
                this.goToFlightsPage() ;
                this.selected = 'flights';
                break;
        }

    }

    private findParent(el: Element, predicate: (el: Element) => boolean): Element | null {
        let parent = el.parentElement;
        let returnEl = null;
        while (parent !== null) {
            if (predicate(parent)) {
                returnEl = parent;
                break;
            }
            parent = parent.parentElement;
        }

        return returnEl;
    }
    goToDashboardPage (): void {
        this.$router.push("/admin/dashboard")
    }
    goToBookingsPage (): void {
        this.$router.push("/admin/bookings")
    }
    goToSupportPage (): void {
        this.$router.push("/admin/support")
    }
    goToAgentsPage (): void {
        this.$router.push("/admin/agents")
    }
    goToUsersPage (): void {
        this.$router.push("/admin/users")
    }
    goToPackagesPage (): void {
        this.$router.push("/admin/packages")
    }
    goToTransactionsPage (): void {
        this.$router.push("/admin/transactions")
    }
    goToAddAgentPage (): void {
        this.$router.push("/admin/addAgent")
    }
    goToAddUserPage (): void {
        this.$router.push("/admin/addUser")
    }
    goToAddPackagePage (): void {
        this.$router.push("/admin/addPackage")
    }
    goToFlightsPage (): void {
        this.$router.push("/admin/flights")
    }
    goToAddFlight(): void {
        this.$router.push("/admin/addFlight")
    }
    goToAddAirline(): void {
        this.$router.push("/admin/addAirline")
    }

    changeTabsForAgent (): void {
        if (this.adminUser.toLowerCase() === 'agent') {
            for (let i = 0; i < this.tabs.length ; i++) {
                for (let i = 0; i < this.tabs.length ; i++) {
                    if (this.tabs[i].name === 'agents') {
                        this.tabs.splice(i, 1);
                    }
                }
                for (let i = 0; i < this.tabs.length ; i++) {
                    if (this.tabs[i].name === 'users') {
                        this.tabs.splice(i, 1);
                    }
                }
                for (let i = 0; i < this.tabs.length ; i++) {
                    if (this.tabs[i].name === 'packages') {
                        this.tabs.splice(i, 1);
                    }
                }
                // for (let i = 0; i < this.tabs.length ; i++) {
                //     if (this.tabs[i].name === 'flights') {
                //         this.tabs.splice(i, 1);
                //     }
                // }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    .admin {
        background: #fafafa;
        main {
            display: flex;
            margin-top: 90px;
            /*min-height: calc(100% - 90px);*/
            .tabs {
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: #f5f5f5;
                width: 18%;
                min-height: 100%;
                position: fixed;
                height: 100vh;
            }
        }
    }

    .tab {
        display: flex;
        // padding: 20px 116px 20px 42px;
        width: 100%;
        padding: 15px 0 15px 30px;
        align-items: center;
        transition: all .2s linear;
        box-sizing: border-box;
        &:hover {
            cursor: pointer;
            background-color:rgba($color: $foreground, $alpha: 0.1);
        }
    }

    .tab.tab-admin {
        padding: 10px 0 10px 30px;
    }

    .tab.active {
        background-color: rgba($color: $foreground, $alpha: 0.1);
        * {
            color: $foreground;
        }
        border-right: 6px solid $foreground;
        svg path {
            fill: $foreground;
        }
        &:hover {
            cursor: default;
        }
    }

    .shape {
        width: 30px;
        display: flex;
        justify-content: center;
        margin-right: 5px;
    }

    .content {
        margin-left: 24px;
        font-size: 20px;
        font-weight: 600;
        color: #707070;
    }

    .tab-content {
        width: 100%;
        padding-top: 20px;
        // padding-left: 18%;
        transition: all .15s ease-in-out;
        @media screen and (max-width: 1264px) {
            width: 100% !important;
            margin: 0 !important;
        }
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        color: black;
    }
    #title-tab-container {
        padding: 0 20px 0 0;
        display: grid;
        grid-template-columns: 80% 20%;
        grid-template-rows: auto auto;
    }

    .admin-title {
        font-size:24px;
        padding-left: 25px;
    }
</style>
