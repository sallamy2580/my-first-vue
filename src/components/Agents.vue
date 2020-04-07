<template>
  <v-app id="agents">
      <v-card>
          <v-card-title class="d-none d-md-flex headline" style="padding: 25px 35px 0px 35px;">Agents List
          <v-spacer></v-spacer>
          <v-text-field
                  outlined
                  label="Search in Name, Email and Phone"
                  prepend-inner-icon="mdi-magnify"
                  class="mx-0 mx-md-2 my-3 my-md-0"
                  style="max-width: 350px;"
                  @input="searchInAgents"
                  hide-details
          ></v-text-field>
          </v-card-title>
          <v-card-title class="d-md-none title mr-7 font-weight-regular" style="padding: 25px 35px 0px 35px;">Agents List
          <v-spacer></v-spacer>
          <v-text-field
                  outlined
                  label="Search in Name, Email and Phone"
                  prepend-inner-icon="mdi-magnify"
                  class="mx-0 mx-md-2 my-3 my-md-0"
                  style="max-width: 350px;"
                  @input="searchInAgents"
                  hide-details
          ></v-text-field>
          </v-card-title>
        <v-data-table
            :headers="headers"
            :items="agents"
            disable-pagination
            hide-default-footer
            class="table"
            :loading="tableLoading"
            :mobile-breakpoint="mobileBreakPoint"
        >
        <template v-slot:item.name="{ item }">
            <div style="white-space: nowrap;">{{ item.name }}</div>
        </template>
        <template v-slot:item.status="{ item }">
            <div style="white-space: nowrap;">{{ item.status }}</div>
        </template>
        <template v-slot:item.action="{ item }">
            <v-icon
                color="blue"
                class="mr-2"
                @click="editAgent(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                color="red"
                class="mr-2"
                @click="deleteAgent(item.id)"
            >
                mdi-delete
            </v-icon>
        </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="dialog" max-width="1200px">
          <v-card>
              <v-card-title>
                  <span class="headline">Edit Agent</span>
              </v-card-title>
              <v-form @submit="saveEdit">
                  <v-card-text>
                      <v-row>
                          <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                              <v-text-field :rules="[rules.required]" v-model="editedUser.name" outlined label="Full Name"></v-text-field>
                          </v-col>
                          <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                              <v-text-field :rules="[rules.required, rules.email]" v-model="editedUser.email" outlined label="Email"></v-text-field>
                          </v-col>
                          <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                              <v-text-field :rules="[rules.required]" v-model="editedUser.phone" outlined @keypress="isNumber($event)" label="Phone"></v-text-field>
                          </v-col>
                          <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                              <v-text-field :rules="[rules.required, rules.passMin]" type="password" v-model="editedUser.newPassword" outlined label="Password"></v-text-field>
                          </v-col>
                          <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                              <v-text-field :rules="[rules.required, rules.confirmedPass]" type="password" v-model="editedUser.confirmNewPassword" outlined label="Confirm Password"></v-text-field>
                          </v-col>
                          <v-col style="margin-bottom: -20px" cols="12" sm="6" md="4">
                              <v-select :rules="[rules.required]" v-model="editedUser.status" :items="UserStatusList" label="Status" outlined></v-select>
                          </v-col>
                      </v-row>
                  </v-card-text>

                  <v-card-actions style="margin-top: -25px">
                      <div class="d-none d-sm-flex flex-grow-1"></div>
                      <div class="d-none d-sm-flex">
                          <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                          <v-btn type="submit" :disabled="editedUser.newPassword!==editedUser.confirmNewPassword" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 mr-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                      </div>
                      <div class="d-sm-none" style="display: grid; justify-content: end; width: 100%; margin-right: 18px">
                          <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                          <v-btn type="submit" :disabled="editedUser.newPassword!==editedUser.confirmNewPassword" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 mr-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                      </div>
                  </v-card-actions>
              </v-form>
          </v-card>
      </v-dialog>
      <v-pagination v-model="page"
                    :length="pagesCount"
                    circle
                    :disabled="pagesCount === 1"
                    :total-visible="7"
                    class="mt-4"
                    @next="changePage($event)"
                    @previous="changePage($event)"
                    @input="changePage($event)"
      ></v-pagination>
  </v-app>
</template>

<script>
    import {mapMutations, mapState, mapActions, mapGetters} from 'vuex';
import Axios from 'axios';
    import alzuhudLink from "@/components/Functions/Functions";

    export default {
        data () {
            return {
                headers: [
                {
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Email', value: 'email' },
                { text: 'Phone', value: 'phone' },
                { text: 'Status', value: 'status' },
                { text: 'OP', value: 'action', sortable: false, align: 'center' }
                ],
                agents: [],
                tableLoading: true,

                dialog: false,
                passValid: true,

                rules: {
                    required: value => !!value || 'Required',
                    passMin:  pass => {
                        const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                        this.passValid = passPattern.test(pass);
                        return passPattern.test(pass) || 'At least 8 character and at least one letter and one number'
                    },
                    confirmedPass: cPass => cPass === this.editedUser.newPassword || 'Confirm password Not match',
                    email: e => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(e) || 'Enter a valid e-mail address.'
                    }
                },

                UserStatusList: [{text: 'active', value: 1}, {text: 'inactive', value: 2}, {text: 'removed', value: 3}, {text: 'banned', value: 4}],
                editedUser: {
                    id: null,
                    name: null,
                    email: null,
                    phone: null,
                    newPassword: null,
                    confirmNewPassword: null,
                    status: null,
                    token: this.token
                },
                saveLoading: false,
                pagesCount: 1,
                page: 1,
            }
        },
        computed: {
            ...mapGetters([
                'token'
            ])
        },
        methods: {
            ...mapMutations([
                'replaceRoute'
            ]),
            ...mapActions([
               'snackIt'
            ]),
            async deleteAgent(id) {
                if(confirm('Do you want to delete this user?')) {
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/users/delete/`+ id + '?token=' + this.token);
                        this.getAgents();

                        this.snackIt({message: 'Agent Deleted Successfully', color: 'success', snackbar: true});
                    } catch (e) {

                        this.snackIt({message: 'An Error Occurred! ' + e.response.data.error, color: 'error', snackbar: true});
                    }
                }
                else {

                }
            },
            async searchInAgents (search) {
                if (search !== undefined || null) {
                    this.tableLoading = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/users/all`, {
                            params: {
                                role: 2,
                                search: search,
                                token: this.token
                            }
                        }).finally(() => this.tableLoading = false);
                        let users = response.data.res.data;
                        this.pagesCount = response.data.res.last_page;
                        this.users = users.map(user => ({
                            id: user.id,
                            name: user.full_name,
                            // username: user.email,
                            email: user.email,
                            status: user.status,
                            phone: user.phone,
                            // lastAct: user.last
                            // password: '********',
                            lastAct: new Date(user.updated_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })
                        }));

                    } catch (e) {

                        this.tableLoading = false;
                        this.snackIt({
                            message: 'An error occurred while getting agents data ',
                            color: 'error',
                            snackbar: true
                        });
                    }
                }
            },

            editAgent (item) {
                // this.editedIndex = this.desserts.indexOf(item)
                this.editedUser = Object.assign(this.editedUser, item);
                switch (this.editedUser.status) {
                    case 'active' :
                        this.editedUser.status = 1;
                        break;
                    case 'inactive' :
                        this.editedUser.status = 2;
                        break;
                    case 'removed' :
                        this.editedUser.status = 3;
                        break;
                    case 'banned' :
                        this.editedUser.status = 4;
                        break;
                }

                this.dialog = true;
            },
            cancelEdit () {
                this.dialog = false;
            },
            async saveEdit (e) {
                e.preventDefault();
                this.saveLoading = true;
                try {
                    await Axios.post(`http://${alzuhudLink}:8080/api/users/update`, {
                        id: this.editedUser.id,
                        full_name: this.editedUser.name,
                        email: this.editedUser.email,
                        phone: this.editedUser.phone,
                        status: this.editedUser.status,
                        token: this.token
                    })
                        .finally(() => {
                            this.saveLoading = false;
                        });
                    this.getAgents();
                    this.snackIt({message: 'Agent Info Updated Successfully', color: 'success', snackbar: true});
                    /*let response = await fetch('http://alzuhud.com:8080/api/users/update', {
                        method: 'POST',
                        body: JSON.stringify(this.editedUser),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    */

                } catch (e) {
                    this.saveLoading = false;
                    this.snackIt({message: 'An Error Occurred! ' + e.response.data.error, color: 'error', snackbar: true});

                }
                if (this.editedUser.newPassword && this.editedUser.newPassword === this.editedUser.confirmNewPassword) {
                    this.changePassword();
                }
            },

            async changePassword() {
                try {
                    let resp = await Axios.post(`http://${alzuhudLink}:8080/api/admin/user/change-password`, {
                        id: this.editedUser.id,
                        password: this.editedUser.newPassword,
                        password_confirmation: this.editedUser.confirmNewPassword,
                        token: this.token,
                    }).finally();

                    this.snackIt({message: 'Agent Password Changed Successfully', color: 'success', snackbar: true});
                } catch (e) {
                    this.snackIt({message: 'An Error Occurred! ' + e.response.data.error, color: 'error', snackbar: true});
                }
            },

            async getAgents () {
                try {
                    let response = await Axios.get(`http://${alzuhudLink}:8080/api/users/all`,{
                        params: {
                            role: 2,
                            token: this.token
                        }}).finally(() => {this.tableLoading = false});
                    let agents = response.data.res.data;
                    this.pagesCount = response.data.res.last_page;
                    this.agents = agents.map( agent => ({
                        id: agent.id,
                        name: agent.full_name,
                        email: agent.email,
                        status: agent.status,
                        phone: agent.phone,
                        // password: '*******',
                        lastAct: new Date(agent.updated_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        })
                    }));

                } catch (e) {

                    this.snackIt({message: 'An Error Occurred while Getting Agents Data ', color: 'error', snackbar: true});
                }
            },

            async changePage(e) {
                if (e !== undefined) {
                    this.agents = [];
                    this.tableLoading = true;
                    try {
                        let response = await Axios.get(`http://${alzuhudLink}:8080/api/users/all`,{
                            params: {
                                role: 2,
                                token: this.token,
                                page: e,
                            }});
                        let agents = response.data.res.data;

                        this.agents = agents.map( agent => ({
                            id: agent.id,
                            name: agent.full_name,
                            email: agent.email,
                            status: agent.status,
                            phone: agent.phone,
                            // password: '*******',
                            lastAct: new Date(agent.updated_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })
                        }));

                    } catch (e) {

                        this.snackIt({message: 'An Error Occurred while Getting Agents Data ', color: 'error', snackbar: true});
                    } finally {
                        this.tableLoading = false;
                    }
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
            this.replaceRoute(['Agents']);
            this.$parent.$emit('update route');

            this.getAgents();
        }
    }
</script>

<style lang="scss" scoped>
    #agents{
        padding: 20px 20px;
    }

    @media screen and (max-width: 960px) {
        #agents{
            margin-top: 73px;
        }
    }
</style>
