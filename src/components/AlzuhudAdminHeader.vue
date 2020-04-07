<template>
    <header id="admin-header" class="d-flex justify-space-between align-center">
        <!-- <div @click="toggle"><img src="../assets/hamburger.svg" alt="menu"></div> -->
        <v-btn class="d-none d-md-block ml-5 ml-md-11" style="z-index: 2;" @click="toggle" icon dark><v-icon x-large>mdi-menu</v-icon></v-btn>
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            content-class="admin-dialog"
            >
            <template v-slot:activator="{on}">
                <v-btn v-on="on" class="d-block d-md-none ml-5 ml-md-11" style="z-index: 2;" @click="toggle" icon dark><v-icon x-large>mdi-menu</v-icon></v-btn>
            </template>
            <v-card flat color="secondary" class="d-flex flex-column" style="border-radius: 0 !important;">
                <v-toolbar flat color="secondary" dark max-height="60px">
                    <v-btn icon class="ml-3 mt-2" @click="dialog = false"><v-icon large>mdi-close</v-icon></v-btn>
                    <div class="center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120.014" height="43.865" viewBox="0 0 120.014 43.865">
                            <defs>
                                <clipPath id="clip-path">
                                    <rect id="Rectangle_190" data-name="Rectangle 190" width="31.996" height="43.865" transform="translate(144 61)" fill="#fff" stroke="#707070" stroke-width="1"/>
                                </clipPath>
                            </defs>
                            <g id="Group_137" data-name="Group 137" transform="translate(-898.986 -14.067)">
                                <text id="Alzuhud" transform="translate(980 48)" fill="#fff" font-size="20" font-family="Open Sans"><tspan x="-38.076" y="0">Alzuhud</tspan></text>
                                <g id="Mask_Group_10" data-name="Mask Group 10" transform="translate(754.987 -46.933)" clip-path="url(#clip-path)">
                                    <image id="zuhud_logo-white" width="47.178" height="53.154" transform="translate(136.259 61)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACpCAYAAADJLcSaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH82lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJCNzY3OUQxNTUyMUE4Q0YwQUUzMDdGRTUxRkMwNTQ0NyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjczNWIwNTc2LTk1OTgtZjM0NC05ODkwLTBjMDQ3NmJlNWYzMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1YmFkYjc1Mi0xZDVlLWNhNGMtODBkZS1iY2RhODc2NjQ1ZDkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA1LTI4VDEzOjQ0OjI5KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNy0xN1QwMDozODoyOCswNDozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNy0xN1QwMDozODoyOCswNDozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxNTAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIxNjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplYmIwM2ZhOC1kYTNkLTRmNmYtODhmMS1iODU4NmQ2NzNlMDgiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNmQzZDBkMC0yYzA4LTA4NDgtYjdhZC1hOWFhMjFlMzRiM2UiLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2JmOWY2ZGItOWQ1NS00OTg1LTljZTgtZTUwYTg5YTkxMTU2IiBzdEV2dDp3aGVuPSIyMDE4LTA1LTMwVDE0OjI0OjM2KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8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"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </v-toolbar>
                <v-spacer v-if="adminUser.toLowerCase() !== 'agent'"></v-spacer>
                <div class="d-flex flex-column  dialog-tabs" :class="[adminUser.toLowerCase() !== 'agent' ? 'justify-center': 'mt-10']">
                    <div v-for="tab in tabs" :key="tab" :style="{'padding': adminUser.toLowerCase() !== 'user' ? '10px 0 10px 30px': ''}" :class="['tab', selected === tab.name ? 'active': '']" @click="(e) => changeTab(e, tab.name)">
                        <div class="shape" v-html="tab.shape"></div>
                        <div class="content" style="text-transform: capitalize;">{{language === 'ar' ? tab.nameAr:tab.name}}</div>
                        <div class="rect"></div>
                    </div>
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex mt-1" :class="[adminUser.toLowerCase() === 'user' ? 'justify-start mb-8': 'justify-space-between']">
                    <div class="avatar ml-8">
                        <v-icon x-large class="mr-2" dark style="opacity: .7;">mdi-account-circle</v-icon>
                        <p>{{fullName}}</p>
                    </div>
                    <v-btn class="mr-8" @click="openSettings" icon dark v-if="adminUser.toLowerCase() !== 'user'"><v-icon x-large>mdi-settings-outline</v-icon></v-btn>
                </div>
                <div class="d-flex justify-center mt-2" style="opacity: .7;" v-if="adminUser.toLowerCase() === 'user'">
                    <v-btn class="mr-5" @click="openSettings" icon dark><v-icon x-large>mdi-settings-outline</v-icon></v-btn>
                    <v-btn class="ml-5" dark icon ><v-icon x-large @click="$router.push('support')">mdi-help-circle</v-icon></v-btn>
                </div>
                <div class="text-center white--text mb-5 mt-7" style="opacity: .5;">Copyright (C) 2019 Alzuhud.</div>
            </v-card>
        </v-dialog>
        <div class="center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120.014" height="43.865" viewBox="0 0 120.014 43.865">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_190" data-name="Rectangle 190" width="31.996" height="43.865" transform="translate(144 61)" fill="#fff" stroke="#707070" stroke-width="1"/>
                    </clipPath>
                </defs>
                <g id="Group_137" data-name="Group 137" transform="translate(-898.986 -14.067)">
                    <text id="Alzuhud" transform="translate(980 48)" fill="#fff" font-size="20" font-family="Open Sans"><tspan x="-38.076" y="0">Alzuhud</tspan></text>
                    <g id="Mask_Group_10" data-name="Mask Group 10" transform="translate(754.987 -46.933)" clip-path="url(#clip-path)">
                        <image id="zuhud_logo-white" width="47.178" height="53.154" transform="translate(136.259 61)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACpCAYAAADJLcSaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH82lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJCNzY3OUQxNTUyMUE4Q0YwQUUzMDdGRTUxRkMwNTQ0NyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjczNWIwNTc2LTk1OTgtZjM0NC05ODkwLTBjMDQ3NmJlNWYzMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1YmFkYjc1Mi0xZDVlLWNhNGMtODBkZS1iY2RhODc2NjQ1ZDkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA1LTI4VDEzOjQ0OjI5KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNy0xN1QwMDozODoyOCswNDozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNy0xN1QwMDozODoyOCswNDozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxNTAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIxNjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplYmIwM2ZhOC1kYTNkLTRmNmYtODhmMS1iODU4NmQ2NzNlMDgiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNmQzZDBkMC0yYzA4LTA4NDgtYjdhZC1hOWFhMjFlMzRiM2UiLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2JmOWY2ZGItOWQ1NS00OTg1LTljZTgtZTUwYTg5YTkxMTU2IiBzdEV2dDp3aGVuPSIyMDE4LTA1LTMwVDE0OjI0OjM2KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8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"/>
                    </g>
                </g>
            </svg>
        </div>
        <div class="d-flex align-center actions">
            <v-btn class="d-none d-md-flex" dark icon @click="$router.push('support')" v-if="adminUser.toLowerCase() === 'user'"><v-icon x-large>mdi-help-circle</v-icon></v-btn>
            <v-btn class="d-none d-md-flex" @click="openSettings" icon dark><v-icon x-large>mdi-settings-outline</v-icon></v-btn>
            <v-menu
                v-model="notification"
                bottom
                v-if="$vuetify.breakpoint.smAndUp"
                offset-y
                internal-activator
                content-class="border-20"
                max-width="389"
                max-height="620"
                >
                <template v-slot:activator="{on}">
                    <v-btn icon dark v-on="on" class="d-none d-sm-flex"><v-icon x-large>mdi-bell</v-icon></v-btn>
                </template>
<!--                <div class="d-none">{{notifications}}</div>-->
                <v-list
                    multiple
                    two-line
                    three-line
                    nav
                    class="py-5 pl-5 pr-6"
                >
                    <v-list-item v-if="notifications.length === 0">
                        <span class="grey--text">No Notifications Yet</span>
                    </v-list-item>
                    <v-list-item v-for="(notif, index) in notifications" :key="index + 'list-item'" class="py-4">
                        <v-list-item-icon class="mr-4 ml-3">
                            <v-icon color="grey" style="font-size: 27px;">mdi-help-circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="mr-n6 mb-3">
                            <v-list-item-title class="mb-2">Your Ticket</v-list-item-title>
                            <v-list-item-subtitle class="d-flex" v-html="notif.description"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action class="align-self-end mt-12 pt-12 my-0 mx-0 pr-1">
                            <v-list-item-action-text class="body-1">{{timeAgo(notif.timeAgo)}}</v-list-item-action-text>
                        </v-list-item-action>
                    </v-list-item>

                </v-list>
            </v-menu>
            <v-menu
                v-model="notification"
                v-if="mobile()"
                bottom
                offset-y
                internal-activator
                content-class="border-20"
                max-width="340"
                max-height="500"
                >
                <template v-slot:activator="{on}">
                    <v-btn icon dark v-on="on" class="d-flex d-sm-none"><v-icon large>mdi-bell</v-icon></v-btn>
                </template>
<!--                <div class="d-none">{{notifications}}</div>-->
                <v-list
                    multiple
                    two-line
                    three-line
                    nav
                    class="py-5 pl-5 pr-6"
                >
                    <v-list-item v-if="notifications.length === 0">
                        <span class="grey--text">No Notifications Yet</span>
                    </v-list-item>
                    <v-list-item v-for="(notif, index) in notifications" :key="index + 'list-item'" class="py-4" >
                        <v-list-item-icon class="mr-4 ml-3">
                            <v-icon color="grey" style="font-size: 27px;">mdi-help-circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="mb-5" style="margin-right: -90px;">
                            <v-list-item-title class="mb-2">Your Ticket</v-list-item-title>
                            <v-list-item-subtitle class=" d-flex" v-html="notif.description"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action class="align-self-end mt-12 pt-12 my-0 mx-0 pr-1">
                            <v-list-item-action-text class="body-1">{{timeAgo(notif.timeAgo)}}</v-list-item-action-text>
                        </v-list-item-action>
                    </v-list-item>

                </v-list>
            </v-menu>
            <div class="avatar d-none d-md-flex">
<!--                <img src="../assets/man.jpg" alt="avatar">-->
                <v-icon x-large class="mr-2" dark style="opacity: .7;">mdi-account-circle</v-icon>
                <p>{{fullName}}</p>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from "vue-property-decorator";
  import {Getter, Mutation, State} from "vuex-class";
  import Axios from "axios";
  import alzuhudLink from "@/components/Functions/Functions";

  @Component({})
export default class AlzuhudAdminHeader extends Vue {
    notification: boolean = false;
    @Mutation toggleDrawer: () => void;
    @Mutation setDrawer: (isClosed: boolean) => void;
    @Mutation setAdminUser: (user: string) => void;
    // @ts-ignore
    @State adminUser: string;
    @Prop({}) tabs: Array<{name: string, shape: string}>;
    @Getter token: string;
    @State fullName: string;
    dialog: boolean = false;
    selected: string = '';
    notifications: {description: string, timeAgo: string}[] = [];
    @State language: any;

    @Watch('$route')
    onRouteChanged() {
        this.resetSelectedItemInNavBar();
        }

    resetSelectedItemInNavBar () {

        switch (this.$route.name) {
            case 'dashboard' :
                this.selected = 'dashboard';
                break;
            case 'bookings' || 'viewBooking' :
                this.selected = 'bookings';
                break;
            case 'support':
                this.selected = 'support';

                break;
            case 'agents' || 'addAgent' :
                this.selected = 'agents';
                break;
            case 'users' || 'addUser' :
                this.selected = 'users';
                break;
            case 'packages' || 'addPackage':
                this.selected = 'packages';
                break;
            case 'transactions' :
                this.selected = 'transactions';
                break;
            case 'ticket' :
                this.selected = 'support';

                break;
            case 'settings' :
                this.selected = '';
                break;
        }
    }

    async mounted() {
        this.resetSelectedItemInNavBar();
        // this.setAdminUser('User');
        setInterval(async () => {
          let response = await Axios.get(`http://${alzuhudLink}:8080/api/${this.adminUser.toLowerCase() === 'user' ? 'users/' : ''}notifications/all`, {
            params: {
              token: this.token,
            },
          });

          this.notifications = response.data.res.data.map((item: any) => ({
            description: item.description,
            timeAgo: item.created_at,
          }));
        }, 30000);

        let response = await Axios.get(`http://${alzuhudLink}:8080/api/${this.adminUser.toLowerCase() === 'user' ? 'users/' : ''}notifications/all`, {
            params: {
                token: this.token,
            },
        });

        this.notifications = response.data.res.data.map((item: any) => ({
            description: item.description,
            timeAgo: item.created_at,
        }));
    }

    toggle(): void {
        this.toggleDrawer();
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
    
    openSettings() {
        if (this.adminUser === 'Admin' || this.adminUser === 'Agent') {
            this.$router.push('/admin/settings');
            this.dialog = false;
        }
        else {
            if (this.adminUser.toLowerCase() === 'user') {
                this.$router.push('/user-admin/settings');
                this.dialog = false;
            }
        }
        this.$parent.$emit('set selected', '');
    }

    changeTab(e: MouseEvent, route: string) {
        this.selected = route;
        if (route === 'logout') {
            this.$router.push('/');
        }
        else {
                if (this.adminUser === 'Admin')
                    this.$router.push(`/admin/${route}`);
                else if (this.adminUser === 'Agent') {
                    if (route === 'packages' || route === 'users' || route === 'agents' || route === 'addAgent' || route === 'addUser' || route === 'addPackage') {
                        this.$router.push('/404');
                    } else {
                        this.$router.push(`/admin/${route}`);
                    }
                }
                else if (this.adminUser === 'User')
                    this.$router.push(`/user-admin/${route === 'dashboard' ? '': route}`);
        }
        this.dialog = false;
    }

    timeAgo(time: string): string {

      const date = new Date(time);
      const now = new Date();
      if (now.getFullYear() === date.getFullYear()) {
        if (now.getMonth() === date.getMonth()) {
          if (now.getDay() === date.getDay()) {
            if (now.getHours() === date.getHours()) {
              if (now.getMinutes() === date.getMinutes()) {
                return `${Math.abs(now.getSeconds() - date.getSeconds())} Second${now.getSeconds() - date.getSeconds() === 1 ? '': 's'} ago`;
              }
              return `${Math.abs(now.getMinutes() - date.getMinutes())} Minute${now.getMinutes() - date.getMinutes() === 1 ? '': 's'} ago`;
            }
            return `${Math.abs(now.getHours() - date.getHours())} Hour${now.getHours() - date.getHours() === 1 ? '': 's'} ago`;
          }
          else if (now.getDay() - date.getDay() === 1) {
            return 'Yesterday';
          }
          return `${Math.abs(now.getDay() - date.getDay())} Day${now.getDay() - date.getDay() === 1 ? '': 's'} ago`;
        }
        return `${Math.abs(now.getMonth() - date.getMonth())} Month${now.getMonth() - date.getMonth() === 1 ? '': 's'} ago`;
      }

      return `${Math.abs(now.getFullYear() - date.getFullYear())} Year${now.getFullYear() - date.getFullYear() === 1 ? '': 's'} ago`;
    }
}
</script>

<style lang="scss">
    .v-menu__content {
        .v-list-item__title,.v-list-item__subtitle {
            font-size: 18px;
        }
    }

    .v-dialog__container {
        display: none !important;
    }

    .admin-dialog {
        border-radius: 0 !important;

        .center {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            left: 0;
            z-index: -1;
            &:hover {
                cursor: default;
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
                background-color:rgba($color: #fff, $alpha: 0.1);
                * {
                    opacity: .8;
                }
            }

            .content {
                margin-left: 24px;
                font-size: 16px;
                font-weight: 600;
                color: #fff;
            }

            *{
                transition: opacity .2s linear;
                opacity: .7;
            }
        }
        
        .tab.active {
            background-color: rgba($color: #fff, $alpha: 0.3);
            border-right: 6px solid #fff;
            &:hover {
                cursor: default;
            }

            * {
                opacity: 1;
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
            color: #fff;
        }

        .avatar {
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            img {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                margin-right: 7px;
            }

            P {
                margin: 0;
            }
        }
    }
</style>

<style lang="scss" scoped>
    header#admin-header {
        background-color: $foreground-secondary;
        height: 90px;
        // display: flex;
        // align-items: center;
        // justify-content: space-between;
        position: fixed;
        width: 100%;
        box-shadow: 0 5px 15px #ccc;
        z-index: 4;

        // >div:first-of-type {
        //     margin-left: 42px;
        //     z-index: 1;
        //     &:hover {
        //         cursor: pointer;
        //     }
        // }
        >.v-btn:first-of-type {
            opacity: .7;
            @media screen and (max-width: 960px) {
                opacity: 1;
            }
        }

        .center {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                cursor: default;
            }
        }

        .actions {
            
            z-index: 1;
            >div:last-of-type {
                margin-right: 50px;
            }


            >.v-btn {
                opacity: .7;
                margin-right: 50px;
            }
            
            @media screen and (max-width: 960px) {
                >.v-btn {
                    margin-right: 20px;
                    opacity: 1;
                }
            }
        }

        .avatar {
            display: flex;
            align-items: center;
            color: white;
            img {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                margin-right: 7px;
            }

            P {
                margin: 0;
            }
        }
    }
</style>
