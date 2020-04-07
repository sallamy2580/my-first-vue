<template>
    <!-- <header>
        <div>
            <nav :class="['full-width-flex', light ? 'light-text': '']"
                :style="{'height': light ? '133px': ''}">
            <ul>
                <li><a @click="changePage('')">Home</a></li>
                <li>
                    <v-menu
                        offset-y
                        v-model="menu"
                        internal-activator
                        z-index="13"
                        content-class="home-dropdown">
                        <template v-slot:activator="{on}">
                            <a v-on="on">Services</a>
                        </template>
                        <v-list class="py-2 px-2">
                            <v-list-item
                                @click="changePage('services')">
                                <v-list-item-title>
                                    Ummrah
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item
                                @click="changePage('services/how-to-umrah')">
                                <v-list-item-title>
                                    How to Perform Ummrah
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item
                                @click="changePage('services/saey')">
                                <v-list-item-title>
                                    Sa'ey
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </li>
                <li><a @click="changePage('packages')">Packages</a></li>
                <li><a @click="changePage('agent')">Agent</a></li>
                <li><a @click="changePage('about')">About Us</a></li>
                <li><a @click="changePage('contact-us')">Contact Us</a></li>
            </ul>
        </nav>
        <div class="full-width-flex centered">
            <img v-if="light" src="../assets/logo.png">
            <img v-else src="../assets/logo.svg">
        </div>
        <div :class="['ended', light ? 'light-link': '']">
            <div class="inflex">
                <a><img src="../assets/usa.svg"></a>
                <a><img src="../assets/france.svg"></a>
                <a><img src="../assets/saudi.svg"></a>
                <a @click="changePage('sign-in')">Login</a>
                <button class="sign-up" @click="changePage('sign-up')">Sign up</button>
            </div>
        </div>
        </div>
    </header> -->
    <v-toolbar flat color="transparent" class="mt-6 mt-md-10 mb-10" style="border-radius: 0 !important;" :dark="!light" :absolute="!light">
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            content-class="header-dialog">
            <template v-slot:activator="{on}">
                <v-app-bar-nav-icon v-on="on" class="d-md-none ml-3"></v-app-bar-nav-icon>
            </template>
            <v-card style="border-radius: 0 !important;">
                <v-toolbar flat class="pt-8" style="border-radius: 0 !important;">
                    <v-btn @click="dialog = false" icon><v-icon>mdi-close</v-icon></v-btn>
                    <img class="center-image center-image-light" src="../assets/logo.png">
                </v-toolbar>
                <v-list class="mt-6">
                    <v-list-item
                        @click="changePage('')">
                        <v-list-item-title>{{language === 'ar' ? 'الرئیسی': 'Home'}}</v-list-item-title>
                    </v-list-item>
                    <v-menu
                        offset-y
                        v-model="menu3"
                        content-class="home-dropdown">
                        <template v-slot:activator="{on}">
                            <v-list-item
                                v-on="on">
                                <v-list-item-title>{{language === 'ar' ? 'خدماتنا': 'Services'}}</v-list-item-title>
                            </v-list-item>
                        </template>
                        <v-list class="py-2 px-2 home-dropdown">
                            <v-list-item
                                @click="changePage('services')">
                                <v-list-item-title>
                                    Ummrah
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item
                                @click="changePage('services/how-to-umrah')">
                                <v-list-item-title>
                                    How to Perform Ummrah
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item
                                @click="changePage('services/saey')">
                                <v-list-item-title>
                                    Sa'ey
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-list-item
                        @click="changePage('packages')">
                        <v-list-item-title>{{language === 'ar' ? 'برامج العمرة': 'Packages'}}</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        @click="changePage('agent')">
                        <v-list-item-title>{{language === 'ar' ? 'وکلائنا' :'Agent'}}</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        @click="changePage('about')">
                        <v-list-item-title>{{language === 'ar' ? 'من نحن' :'About us'}}</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        @click="changePage('contact-us')">
                        <v-list-item-title>{{language === 'ar' ? 'اتصل بنا' :'Contact us'}}</v-list-item-title>
                    </v-list-item>
                </v-list>
                <div class="mx-0 mt-4 d-flex justify-center">
                    <v-btn text tile class="mx-2" @click="setLanguage('en')"><img src="../assets/usa.svg"></v-btn>
                    <v-btn text tile class="mx-2" @click="setLanguage('ar')"><img src="../assets/saudi.svg"></v-btn>
                </div>
                <div class="d-flex flex-column align-center mt-6">
                    <v-btn color="primary" text tile @click="changePage('sign-in')">{{language === 'ar' ? 'تسجیل دخول':'Login'}}</v-btn>
                    <v-btn color="primary" rounded outlined class="mt-3 px-12" x-large @click="changePage('sign-up')">{{language === 'ar' ? 'تسجیل جدید':'Sign up'}}</v-btn>
                </div>
            </v-card>
        </v-dialog>
        <v-menu
            bottom
            right
            v-model="menu2"
            :close-on-content-click="false"
            min-width="245">
            <template v-slot:activator={on}>
                <v-btn 
                    class="d-none d-md-block d-lg-none ml-md-6"
                    icon 
                    v-on="on"
                >
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    @click="changePage('')">
                    <v-list-item-title>{{language === 'ar' ? 'الرئیسی': 'Home'}}</v-list-item-title>
                </v-list-item>
                <v-list-group>
                    <template v-slot:activator>
                        <v-list-item-title>
                            {{language === 'ar' ? 'خدماتنا': 'Services'}}
                        </v-list-item-title>
                    </template>
                    <v-list-item
                        @click="changePage('services')">
                        <v-list-item-title>
                            Ummrah
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        @click="changePage('services/how-to-umrah')">
                        <v-list-item-title>
                            How to Perform Ummrah
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        @click="changePage('services/saey')">
                        <v-list-item-title>
                            Sa'ey
                        </v-list-item-title>
                    </v-list-item>
                </v-list-group>
                <v-list-item
                    @click="changePage('packages')">
                    <v-list-item-title>{{language === 'ar' ? 'برامج العمرة': 'Packages'}}</v-list-item-title>
                </v-list-item>
                <v-list-item
                    @click="changePage('agent')">
                    <v-list-item-title>{{language === 'ar' ? 'وکلائنا' :'Agent'}}</v-list-item-title>
                </v-list-item>
                <v-list-item
                    @click="changePage('about')">
                    <v-list-item-title>{{language === 'ar' ? 'من نحن' :'About us'}}</v-list-item-title>
                </v-list-item>
                <v-list-item
                    @click="changePage('contact-us')">
                    <v-list-item-title>{{language === 'ar' ? 'اتصل بنا' :'Contact us'}}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-toolbar-items class="d-none d-lg-flex align-center ml-0 ml-xl-8" style="height: 60px;" background-color="transparent" hide-slider>
            <v-btn text tile class="font-weight-regular" @click="changePage('')">{{language === 'ar' ? 'الرئیسی': 'Home'}}</v-btn>
            <v-menu
                offset-y
                v-model="menu"
                internal-activator
                z-index="13"
                content-class="home-dropdown">
                <template v-slot:activator="{on}">
                    <v-btn text tile v-on="on" class="font-weight-regular">{{language === 'ar' ? 'خدماتنا': 'Services'}}</v-btn>
                </template>
                <v-list class="py-2 px-2 home-dropdown">
                    <v-list-item
                        @click="changePage('services')">
                        <v-list-item-title>
                            Ummrah
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        @click="changePage('services/how-to-umrah')">
                        <v-list-item-title>
                            How to Perform Ummrah
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        @click="changePage('services/saey')">
                        <v-list-item-title>
                            Sa'ey
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text tile class="font-weight-regular" @click="changePage('packages')">{{language === 'ar' ? 'برامج العمرة': 'Packages'}} </v-btn>
            <v-btn text tile class="font-weight-regular" @click="changePage('agent')">{{language === 'ar' ? 'وکلائنا' :'Agent'}}</v-btn>
            <v-btn text tile class="font-weight-regular" @click="changePage('about')">{{language === 'ar' ? 'من نحن' :'About us'}}</v-btn>
            <v-btn text tile class="font-weight-regular" @click="changePage('contact-us')">{{language === 'ar' ? 'اتصل بنا' :'Contact Us'}}</v-btn>
        </v-toolbar-items>
        <img class="center-image" v-if="light" src="../assets/logo.png" style="left: calc(50% -45px);" @click="$router.push('/')">
        <img class="center-image" v-else src="../assets/logo.svg" @click="$router.push('/')">
        <v-spacer></v-spacer>
        <div class="d-none d-md-block">
            <v-btn text tile @click="setLanguage('en')"><img src="../assets/usa.svg"></v-btn>
<!--            <v-btn text tile @click="setLanguage('fr')"><img src="../assets/france.svg"></v-btn>-->
            <v-btn text tile @click="setLanguage('ar')"><img src="../assets/saudi.svg"></v-btn>
            <v-btn :color="light ? 'primary': ''" text tile class="mr-md-4" @click="changePage('sign-in')">{{language === 'ar' ? 'تسجیل دخول':'Login'}}</v-btn>
            <v-btn :color="light ? 'primary': ''" rounded outlined class="mr-md-6 mr-lg-4 mr-xl-8 px-9" x-large @click="changePage('sign-up')">{{language === 'ar' ? 'تسجیل جدید':'Sign up'}}</v-btn>
        </div>
        <v-btn :color="light ? 'primary': ''" text tile class="mr-3 d-block d-md-none" @click="changePage('sign-in')">{{language === 'ar' ? 'تسجیل دخول':'Login'}}</v-btn>
        <!-- <div class="d-xs-none d-md-block mr-md-8 mr-lg-10"></div> -->
        <!-- <div class="d-xs-none d-md-block mr-lg-4"></div> -->
    </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {Mutation, State} from "vuex-class";

@Component({
    name: 'alzuhud-header'
})
export default class AlzuhudHeader extends Vue {
    @Prop({default: false}) light: boolean;
    @Mutation setLanguage: Function;
    @State language: any;
    menu: boolean = false;
    menu2: boolean = false;
    menu3: boolean = false;
    dialog: boolean = false;
    /**
     *
     */
    constructor() {
        super();
    }

    changePage(route: string) {
        this.$router.push(`/${route}`);
    }
}
</script>

<style lang="scss">
    .home-dropdown {
        border-radius: 0 15px 15px 15px !important;
    }

    .header-dialog {
        border-radius: 0 !important;
        .v-menu--inline {
            display: none;
        }
    }
</style>

<style lang="scss" scoped>
    header {
        z-index: 10;
        width: 100%;
        // margin-top: 30px;
        position: relative;
        &>div{
            position: relative;
        }
        nav {
            z-index: 7 !important;
            height: 105.5px;
            margin-left: 120px;
            width: calc(41% - 120px) !important;
            ul {
                display: flex;
                justify-content: space-between;
                list-style: none;
                padding: 0;
                width: 100%;

                li:hover {
                    cursor: pointer;
                }

            }
        }
    }

    a {
        font-size: 18px;
        text-decoration: none;
        color: white !important;
        &:visited {
            color: white !important;
            text-decoration: none;
        }

        &:hover {
            cursor: pointer;
        }
    }

    .sign-up {
        background: transparent;
        outline: none;
        border: 1px white solid;
        border-radius: 50px;
        padding: 20px 50px;
        font-size: 18px;
        color: white;
        font-weight: normal;
        transition: all .2s linear;
        &:hover {
            cursor: pointer;
            background: white;
            color: $foreground;
        }
    }
    
    .full-width-flex {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .light-text * {
        color: black !important;
    }

    .light-link {
        a {
            color: $foreground !important;
        }

        .sign-up {
            border: 1px $foreground solid;
            color: $foreground !important;
            &:hover {
                cursor: pointer;
                background: $foreground !important;
                color: white !important;
            }
        }
    }

    .centered {
        position: absolute;
        top: 0;
        z-index: -1;
        justify-content: center;
        height: 100%;
        img {
            width: 118px;
            height: 100%;
        }
    }

    .ended {
        position: absolute;
        top: 0;
        z-index: 5;
        right: 0;
        margin-right: 120px;
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .inflex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .center-image {
        position: absolute;
        left: calc(50% - 38px);
        // width: 118px;
        height: 103px;
        @media screen and (max-width: 960px) {
            width: 40px;
            height: 53px;
            left: calc(50% - 20px);
        }

        &:hover {
            cursor: pointer;
        }
    }

    .center-image-light {
        position: absolute;
        left: calc(50% - 45.5px);
        // width: 118px;
        height: 103px;
        @media screen and (max-width: 960px) {
            width: 52px;
            height: 59px;
            left: calc(50% - 26px);
        }
    }
</style>

