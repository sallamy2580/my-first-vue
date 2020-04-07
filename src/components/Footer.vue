<template>
    <footer class="footer-backdrop">
        <div class="footer-content d-flex justify-md-space-between flex-column-reverse flex-md-row align-md-center">
            <div class="d-flex flex-grow-1 justify-md-space-between flex-column flex-md-row">
                <div class="list" :style="{'direction': language === 'ar'? 'rtl': ''}">
                    <div class="list-header">{{language === 'ar' ? 'الرئیسی': 'Home'}}</div>
                    <ul>
                        <li><a @click="$router.push('/services')">{{language === 'ar' ? 'خدماتنا': 'Services'}}</a></li>
                        <li><a @click="$router.push('/packages')">{{language === 'ar' ? 'برامج العمرة': 'Packages'}}</a></li>
                        <li><a @click="$router.push('/sign-in')">{{language === 'ar' ? 'تسجیل دخول':'Login'}}</a></li>
                        <li><a @click="$router.push('/')">{{language === 'ar' ? 'الرئیسی': 'Home'}}</a></li>
                    </ul>
                </div>
                <div class="list" id="about-us">
                    <div class="list-header" :style="{'direction': language === 'ar'? 'rtl': ''}">{{language === 'ar' ? 'من نحن' :'About us'}}</div>
                    <ul>
                        <li><p>Alzuhud for Ummrah and Visits- We are a leading Ummrah & Visit specialist providing Allah Guests with affordable Packages, premium Packages and VIP Packages.</p></li>
                    </ul>
                </div>
                <div class="list">
                    <div class="list-header" :style="{'direction': language === 'ar'? 'rtl': ''}">{{language === 'ar' ? 'اتصل بنا' :'Contact us'}}</div>
                    <ul>
                        <li><a href="mailto:info@alzuhud.com">info@alzuhud.com</a></li>
                        <li><a href="tel:+966122349474">+966122349474</a></li>
                        <li><a href="tel:+966554175500">+966554175500</a></li>
                        <li>Al Nuzha Dist, Jedda, KSA</li>
                        <li>
                            <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
                            <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
                            <v-btn icon><v-icon>mdi-youtube</v-icon></v-btn>
                            <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
                        </li>
                    </ul>
                </div>
            </div>
            <img style="height: 170px;" src="../assets/logo.png">
        </div>
        <div class="divider"></div>
        <div class="copyright">Copyright (C) 2019 Alzuhud. All rights Reserved. Powered by <a href="http://www.agencywolfe.com" class="wolfe-link">Wolfe</a></div>
    </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {State} from "vuex-class";

@Component({})
export default class Footer extends Vue {
    @State language: any;
}
</script>

<style lang="scss" scoped>
    #about-us {
        width: 401px;
    }

    .footer-content {
        margin: 50px 0;
        font-size: 20px;
        // display: flex;
        // justify-content: space-between;
        img {
            @media screen and (max-width: 960px) {
                width: 150px;
                height: 169px;
                align-self: center;
            } 
        }
    }

    .list {
        .list-header {
            font-weight: bold;
            margin-bottom: 24px;
        }
        &:last-of-type {
            margin-right: 180px;
            @media screen and (max-width: 1904px) {
                margin-right: 90px;
            }

            @media screen and (max-width: 1650px) {
                margin-right: 60px;
            }
            @media screen and (max-width: 1264px) {
                margin-right: 40px;
            }

            @media screen and (max-width: 1164px) {
                margin-right: 0;
            }
        }

        @media screen and (max-width: 960px) {
            width: 100% !important;
            margin: 40px 0;
        }
    }

    ul {
        li {
            list-style: none;
            color: #707070 !important;
            margin: 4px 0;
            
            a {
                color: #707070 !important;
            }

            a:hover {
                cursor: pointer !important;
            }
        }
        margin: 0;
        padding: 0 !important;
    }

    .divider {
        border: 0.7px solid #BDBDBD;
    }

    .copyright {
        align-self: center;
        font-size: 20px;
        font-weight: lighter;
        margin-top: 30px;
        @media screen and (max-width: 960px) {
            font-size: 16px;
            text-align: center;
            margin-bottom: 20px;   
        }
    }

    .footer-backdrop {
        background: #F3F7F3;
        box-sizing: border-box;
        padding: 0 120px;
        min-height: 406px;
        display: flex;
        flex-direction: column;
        
        @media screen and (max-width: 1264px) {
            padding: 0 60px;
        }
        
        @media screen and (max-width: 960px) {
            padding: 0 24px;
        }
    }

    .wolfe-link {
        color: $foreground;
        text-decoration: none;
        &:visited {
            color: $foreground;
            text-decoration: none;
        }

        
    }
</style>
