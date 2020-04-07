<template>
    <div class="sign-in white">
        <AlzuhudHeader :light="true"></AlzuhudHeader>
        <PageInfo pageName="Sign Up" :routes="routes" style="margin-top: 60px;"></PageInfo>
        <form class="d-flex flex-column align-stretch align-md-center mx-4" @submit="submit">
            <div class="d-flex flex-column align-center" :style="{'max-width': $vuetify.breakpoint.mdAndUp ? '35%': ''}">
                <div class="header">Please enter your information</div>
                <div class="input">
                    <v-text-field outlined label="Name" v-model="name" :rules="[nameLength]"></v-text-field>
                </div>
<!--                <div class="input">-->
<!--                    <v-text-field outlined label="Username" :rules="[usernameLength]" v-model="username"></v-text-field>-->
<!--                </div>-->
                <div class="input">
                    <v-text-field outlined label="Email" :rules="[matchEmail]" v-model="email"></v-text-field>
                </div>
                <div class="input">
                    <v-text-field outlined label="Phone (e.g. +12345678)" @keypress="isNumber($event)" :rules="[phoneLength]" v-model="phone"></v-text-field>
                </div>
                <div class="input">
                    <v-text-field outlined label="Password" v-model="password" type="password" :rules="[passwordLength]"></v-text-field>
                </div>
                <div class="input">
                    <v-text-field outlined label="Confirm Password" v-model="confirmPassword" :rules="[matchPassword]" type="password"></v-text-field>
                </div>
                <!-- <alzInput class="input" inputTitle="Email" placeholder="Email"></alzInput> -->
                <!-- <alzInput class="input" inputTitle="Password" placeholder="Password"></alzInput> -->
                <!-- <alzInput class="input" inputTitle="Confirm Password" placeholder="Confirm Password"></alzInput> -->
                <v-btn x-large block rounded depressed color="primary" type="submit">Sign Up</v-btn>
                <div class="divider">
                    <div class="divider-content">
                        <div style="width: 40px; background: white;">Or</div>
                    </div>
                </div>
                <div class="d-block d-md-flex justify-space-between" style="width: 100%;" v-resize="changeBlock">
                    <!-- <SocialButton>Sign up with Google</SocialButton>
                    <SocialButton :isGoogle="false">Sign up with Facebook</SocialButton> -->
                    <v-btn x-large
                        color="grey"
                        outlined
                        rounded
                        :block="isBlock"
                        class="mb-4 mb-md-0 px-8 mr-md-3 font-weight-regular google-btn">
                        <img src="../assets/google.svg" class="mr-4">
                        Sign in with Google
                    </v-btn>
                    <v-btn x-large
                        outlined
                        rounded
                        :block="isBlock"
                        class=" px-6 font-weight-regular"
                        color="indigo">
                        <v-icon class="mr-4">mdi-facebook</v-icon>
                        Sign in with Facebook
                    </v-btn>
                </div>
                <div class="mt-12 sign-in-up-action">
                    <div>Already have an account?</div>
                    <v-btn x-large outlined rounded block color="primary" @click="changePage('sign-in')">Sign In</v-btn>
                </div>
                <!-- <SignInUp actionTitle="Already have an account?" actionName="Sign In" action="sign-in"></SignInUp> -->
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
import {InputValidationRules, NewUser} from '../../types/store';
import {Action} from 'vuex-class';

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
export default class SignUp extends Vue {
    routes: Array<string>;
    private isBlock: boolean = true;
    private email: string = '';
    private name: string = '';
    // private username: string = '';
    private phone: string = '+';
    private password: string = '';
    private confirmPassword: string = '';
    private emailValidated: boolean = false;
    private passwordValidated: boolean = false;
    private passwordLengthValidated: boolean = false;
    private nameLengthValidated: boolean = false;
    private phoneLengthValidated: boolean = false;
    // private usernameLengthValidated: boolean = false;
    @Action signup: (user: any) => Promise<void>;


    @Watch('phone')
    seePhone(newVal: any, oldVal: any) {
        if (newVal === '') {
            this.phone = '+';
        }
    }
    
    constructor() {
        super();
        this.routes = ['sign up'];
    }

    mounted(): void {
        this.changeBlock();
        document.title = 'Sign Up - Alzuhud';
    }
    
    matchEmail(value: string): boolean | string {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (pattern.test(value) && value.length >= 8 && value.length < 50) {
            this.emailValidated = true;
            return true;
        } else {
            this.emailValidated = false;
            return 'Invalid Email (at least 8 and at most 50 characters and must match name@example.com)';
        }
    }

    matchPassword(value: string): boolean | string {
        if (this.password === value) {
            this.passwordValidated = true;
            return true;
        } else {
            this.passwordValidated = false;
            return `Password doesn't match`;
        }
        
    }

    passwordLength(value: string): boolean | string {
        const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!!value) {
            if (pattern.test(value)) {
                this.passwordLengthValidated = true;
                return true;
            } else {
                this.passwordLengthValidated = false;
                return 'At least 8 characters and At most 30 characters must and contain at least one letter and one number';
            }
        }
        this.passwordLengthValidated = false;
        return 'Required';
    }

    phoneLength(value: string): boolean | string {
        if (!!value) {
            if (value.length < 20) {
                this.phoneLengthValidated = true;
                return true;
            } else {
                this.phoneLengthValidated = false;
                return 'At most 20 characters';
            }
        } else {
            this.phoneLengthValidated = false;
            return 'Required';
        }
    }

    nameLength(value: string): boolean | string {
        if (!!value) {
            if (value.length < 50) {
                this.nameLengthValidated = true;
                return true;
            } else {
                this.nameLengthValidated = false;
                return 'At most 50 characters';
            }
        } else {
            this.nameLengthValidated = false;
            return 'Required';
        }
    }

    // usernameLength(value: string): boolean | string {
    //     if (!!value) {
    //         if (value.length < 50) {
    //             this.usernameLengthValidated = true;
    //             return true;
    //         } else {
    //             this.usernameLengthValidated = false;
    //             return 'At most 50 characters';
    //         }
    //     }
    //     this.usernameLengthValidated = false;
    //     return 'Required';
    // }

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

    async submit(e: Event): Promise<boolean | void> {
        e.preventDefault();
        if(this.passwordValidated && this.emailValidated && this.passwordLengthValidated && this.phoneLengthValidated && this.nameLengthValidated) {
            try {
                await this.signup({
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                    phone: this.phone,
                    // username: this.username
                });
                this.$router.push('/sign-in');
            } catch (e) {

            } finally {
            }
            // return true;
        } else {
            // e.preventDefault();
        }
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
}
</script>

<style lang="scss">
    .google-btn {
        .v-btn__content {
            color: #404040 !important;
        }
    }


</style>

<style lang="scss" scoped>
    .sign-in {
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
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: black;
        }
        .header {
            font-size: 20px;
            margin-bottom: 23px;
        }

        .input {
            // margin-bottom: 22px;
            width: 100%;
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
            margin-bottom: 55px;
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
    }


</style>
