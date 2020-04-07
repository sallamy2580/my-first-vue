<template>
    <div class="admin">
        <AlzuhudAdminHeader :tabs="tabs" style="position: fixed; width: 100%;"></AlzuhudAdminHeader>
        <main v-resize="updateRedraw" style="min-height: calc(100vh - 90px);">
            <v-navigation-drawer class="d-none d-md-flex" id="drawer" :permanent="!mobile()" hide-overlay fixed color="#f5f5f5" :mini-variant="Drawer" v-model="open"
                :style="{'height': '100%', 'margin-top': !mobile() ? '90px' : '', 'z-index': !mobile() ? '1' : ''}">
                <div class="d-flex justify-center flex-column" style="height: 100%;">
                    <div :class="['tab', selected === 'dashboard' ? 'active': '']" @click="(e) => changeTab(e, '')">
                        <div class="shape">
                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="26.484" height="26.484" viewBox="0 0 26.484 26.484">
                                <path id="Path_171" data-name="Path 171" d="M19.242,6A13.242,13.242,0,1,0,32.484,19.242,13.242,13.242,0,0,0,19.242,6Zm0,2.207a1.1,1.1,0,1,1-1.1,1.1A1.1,1.1,0,0,1,19.242,8.207ZM9.31,20.345a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,9.31,20.345Zm3.69,6.7a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,13,27.044ZM13,13a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,13,13Zm4.681,7.8a2.206,2.206,0,0,1,0-3.121c.541-.541,4.94-3.707,8.134-5.987a.7.7,0,0,1,.974.974c-2.28,3.194-5.446,7.593-5.987,8.134A2.206,2.206,0,0,1,17.681,20.8Zm9.362,6.242a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,27.044,27.044Zm2.129-6.7a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,29.173,20.345Z" transform="translate(-6 -6)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">{{language === 'ar'? 'لوحة التحکم':'Dashboard'}}</div>
                        <div class="rect"></div>
                    </div>
                    <div :class="['tab', selected === 'bookings' ? 'active': '']" @click="(e) => changeTab(e, 'bookings')">
                        <div class="shape">
                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="24.277" height="25.38" viewBox="0 0 24.277 25.38">
                                <path id="Path_170" data-name="Path 170" d="M9.655,6a.637.637,0,0,0-.606.42L8,9.22v1.194h3.31V9.22l-1.05-2.8A.637.637,0,0,0,9.655,6ZM30.622,6a.637.637,0,0,0-.606.42l-1.05,2.8v1.194h3.31V9.22l-1.05-2.8A.637.637,0,0,0,30.622,6ZM20.138,8.759s-5.517,2.759-5.517,6.069a3.917,3.917,0,0,0,1.573,3.31h-.47a2.206,2.206,0,0,0-2.207,2.207V31.38h4.414V28.07A5.4,5.4,0,0,1,20.138,24.1a5.4,5.4,0,0,1,2.207,3.972v3.31h4.414V20.345a2.206,2.206,0,0,0-2.207-2.207h-.47a3.917,3.917,0,0,0,1.573-3.31C25.656,11.517,20.138,8.759,20.138,8.759ZM8,12.621V31.38h3.31V12.621Zm20.966,0V31.38h3.31V12.621Z" transform="translate(-8 -6)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">{{language === 'ar'? 'حجوزات':'Bookings'}}</div>
                        <div class="rect"></div>
                    </div>
                    <div :class="['tab', selected === 'support' ? 'active': '']" @click="(e) => changeTab(e, 'support')">
                        <div class="shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.553" height="26.6" viewBox="0 0 24.553 26.6">
                                <g id="surface1" transform="translate(-6 -4)">
                                    <path id="Path_203" data-name="Path 203" d="M17.254,4v8.328a4.083,4.083,0,0,1,3.069,3.948,4.038,4.038,0,0,1-.43,1.792L22.569,20.4a1.446,1.446,0,0,1,.312-.032,1.535,1.535,0,1,1-1.519,1.692l-2.793-2.434a4.084,4.084,0,1,1-3.361-7.3V4.194A11.251,11.251,0,0,0,6,15.254a11.536,11.536,0,0,0,3.818,8.372,4.081,4.081,0,0,1,1.3,2.987V30.6H21.346V29.005a2.044,2.044,0,0,1,1.4-1.94l2.642-.879a3.073,3.073,0,0,0,2.1-2.913V20.107l2.32-.8a1.02,1.02,0,0,0,.518-1.631l-.028-.034-.03-.034-2.819-3.381C27.027,8.494,23.122,4,17.254,4ZM16.231,14.231a2.046,2.046,0,1,0,2.046,2.046A2.045,2.045,0,0,0,16.231,14.231Z" fill="#9e9e9e"/>
                                </g>
                            </svg>

                        </div>
                        <div class="content">{{language === 'ar'? 'الدعم':'Support'}}</div>
                        <div class="rect"></div>
                    </div>
                    <div :class="['tab', selected === 'transactions' ? 'active': '']" @click="(e) => changeTab(e, 'transactions')">
                        <div class="shape">
                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="22.07" height="28.691" viewBox="0 0 22.07 28.691">
                                <path id="Path_173" data-name="Path 173" d="M29.863,5.1,27.656,4,25.449,5.1,23.242,4,21.035,5.1,18.828,4,16.621,5.1,14.414,4,12.207,5.1,10,4V30.484a2.206,2.206,0,0,0,2.207,2.207H29.863a2.206,2.206,0,0,0,2.207-2.207V4Zm-7.724,22.07H15.517a1.1,1.1,0,1,1,0-2.207h6.621a1.1,1.1,0,1,1,0,2.207Zm-7.724-5.517a1.1,1.1,0,0,1,1.1-1.1h4.414a1.1,1.1,0,1,1,0,2.207H15.517A1.1,1.1,0,0,1,14.414,21.656Zm7.724-3.31H15.517a1.1,1.1,0,1,1,0-2.207h6.621a1.1,1.1,0,1,1,0,2.207Zm4.414,8.828a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,27.173Zm0-4.414a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,22.759Zm0-4.414a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,18.345Zm0-6.621H15.517a1.1,1.1,0,1,1,0-2.207H26.552a1.1,1.1,0,1,1,0,2.207Z" transform="translate(-10 -4)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">{{language === 'ar'? 'العملیات':'Transactions'}}</div>
                        <div class="rect"></div>
                    </div>
                    <div :class="['tab', selected === 'logout' ? 'active': '']" @click="(e) => { Logout(), changeTab(e, 'logout')}">
                        <div class="shape " :class="{'ml-n2': Drawer}" style="transition: margin .1s linear">
                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="29.795" height="26.483" viewBox="0 0 29.795 26.483">
                                <path id="Path_172" data-name="Path 172" d="M33.587,6a2.208,2.208,0,0,1,2.207,2.207V30.276a2.208,2.208,0,0,1-2.207,2.207H18.138a2.208,2.208,0,0,1-2.207-2.207V20.345h8.828a1.1,1.1,0,1,0,0-2.207H15.931V8.207A2.208,2.208,0,0,1,18.138,6ZM15.931,18.138v2.207H9.767l2.53,2.53a1.1,1.1,0,1,1-1.56,1.56L6.323,20.022a1.1,1.1,0,0,1,0-1.56l4.414-4.414a1.1,1.1,0,1,1,1.56,1.56l-2.53,2.53Z" transform="translate(-6 -6)" fill="#9e9e9e"/>
                            </svg>
                        </div>
                        <div class="content">{{language === 'ar' ? 'تسجيل خروج':'Logout'}}</div>
                        <div class="rect"></div>
                    </div>
                </div>
            </v-navigation-drawer>
            <div class="tab-content" :style="{'width': `calc(100% - ${!Drawer ? '256px' : '80px'})`, 'margin-left': !Drawer ? '256px': '80px'}">
                
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AlzuhudAdminHeader from '@/components/AlzuhudAdminHeader.vue';
import AdminPageInfo from '@/components/AdminPageInfo.vue';
import {State, Mutation, Action} from "vuex-class";

@Component({
    components: {
        AlzuhudAdminHeader,
        AdminPageInfo
    }
})
export default class UserAdmin extends Vue {
    private panelTitle: string;
    private selected: string;
    // private open: boolean = true;
    @State drawer: boolean;
    @Mutation setDrawer: (isOpen: boolean) => void;
    @Action logout: () => void;
    @State language: any;
    tabs: any[] = [
        {
            name: 'dashboard',
            nameAr: 'لوحة التحکم',
            shape: `<svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="26.484" height="26.484" viewBox="0 0 26.484 26.484">
                        <path id="Path_171" data-name="Path 171" d="M19.242,6A13.242,13.242,0,1,0,32.484,19.242,13.242,13.242,0,0,0,19.242,6Zm0,2.207a1.1,1.1,0,1,1-1.1,1.1A1.1,1.1,0,0,1,19.242,8.207ZM9.31,20.345a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,9.31,20.345Zm3.69,6.7a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,13,27.044ZM13,13a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,13,13Zm4.681,7.8a2.206,2.206,0,0,1,0-3.121c.541-.541,4.94-3.707,8.134-5.987a.7.7,0,0,1,.974.974c-2.28,3.194-5.446,7.593-5.987,8.134A2.206,2.206,0,0,1,17.681,20.8Zm9.362,6.242a1.1,1.1,0,1,1,0-1.56A1.1,1.1,0,0,1,27.044,27.044Zm2.129-6.7a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,29.173,20.345Z" transform="translate(-6 -6)" fill="#9e9e9e"/>
                    </svg>`
        },
        {
            name: 'bookings',
            nameAr: 'حجوزات',
            shape: `<svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="24.277" height="25.38" viewBox="0 0 24.277 25.38">
                        <path id="Path_170" data-name="Path 170" d="M9.655,6a.637.637,0,0,0-.606.42L8,9.22v1.194h3.31V9.22l-1.05-2.8A.637.637,0,0,0,9.655,6ZM30.622,6a.637.637,0,0,0-.606.42l-1.05,2.8v1.194h3.31V9.22l-1.05-2.8A.637.637,0,0,0,30.622,6ZM20.138,8.759s-5.517,2.759-5.517,6.069a3.917,3.917,0,0,0,1.573,3.31h-.47a2.206,2.206,0,0,0-2.207,2.207V31.38h4.414V28.07A5.4,5.4,0,0,1,20.138,24.1a5.4,5.4,0,0,1,2.207,3.972v3.31h4.414V20.345a2.206,2.206,0,0,0-2.207-2.207h-.47a3.917,3.917,0,0,0,1.573-3.31C25.656,11.517,20.138,8.759,20.138,8.759ZM8,12.621V31.38h3.31V12.621Zm20.966,0V31.38h3.31V12.621Z" transform="translate(-8 -6)" fill="#9e9e9e"/>
                    </svg>`
        },
        {
            name: 'support',
            nameAr: 'الدعم',
            shape: `<svg xmlns="http://www.w3.org/2000/svg" width="24.553" height="26.6" viewBox="0 0 24.553 26.6">
                        <g id="surface1" transform="translate(-6 -4)">
                            <path id="Path_203" data-name="Path 203" d="M17.254,4v8.328a4.083,4.083,0,0,1,3.069,3.948,4.038,4.038,0,0,1-.43,1.792L22.569,20.4a1.446,1.446,0,0,1,.312-.032,1.535,1.535,0,1,1-1.519,1.692l-2.793-2.434a4.084,4.084,0,1,1-3.361-7.3V4.194A11.251,11.251,0,0,0,6,15.254a11.536,11.536,0,0,0,3.818,8.372,4.081,4.081,0,0,1,1.3,2.987V30.6H21.346V29.005a2.044,2.044,0,0,1,1.4-1.94l2.642-.879a3.073,3.073,0,0,0,2.1-2.913V20.107l2.32-.8a1.02,1.02,0,0,0,.518-1.631l-.028-.034-.03-.034-2.819-3.381C27.027,8.494,23.122,4,17.254,4ZM16.231,14.231a2.046,2.046,0,1,0,2.046,2.046A2.045,2.045,0,0,0,16.231,14.231Z" fill="#9e9e9e"/>
                        </g>
                    </svg>`
        },
        {
            name: 'transactions',
            nameAr: 'العملیات',
            shape: `<svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="22.07" height="28.691" viewBox="0 0 22.07 28.691">
                        <path id="Path_173" data-name="Path 173" d="M29.863,5.1,27.656,4,25.449,5.1,23.242,4,21.035,5.1,18.828,4,16.621,5.1,14.414,4,12.207,5.1,10,4V30.484a2.206,2.206,0,0,0,2.207,2.207H29.863a2.206,2.206,0,0,0,2.207-2.207V4Zm-7.724,22.07H15.517a1.1,1.1,0,1,1,0-2.207h6.621a1.1,1.1,0,1,1,0,2.207Zm-7.724-5.517a1.1,1.1,0,0,1,1.1-1.1h4.414a1.1,1.1,0,1,1,0,2.207H15.517A1.1,1.1,0,0,1,14.414,21.656Zm7.724-3.31H15.517a1.1,1.1,0,1,1,0-2.207h6.621a1.1,1.1,0,1,1,0,2.207Zm4.414,8.828a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,27.173Zm0-4.414a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,22.759Zm0-4.414a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,26.552,18.345Zm0-6.621H15.517a1.1,1.1,0,1,1,0-2.207H26.552a1.1,1.1,0,1,1,0,2.207Z" transform="translate(-10 -4)" fill="#9e9e9e"/>
                    </svg>`
        },
        {
            name: 'logout',
            nameAr: 'تسجيل خروج',
            shape: `<svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="29.795" height="26.483" viewBox="0 0 29.795 26.483">
                        <path id="Path_172" data-name="Path 172" d="M33.587,6a2.208,2.208,0,0,1,2.207,2.207V30.276a2.208,2.208,0,0,1-2.207,2.207H18.138a2.208,2.208,0,0,1-2.207-2.207V20.345h8.828a1.1,1.1,0,1,0,0-2.207H15.931V8.207A2.208,2.208,0,0,1,18.138,6ZM15.931,18.138v2.207H9.767l2.53,2.53a1.1,1.1,0,1,1-1.56,1.56L6.323,20.022a1.1,1.1,0,0,1,0-1.56l4.414-4.414a1.1,1.1,0,1,1,1.56,1.56l-2.53,2.53Z" transform="translate(-6 -6)" fill="#9e9e9e"/>
                    </svg>`
        },
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

    /**
     *
     */
    constructor() {
        super();
    }

    mounted(): void {
        if (this.$route.name !== undefined)
            this.selected = this.$route.name;
        this.$on('update route', () => {
            if (this.$route.name !== undefined)
                this.selected = this.$route.name;

            this.$forceUpdate();
        });
        this.$forceUpdate();
        this.setDrawer(false);
        document.title = 'Admin - Alzuhud';
        this.$on('set selected', (selected: string) => {
          this.selected = selected;
        });

        // this.$router.push('/user-admin/dashboard');
    }

    changeTab(e: MouseEvent, route: string) {
        this.selected = route;
        if (route === 'logout') {
            setTimeout(() => {
                this.$router.push('/');
            }, 100);
        }
        else {
            this.$router.push(`/user-admin/${route}`);
        }
    }

    Logout() : void {
        this.logout();

    }

    selectThis(e: MouseEvent) {
        let src = <Element>e.srcElement;
        let tabs = document.getElementsByClassName('tab'); 
        if (src !== null) {
            if (src.classList.contains('tab')) {
                for (const tab of tabs) {
                    if (tab !== src) {
                        tab.classList.remove('active');
                    }
                    else {
                        src.classList.add('active');
                    }
                }
            }
            else {
                let parent = this.findParent(src, (el) => {
                    if (el.classList.contains('tab')) {
                        return true;
                    }
                    return false;
                });
                for (const tab of tabs) {
                    if (tab !== parent) {
                        tab.classList.remove('active');
                    }
                    else {
                        parent.classList.add('active');
                    }
                }
            }
        }

    }

    updateRedraw() {
        this.$forceUpdate();
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
}
</script>

<style lang="scss" scoped>
    .admin {
        background: #fafafa;
        main {
            display: flex;
            margin-top: 90px;
            // min-height: calc(100% - 90px);
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
        padding: 20px 0 20px 30px;
        align-items: center;
        transition: all .2s linear;
        box-sizing: border-box;
        &:hover {
            cursor: pointer;
            background-color:rgba($color: $foreground, $alpha: 0.1);
        }
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
        // width: 82%;
        width: 100%;
        padding: 0 20px;
        padding-top: 28px;
        // margin-left: 18%;
        transition: all .15s ease-in-out;

        @media screen and (max-width: 1264px) {
            width: 100% !important;
            margin: 0 !important;
        }

        @media screen and (max-width: 960px) {
            padding-top: 20px;
        }
    }
</style>
