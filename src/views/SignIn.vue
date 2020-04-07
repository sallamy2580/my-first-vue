<template>
    <div class="sign-in white">
        <AlzuhudHeader :light="true"></AlzuhudHeader>
        <PageInfo pageName="Sign In" :routes="routes" style="margin-top: 60px;"></PageInfo>
        <form class="d-flex flex-column align-stretch align-md-center mx-4">
            <div class="d-flex flex-column align-center">
                <div class="header">Please enter your credentials</div>
                <div class="input">
                    <v-text-field hide-details outlined label="Email" v-model="username" :rules="[matchEmail]" @keyup.enter="Login"></v-text-field>
                </div>
                <div class="input">
                    <v-text-field hide-details outlined label="Password" type="password" v-model="password" @keyup.enter="Login"></v-text-field>
                </div>
                <v-btn x-large block rounded depressed color="primary" @click="Login">Sign In</v-btn>
                <div class="divider">
                    <div class="divider-content">
                        <div style="width: 40px; background: white;">Or</div>
                    </div>
                </div>
                <div class="d-block d-md-flex justify-space-between" style="width: 100%;" v-resize="changeBlock">
                    <!-- <SocialButton>Sign in with Google</SocialButton> -->
                    <v-btn x-large
                        color="grey"
                        outlined
                        rounded
                        :block="isBlock"
                        class="mb-4 mb-md-0 px-8 mr-md-3 font-weight-regular google-btn"
                        id="google-signin"
                        @click="loginGoogle">
                        <img src="../assets/google.svg" class="mr-4"
                        >
                        Sign in with Google
                    </v-btn>
                    <v-btn x-large
                        outlined
                        rounded 
                        :block="isBlock"
                        class="px-6 font-weight-regular"
                        color="indigo">
                        <v-icon class="mr-4">mdi-facebook</v-icon>
                        Sign in with Facebook
                    </v-btn>
                    <!-- <SocialButton :isGoogle="false">Sign in with Facebook</SocialButton> -->
                </div>
                <a class="my-12 mt-md-8 mb-md-12" @click="changePage('forgot-password')" style="font-weight: 600;">Forgot Password?</a>
                <div class="sign-in-up-action">
                    <div>Don't have an account?</div>
                    <v-btn x-large outlined rounded block class="" color="primary" @click="changePage('sign-up')">Sign Up</v-btn>
                </div>
            </div>
        </form>
<!--        <AppSection></AppSection>-->
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator';
import AlzuhudHeader from '@/components/AlzuhudHeader.vue';
import PageInfo from '@/components/PageInfo.vue';
import AppSection from '@/components/AppSection.vue';
import Footer from '@/components/Footer.vue';
import SocialButton from '@/components/SocialButton.vue';
import btn from '@/components/btn.vue';
import alzInput from '@/components/alzInput.vue';
import SignInUp from '@/components/SignInUp.vue';
import {State, Mutation, Action} from 'vuex-class';
import Axios from "axios";
import alzuhudLink from "@/components/Functions/Functions";


@Component({
    components: {
        AlzuhudHeader,
        PageInfo,
        AppSection,
        Footer,
        SocialButton,
        btn,
        alzInput,
        SignInUp
    }
})
export default class SignIn extends Vue {
    routes: Array<string>;
    private isBlock: boolean = false;
    // @ts-ignore
    @Mutation setAdminUser: (user: string) => void;
    // @ts-ignore
    @Action login: ({user: string, password: string}) => Promise<string>;
    private username: string = '';
    private password: string = '';
    private emailValidated = false;
    // @ts-ignore
    @Action snackIt: ({color: string, message: string, snackbar: boolean}) => void;
    @State adminUser: any;
    @Mutation setUserId: Function;
    @Mutation setFullName: Function;

    /**
     *
     */
    constructor() {
        super();

        this.routes = ['sign in'];
        this.changeBlock();
    }

    created() {

    }

    auth2 = {};
    async mounted() {

        this.changeBlock();
        document.title = 'Sign In - Alzuhud';
        window.scrollTo(0,0);
        window.addEventListener('message', (payload) => {
            console.log(payload.data);
            // @ts-ignore
            Cookies.set('token', payload.data.token);
            let role = payload.data.role;
            this.setUserId(payload.data.userId);
            this.setFullName(payload.data.fullName);
            this.setAdminUser(role[0].toUpperCase() + role.slice(1, role.length));
        }, false);
        // @ts-ignore
        // gapi.load('auth2', () => {
        //     // Retrieve the singleton for the GoogleAuth library and set up the client.
        //     // @ts-ignore
        //     this.auth2 = gapi.auth2.init({
        //         client_id: '690585364035-tma51au0acfb239gol2su3mho9r7b4bi.apps.googleusercontent.com',
        //         cookiepolicy: 'single_host_origin',
        //         // Request scopes in addition to 'profile' and 'email'
        //         //scope: 'additional_scope'
        //     });
        //     this.attachSignin(document.getElementById('google-signin'));
        // });



    }

    attachSignin(element: any) {
        console.log(element.id);
        // @ts-ignore
        this.auth2.attachClickHandler(element, {},
            // @ts-ignore
            async function(googleUser) {
                // @ts-ignore
                console.log(googleUser)
                try {
                    let response = await Axios.post(`http://${alzuhudLink}:8080/api/auth/socialite/callback/google`, googleUser);
                console.log(response);
                } catch (e) {
                    console.log(e.response)
                }
                // @ts-ignore
            }, function(error) {
                alert(JSON.stringify(error, undefined, 2));
            });
    }


    matchEmail(value: string): boolean | string {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (pattern.test(value)) {
            this.emailValidated = true;
            return true;
        } else {
            this.emailValidated = false;
            return 'Invalid e-mail.';
        }
    }

    async Login(): Promise<void> {
        try {
            if (this.emailValidated) {
                let role = await this.login({user: this.username, password: this.password});
                if (role !== 'error') {

                    this.setAdminUser(role[0].toUpperCase() + role.slice(1, role.length));
                    if (role.toLowerCase() === 'user') {
                        this.$router.push('/user-admin');
                    } else {
                        this.$router.push('/admin/dashboard');
                    }
                } else {
                    this.snackIt({
                        message: 'Incorrect Email or Password',
                        color: 'error',
                        snackbar: true,
                    })
                }
            } else {
                this.snackIt({
                    message: 'Incorrect Email or Password',
                    color: 'error',
                    snackbar: true,
                })
            }
        } catch (e) {
            // this.snackIt({
            //     message: ,
            //     color: 'error',
            //     snackbar: true,
            // })
        }
    }

    async loginGoogle() {
        // let response = await Axios.get('http://alzuhud.com:8080/socialite/redirect/facebook');
        // @ts-ignore
        this.$auth.authenticate('google').then(async response => {
           let response1 = await Axios.post(`http://${alzuhudLink}:8080/api/auth/socialite/callback/google`);
           console.log(response1);
        });
    }

    changePage(route: string) {
        this.$router.replace(`/${route}`);
    }

    changeBlock(): void {
        let width = document.body.clientWidth;
        if (width < 960) {
            this.isBlock = true;
        } else {
            this.isBlock = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-info {
        @media screen and (max-width: 960px) {
            margin: 0 3%;
        }
    }

    .sign-in {
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: black;
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
        width: 100%;
        margin-bottom: 22px;
        &:last-of-type {
            margin-bottom: 30px;
        }
    }

    input[type="text"] {
        width: 100%;
        padding: 14px 25px;
        border: 1px solid #BDBDBD;
        border-radius: 7px; 
        outline: none;
        box-sizing: border-box;
    }

    input[type="submit"] {
        width: 100%;
    }

    .input-title {
        font-size: 16px;
        font-weight: lighter;
        color: #707070;
    }

    .divider {
        border: 1px solid #BDBDBD;
        width: 100%;
        position: relative;
        margin: 28px 0;
    }

    .divider-content {
        position: absolute;
        top: -12px;
        z-index: 2;
        color: #707070;
        font-size: 16px;
        font-weight: lighter;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .social {
        display: flex;
        justify-content: space-between;
    }

    .action {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 74px;
        div {
            align-self: center;
            font-size: 18px;
            color: #707070;
            font-weight: lighter;
            margin-bottom: 12px;
        }
    }
    
</style>
