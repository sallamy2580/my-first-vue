<template>
  <div id="adminSettings">
      <div class="panel-title">{{language === 'ar' ? makeArabic(panelTitle): panelTitle}}</div>
      <AdminPageInfo class="mb-5" :adminUser="adminUser" :routes="routes"></AdminPageInfo>
      <v-card style="padding: 0 15px; margin-bottom: 35px;">
        <v-card-title style="font-size:14pt; margin-bottom: 10px; " :style="{'direction': language === 'ar' ? 'rtl': ''}">{{language === 'ar'? 'معلوماتي':'Information'}}</v-card-title>
        <v-form @submit="updateUser">
            <v-row class="px-5">
                <v-col cols="12" md="4">
                    <v-text-field :rules="[rules.required]" v-model="adminSettings.full_name" outlined :label="language === 'ar'? 'الاسم الکامل':'Full Name'"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field :rules="[rules.required, rules.email]" v-model="adminSettings.email" outlined :label="language === 'ar'? 'الايميل':'Email'"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field :rules="[rules.required]" v-model="adminSettings.phone" outlined :label="language === 'ar'? 'رقم جوال':'Phone Number'"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-autocomplete single-line outlined :label="language === 'ar'? 'الدولة':'Your Country'" v-model="SelectedCountry" :items="countries"></v-autocomplete>
                </v-col>
                <v-col cols="12" md="4">
                    <v-autocomplete single-line outlined :label="language === 'ar'? 'الولاية/المنطقة':'Your State'" :items="states" :disabled="selectedCountry === -1 || states.length === 0" v-model="SelectedState"></v-autocomplete>
                </v-col>
                <v-col cols="12" md="4">
                    <v-autocomplete single-line outlined :label="language === 'ar'? 'المدينة':'Your City'" :items="cities" :disabled="selectedCountry === -1" v-model="selectedCity"></v-autocomplete>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="adminSettings.postalCode" @keypress="isNumber($event)" outlined :label="language === 'ar'? 'صندوق البريد':'Postal Code'"></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                    <v-text-field v-model="adminSettings.address" outlined :label="language === 'ar'? 'العنوان':'Address'"></v-text-field>
                </v-col>
            </v-row>
            <div id="btn-container">
                <v-btn max-width="150" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important; font-weight:bold;" type="submit">{{language === 'ar'? 'حفظ':'Save Changes'}}</v-btn>
            </div>
        </v-form>
      </v-card>
      <v-card style="padding: 0 20px;">
        <v-card-title style="font-size:14pt; margin-bottom: 10px; " :style="{'direction': language === 'ar' ? 'rtl': ''}">{{language === 'ar'? 'الأمن':'Security'}}</v-card-title>
        <v-form ref="form" @submit="changePassword">
            <v-row class="px-5">
                <v-col cols="12" md="4">
                    <v-text-field :rules="[rules.required, rules.passMin]" type="password"
                                  v-model="adminSettings.oldPassword" outlined :label="language === 'ar'? 'كلمة المرور القديمة':'Old Password'"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field :rules="[rules.required, rules.passMin]" type="password"
                                  v-model="adminSettings.newPassword" outlined :label="language === 'ar'? 'كلمة المرور الجديدة':'New Password'"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field :rules="[rules.required, rules.confirmedPass]" type="password"
                                  v-model="adminSettings.confirmNewPassword" outlined
                                  :label="language === 'ar'? 'الاسم الکامل':'Confirm Password'"></v-text-field>
                </v-col>
            </v-row>
            <div id="btn-container">
                <v-btn max-width="150" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important; font-weight:bold;" type="submit">{{language === 'ar'? 'حفظ':'Save Changes'}}</v-btn>
            </div>
        </v-form>
      </v-card>
  </div>
</template>

<script lang="ts">
  import {Action, Getter, Mutation, State} from "vuex-class";
import {Vue, Component} from 'vue-property-decorator';
import AdminPageInfo from './AdminPageInfo.vue';
import Axios from "axios";
  import alzuhudLink, {makeArabic} from "@/components/Functions/Functions";

@Component({
    components: {
        AdminPageInfo
    }
})
export default class UserSettings extends Vue {
    @State adminUser: string;
    @State routes: string[];
    // @State username: string;
    @State userId: number;
    @Getter token: string;
    @Mutation setFullName: Function;

    // @ts-ignore
    @Mutation replaceRoute;
    @Action snackIt: any;
    @State countries: any[];
    private selectedCountry: any = -1;
    private states: any[] = [];
    private selectedState: any = -1;
    private cities: any[] = [];
    private selectedCity: any = -1;
    private address: string = '';
    @State language: any;

    private get SelectedCountry(): any {
      return this.selectedCountry;
    }

    private set SelectedCountry(val: any) {
      this.selectedCountry = val;
      this.getStates();
      this.getCities();
    }

    private get SelectedState(): any {
      return this.selectedState;
    }

    private set SelectedState(val: any) {
      this.selectedState = val;
      this.getCities(true);
    }

    async getStates() {
      try {
        const response = await Axios.get(`http://${alzuhudLink}:8080/api/guest/states`, {
          params: {
            country_id: this.selectedCountry,
          }
        });

        this.states = response.data.res.map((item: any) => ({
          text: item.stateName,
          value: item.stateId,
        })).sort((a: any,b: any) => {
          return a.text > b.text;
        });


      } catch (e) {
        throw e;
      }
    }

    makeArabic(str: string) {
        return makeArabic(str);
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

    async getCities(hasState: boolean = false) {
    if (hasState) {
      try {
        const response = await Axios.get(`http://${alzuhudLink}:8080/api/guest/cities`, {
          params: {
            country_id: this.selectedCountry,
            state_id: this.selectedState,
          }
        });

        this.cities = response.data.res.map((item: any) => ({
          text: item.cityName,
          value: item.cityId,
        })).sort((a: any,b: any) => {
          return a.text > b.text;
        });


      } catch (e) {
        throw e;
      }
    } else {
      try {
        const response = await Axios.get(`http://${alzuhudLink}:8080/api/guest/cities`, {
          params: {
            country_id: this.selectedCountry,
          }
        });

        this.cities = response.data.res.map((item: any) => ({
          text: item.cityName,
          value: item.cityId,
        }))


      } catch (e) {
        throw e;
      }
    }
  }

    panelTitle: string = 'Settings';
    adminSettings = {
        full_name: '',
        email: '',
        phone: '',
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        status: '',
        country: '',
        city: '',
        state: '',
        postalCode: '',
        address: '',
    };

    rules = {
        // @ts-ignore
        required: value => !!value || 'Required',
        // @ts-ignore
        passMin: pass => pass !== null && pass.length >= 8 || 'At least 8 character',
        // @ts-ignore
        confirmedPass: cPass => {
          return cPass === this.adminSettings.newPassword || 'Confirm password Not match'
        },
        // @ts-ignore
        email: e => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(e) || 'Enter a valid e-mail address.'
        }
    };

    async mounted () {
        this.replaceRoute(['Settings']);
        const response = await Axios.get(`http://${alzuhudLink}:8080/api/auth/me`, {
          params: {
            token: this.token,
          }
        });

        this.adminSettings = Object.assign(this.adminSettings, response.data);
        this.adminSettings.postalCode = response.data.postal_code;
        this.selectedCountry = response.data.country_id;
        this.selectedState = response.data.state_id;
        this.selectedCity = response.data.city_id;
    }

    async updateUser(e: Event) {
        e.preventDefault();
        try {
          const response = await Axios.post(`http://${alzuhudLink}:8080/api/users/update`, {
            id: this.userId,
            full_name: this.adminSettings.full_name,
            email: this.adminSettings.email,
            phone: this.adminSettings.phone,
            country_id: this.selectedCountry,
            state_id: this.selectedState,
            city_id: this.selectedCity,
            address: this.adminSettings.address,
            postal_code: this.adminSettings.postalCode,
            token: this.token,
          });

          if (!!this.adminSettings.full_name)
              this.setFullName(this.adminSettings.full_name);

          this.snackIt({
            color: 'success',
            message: 'Your Data was Changed Successfully',
            snackbar: true,
          });
        } catch (e) {
          this.snackIt({
            color: 'error',
            message: 'Failed to Change Data',
            snackbar: true,
          });
        }
    }

    async changePassword(e: Event) {
    e.preventDefault();
      try {
        const response = await Axios.post(`http://${alzuhudLink}:8080/api/users/change-password`, {
          id: this.userId,
          old_pass: this.adminSettings.oldPassword,
          password: this.adminSettings.newPassword,
          password_confirmation: this.adminSettings.confirmNewPassword,
          token: this.token,
        });

        this.snackIt({
          color: 'success',
          message: 'Password Changed Successfully',
          snackbar: true,
        });

        this.adminSettings.oldPassword = '';
        this.adminSettings.newPassword = '';
        this.adminSettings.confirmNewPassword = '';
      } catch (e) {

        this.snackIt({
          color: 'error',
          message: 'Failed to Change Password',
          snackbar: true,
        });
      } finally {
          // @ts-ignore
          this.$refs.form.reset();
      }
    }
}
</script>

<style lang="scss" scoped>
    #adminSettings{
        padding: 0 0 10px;
    }

    #containert00{
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 25px;
    }
    #containert01{
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 25px;
    }
    #btn-container{
        padding: 5px 20px 25px 0;
        display: grid;
        grid-template-columns: auto;
    }
</style>
