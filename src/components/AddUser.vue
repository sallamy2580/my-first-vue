<template>
  <v-app id="addUser">
      <v-card style="padding: 0 15px;">
        <v-card-title class="title font-weight-regular" style="margin-bottom: 10px; ">User Information</v-card-title>
        <v-form @submit="addUser">
            <div id="container00">
                <v-text-field :rules="[rules.required]" v-model="newUser.name" outlined label="Full Name"></v-text-field>
                <v-text-field :rules="[rules.required, rules.email]" v-model="newUser.email" outlined label="Email"></v-text-field>
                <v-text-field :rules="[rules.required]" v-model="newUser.phone" outlined label="Phone"></v-text-field>
                <v-text-field :rules="[rules.required, rules.passMin]" type="password" v-model="newUser.password" outlined label="Password"></v-text-field>
                <v-text-field :rules="[rules.required, rules.confirmedPass]" type="password" v-model="newUser.confirmPassword" outlined label="Confirm Password"></v-text-field>
                <v-select :rules="[rules.required]" v-model="newUser.status" :items="UserStatusList" label="Status" outlined></v-select>
            </div>
            <div id="btn-container">
                <v-btn type="submit" :loading="addLoading" :disabled="newUser.password !== newUser.confirmPassword" max-width="150" class="font-weight-regular body-1 px-12" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Add User</v-btn>
            </div>
        </v-form>
      </v-card>
  </v-app>
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex';
import Axios from 'axios';
import alzuhudLink from "@/components/Functions/Functions";

    export default {
        data () {
            return {
                newUser: {
                    name: null,
                    email: null,
                    phone: null,
                    password: null,
                    confirmPassword: null,
                    status: null,
                    role: 5
                },
                addLoading: false,

                UserStatusList: [{text: 'active', value: 1}, {text: 'inactive', value: 2}, {text: 'removed', value: 3}, {text: 'banned', value: 4}],
                rules: {
                    required: value => !!value || 'Required',
                    passMin:  pass => {
                        const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                        return passPattern.test(pass) || 'At least 8 character and at least one letter and one number'
                    },
                    confirmedPass: cPass => cPass === this.newUser.password || 'Confirm password Not match',
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
                'changePanelTitle'
            ]),
            ...mapActions([
                'snackIt'
            ]),
            async addUser (e) {
                e.preventDefault();
                this.addLoading = true;
                try {
                    let resp = await Axios.post(`http://${alzuhudLink}:8080/api/users/add`, {
                        full_name: this.newUser.name,
                        password: this.newUser.password,
                        password_confirmation: this.newUser.confirmPassword,
                        email: this.newUser.email,
                        phone: this.newUser.phone,
                        status: this.newUser.status,
                        role: this.newUser.role,
                        token: this.token,
                    }).finally(this.addLoading = false);


                    this.snackIt({message: 'User added successfully', color: 'success', snackbar: true});
                } catch (e) {

                    this.snackIt({message: 'An error occurred! ' + e.response.data.error, color: 'error', snackbar: true});
                }
            }
        },
        mounted () {
            this.replaceRoute(['Users','Add User']);
            this.$parent.$emit('update route');
        }
    }
</script>

<style lang="scss" scoped>
    #addUser{
        padding: 10px 20px;
    }
    #container00{
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 25px;
    }
    #btn-container{
        margin: 5px 20px 25px 0;
        display: grid;
        grid-template-columns: auto;
    }

    @media screen and (max-width: 600px){
        #container00{
            padding: 15px 20px;
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 25px;
        }
    }
</style>
