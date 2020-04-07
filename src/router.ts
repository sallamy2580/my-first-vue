import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Ummrah from './views/Ummrah.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import Agent from './views/Agent.vue';
import Contact from './views/Contact.vue';
import ForgotPassword from './views/ForgotPassword.vue';
import ResetPassword from './views/ResetPassword.vue';
import Empty from './views/Empty.vue';
import Services from './views/Services.vue';
import Saey from './views/Saey.vue';
import PackagesView from './views/Packages.vue';
import HowToUmmrah from './views/HowToUmmrah.vue';
import Admin from './views/Admin.vue';
import UserAdmin from './views/UserAdmin.vue';
import Dashboard from './components/Dashboard.vue';
import UserDashboard from './components/UserDashboard.vue';
import Bookings from './components/Bookings.vue';
import UserBookings from './components/UserBookings.vue';
import Booking from './components/Booking.vue';
import CreatePackage from './components/CreatePackage.vue';
import SelectPackage from './components/SelectPackage.vue';
import FillInformation from './components/FillInformation.vue';
import ReviewInfo from './components/ReviewInfo.vue';
import Payment from './components/Payment.vue';
import BookingComplete from './components/BookingComplete.vue';
import Agents from './components/Agents.vue';
import AddAgent from './components/AddAgent.vue';
import Users from './components/Users.vue';
import AddUser from './components/AddUser.vue';
import AdminSettings from './components/AdminSettings.vue';
import Packages from './components/Packages.vue';
import AddPackage from './components/AddPackage.vue';
import Support from './components/Support.vue';
import Transactions from './components/Transactions.vue';
import viewBooking from './components/viewBooking.vue';
import Ticket from './components/Ticket.vue';
import UserSettings from './components/UserSettings.vue';
import UserSupport from './components/UserSupport.vue';
import UserTicket from './components/UserTicket.vue';
import UserNewTicket from './components/UserNewTicket.vue';
import http404 from '@/views/http404.vue';
import adminHttp404 from '@/components/http404.vue';
import About from '@/views/About.vue';
import store from '@/store';
import Flights from '@/components/flights.vue';
import AddFlight from '@/components/addFlight.vue';
import AddAirline from '@/components/addAirline.vue';

import VerifyEmail from '@/views/VerifyEmail.vue';
import Axios from 'axios';









Vue.use(Router);
// @ts-ignore
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import(/* webpackChunkName: "contact-us" */ './views/Contact.vue'),
    },
    {
      path: '/packages',
      name: 'packages',
      component: () => import(/* webpackChunkName: "packages" */ './views/Packages.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import(/* webpackChunkName: "services" */ './views/Services.vue'),
      children: [
        {
          path: '',
          name: 'ummrah',
          component: () => import(/* webpackChunkName: "ummrah" */ './views/Ummrah.vue'),
        },
        {
          path: 'saey',
          name: 'saey',
          component: () => import(/* webpackChunkName: "saey" */ './views/Saey.vue'),
        },
        {
          path: 'how-to-umrah',
          name: 'how-to',
          component: () => import(/* webpackChunkName: "how-to-umrah" */ './views/HowToUmmrah.vue'),
        },
      ],
    },
    {
      path: '/sign-in',
      name: 'sign in',
      component: () => import(/* webpackChunkName: "sign-in" */ './views/SignIn.vue'),
    },
    {
      path: '/sign-up',
      name: 'sign up',
      component: () => import(/* webpackChunkName: "sign-up" */ './views/SignUp.vue'),
    },
    {
      path: '/forgot-password',
      name: 'forgot password',
      component: () => import(/* webpackChunkName: "forgot-password" */ './views/ForgotPassword.vue'),
    },
    {
      path: '/reset-password/:hashCode',
      name: 'reset password',
      component: () => import(/* webpackChunkName: "reset-password" */ './views/ResetPassword.vue'),
      props: true,
    },
    {
      path: '/agent',
      name: 'agent',
      component: () => import(/* webpackChunkName: "agent" */ './views/Agent.vue'),
    },
    {
      path: '/verify-email/:hashCode',
      name: 'verify-email',
      component: () => import(/* webpackChunkName: "verify-email" */ './views/VerifyEmail.vue'),
      props: true,
    },
    {
      path: '/redirect-login/:token-:role-:userId-:fullName',
      name: 'redirect-login',
      component: () => import(/* webpackChunkName: "verify-email" */ './views/RedirectLogin.vue'),
      props: true,
    },
    {
      path: '/admin',
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue'),
      children: [
        {
          path: 'settings',
          name: 'settings',
          component: AdminSettings,
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'bookings',
          name: 'bookings',
          component: Bookings,
        },
        /*{
          path: 'booking',
          name: 'booking',
          component: Booking,
        },*/
        {
          path: 'agents',
          name: 'agents',
          component: Agents,
        },
        {
          path: 'addAgent',
          name: 'agents',
          component: AddAgent,
        },
        {
          path: 'users',
          name: 'users',
          component: Users,
        },
        {
          path: 'addUser',
          name: 'users',
          component: AddUser,
        },
        {
          path: 'packages',
          name: 'packages',
          component: Packages,
        },
        {
          path: 'addPackage',
          name: 'packages',
          component: AddPackage,
        },
        {
          path: 'support',
          name: 'support',
          component: Support,
        },
        {
          path: 'transactions',
          name: 'transactions',
          component: Transactions,
        },
        {
          path: 'viewBooking',
          name: 'bookings',
          component: viewBooking,
        },
        {
          path: 'flights',
          name: 'flights',
          component: Flights,
        },
        {
          path: 'addFlight',
          name: 'flights',
          component: AddFlight,
        },
        {
          path: 'addAirline',
          name: 'flights',
          component: AddAirline,
        },
        {
          path: 'ticket',
          name: 'support',
          component: Ticket,
        },
        {
          path: 'http404',
          name: '404',
          component: adminHttp404,
        },
        {
          path: '*',
          name: 'default',
          component: Empty,
          redirect: 'http404',
        },
      ],
    },
    {
      path: '/user-admin',
      name: 'user-admin',
      component: () => import(/* webpackChunkName: "user-admin" */ './views/UserAdmin.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: UserDashboard,

        },
        {
          path: 'bookings',
          name: 'bookings',
          component: UserBookings,
        },
        {
          path: 'booking',
          name: 'booking',
          component: Booking,
        },
        {
          path: 'create-package',
          name: 'bookings',
          component: CreatePackage,
          children: [
            {
              path: '',
              name: 'bookings',
              component: SelectPackage,
            },
            {
              path: 'step-2',
              name: 'bookings',
              component: FillInformation,
            },
            {
              path: 'step-3',
              name: 'bookings',
              component: ReviewInfo,
            },
            {
              path: 'step-4',
              name: 'bookings',
              component: Payment,
            },
            {
              path: 'step-5',
              name: 'bookings',
              component: BookingComplete,
            },
          ],
        },
        {
          path: 'transactions',
          name: 'transactions',
          component: Transactions,
        },
        {
          path: 'support',
          name: 'support',
          component: UserSupport,
        },
        {
          path: 'ticket',
          name: 'ticket',
          component: UserTicket,
        },
        {
          path: 'settings',
          name: 'settings',
          component: UserSettings,
        },
        {
          path: 'new-ticket',
          name: 'new-ticket',
          component: UserNewTicket,
        },
        {
          path: 'http404',
          name: '404',
          component: adminHttp404,
        },
        {
          path: '*',
          name: 'default',
          component: Empty,
          redirect: '/user-admin/http404',
        },
      ],
    },
    {
      path: '/http404',
      name: '404',
      component: () => import('./views/http404.vue'),
    },
    {
      path: '/*',
      name: 'default',
      component: Empty,
      redirect: 'http404',
    },
  ],
});

// @ts-ignore
router.beforeEach(async (to, from, next) => {
  if (to.fullPath.includes('sign-in')) {
    // @ts-ignore
    if (!!Cookies.get('token')) {
      if (store.state.adminUser.toLowerCase() === 'user')
        next('/user-admin');
      else
        next('/admin/dashboard');
    }
  }

  if (to.fullPath.includes('admin')) {
    // @ts-ignore
    if (!!Cookies.get('token')) {
      if(store.state.adminUser.toLowerCase() === 'user' && !to.fullPath.includes('user-admin')) {
        next('/user-admin');
      } else if(store.state.adminUser.toLowerCase() !== 'user' && to.fullPath.includes('user-admin')) {
        next('/admin/dashboard');
      } else {
        if(from.fullPath.includes('create-package') && !to.fullPath.includes('create-package')) {
          store.commit('resetBooking');
          next();
        }
        else {
          next();
        }
      }
    } else if (from.path !== '/sign-in') {
      next('/sign-in');
    }
  } else {
    next();
  }
});

export default router;
