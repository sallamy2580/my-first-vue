<template>
    <div class="sign-in white">
        <AlzuhudHeader :light="true"></AlzuhudHeader>
        <PageInfo pageName="Forgot Password" :routes="routes" style="margin-top: 60px;"></PageInfo>
        <form class="d-flex flex-column align-stretch align-md-center mx-4" @submit="requestChangePassword">
            <div class="d-flex flex-column" style="min-width: 35%;">
                <div class="header">Please enter your email</div>
                <v-text-field outlined label="Email (name@example.com)" :rules="[matchEmail]" v-model="email"></v-text-field>
                <v-btn block rounded depressed color="primary" x-large class="mb-12" type="submit">Continue</v-btn>
                <div class="sign-in-up-action"> <!--class .sign-in-up-action in sign up.vue-->
                    <div>Just remembered you password?</div>
                    <v-btn outlined rounded block x-large color="primary" @click="changePage('sign-in')">Sign In</v-btn>
                </div>
                <!-- <SignInUp actionTitle="Just remembered you password?" actionName="Sign In"></SignInUp> -->
            </div>
        </form>
<!--        <AppSection></AppSection>-->
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AlzuhudHeader from '@/components/AlzuhudHeader.vue';
import PageInfo from '@/components/PageInfo.vue';
import AppSection from '@/components/AppSection.vue';
import Footer from '@/components/Footer.vue';
import btn from '@/components/btn.vue';
import alzInput from '@/components/alzInput.vue';
import SignInUp from '@/components/SignInUp.vue';
import Axios from "axios";
import {Action} from 'vuex-class';
import alzuhudLink from "@/components/Functions/Functions";


@Component({
    components: {
        AlzuhudHeader,
        PageInfo,
        AppSection,
        Footer,
        btn,
        alzInput,
        SignInUp
    }
})
export default class ForgotPassword extends Vue {
    routes: Array<string>;
    email: string = '';
    emailValidated: boolean = false;
    @Action snackIt: Function;
    /**
     *
     */
    constructor() {
        super();
        this.routes = ['sign in', 'forgot password'];
    }

    changePage(route: string) {
        this.$router.replace(`/${route}`);
    }

    mounted() {
        document.title = 'Forgot Password - Alzuhud';
    }

    matchEmail(value: string): boolean | string {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (pattern.test(value) && value.length >= 8 && value.length < 50) {
            this.emailValidated = true;
            return true;
        } else {
            this.emailValidated = false;
            return 'Invalid Email (at least 8 and at most 50 characters)';
        }
    }

    async requestChangePassword(e: Event) {
        e.preventDefault();
        if (this.emailValidated) {
            try {
                const response = await Axios.get(`http://${alzuhudLink}:8080/api/auth/send-forget-pass-email`, {
                    params: {
                        email: this.email,
                    }
                });



                this.snackIt({
                    message: `Reset Password Link has been sent to ${this.email}`,
                    color: 'success',
                    snackbar: true,
                })
            } catch (e) {
                console.log(e.response)
                if (e.response.data.error === 'user not found for current request infoes!')
                    this.snackIt({
                        message: `User does not exist`,
                        color: 'error',
                        snackbar: true,
                    });
                else
                    this.snackIt({
                        message: `Failed to Send Reset Password Link`,
                        color: 'error',
                        snackbar: true,
                    })
            } finally {
            }
        } else {
        }
    }
}
</script>

<style lang="scss" scoped>
    .sign-in {
        form.container {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: black;
            margin: 0;
            width: 100% !important;
            max-width: 100% !important;
            a {
                margin: 40px 0 70px;
                color: $foreground;
                text-decoration: none;
                align-self: center;
            }
        }

        .sign-in-up-action {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 74px;
            @media screen and (max-width: 960px) {
                margin-top: 100px;
            }
            div {
                align-self: center;
                font-size: 18px;
                color: #707070;
                font-weight: lighter;
                margin-bottom: 12px;
            }
        }
    }

    .header {
        font-size: 20px;
        margin-bottom: 23px;
    }

    .input {
        margin-bottom: 22px;
        &:last-of-type {
            margin-bottom: 30px;
        }
    }

    input[type="submit"] {
        width: 100%;
        margin-bottom: 81px;
    }
    
</style>
