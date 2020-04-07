<template>
  <v-app id="addAgent">
      <v-card style="padding: 0 15px;">
        <v-card-title class="title font-weight-regular">Agent Information</v-card-title>
        <v-form @submit="addAgent">
            <div id="container00">
                <v-text-field :rules="[rules.required]" v-model="newAgent.name" outlined label="Full Name"></v-text-field>
                <v-text-field :rules="[rules.required, rules.email]" v-model="newAgent.email" outlined label="Email"></v-text-field>
                <v-text-field :rules="[rules.required]" v-model="newAgent.phone" outlined label="Phone"></v-text-field>
                <v-text-field :rules="[rules.required, rules.passMin]" type="password" v-model="newAgent.password" outlined label="Password"></v-text-field>
                <v-text-field :rules="[rules.required, rules.confirmedPass]" type="password" v-model="newAgent.confirmPassword" outlined label="Confirm Password"></v-text-field>
                <v-select :rules="[rules.required]" v-model="newAgent.status" :items="AgentStatusList" label="Status" outlined></v-select>
            </div>
            <div id="btn-container">
                <v-btn type="submit" :loading="addLoading" :disabled="newAgent.password !== newAgent.confirmPassword" max-width="150" class=" body-1 px-12" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;   ">Add Agent</v-btn>
            </div>
        </v-form>
      </v-card>
  </v-app>
</template>

<script>
  import {mapMutations, mapActions, mapState, mapGetters} from 'vuex';
import Axios from 'axios';
  import alzuhudLink from "@/components/Functions/Functions";

    export default {
        data () {
            return {
                newAgent: {
                    name: null,
                    email: null,
                    phone: null,
                    password: null,
                    confirmPassword: null,
                    status: null,
                    role: 2
                },
                addLoading: false,
                AgentStatusList: [{text: 'active', value: 1}, {text: 'inactive', value: 2}, {text: 'removed', value: 3}, {text: 'banned', value: 4}],
                rules: {
                    required: value => !!value || 'Required',
                    passMin:  pass => {
                        const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                        return passPattern.test(pass) || 'At least 8 character and at least one letter and one number'
                    },
                    confirmedPass: cPass => cPass === this.newAgent.password || 'Confirm password Not match',
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
            async addAgent () {
                this.addLoading = true;
                try {
                    let resp = await Axios.post(`http://${alzuhudLink}:8080/api/users/add`, {
                        full_name: this.newAgent.name,
                        password: this.newAgent.password,
                        password_confirmation: this.newAgent.confirmPassword,
                        email: this.newAgent.email,
                        phone: this.newAgent.phone,
                        status: this.newAgent.status,
                        role: this.newAgent.role,
                        token: this.token,
                    }).finally(this.addLoading = false);
                    this.snackIt({message: 'User added successfully', color: 'success', snackbar: true});
                } catch (e) {
                    this.snackIt({
                        message: 'An error occurred! ' + e.response.data.error,
                        color: 'error',
                        snackbar: true
                    });
                }
            }
        },
        mounted () {
            this.replaceRoute(['Agents','Add Agent']);
            this.$parent.$emit('update route');
        }
    }
</script>

<style lang="scss" scoped>
    #addAgent{
        padding: 20px 20px;
    }
    #container00{
        padding: 15px 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 25px;
    }
    #btn-container{
        margin: 0 20px 25px 0;
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
