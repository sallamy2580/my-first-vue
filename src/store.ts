import Vue from 'vue';
import Vuex, {ActionTree, GetterTree, MutationTree} from 'vuex';
import {NewUser, RootState} from '../types/store';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
import Axios from 'axios';
import alzuhudLink, {toBase64} from '@/components/Functions/Functions';

Vue.use(Vuex);

// @ts-ignore
// @ts-ignore
const state: RootState = {
  adminUser: '',
  routes: [],
  page: 1,
  selection: 'credit-card',
  panelTitle: 'xxxxx',
  drawer: false,
  // username: '',
  userId: null,
  token: '',
  ticketId: null,
  hotel: {},
  flight: {},
  snackbar: false,
  color: 'primary',
  message: '',
  fullName: '',
  countries: [],
  bookingId: null,
  flightsTab: 'availFlights',
  country: {},
  state: {},
  city: {},
  package: {},
  numAdults: 0,
  numChildren: 0,
  numNights: 0,
  remarks: '',
  adults: [],
  children: [],
  bookingName: '',
  bookingPhone: '',
  language: 'en',
  tabModel: 0,
  title: '',
  package_id: -1,
  packageId: -1,
  isPriceApplied: true,
};

const getters: GetterTree<RootState, RootState> = {
  totalPrice(state) {
    // @ts-ignore
    return (state.package.price || 0);
  },
  totalPackagePrice(state) {
    if (state.package !== {}) {
      return state.package.price;
    }

    if(state.hotel !== {} || state.flight !== {}) {
      // @ts-ignore
      return (state.hotel.price || 0) + (state.flight.price || 0);
    }
    return 0;
  },
  token(state) {
    return state.token;
  },
};

const mutations: MutationTree<RootState> = {
  addRoute(state, route: string): void {
    state.routes.push(route);
  },
  replaceRoute(state, routeArray: string[]): void {
    state.routes = routeArray;
  },
  popRoute(state): void {
    state.routes.pop();
  },
  changeUser(state, newUser: string): void {
    state.adminUser = newUser;
  },
  incrementPage(state): void {
    state.page++;
  },
  decrementPage(state): void {
    state.page--;
  },
  changeSelection(state, value: string): void {
    state.selection = value;
  },
  changePanelTitle(state, value: string): void {
    state.panelTitle = value;
  },
  toggleDrawer(state): void {
    state.drawer = !state.drawer;
  },
  setDrawer(state, payload: boolean): void {
    state.drawer = payload;
  },
  setAdminUser(state, payload: string): void {
    state.adminUser = payload;
  },
  setPage(state, payload: number): void {
    state.page = payload;
  },
  setTicketId(state, payload: number): void {
    state.ticketId = payload;
  },
  setHotel(state, payload: {props?:any}): void {
    state.hotel = payload;
  },
  setFlight(state, payload: {props?:any}): void {
    state.flight = payload;
  },
  setSnackbar(state, payload: boolean): void {
    state.snackbar = payload;
    setTimeout(() => {
      state.snackbar = false;
    }, 3000);
  },
  setColor(state, payload: string): void {
    state.color = payload;
  },
  setMessage(state, payload: string): void {
    state.message = payload;
  },
  setBookingId(state, payload: number): void {
    state.bookingId = payload;
  },
  setCountry(state, payload: any) {
    state.country = payload;
  },
  setState(state, payload: any) {
    state.state = payload;
  },
  setCity(state, payload: any) {
    state.city = payload;
  },
  setPackage(state, payload: any) {
    state.package = payload;
  },
  setNumAdults(state, payload: any) {
    state.numAdults = payload;
  },
  setNumChildren(state, payload: any) {
    state.numChildren = payload;
  },
  setNumNights(state, payload: any) {
    state.numNights = payload;
  },
  setRemarks(state, payload: any) {
    state.remarks = payload;
  },
  setAdults(state, payload: any) {
    state.adults = payload;
  },
  setChildren(state, payload: any) {
    state.children = payload;
  },
  setBookingName(state, payload: any) {
    state.bookingName = payload;
  },
  setBookingPhone(state, payload: any) {
    state.bookingPhone = payload;
  },
  resetBooking(state) {
    state.bookingName = '';
    state.bookingPhone = '';
    state.children = [];
    state.adults = [];
    state.numAdults = 0;
    state.numChildren = 0;
    state.numNights = 0;
    state.country = {};
    state.flight = {};
    state.hotel = {};
    state.package = {};
    state.title = '';
    state.package_id = -1;
    state.remarks = '';
    state.date = '';
    state.date2 = '';
    state.city = {};
    state.state = {};
    state.isPriceApplied = true;
  },
  setLanguage(state, payload: string) {
    state.language = payload;
  },
  setTabModel(state, payload: any) {
    state.tabModel = payload;
  },
  setTitle(state, payload: any) {
    state.title = payload;
  },
  setPackageId(state, payload: any) {
    state.package_id = payload;
  },
  setDate(state, payload: any) {
    state.date = payload;
  },
  setDate2(state, payload: any) {
    state.date2 = payload;
  },
  changeFlightsTab(state, payload: string): void {
    state.flightsTab = payload;
  },
  setFullName(state, payload: any) {
    state.fullName = payload;
  },
  setUserId(state, payload: any) {
    state.userId = payload;
  },
  clearStore(state) {

    const newState = {
      // adminUser: '',
      routes: [],
      page: 1,
      selection: 'credit-card',
      panelTitle: 'Tab Title',
      drawer: false,
      // username: '',
      // userId: null,
      token: '',
      ticketId: null,
      hotel: {},
      flight: {},
      snackbar: false,
      color: 'primary',
      message: '',
      // fullName: '',
    };
    for (const key of Object.keys(state)) {
      (state as any)[key] = (newState as any)[key];
    }

    Object.assign(state, newState);
  },
  setToken(state) {
    // @ts-ignore
    state.token = !!Cookies.get('token') ? Cookies.get('token') : '';
  },
  selectPackageId(state, payload: any) {
    state.packageId = payload;
  },
  setPriceApplied(state, payload) {
    state.isPriceApplied = payload;
  }
};

const actions: ActionTree<RootState, RootState> = {
  async login(context, payload: {user: string, password: string}): Promise<string> {

    try {
      const response = await axios.post(`http://${alzuhudLink}:8080/api/auth/login`, {
        // body: {
          email: payload.user,
          password: payload.password,
        // },
      });
      context.commit('setSnackbar', true);
      context.commit('setColor', 'success');
      context.commit('setMessage', 'Logged in successfully');
      // @ts-ignore
      Cookies.set('token', response.data.access_token, {expires: response.data.expires_in});
      context.state.token = response.data.access_token;
      context.state.userId = response.data.user.id;
      context.state.fullName = response.data.user.full_name;

      return response.data.user.role;
    } catch (error) {
      context.commit('setSnackbar', true);
      context.commit('setColor', 'error');
      context.commit('setMessage', error.response.data.error);
      throw error;
    }
  },

  async signup(context, payload: any) {

    // try {
      // const response = await axios.post(`http://${alzuhudLink}:8080/api/auth/register`, {
      //
      // });
      const body = {
        // @ts-ignore
        email: payload.email,
        // username: payload.username,
        full_name: payload.name,
        password: payload.password,
        password_confirmation: payload.confirmPassword,
        phone: payload.phone,
      };
      const response = await fetch(`http://${alzuhudLink}:8080/api/auth/register`, {
        // @ts-ignore
        body: JSON.stringify(body),
        method: 'POST',
        // mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const resp = await response.json();
      if (response.status !== 201) {
        for (let i = 0; i < resp.error.length; i++) {
          if (i > 0) {
            setTimeout(() => {
              context.commit('setSnackbar', true);
              context.commit('setColor', 'error');
              context.commit('setMessage', resp.error[i]);
            }, i * 3500);
          } else {

            context.commit('setSnackbar', true);
            context.commit('setColor', 'error');
            context.commit('setMessage', resp.error[i]);
          }
        }
        throw 'done';
      }
      else {
        // const message = await response.json();
        context.commit('setSnackbar', true);
        context.commit('setColor', 'success');
        context.commit('setMessage', 'A verification email has been sent to ' + payload.email);
      }
    // } catch (error) {

    // }
  },

  async logout(context) {
    try {
      let response = await axios.post(`http://${alzuhudLink}:8080/api/auth/logout`, {
        // @ts-ignore
        token: Cookies.get('token'),
      });

    } catch (e) {
      // throw e;
    } finally {
      context.state.fullName = '';
      context.state.userId = null;
      context.state.token = '';
      // @ts-ignore
      Cookies.remove('token');
    }
  },
  snackIt(context, payload: {message: string, color: string, snackbar: boolean}) {
    context.commit('setSnackbar', payload.snackbar);
    context.commit('setColor', payload.color);
    context.commit('setMessage', payload.message);
  },
  clearStore(context) {

    return new Promise((resolve, reject) => {
      const newState = {
        // adminUser: '',
        routes: [],
        page: 1,
        selection: 'credit-card',
        panelTitle: 'Tab Title',
        drawer: false,
        // username: '',
        // userId: null,
        token: '',
        ticketId: null,
        hotel: {},
        flight: {},
        snackbar: false,
        color: 'primary',
        message: '',
        // fullName: '',
        packageId: -1,
        isPriceApplied: true,
      };
      for (const key of Object.keys(context.state)) {
        (context.state as any)[key] = (newState as any)[key];
      }

      Object.assign(context.state, newState);
      resolve();
    });
  },
  async getCountries(context) {
    const response = await axios.get(`http://${alzuhudLink}:8080/api/guest/countries`);
    // context.state.countries = response.data.res

    context.state.countries = response.data.res.map((item: any) => ({
      text: item.name,
      value: item.id,
    }));
  },
  async addBooking(context) {
    const me = await Axios.get(`http://${alzuhudLink}:8080/api/auth/me`, {
      params: {
        // @ts-ignore
        token: Cookies.get('token'),
      }
    });
    try {
      let tempAdults = [];
      for (const adult of context.state.adults) {
        let img = await toBase64(adult.file);
        tempAdults.push({
          full_name: adult.full_name,
          gender: adult.gender === 'Male' ? 1 : (adult.gender === 'Female' ? 2 : 3),
          birth_date: adult.date,
          image: img,
        });
      }
      let tempChildren = [];
      for (const child of context.state.children) {
        let img = await toBase64(child.file);
        tempChildren.push({
          full_name: child.name,
          gender: child.gender === 'Male' ? 1 : (child.gender === 'Female' ? 2 : 3),
          birth_date: child.date,
          image: img
          // passport_img_b64: child.file
        });
      }

      let country = context.state.countries.find((item: any) => item.value === context.state.country);
      const data = {
        // @ts-ignore
        token: Cookies.get('token'),
        country_id: context.state.country,
        package_id: context.state.packageId,
        total_price: context.state.isPriceApplied ? -1 : context.state.package.price,
        name: context.state.package.name,
        email: me.data.email,
        phone: context.state.bookingPhone,
        region: country.text,
        num_childs: context.state.numChildren,
        num_adults: context.state.numAdults,
        num_nights: context.state.numNights,
        remarks: context.state.remarks,
        adults: JSON.stringify(tempAdults),
        childs: tempChildren.length !== 0 ? JSON.stringify(tempChildren): '[{}]',
      };
      const response = await Axios.post(`http://${alzuhudLink}:8080/api/booking/add`, data);
      return;
    } catch (e) {
      // console.log(e.response);
      // context.dispatch('snackIt', {
      //   color: 'error',
      //   message: 'Error Setting Booking',
      //   snackbar: true,
      // })
      throw e;
    }
  },
};

const store = new Vuex.Store<RootState>({
  state,
  mutations,
  actions,
  plugins: [createPersistedState()],
  getters,
});

export default store;
