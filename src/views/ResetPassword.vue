<template>
    <div class="sign-in white">
        <AlzuhudHeader :light="true"></AlzuhudHeader>
        <PageInfo pageName="Reset Password" :routes="routes" style="margin-top: 60px;"></PageInfo>
        <form class="container" @submit="submitNewPassword">
            <div class="d-flex flex-column" style="min-width: 40%;">
                <div class="header">Please enter your new password</div>
                <v-text-field outlined type="password" class="input" :rules="[passwordLength]" label="Password" v-model="password"></v-text-field>
                <v-text-field outlined type="password" class="input" :rules="[matchPassword]" label="Confirm Password" v-model="passwordConfirm"></v-text-field>
                <v-btn rounded block x-large color="primary" depressed class="mb-4" type="submit">Submit</v-btn>
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
    import {Vue, Component, Prop} from "vue-property-decorator";
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
export default class ResetPassword extends Vue {
    routes: Array<string>;
    @Prop() hashCode: string;
    password: string = '';
    passwordConfirm: string = '';
    passwordValidated: boolean = false;
    passwordLengthValidated: boolean = false;
    @Action snackIt: Function;
    /**
     *
     */
    constructor() {
        super();
        this.routes = ['sign in', 'forgot password', 'reset password'];
    }

    changePage(route: string) {
        this.$router.replace(`/${route}`);
    }

    mounted() {
        document.title = 'Reset Password - Alzuhud';
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

    async submitNewPassword(e: Event) {
        e.preventDefault();
        if (this.passwordLengthValidated && this.passwordValidated) {
            try {
                const response = await Axios.post(`http://${alzuhudLink}:8080/api/auth/change-password/${this.hashCode}`, {
                    password: this.password,
                    password_confirmation: this.passwordConfirm,
                });

                this.snackIt({
                    message: 'Password Changed Successfully',
                    color: 'success',
                    snackbar: true,
                });

                this.$router.push('/sign-in');
            } catch (e) {

                this.snackIt({
                    message: 'Password Change Failed',
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
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: black;
            padding: 20px;
            @media screen and (max-width: 960px) {
                align-items: stretch;
            }
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
