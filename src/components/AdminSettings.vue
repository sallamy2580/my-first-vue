<template>
  <v-app id="adminSettings">
      <v-card style="padding: 0 15px; margin-bottom: 35px;">
        <v-card-title style="font-size:14pt; margin-bottom: 10px; ">Information</v-card-title>
        <v-form @submit="updateUser">
            <div class="container00">
                <v-text-field :rules="[rules.required]" v-model="adminSettings.full_name" outlined label="Full Name"></v-text-field>
                <v-text-field :rules="[rules.required, rules.email]" v-model="adminSettings.email" outlined label="Email"></v-text-field>
                <v-text-field :rules="[rules.required]" v-model="adminSettings.phone" @keypress="isNumber($event)" @keyup.enter="updateUser" outlined label="Phone"></v-text-field>
            </div>
            <div class="btn-container">
                <v-btn type="submit" max-width="150" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important; font-weight:bold;">Save Changes</v-btn>
            </div>
        </v-form>
      </v-card>
      <v-card style="padding: 0 15px;">
        <v-card-title style="font-size:14pt; margin-bottom: 10px; ">Security</v-card-title>
        <v-form @submit="changePassword">
            <div class="container01">
                <v-text-field :rules="rules.required" type="password" v-model="adminSettings.oldPass" outlined label="Old Password"></v-text-field>
                <v-text-field :rules="[rules.required, rules.passMin]" type="password" v-model="adminSettings.newPassword" outlined label="Password"></v-text-field>
                <v-text-field :rules="[rules.required, rules.confirmedPass]" type="password" v-model="adminSettings.confirmNewPassword" outlined label="Confirm Password"></v-text-field>
            </div>
            <div class="btn-container">
                <v-btn type="submit" :disabled="adminSettings.newPassword!==adminSettings.confirmNewPassword" max-width="150" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important; font-weight:bold;">Save Changes</v-btn>
            </div>
        </v-form>
      </v-card>
  </v-app>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
import Axios from "axios";
  import alzuhudLink from "@/components/Functions/Functions";

    export default {
        data () {
            return {
                adminSettings: {
                    id: '',
                    full_name: '',
                    email: '',
                    phone: '',
                    oldPass: '',
                    newPassword: '',
                    confirmNewPassword: ''
                },
                rules: {
                    required: value => !!value || 'Required',
                    passMin:  pass => {
                        const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                        return passPattern.test(pass) || 'At least 8 character and at least one letter and one number'
                    },
                    confirmedPass: cPass => cPass === this.adminSettings.newPassword || 'Confirm password Not match',
                    email: e => {
                                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                return pattern.test(e) || 'Enter a valid e-mail address.'
                                }
                }
            }
        },
        computed: {
          ...mapGetters([
              'token'
          ])
        },
        methods: {
            ...mapMutations([
                'replaceRoute',
                'setFullName',
            ]),
            ...mapActions([
                'snackIt'
            ]),
            async getUserInfo() {
                try {
                    const response = await Axios.get(`http://${alzuhudLink}:8080/api/auth/me`, {
                        params: {
                            token: this.token,
                        }
                    });

                    this.adminSettings = Object.assign(this.adminSettings, response.data);
                }
                catch (e) {
                    // this.snackIt({message: 'An error***** occurred! ' + e.response.data.error, color: 'error', snackbar: true});
                }
            },

            async updateUser(e) {
                e.preventDefault();
                try {
                    const response = await Axios.post(`http://${alzuhudLink}:8080/api/users/update`, {
                            id: this.adminSettings.id,
                            full_name: this.adminSettings.full_name,
                            email: this.adminSettings.email,
                            phone: this.adminSettings.phone,
                            token: this.token
                    });
                    if (!!this.adminSettings.full_name)
                        this.setFullName(this.adminSettings.full_name);
                    this.snackIt({message: 'Your info updated successfully', color: 'success', snackbar: true});
                } catch (e) {

                    this.snackIt({message: 'An Error Occurred! ' + e.response.data.error, color: 'error', snackbar: true});
                }

            },

            async changePassword(e) {
                e.preventDefault();
                try {
                    const response = await Axios.post(`http://${alzuhudLink}:8080/api/users/change-password`, {
                        id: this.adminSettings.id,
                        old_pass: this.adminSettings.oldPass,
                        password: this.adminSettings.newPassword,
                        password_confirmation: this.adminSettings.confirmNewPassword,
                        token: this.token,
                    });
                    this.snackIt({message: 'Your Password Changed Successfully', color: 'success', snackbar: true});
                }
                catch (e) {

                    this.snackIt({message: 'An error occurred! ' + e.response.data.error, color: 'error', snackbar: true});
                }
            },
            isNumber(evt) {
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
        },
        mounted () {
            this.replaceRoute(['Settings']);
            this.$parent.$emit('update route');
            this.getUserInfo();
        }
    }
</script>

<style lang="scss" scoped>
    #adminSettings{
        padding: 10px 20px;
    }
    .container00{
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 25px;
    }
    .container01{
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 25px;
    }
    .btn-container{
        margin: 5px 20px 25px 0;
        display: grid;
        grid-template-columns: auto;
    }

    @media screen and (max-width: 600px){
        .container00{
            padding: 0 20px;
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 25px;
        }
        .container01{
            padding: 0 20px;
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 25px;
        }
    }
</style>
