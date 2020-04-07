<template>
    <div class="adminDashboard">
        <v-app>
            <v-overlay flat :value="mainLoading"><v-btn id="loader" text color="#00897B" :loading="mainLoading" width="200" height="200"></v-btn></v-overlay>
            <div id="topCardsContainer">
                <v-card height="154">
                    <div class="topCards">
                        <v-btn class="d-none d-sm-flex" style="align-self:center; margin-right:20px" depressed fab dark x-large color="blue accent-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="37.965" height="36.504" viewBox="0 0 37.965 36.504">
                                <path id="Path_205" data-name="Path 205" d="M20.062,6C11.192,6,4,12.536,4,20.6A13.928,13.928,0,0,0,8.959,31.122a8.107,8.107,0,0,1-3.026,4.127l0,0a.73.73,0,0,0,.26,1.412.659.659,0,0,0,.148-.017,11.644,11.644,0,0,0,7.172-2.735,17.237,17.237,0,0,0,2.858.89,11.877,11.877,0,0,1-.687-3.978c0-7.247,6.551-13.141,14.6-13.141a15.9,15.9,0,0,1,5.692,1.041C34.96,11.547,28.229,6,20.062,6ZM30.283,20.6C23.832,20.6,18.6,25.179,18.6,30.823s5.23,10.221,11.681,10.221a13.151,13.151,0,0,0,4.358-.744,11.272,11.272,0,0,0,6.44,2.187.709.709,0,0,0,.154.017.729.729,0,0,0,.251-1.415,8.5,8.5,0,0,1-2.706-3.268,9.577,9.577,0,0,0,3.186-7C41.964,25.179,36.734,20.6,30.283,20.6Z" transform="translate(-4 -6)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <v-btn class="d-sm-none" style="align-self:center; margin-right:20px" depressed fab dark color="blue accent-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="37.965" height="28" viewBox="0 0 37.965 36.504">
                                <path id="Path_205" data-name="Path 205" d="M20.062,6C11.192,6,4,12.536,4,20.6A13.928,13.928,0,0,0,8.959,31.122a8.107,8.107,0,0,1-3.026,4.127l0,0a.73.73,0,0,0,.26,1.412.659.659,0,0,0,.148-.017,11.644,11.644,0,0,0,7.172-2.735,17.237,17.237,0,0,0,2.858.89,11.877,11.877,0,0,1-.687-3.978c0-7.247,6.551-13.141,14.6-13.141a15.9,15.9,0,0,1,5.692,1.041C34.96,11.547,28.229,6,20.062,6ZM30.283,20.6C23.832,20.6,18.6,25.179,18.6,30.823s5.23,10.221,11.681,10.221a13.151,13.151,0,0,0,4.358-.744,11.272,11.272,0,0,0,6.44,2.187.709.709,0,0,0,.154.017.729.729,0,0,0,.251-1.415,8.5,8.5,0,0,1-2.706-3.268,9.577,9.577,0,0,0,3.186-7C41.964,25.179,36.734,20.6,30.283,20.6Z" transform="translate(-4 -6)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <div class="insideTopCards">
                            <span class="topCardTitle">TICKETS</span>
                            <span class="topCardNumber">{{ticketsCount}}</span>
                            <span class="topCardSubtitle">in 25 day(s)</span>
                        </div>
                    </div>
                </v-card>
                <v-card height="154">
                    <div class="topCards">
                        <v-btn class="d-none d-sm-flex" style="align-self:center; margin-right:20px" depressed fab dark x-large color="green darken-1">
                            <svg id="kaaba" xmlns="http://www.w3.org/2000/svg" width="52.338" height="31" viewBox="0 0 52.338 46">
                                <path id="Path_130" data-name="Path 130" d="M77.1,123.067V120H31v3.067h9.2v3.067H31v18.4h7.667V129.2H54v15.333H77.1v-18.4H70.867v-3.067Zm-27.7,3.067H43.267v-3.067H49.4Zm9.2,0H52.467v-3.067H58.6Zm9.2,0H61.667v-3.067H67.8Zm0,0" transform="translate(-27.831 -107.733)" fill="#fff"/>
                                <path id="Path_131" data-name="Path 131" d="M31.162.164A.766.766,0,0,1,31.617,0H76.549a.677.677,0,0,1,.417.147A.723.723,0,0,1,77.1.578V9.2H31V.625A.792.792,0,0,1,31.162.164Z" transform="translate(-27.831)" fill="#fff"/>
                                <path id="Path_132" data-name="Path 132" d="M136,240h9.2v21.467H136Zm0,0" transform="translate(-122.098 -215.467)" fill="#fff"/>
                                <path id="Path_133" data-name="Path 133" d="M282.169,393.067H279.1V390H256v6.133h26.169Zm0,0" transform="translate(-229.831 -350.133)" fill="#fff"/>
                                <path id="Path_134" data-name="Path 134" d="M0,396.133H10.836V390H3.169v3.067H0Zm0,0" transform="translate(0 -350.133)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <v-btn class="d-sm-none" style="align-self:center; margin-right:20px" depressed fab dark color="green darken-1">
                            <svg id="kaaba" xmlns="http://www.w3.org/2000/svg" width="52.338" height="25" viewBox="0 0 52.338 46">
                                <path id="Path_130" data-name="Path 130" d="M77.1,123.067V120H31v3.067h9.2v3.067H31v18.4h7.667V129.2H54v15.333H77.1v-18.4H70.867v-3.067Zm-27.7,3.067H43.267v-3.067H49.4Zm9.2,0H52.467v-3.067H58.6Zm9.2,0H61.667v-3.067H67.8Zm0,0" transform="translate(-27.831 -107.733)" fill="#fff"/>
                                <path id="Path_131" data-name="Path 131" d="M31.162.164A.766.766,0,0,1,31.617,0H76.549a.677.677,0,0,1,.417.147A.723.723,0,0,1,77.1.578V9.2H31V.625A.792.792,0,0,1,31.162.164Z" transform="translate(-27.831)" fill="#fff"/>
                                <path id="Path_132" data-name="Path 132" d="M136,240h9.2v21.467H136Zm0,0" transform="translate(-122.098 -215.467)" fill="#fff"/>
                                <path id="Path_133" data-name="Path 133" d="M282.169,393.067H279.1V390H256v6.133h26.169Zm0,0" transform="translate(-229.831 -350.133)" fill="#fff"/>
                                <path id="Path_134" data-name="Path 134" d="M0,396.133H10.836V390H3.169v3.067H0Zm0,0" transform="translate(0 -350.133)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <div class="insideTopCards">
                            <span class="topCardTitle">ORDERS</span>
                            <span class="topCardNumber">{{ordersCount}}</span>
                            <span class="topCardSubtitle">in 25 day(s)</span>
                        </div>
                    </div>
                </v-card>
                <v-card height="154">
                    <div class="topCards">
                        <v-btn class="d-none d-sm-flex" style="align-self:center; margin-right:20px" depressed fab dark x-large color="amber accent-3">
                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="45" height="32" viewBox="0 0 25.956 20.394">
                                <path id="Path_207" data-name="Path 207" d="M3.854,8A1.853,1.853,0,0,0,2,9.854v.927H23.321V9.854A1.853,1.853,0,0,0,21.467,8Zm21.321,3.708v2.781h2.781v-.927A1.853,1.853,0,0,0,26.1,11.708ZM2,13.562V21.9a1.853,1.853,0,0,0,1.854,1.854H21.467A1.853,1.853,0,0,0,23.321,21.9V13.562ZM25.174,17.27v6.489a1.853,1.853,0,0,1-1.854,1.854H6.635v.927a1.853,1.853,0,0,0,1.854,1.854H26.1a1.853,1.853,0,0,0,1.854-1.854V17.27Z" transform="translate(-2 -8)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <v-btn class="d-sm-none" style="align-self:center; margin-right:20px" depressed fab dark color="amber accent-3">
                            <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="35" height="22" viewBox="0 0 25.956 20.394">
                                <path id="Path_207" data-name="Path 207" d="M3.854,8A1.853,1.853,0,0,0,2,9.854v.927H23.321V9.854A1.853,1.853,0,0,0,21.467,8Zm21.321,3.708v2.781h2.781v-.927A1.853,1.853,0,0,0,26.1,11.708ZM2,13.562V21.9a1.853,1.853,0,0,0,1.854,1.854H21.467A1.853,1.853,0,0,0,23.321,21.9V13.562ZM25.174,17.27v6.489a1.853,1.853,0,0,1-1.854,1.854H6.635v.927a1.853,1.853,0,0,0,1.854,1.854H26.1a1.853,1.853,0,0,0,1.854-1.854V17.27Z" transform="translate(-2 -8)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <div class="insideTopCards">
                            <span class="topCardTitle">TRANSACTION</span>
                            <span class="topCardNumber">{{transactionsCount}}</span>
                            <span class="topCardSubtitle">in 25 day(s)</span>
                        </div>
                    </div>
                </v-card>
                <v-card height="154" v-if="adminUser === 'Admin'">
                    <div class="topCards">
                        <v-btn class="d-none d-sm-flex" style="align-self:center; margin-right:20px" depressed fab dark x-large color="deep-purple accent-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34.249" height="27.399" viewBox="0 0 34.249 27.399">
                                <path id="Path_209" data-name="Path 209" d="M7.537,6A2.667,2.667,0,0,0,5.708,7.142c-5.976,0-2.68,9.539-4.435,10.946,0,0,1.077,1.331,4.435,1.331v1.139C4.781,22.975,0,22.083,0,26.55H5.994l.856-3.425-.571-1.142H8.562l-.571,1.142.856,3.425H9.16c.8-.486,3.4-1.835,3.4-1.835a9.855,9.855,0,0,1-1.84-2.673,2.929,2.929,0,0,1-1.585-1.483V19.405a7.838,7.838,0,0,0,1.081-.1,8.42,8.42,0,0,1-.939-3.574,7.138,7.138,0,0,1,2.919-5.96C11.646,7.668,10.426,6,7.537,6ZM26.258,6a4.433,4.433,0,0,0-4.473,4.034,6.341,6.341,0,0,1,3.046,5.8,7.247,7.247,0,0,1-.408,2.272,4.226,4.226,0,0,1,.123,1.037c0,2.821-2.854,5.632-2.854,5.632.62.27,2.6,1.278,3.414,1.77h.011l.571-4.567-.571-1.142H27.4l-.571,1.142L27.4,26.55h6.85c0-5.994-4.868-4.281-5.708-6.85V17.987a4.394,4.394,0,0,0,1.4-2.529,1.631,1.631,0,0,0,.887-1.4c0-.649-.207-.923-.386-1.028a5.147,5.147,0,0,0,.386-1.9c0-2.078-.562-4-2.283-4A2.344,2.344,0,0,0,26.258,6Zm-9.133,4.567c-3.073,0-5.565,1.851-5.565,5.164a4.724,4.724,0,0,0,.785,2.493s-.357.176-.357.923a1.777,1.777,0,0,0,.934,1.8c.129,1.151,1.92,2.836,1.92,2.836v1.924c-.961,2.883-6.85.983-6.85,7.69h7.991l.571-4.567-.571-1.142h2.283L17.7,28.833l.571,4.567h7.991c0-6.729-5.889-4.807-6.85-7.69V23.785s1.79-1.686,1.92-2.836a2.338,2.338,0,0,0,.934-1.8c0-.8-.357-.923-.357-.923a6.015,6.015,0,0,0,.642-2.386c0-2.335-1.171-4.13-3.14-4.13A3.032,3.032,0,0,0,17.125,10.567Z" transform="translate(0 -6)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <v-btn class="d-sm-none" style="align-self:center; margin-right:20px" depressed fab dark color="deep-purple accent-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 34.249 27.399">
                                <path id="Path_209" data-name="Path 209" d="M7.537,6A2.667,2.667,0,0,0,5.708,7.142c-5.976,0-2.68,9.539-4.435,10.946,0,0,1.077,1.331,4.435,1.331v1.139C4.781,22.975,0,22.083,0,26.55H5.994l.856-3.425-.571-1.142H8.562l-.571,1.142.856,3.425H9.16c.8-.486,3.4-1.835,3.4-1.835a9.855,9.855,0,0,1-1.84-2.673,2.929,2.929,0,0,1-1.585-1.483V19.405a7.838,7.838,0,0,0,1.081-.1,8.42,8.42,0,0,1-.939-3.574,7.138,7.138,0,0,1,2.919-5.96C11.646,7.668,10.426,6,7.537,6ZM26.258,6a4.433,4.433,0,0,0-4.473,4.034,6.341,6.341,0,0,1,3.046,5.8,7.247,7.247,0,0,1-.408,2.272,4.226,4.226,0,0,1,.123,1.037c0,2.821-2.854,5.632-2.854,5.632.62.27,2.6,1.278,3.414,1.77h.011l.571-4.567-.571-1.142H27.4l-.571,1.142L27.4,26.55h6.85c0-5.994-4.868-4.281-5.708-6.85V17.987a4.394,4.394,0,0,0,1.4-2.529,1.631,1.631,0,0,0,.887-1.4c0-.649-.207-.923-.386-1.028a5.147,5.147,0,0,0,.386-1.9c0-2.078-.562-4-2.283-4A2.344,2.344,0,0,0,26.258,6Zm-9.133,4.567c-3.073,0-5.565,1.851-5.565,5.164a4.724,4.724,0,0,0,.785,2.493s-.357.176-.357.923a1.777,1.777,0,0,0,.934,1.8c.129,1.151,1.92,2.836,1.92,2.836v1.924c-.961,2.883-6.85.983-6.85,7.69h7.991l.571-4.567-.571-1.142h2.283L17.7,28.833l.571,4.567h7.991c0-6.729-5.889-4.807-6.85-7.69V23.785s1.79-1.686,1.92-2.836a2.338,2.338,0,0,0,.934-1.8c0-.8-.357-.923-.357-.923a6.015,6.015,0,0,0,.642-2.386c0-2.335-1.171-4.13-3.14-4.13A3.032,3.032,0,0,0,17.125,10.567Z" transform="translate(0 -6)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <div class="insideTopCards">
                            <span class="topCardTitle">AGENTS</span>
                            <span class="topCardNumber">{{agentsCount}}</span>
                            <span class="topCardSubtitle">in 25 day(s)</span>
                        </div>
                    </div>
                </v-card>
                <v-card height="154" v-if="adminUser === 'Admin'">
                    <div class="topCards">
                        <v-btn class="d-none d-sm-flex" style="align-self:center; margin-right:20px" depressed fab dark x-large color="red accent-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34.249" height="27.399" viewBox="0 0 34.249 27.399">
                                <path id="Path_208" data-name="Path 208" d="M10.846,6C6.863,6,4.567,9.106,4.567,12.85a6.823,6.823,0,0,0,.6,2.529,1.333,1.333,0,0,0-.54,1.367c.187,1.465.823,1.835,1.226,1.866a5.966,5.966,0,0,0,2.136,3.371v2.283C6.85,27.691,0,25.408,0,33.4H10.275c0-4.767,2.127-6.863,4.205-8a2.516,2.516,0,0,1-.78-1.133V21.983a6.239,6.239,0,0,0,1.98-2.734,5.333,5.333,0,0,1-.758-2.216,3.835,3.835,0,0,1,.254-2,8.082,8.082,0,0,1-.334-2.181,10.141,10.141,0,0,1,.912-4.29A2.8,2.8,0,0,0,13.7,7.712S13.274,6,10.846,6ZM23.4,6c-3.982,0-6.279,3.1-6.279,6.848a6.823,6.823,0,0,0,.6,2.529,1.333,1.333,0,0,0-.54,1.367c.187,1.465.823,1.835,1.226,1.866a5.966,5.966,0,0,0,2.136,3.371v2.283c-1.142,3.425-7.991,1.142-7.991,9.133H34.249c0-7.991-6.85-5.708-7.991-9.133V21.983a5.96,5.96,0,0,0,2.136-3.369c.4-.031,1.039-.4,1.226-1.869a1.331,1.331,0,0,0-.54-1.367,6.038,6.038,0,0,0,.6-2.526c0-2.772-1.088-5.137-3.425-5.137C26.258,7.715,25.832,6,23.4,6Z" transform="translate(0 -6)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <v-btn class="d-sm-none" style="align-self:center; margin-right:20px" depressed fab dark color="red accent-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 34.249 27.399">
                                <path id="Path_208" data-name="Path 208" d="M10.846,6C6.863,6,4.567,9.106,4.567,12.85a6.823,6.823,0,0,0,.6,2.529,1.333,1.333,0,0,0-.54,1.367c.187,1.465.823,1.835,1.226,1.866a5.966,5.966,0,0,0,2.136,3.371v2.283C6.85,27.691,0,25.408,0,33.4H10.275c0-4.767,2.127-6.863,4.205-8a2.516,2.516,0,0,1-.78-1.133V21.983a6.239,6.239,0,0,0,1.98-2.734,5.333,5.333,0,0,1-.758-2.216,3.835,3.835,0,0,1,.254-2,8.082,8.082,0,0,1-.334-2.181,10.141,10.141,0,0,1,.912-4.29A2.8,2.8,0,0,0,13.7,7.712S13.274,6,10.846,6ZM23.4,6c-3.982,0-6.279,3.1-6.279,6.848a6.823,6.823,0,0,0,.6,2.529,1.333,1.333,0,0,0-.54,1.367c.187,1.465.823,1.835,1.226,1.866a5.966,5.966,0,0,0,2.136,3.371v2.283c-1.142,3.425-7.991,1.142-7.991,9.133H34.249c0-7.991-6.85-5.708-7.991-9.133V21.983a5.96,5.96,0,0,0,2.136-3.369c.4-.031,1.039-.4,1.226-1.869a1.331,1.331,0,0,0-.54-1.367,6.038,6.038,0,0,0,.6-2.526c0-2.772-1.088-5.137-3.425-5.137C26.258,7.715,25.832,6,23.4,6Z" transform="translate(0 -6)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <div class="insideTopCards">
                            <span class="topCardTitle">USERS</span>
                            <span class="topCardNumber">{{usersCount}}</span>
                            <span class="topCardSubtitle">in 25 day(s)</span>
                        </div>
                    </div>
                </v-card>
                <v-card height="154" v-if="adminUser === 'Admin'">
                    <div class="topCards">
                        <v-btn class="d-none d-sm-flex" style="align-self:center; margin-right:20px" depressed fab dark x-large color="deep-orange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 25.065 22.976">
                                <path id="Path_210" data-name="Path 210" d="M8.089,8A2.088,2.088,0,0,0,6,10.089v2.089H31.065V10.089A2.088,2.088,0,0,0,28.976,8ZM7.044,14.266V28.887a2.088,2.088,0,0,0,2.089,2.089h18.8a2.088,2.088,0,0,0,2.089-2.089V14.266ZM15.4,17.4h6.266a1.044,1.044,0,0,1,0,2.089H15.4a1.044,1.044,0,0,1,0-2.089Z" transform="translate(-6 -8)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <v-btn class="d-sm-none" style="align-self:center; margin-right:20px" depressed fab dark color="deep-orange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.065" height="22.976" viewBox="0 0 25.065 22.976">
                                <path id="Path_210" data-name="Path 210" d="M8.089,8A2.088,2.088,0,0,0,6,10.089v2.089H31.065V10.089A2.088,2.088,0,0,0,28.976,8ZM7.044,14.266V28.887a2.088,2.088,0,0,0,2.089,2.089h18.8a2.088,2.088,0,0,0,2.089-2.089V14.266ZM15.4,17.4h6.266a1.044,1.044,0,0,1,0,2.089H15.4a1.044,1.044,0,0,1,0-2.089Z" transform="translate(-6 -8)" fill="#fff"/>
                            </svg>
                        </v-btn>
                        <div class="insideTopCards">
                            <span class="topCardTitle">PACKAGES</span>
                            <span class="topCardNumber">{{packagesCount}}</span>
                            <span class="topCardSubtitle">in 25 day(s)</span>
                        </div>
                    </div>
                </v-card>
            </div>
            <div class="bottom-container">
                <v-card style="grid-column:1/3;">
                        <div class="table-Container">
                            <span class="d-none d-md-flex title font-weight-regular" style="padding: 25px 35px 0px 35px;">Recent Bookings</span>
                            <a class="d-none d-md-flex title font-weight-bold mr-7 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="$router.push('bookings')">More</a>
                            <span class="d-none d-sm-flex d-md-none body-1 font-weight-medium" style="padding: 25px 35px 0px 35px;">Recent Bookings</span>
                            <a class="d-none d-sm-flex d-md-none body-1 font-weight-bold mr-5 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="$router.push('bookings')">More</a>
                            <span class="d-sm-none body-1 font-weight-medium" style="padding: 25px 0 0 15px;">Recent Bookings</span>
                            <a class="d-sm-none body-1 font-weight-bold mr-5 mr-5 mt-5" fab max-width="100" text color="teal darken-1" @click="$router.push('bookings')">More</a>
                            <v-data-table
                            style="grid-column:1/3;"
                            :headers="bookingsHeaders"
                            :items="bookingsRecord"
                            :items-per-page="5"
                            hide-default-footer
                            class="table"
                            :mobile-breakpoint="mobileBreakPoint"
                            >
                                <template v-slot:item.action="{ item }">
                                    <v-icon
                                        color="blue"
                                        @click="viewBooking(item.id)"
                                    >
                                        mdi-eye
                                    </v-icon>
                                </template>
                            </v-data-table>  
                        </div>
                </v-card>
                <v-card style="grid-column:1/3;">
                        <div class="table-Container">
                            <span class="d-none d-md-flex title font-weight-regular" style="padding: 25px 35px 0px 35px;">Recent Tickets</span>
                            <a class="d-none d-md-flex title font-weight-bold mr-7 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="$router.push('support')">More</a>
                            <span class="d-none d-sm-flex d-md-none body-1 font-weight-bold" style="padding: 25px 35px 0px 35px;">Recent Tickets</span>
                            <a class="d-none d-sm-flex d-md-none body-1 font-weight-bold mr-5 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="$router.push('support')">More</a>
                            <span class="d-sm-none body-1 font-weight-medium" style="padding: 25px 0 0 15px;">Recent Tickets</span>
                            <a class="d-sm-none body-1 font-weight-bold more mr-5 mt-5" fab max-width="100" text color="teal darken-1" @click="$router.push('support')">More</a>
                            <v-data-table
                            style="grid-column:1/3;"
                            :headers="ticketsHeaders"
                            :items="tickets"
                            :items-per-page="5"
                            hide-default-footer
                            class="table"
                            :mobile-breakpoint="mobileBreakPoint"
                            >
                                <template v-slot:item.action="{ item }">
                                    <v-icon
                                        color="blue"
                                        @click="viewTicket(item.id)"
                                    >
                                        mdi-eye
                                    </v-icon>
                                </template>
                            </v-data-table>  
                        </div>
                </v-card>
                <v-card style="grid-column:1/3;">
                        <div class="table-Container">
                            <span class="d-none d-md-flex title font-weight-regular" style="padding: 25px 35px 0px 35px;">Recent Transaction</span>
                            <a class="d-none d-md-flex title font-weight-bold mr-7 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="$router.push('transactions')">More</a>
                            <span class="d-none d-sm-flex d-md-none body-1 font-weight-bold" style="padding: 25px 35px 0px 35px;">Recent Transaction</span>
                            <a class="d-none d-sm-flex d-md-none body-1 font-weight-bold mr-5 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="$router.push('transactions')">More</a>
                            <span class="d-sm-none body-1 font-weight-medium" style="padding: 25px 0 0 15px;">Recent Transaction</span>
                            <a class="d-sm-none body-1 font-weight-bold more mr-5 mt-5" fab max-width="100" text color="teal darken-1" @click="$router.push('transactions')">More</a>

                            <v-data-table
                                style="grid-column:1/3;"
                                :headers="transHeaders"
                                :items="transactions"
                                :items-per-page="5"
                                hide-default-footer
                                class="table"
                                :mobile-breakpoint="mobileBreakPoint"
                            >
                                <template v-slot:item.status="{ item }">
                                    <div style="min-width: 87px">
                                        <v-chip class="d-none d-md-inline-flex body-1 font-weight-medium" style="white-space: nowrap;" :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
                                        <v-chip class="d-md-none body-2  font-weight-regular" style="white-space: nowrap;" :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
                                    </div>
                                </template>

                                <template v-slot:item.action="{ item }">
                                    <a
                                        class="d-none d-md-flex title font-weight-regular text-right"
                                        style="color: #0072ff; justify-content:end;"
                                        @click="viewBooking(item.bookingId)"
                                    >
                                        View Booking
                                    </a>
                                    <a
                                            class="d-md-none body-2 font-weight-regular"
                                            style="color: #0072ff; justify-content:end;"
                                            @click="viewBooking(item.bookingId)"
                                    >
                                        View Booking
                                    </a>
                                </template>
                            </v-data-table>  
                        </div>
                </v-card>
                <v-card style="grid-column:1/2;" v-if="adminUser === 'Admin'">
                        <div class="table-Container">
                            <span class="d-none d-md-flex title font-weight-regular" style="padding: 25px 35px 0px 35px;">Agents</span>
                            <a class="d-none d-md-flex title font-weight-bold mr-7 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="goToAgentsPage">More</a>
                            <span class="d-none d-sm-flex d-md-none body-1 font-weight-bold" style="padding: 25px 35px 0px 35px;">Agents</span>
                            <a class="d-none d-sm-flex d-md-none body-1 font-weight-bold mr-5 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="goToAgentsPage">More</a>
                            <span class="d-sm-none body-1 font-weight-medium" style="padding: 25px 0 0 15px;">Agents</span>
                            <a class="d-sm-none body-1 font-weight-bold more mr-5 mt-5" fab max-width="100" text color="teal darken-1" @click="goToAgentsPage">More</a>
                            <v-data-table
                            style="grid-column:1/3;"
                            :headers="agentsHeaders"
                            :items="agents"
                            :items-per-page="5"
                            hide-default-footer
                            class="table"
                            :mobile-breakpoint="mobileBreakPoint"
                            >
                                <template v-slot:item.action="{ item }">
                                    <v-icon
                                        color="blue"
                                        @click="edit(item)"
                                    >
                                        mdi-pencil
                                    </v-icon>
                                    <v-icon
                                        color="red"
                                        @click="deleteAgent(item)"
                                    >
                                        mdi-delete
                                    </v-icon>
                                </template>
                            </v-data-table>  
                        </div>
                </v-card>
                <v-card style="grid-column:2/3;" v-if="adminUser === 'Admin'">
                        <div class="table-Container">
                            <span class="d-none d-md-flex title font-weight-regular" style="padding: 25px 35px 0px 35px;">Users</span>
                            <a class="d-none d-md-flex title font-weight-bold mr-7 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="goToUsersPage">More</a>
                            <span class="d-none d-sm-flex d-md-none body-1 font-weight-bold" style="padding: 25px 35px 0px 35px;">Users</span>
                            <a class="d-none d-sm-flex d-md-none body-1 font-weight-bold mr-5 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="goToUsersPage">More</a>
                            <span class="d-sm-none body-1 font-weight-medium" style="padding: 25px 0 0 15px;">Users</span>
                            <a class="d-sm-none body-1 font-weight-bold more mr-5 mt-5" fab max-width="100" text color="teal darken-1" @click="goToUsersPage">More</a>
                            <v-data-table
                            style="grid-column:1/3;"
                            :headers="usersHeaders"
                            :items="users"
                            :items-per-page="5"
                            hide-default-footer
                            class="table"
                            :mobile-breakpoint="mobileBreakPoint"
                            >
                                <template v-slot:item.action="{ item }">
                                    <v-icon
                                        color="blue"
                                        @click="edit(item)"
                                    >
                                        mdi-pencil
                                    </v-icon>
                                    <v-icon
                                        color="red"
                                        @click="deleteUser(item)"
                                    >
                                        mdi-delete
                                    </v-icon>
                                </template>
                            </v-data-table>  
                        </div>
                </v-card>
                <v-card style="grid-column:1/3;" v-if="adminUser === 'Admin'">
                        <div class="table-Container">
                            <span class="d-none d-md-flex title font-weight-regular" style="padding: 25px 35px 0px 35px;">Recent Packages</span>
                            <a class="d-none d-md-flex title font-weight-bold mr-5 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="goToPackagesPage">More</a>
                            <span class="d-none d-sm-flex d-md-none body-1 font-weight-bold" style="padding: 25px 35px 0px 35px;">Recent Packages</span>
                            <a  class="d-none d-sm-flex d-md-none body-1 font-weight-bold mr-5 mt-5" fab max-width="100" x-large text color="teal darken-1" @click="goToPackagesPage">More</a>
                            <span class="d-sm-none body-1 font-weight-medium" style="padding: 25px 0 0 15px;">Recent Packages</span>
                            <a  class="d-sm-none body-1 font-weight-bold more mr-5 mt-5" fab max-width="100" text color="teal darken-1" @click="goToPackagesPage">More</a>
                            <v-data-table
                            style="grid-column:1/3;"
                            :headers="headers"
                            :items="Packages"
                            :items-per-page="5"
                            hide-default-footer
                            class="table"
                            :mobile-breakpoint="mobileBreakPoint"
                            >
                                <template v-slot:item.action="{ item }">
                                    <v-icon
                                        color="blue"
                                        @click="editPackage(item)"
                                    >
                                        mdi-pencil
                                    </v-icon>
                                    <v-icon
                                        color="red"
                                        @click="deletePackage(item.id)"
                                    >
                                        mdi-delete
                                    </v-icon>
                                </template>
                            </v-data-table>  
                        </div>
                </v-card>

                <v-dialog v-model="dialog" max-width="1200px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Edit {{editedUser.role === 'user' ? 'User' : 'Agent'}}</span>
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
                                        <v-text-field :rules="[rules.required]" @keypress="isNumber($event)" v-model="editedUser.phone" outlined label="Phone"></v-text-field>
                                    </v-col>
                                    <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                        <v-text-field :rules="[rules.required, rules.passMin]" type="password" v-model="editedUser.newPassword" outlined label="Password"></v-text-field>
                                    </v-col>
                                    <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                        <v-text-field :rules="[rules.required, rules.confirmedPass]" v-model="editedUser.confirmNewPassword" type="password" outlined label="Confirm Password"></v-text-field>
                                    </v-col>
                                    <v-col style="margin-bottom: -20px" cols="12" sm="6" md="4">
                                        <v-select :rules="[rules.required]" v-model="editedUser.status" :items="UserStatusList" label="Status" outlined></v-select>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-card-actions style="margin-top: -25px" >
                                <div class="d-none d-sm-flex flex-grow-1"></div>
                                <div class="d-none d-sm-flex">
                                    <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                                    <v-btn type="submit" :disabled="editedUser.newPassword !== editedUser.confirmNewPassword" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 mr-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                                </div>
                                <div class="d-sm-none" style="display: grid; justify-content: end; width: 100%; margin-right: 18px">
                                    <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                                    <v-btn type="submit" :disabled="editedUser.newPassword !== editedUser.confirmNewPassword" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 ml-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                                </div>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="editPackageDialog" max-width="1200px">
                    <v-card :loading="dialogLoading">
                        <v-card-title>
                            <span class="headline">Edit Package</span>
                        </v-card-title>
                        <v-form @submit="savePackagesEdit">
                            <v-card-text>
                                <v-row>
                                    <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                        <v-text-field :rules="[rules.required]" v-model="editedPackage.name" outlined label="Name"></v-text-field>
                                    </v-col>
                                    <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                        <v-autocomplete :rules="[rules.required]" v-model="editedPackage.airlineId" :items="airlineList" label="Airline" outlined></v-autocomplete>
                                    </v-col>
                                    <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                        <v-autocomplete :rules="[rules.required]" v-model="editedPackage.hotelId" :items="hotelList" label="Hotel" outlined></v-autocomplete>
                                    </v-col>
                                    <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                        <v-text-field :rules="[rules.required]" v-model="editedPackage.originalPrice" outlined label="Price" prefix="$" mask="##"></v-text-field>
                                    </v-col>
                                    <v-col style="margin-bottom: -30px" cols="12" sm="6" md="4">
                                        <v-select :rules="[rules.required]" v-model="editedPackage.status" :items="packStatusList" label="Status" class="text-capitalize" outlined></v-select>
                                    </v-col>
                                    <v-col style="margin-bottom: -20px" cols="12" sm="6" md="4">
                                        <v-text-field :rules="[rules.required]" v-model="editedPackage.packCode" outlined label="Package Code"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-card-actions style="margin-top: -25px" >
                                <div class="d-none d-sm-flex flex-grow-1"></div>
                                <div class="d-none d-sm-flex">
                                    <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                                    <v-btn type="submit" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 mr-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                                </div>
                                <div class="d-sm-none" style="display: grid; justify-content: end; width: 100%; margin-right: 18px">
                                    <!--                      <v-btn @click="cancelEdit" max-width="150" class="font-weight-regular body-1 px-12 mb-3" height="50" text rounded  color="#FF1744" style="justify-self: right; align-self: center;">Cancel</v-btn>-->
                                    <v-btn type="submit" :loading="saveLoading" max-width="150" class="font-weight-regular body-1 px-12 mb-3 ml-4" height="50" rounded large dark style="justify-self: right; align-self: center; background-color:#00897B !important;">Save</v-btn>
                                </div>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-dialog>
            </div>
        </v-app>
    </div>
</template>

<script lang="ts">
import { PopRoute, AddRoute, ReplaceRoute, ChangePanelTitle, Ticket, User, SnackIt, setBookingId, setTicketId } from '../../types/store';
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import {Mutation, State, Action, Getter} from "vuex-class";
import AdminPageInfo from './AdminPageInfo.vue';
import AdminCard from './AdminCard.vue';
import btn from './btn.vue';
import PackageCard from './PackageCard.vue';
import Axios from "axios";
import vuetify from "@/plugins/vuetify";
import alzuhudLink from "@/components/Functions/Functions";

@Component({
    components: {
        AdminPageInfo,
        AdminCard,
        btn,
        PackageCard
    }
})
export default class Dashboard extends Vue {
    // private panelTitle: string;
    @State adminUser: string;
    @State routes: string[];
    @Getter token: string;
    @Mutation popRoute: PopRoute;
    @Mutation replaceRoute: ReplaceRoute;
    @Mutation changePanelTitle: ChangePanelTitle;
    @Mutation setBookingId: setBookingId;
    @Mutation setTicketId: setTicketId;
    @Action snackIt: SnackIt;

    loadedCount: number = 0;
    mainLoading: boolean = false;
    headers = [
                {
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Code', value: 'packCode' },
                { text: 'Hotel', value: 'hotel' },
                { text: 'Flight', value: 'airline' },
                { text: 'Price', value: 'price' },
                { text: 'OP', value: 'action', sortable: false, align: 'right' }
                ];
    Packages = [];

        bookingsHeaders = [
                {
                    text: 'User',
                    align: 'left',
                    sortable: false,
                    value: 'user',
                },
                { text: 'Name', value: 'name' },
                { text: 'Package Code', value: 'code' },
                { text: 'Order Date', value: 'orderDate' },
                { text: 'Price', value: 'price' },
                { text: 'Passengers', value: 'passengers' },
                { text: 'OP', value: 'action', sortable: false, align: 'right'}
                ];
    bookingsRecord = [
                   ];

        ticketsHeaders = [
                { text: 'User', align: 'left', sortable: false,value: 'user' },
                { text: 'Subject', value: 'subject' },
                { text: 'Status', value: 'status' },
                { text: 'Date', value: 'date' },
                { text: 'OP', value: 'action', sortable: false, align: 'right' }
                ];
        tickets: any = [];

        transHeaders = [
                    {text: 'User', align: 'left', sortable: false, value: 'name'},
                    { text: 'Title', value: 'title' },
                    { text: 'Amount', value: 'amount' },
                    { text: 'Date', value: 'date' },
                    { text: 'Status', value: 'status', align: 'left' },
                    { text: 'OP', value: 'action', sortable: false, align: 'right' }
                ];
        transactions = [];

        agentsHeaders = [
                {text: 'Name', align: 'left', sortable: false, value: 'name'},
                { text: 'Last Activity', value: 'lastAct' },
                { text: 'OP', value: 'action', sortable: false, align: 'right' }
                ];
        agents: any = [];

        usersHeaders = [
                {text: 'Name', align: 'left', sortable: false, value: 'name'},
                { text: 'Last Activity', value: 'lastAct' },
                { text: 'OP', value: 'action', sortable: false, align: 'right' }
                ];
        users: any = [];

        dialog: boolean = false;

        rules = {
            // @ts-ignore
            required : value => !!value || 'Required',
            // @ts-ignore
            passMin: pass => {
            const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            return passPattern.test(pass) || 'At least 8 character and at least one letter and one number'
        },
        // @ts-ignore
        confirmedPass: cPass => cPass === this.editedUser.newPassword || 'Confirm password Not match',
        // @ts-ignore
        email: e => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(e) || 'Enter a valid e-mail address.'
        }
        };

        UserStatusList = [{text: 'Active', value: 1}, {text: 'Inactive', value: 2}, {text: 'Removed', value: 3}, {text: 'Banned', value: 4}];
        editedUser = {
            id: null,
            name: null,
            email: null,
            phone: null,
            newPassword: null,
            confirmNewPassword: null,
            status: null,
            role: '',
            token: this.token
        };
        saveLoading = false;


    editPackageDialog: boolean = false;
    dialogLoading = false;
    editedPackage = {
        id: null,
        name: null,
        type: null,
        airlineId: null,
        hotelId: null,
        originalPrice: null,
        status: null,
        packCode: null
    };
    hotelList = [];
    airlineList = [];
    packStatusList = [{text: 'Active', value: 1}, {text: 'Deactive', value: 0}, {text: 'Expired', value: 3}, {text: 'Banned', value: 2}, {text: 'Removed', value: 4}];

        agentsCount = null;
        ordersCount = null;
        packagesCount = null;
        ticketsCount = null;
        transactionsCount = null;
        usersCount = null;


    goToSupportPage (): void {
        this.$router.push("/admin/support")
    }
    goToAgentsPage (): void {
        this.$router.push("/admin/agents")
    }
    goToUsersPage (): void {
        this.$router.push("/admin/users")
    }
    goToPackagesPage (): void {
        this.$router.push("/admin/packages")
    }
    goToTransactionsPage (): void {
        this.$router.push("/admin/transactions")
    }
    // @ts-ignore
        getColor (status) {
            switch (status) {
                case "pending" :
                    return 'orange';
                case "not paid" :
                    return 'red';
                case "paid" :
                    return 'green';
                case "removed" :
                    return 'grey';
            }
        }

        viewBooking (id: number): void {
            // @ts-ignore
            this.setBookingId(id);
            this.$router.push('viewBooking');
        }

        async getDashboardData() {
            try {
                let response = await Axios.get(`http://${alzuhudLink}:8080/api/admin/dashboard`, {
                    params: {
                        token: this.token
                    }
                })
                let data = response.data.res;
                this.agentsCount = response.data.res.agents;
                this.ordersCount = response.data.res.orders;
                this.packagesCount = response.data.res.packages;
                this.ticketsCount = response.data.res.tickets;
                this.transactionsCount = response.data.res.transactions ;
                this.usersCount = response.data.res.users;

            } catch (e) {

            }
            this.loadedCount += 1;
        }
    // @ts-ignore
        async getAllBookings() {
        // this.tableLoading = true;
        try {
            let response = await Axios.get(`http://${alzuhudLink}:8080/api/booking/all`
                , {
                    params: {
                        token: this.token
                    }
                }).finally(/*() => this.tableLoading = false*/);
            let bookingsData = response.data.res.data;

            // @ts-ignore
            this.bookingsRecord = bookingsData.map(bok => ({
                id: bok.id,
                name: bok.name,
                user: typeof bok.user_id === "object" ? bok.user_id.full_name : 'Unknown',
                country: typeof bok.country_id === "object" ? bok.country_id.name : 'Unknown',
                orderNo: bok.id,
                // type: bok.type,
                price: '$' + this.split(bok.total_price),
                passengers: bok.num_adults + bok.num_childs,
                code: bok.package_id.code,
                orderDate: bok.created_at === null ? 'indeterminate' : new Date(bok.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                })
            }));
        } catch (e) {

            // this.tableLoading = false;
            this.snackIt({
                message: 'An error occurred: ' + e.response.data.message,
                color: 'error',
                snackbar: true
            });
        }
        this.loadedCount += 1;
    }

        async getAllPackages (): Promise<void> {
            try {
                let response = await Axios.get(`http://${alzuhudLink}:8080/api/packages/all`, {
                    params: {
                        token: this.token
                    }});
                let packagesData = response.data.res.data;
                // @ts-ignore
                this.Packages= packagesData.map( pgk => ({
                    id: pgk.id,
                    name: pgk.name,
                    packCode: pgk.code !== null ? pgk.code : 'Not Set!',
                    // type: typeof pgk.type === ,
                    hotel: pgk.hotel_id !== null ? pgk.hotel_id.en_name : 'Unknown',
                    airline: pgk.airline_id !== null ? pgk.airline_id.airline_id.name : 'Unknown',
                    airlineId: pgk.airline_id !== null ?  pgk.airline_id.id : 'Unknown',
                    hotelId:  pgk.hotel_id !== null ? pgk.hotel_id.id : 'Unknown',
                    price: '$' + this.split(pgk.price),
                    originalPrice: pgk.price,
                    status: pgk.status
                }));
            } catch (e) {
                console.log(e.response);
                this.snackIt({message: 'An error occurred while getting users data ', color: 'error', snackbar: true});
            }
            this.loadedCount += 1;
        }

        async getAllUsers (): Promise<void> {
            try {
                let response = await Axios.get(`http://${alzuhudLink}:8080/api/users/all`, {
                    params: {
                        token: this.token
                    }});
                let usersData = <User[]>response.data.res.data;
                let users = usersData.filter(obj => obj.role === 'user');
                this.users = users.map(user => ({
                    id: user.id,
                    name: user.full_name,
                    email: user.email,
                    status: user.status,
                    phone: user.phone,
                    role: user.role,
                    lastAct: new Date(user.updated_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    })
                }));

                let agents = usersData.filter(obj => obj.role === 'agent');
                this.agents = agents.map( agent => ({
                    id: agent.id,
                    name: agent.full_name,
                    email: agent.email,
                    status: agent.status,
                    phone: agent.phone,
                    role: agent.role,
                    lastAct: new Date(agent.updated_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    })
                }));



            } catch (e) {

            }
            this.loadedCount += 1;
        }

        //@ts-ignore
        edit (item) {
            // this.editedIndex = this.desserts.indexOf(item)
            this.editedUser = Object.assign(this.editedUser, item);
            //@ts-ignore
            switch (this.editedUser.status) {
                //@ts-ignore
                case 'active' :
                    //@ts-ignore
                    this.editedUser.status = 1;
                    break;
                //@ts-ignore
                case 'inactive' :
                    //@ts-ignore
                    this.editedUser.status = 2;
                    break;
                //@ts-ignore
                case 'removed' :
                    //@ts-ignore
                    this.editedUser.status = 3;
                    break;
                //@ts-ignore
                case 'banned' :
                    //@ts-ignore
                    this.editedUser.status = 4;
                    break;
            }

            this.dialog = true;
        }

        cancelEdit () {
            this.dialog = false;
        }

        async saveEdit (e: any) {
            e.preventDefault();
            this.saveLoading = true;
            let response = null;
            try {
                response = await Axios.post(`http://${alzuhudLink}:8080/api/users/update`, {
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
                this.getAllUsers();
                this.snackIt({message: 'Info updated successfully', color: 'success', snackbar: true});


            } catch (e) {
                this.saveLoading = false;
                this.snackIt({message: 'An error occurred! ' + e.response.data.error, color: 'error', snackbar: true});
            }
            if (this.editedUser.newPassword && this.editedUser.newPassword === this.editedUser.confirmNewPassword) {
                this.changePassword();
            }
        }

        async changePassword() {
            try {
                let resp = await Axios.post(`http://${alzuhudLink}:8080/api/admin/user/change-password`, {
                    id: this.editedUser.id,
                    password: this.editedUser.newPassword,
                    password_confirmation: this.editedUser.confirmNewPassword,
                    token: this.token,
                }).finally();

                this.snackIt({message: 'Password changed successfully', color: 'success', snackbar: true});
            } catch (e) {
                this.snackIt({message: 'An error occurred! ' + e.response.data.error, color: 'error', snackbar: true});
            }
        }

        async deleteUser(item: any): Promise<void> {
            if(confirm('Do you want to delete this user?')) {
                try {

                    let response = await Axios.get(`http://${alzuhudLink}:8080/api/users/delete/`+ item.id + '?token=' + this.token);
                    this.getAllUsers();

                    this.snackIt({message: 'Agent deleted successfully', color: 'success', snackbar: true});
                } catch (e) {

                    this.snackIt({message: 'An error occurred! ' + e.response.data.error, color: 'error', snackbar: true});
                }
            }
            else {

            }
        }
        async deleteAgent(item: any): Promise<void> {
            if(confirm('Do you want to delete this user?')) {
                try {
                    let response = await Axios.get(`http://${alzuhudLink}:8080/api/users/delete/`+ item.id + '?token=' + this.token);
                    this.getAllUsers();

                    this.snackIt({message: 'Agent deleted successfully', color: 'success', snackbar: true});
                } catch (e) {

                    this.snackIt({message: 'An error occurred! ' + e.response.data.error, color: 'error', snackbar: true});
                }
            }
            else {

            }
        }

        async getTickets (): Promise<void> {
            try {
                let response = await Axios.get(`http://${alzuhudLink}:8080/api/tickets/all`, {
                    params: {
                        token: this.token
                    }});
                let data = <Ticket[]>response.data.res.data;
                // this.items = data.filter(ticket => ticket.user_id.username === this.username).map(ticket => ({

                this.tickets = data.map(ticket => ({
                    id: ticket.id,
                    user: ticket.user_id.full_name,
                    subject: ticket.subject,
                    status: ticket.status,
                    date: new Date(ticket.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    })
                }));
            } catch (e) {
                console.error(e);
            }
            this.loadedCount += 1;
        }
    //@ts-ignore
    async getAllTransactions () {
        // his.tableLoading = true;

        try {
            let response = await Axios.get(`http://${alzuhudLink}:8080/api/transactions/all`, {params: {token: this.token}}
            ).finally(/*() => this.tableLoading = false*/);
            let items = response.data.res.data;

            //@ts-ignore
                this.transactions = items.map((item) => ({
                    name: item.user_id !== null ? item.user_id.full_name : 'Not Set!',
                    title: item.title,
                    amount: '$' + this.split(item.amount),
                    status: item.status,
                    bookingId: item.booking_id.id,
                    date: new Date(item.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    }),
                }));

        } catch (e) {
            console.log(e.response);
            // this.tableLoading = false;
            this.snackIt({
                message: 'An error occurred while getting users data ',
                color: 'error',
                snackbar: true
            });
        }
        this.loadedCount += 1;
    }

    //@ts-ignore
    split(str) {
        let strData = parseFloat(str);
        let data = strData.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return data.split('.')[0];
    }
    viewTicket (id: number) {
        console.log('id in support : ', id);
        this.setTicketId(id);
        this.$router.push('ticket');
    }
//@ts-ignore
    async editPackage (item) {
        try {
            //@ts-ignore
            this.editedPackage = [];
            this.editPackageDialog = true;
            this.dialogLoading = true;
            await this.getAllHotels();
            await this.getAllAirlines();
            this.editedPackage = Object.assign(this.editedPackage, item);
            // this.editedPackage.price = this.editedPackage.price.slice(1);
            //@ts-ignore
            switch (this.editedPackage.status) {
                //@ts-ignore
                case 'active' :
                    //@ts-ignore
                    this.editedPackage.status = 1;
                    break;
                //@ts-ignore
                case 'deactive' :
                    //@ts-ignore
                    this.editedPackage.status = 0;
                    break;
                //@ts-ignore
                case 'expired' :
                    //@ts-ignore
                    this.editedPackage.status = 2;
                    break;
                //@ts-ignore
                case 'banned' :
                    //@ts-ignore
                    this.editedPackage.status = 3;
                    break;
                //@ts-ignore
                case 'removed' :
                    //@ts-ignore
                    this.editedPackage.status = 4;
                    break;
            }
        } catch (e) {
            console.log(e);
        }
        finally {
            this.dialogLoading = false;
        }
    };
//@ts-ignore
    async deletePackage (id: number): void {
        if (confirm('Are you sure to close this package?')) {
            this.mainLoading = true;
            try {
                let response = await Axios.get(`http://${alzuhudLink}:8080/api/packages/delete/${id}`, {
                    params: {
                        token: this.token
                    }
                });
                this.snackIt({message: 'Package deleted', color: 'success', snackbar: true});
            } catch (e) {
                console.log(e.response);
                this.snackIt({
                    message: 'An error occurred while deleting package',
                    color: 'error',
                    snackbar: true
                });
            } finally {
                this.getAllPackages();
                this.mainLoading = false;
            }
        }
    };
//@ts-ignore
    async savePackagesEdit (e: any): void {
        e.preventDefault();
        this.saveLoading = true;
        try {
            await Axios.post(`http://${alzuhudLink}:8080/api/packages/update`, {
                id: this.editedPackage.id,
                airline_id: this.editedPackage.airlineId,
                hotel_id: this.editedPackage.hotelId,
                name: this.editedPackage.name,
                price: this.editedPackage.originalPrice,
                status: this.editedPackage.status,
                code: this.editedPackage.packCode,
                // start_date: this.newPackage.
                // end_date: this.newPackage.
                token: this.token,
                // id
                // airline_id
                // hotel_id
                // name
                // price
                // status
                // code
            });
            this.snackIt({message: 'Package updated', color: 'success', snackbar: true});
            this.getAllPackages();
            this.saveLoading = false;
        } catch (e) {
            this.saveLoading = false;
            console.log(e.response);
            this.snackIt({
                message: 'An error occurred while updating package',
                color: 'error',
                snackbar: true
            });
        }
        finally {
        }
    };
//@ts-ignore
    async getAllHotels () {
        try {
            let response = await Axios.get(`http://${alzuhudLink}:8080/api/hotels/all`, {
                params: {
                    type: 'all',
                    token: this.token
                }
            });
            //@ts-ignore
            this.hotelList = response.data.res.data.map(hotel => ({
                value: hotel.id,
                text: hotel.en_name
            }));
            // console.log(response);
        } catch (e) {
            console.log(e.response);
            this.snackIt({
                message: 'An error occurred while getting hotels data',
                color: 'error',
                snackbar: true
            });
        }
    };
//@ts-ignore
    async getAllAirlines () {
        try {
            let response = await Axios.get(`http://${alzuhudLink}:8080/api/airlines/all`, {
                params: {
                    type: 'all',
                    token: this.token
                }
            });
            //@ts-ignore
            this.airlineList = response.data.res.data.map(airline => ({
                value: airline.id,
                text: airline.name
            }));
            // console.log('air: ', response);
        } catch (e) {
            console.log(e.response);
            this.snackIt({
                message: 'An error occurred while getting airlines data',
                color: 'error',
                snackbar: true
            });
        }
    };

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
    };


    @Watch('loadedCount')
    removeLoadingDisplay(newVal: number){
            if (newVal === 6) {
                this.mainLoading = false;
            }
    }

    mounted(): void {
        this.mainLoading = true;
        this.changePanelTitle('Dashboard');
        this.replaceRoute(['Dashboard']);
        this.$parent.$emit('update route');

        this.getAllUsers();
        this.getTickets();
        this.getAllTransactions();
        this.getAllBookings();
        this.getAllPackages();
        this.getDashboardData();

    }
    /**
     *
     */
    constructor() {
        super();
    }
    beforeDestroy(): void {
        this.popRoute();
        this.$parent.$emit('update route');
    }

    checkTicket(e: MouseEvent): void {
        alert('hello');
    }
}
</script>

<style lang="scss">
    .adminDashboard {
        padding: 0 20px;
        background-color: #FAFAFA;
        height: 100%;
        #loader .v-btn__loader div{
            width: 85px !important;
            height: 85px !important;
        }
    }
    .first-row {
        display: flex;
        .card {
            width: 48% !important;
            height: 350px !important;
            margin: 25px 10px;
        }
    }

    .second-row {
        position: relative;
        z-index: 4;
        padding: 0 30px 0 10px;
        >.card {
            height: 444px !important;
            margin: 0;
            width: 100% !important;
        }
    }

    .booking {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        width: 100%;
        height: 100%;

        img {
            margin: 30px 0 12px;
        }

        .subtitle {
            font-size: 20px;
            color: #9E9E9E;
            margin-bottom: 25px;
        }
    }

    #topCardsContainer{
        padding: 20px 0;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 25px;
        grid-row-gap: 35px;
    }
    .topCards{
        padding: 0 35px;
        display: grid;
        grid-template-columns: auto 1fr;
        height: 100%;
        align-content: center;
        // grid-column-gap: 25px;
        // grid-row-gap: 35px;
    }
    .insideTopCards{
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto auto;
        grid-column-gap: 5px;
    }
    .topCardTitle{
        font-size: 22pt;
        align-self:end;
        grid-column: 1/2;
    }
    .topCardNumber{
        font-size: 25pt;
        align-self:center;
        font-weight: bold;
        grid-column: 2/3;
        grid-row:1/3;
        justify-self:right;
    }
    .topCardSubtitle{
        font-size: 14pt;
        color:grey;
        grid-column: 1/2;
    }
    .bottom-container{
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 25px;
        grid-row-gap: 25px;
    }
    .table-Container {
        display: grid;
        grid-template-columns: 1fr auto;
        overflow: hidden;
    }

    .table-Container #more .v-btn::before {
        display: none;
    }

    @media screen and (max-width: 1710px) {
        /*#topCardsContainer{
            padding: 30px 0;
            display: grid;
            grid-template-columns: auto auto;
            grid-column-gap: 25px;
            grid-row-gap: 35px;
            justify-content: space-between;
        }*/
       .topCardTitle{
        font-size: 18pt;
        align-self:end;
        grid-column: 1/2;
        }
        .topCardNumber{
        font-size: 21pt;
        align-self:center;
        font-weight: bold;
        grid-column: 2/3;
        grid-row:1/3;
        justify-self:right;
        }
        .topCardSubtitle{
        font-size: 11pt;
        color:grey;
        grid-column: 1/2;
        }
    }
    @media screen and (max-width: 1600px) {
        #topCardsContainer{
        padding: 30px 0;
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 25px;
        grid-row-gap: 35px;
        }
    }
    @media screen and (max-width: 960px) {
        #topCardsContainer{
            padding: 30px 0;
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 25px;
            grid-row-gap: 35px;
        }
        .table-Container {
            display: grid;
            grid-template-columns: 1fr;
            overflow: hidden;
        }
        .bottom-container{
            display: block;
            width: 100%;
            .table-Container{
                margin: 20px 0;
            }
        }
    }
    /*@media screen and (max-width: 600px) {
        #topCardsContainer{
        padding: 30px 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 25px;
        grid-row-gap: 35px;
        }
        .topCardTitle{
        font-size: 16pt;
        font-weight: 500;
        align-self:end;
        grid-column: 1/2;
        }
        .topCardNumber{
        font-size: 18pt;
        align-self:center;
        font-weight: bold;
        grid-column: 2/3;
        grid-row:1/3;
        justify-self:right;
        }
        .topCardSubtitle{
        font-size: 9pt;
        color:grey;
        grid-column: 1/2;
        }
    }*/
    @media screen and (max-width: 600px) {
        .topCards{
            padding: 0 25px;
            display: grid;
            grid-template-columns: 1fr;
            height: 100%;
            align-content: center;
            // grid-column-gap: 25px;
            // grid-row-gap: 35px;
            button {
                margin-right: 0;
                margin-bottom: 10px;
                justify-self: center;
            }
        }
        .topCardTitle{
            font-size: 19px;
            font-weight: 600;
            align-self:end;
            grid-column: 1/2;
        }
        .topCardNumber{
            font-size: 23px;
            align-self:center;
            font-weight: bold;
            grid-column: 2/3;
            grid-row:1/3;
            justify-self:right;
        }
        .topCardSubtitle{
            font-size: 14px;
            color:grey;
            grid-column: 1/2;
        }
    }
</style>
