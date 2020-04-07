export interface RootState {
    flightsTab: string;
    adminUser: string;
    routes: string[];
    page: number;
    selection: string;
    panelTitle: string;
    drawer: boolean;
    // username: string;
    token: string;
    userId: number | null;
    ticketId: number | null;
    hotel: {props?:any};
    flight: {props?:any};
    snackbar: boolean;
    color: string;
    message: string;
    fullName: string;
    countries: any[];
    bookingId: number | null;
    country: any;
    state: any;
    city: any;
    package: any;
    numAdults: number;
    numChildren: number;
    numNights: number;
    remarks: string;
    adults: any[];
    children: any[];
    bookingName: string;
    bookingPhone: string;
    language: string;
    tabModel: number;
    title: string;
    package_id: number;
    date: string;
    date2: string;
    packageId: number;
    isPriceApplied: boolean;
}

export interface User {
    id: number;
    full_name: string;
    email: string;
    phone: string;
    // username: string;
    role: string;
    status: string;
    email_verified_at: string;
    remember_token: string;
    created_at: string;
    updated_at: string;
}

export interface Ticket {
    id: number;
    status: string;
    subject: string;
    body: string;
    ticket_img: string;
    ticket_img_url: string;
    created_at: string;
    human_created_at: string;
    time_ago: string;
    updated_at: string;
    user_id: User;
}

export interface InputValidationRules {
    email: (value: string) => boolean | string;
    matchPassword: (value: string) => boolean | string;
}

export interface NewUser {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface User {
    id: number;
    full_name: string;
    email: string;
    phone: string;
    // username: string;
    role: string;
    status: string;
    email_verified_at: string;
    remember_token: string;
    created_at: string;
    updated_at: string;
}

export interface Ticket {
    id: number;
    status: string;
    subject: string;
    body: string;
    ticket_img: string;
    ticket_img_url: string;
    created_at: string;
    human_created_at: string;
    time_ago: string;
    updated_at: string;
    user_id: User;
}

interface Snack {color: string, message: string, snackbar: boolean}

export type AddRoute = (route: string) => void;
export type ReplaceRoute = (routeArray: string[]) => void;
export type PopRoute = () => void;
export type ChangePanelTitle = (title: string) => void;
export type SnackIt = (snack: Snack) => void;
export type setBookingId = (bookingId: number) => void;
export type setTicketId = (ticketId: number) => void;
