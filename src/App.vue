<template>
  <div id="app">
    <v-app >
      <router-view/>
      <v-snackbar class="text-capitalize text-center" :timeout="0" v-model="snack" :color="color">{{message}}</v-snackbar>
    </v-app>
  </div>
</template>

<script>
  import {mapActions, mapMutations, mapState} from "vuex";

  export default {
    data: () => ({
      isSnackbar: false,
    }),
    computed: {
      ...mapState([
        'message',
        'color',
        'snackbar'
      ]),
      snack: {
        get() {
          return this.snackbar;
        },
        set (val) {
          this.setSnackbar(val);
        }
      }
    },
    methods: {
      ...mapActions([
        'clearStore',
        'getCountries'
      ]),
      ...mapMutations([
        'setToken',
        'setSnackbar'
      ])
    },
    created() {
      this.setSnackbar(false);
    },
    async mounted() {
      this.setToken();
      setTimeout(() => {
        this.isSnackbar = true;
      }, 500);
      this.getCountries();
    },
    async beforeDestroy() {
      await this.clearStore();
    }
  }
</script>

<style lang="scss">
/* @font-face {
   font-family: OpenSans;
   src: url('https://fonts.googleapis.com/css?family=Open+Sans');
 }*/

.v-application--wrap {
  min-height: unset !important;
}

@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap");
@import url('https://fonts.googleapis.com/css?family=Amiri:300,400,600,700&display=swap');

.v-application * {
  font-family: 'Open Sans', 'Amiri' !important;
}

.v-application .title {
  font-family: 'Open Sans', 'Amiri' !important;
}

#app {
  font-family: 'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 100vw;
}

.border-20 {
  border-radius: 20px !important;
}

.v-picker {
  table {
    .v-btn {
      text-transform: capitalize !important;
      font-size: 12px !important;
      font-weight: 500 !important;
      letter-spacing: normal !important;
    }
  }

  .v-btn {
    font-weight: 500 !important;
    font-size: 14px !important;
  }
}

.v-btn {
  text-transform: none !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  letter-spacing: normal !important;
}

.v-btn--icon.v-size--default {
  height: 36px !important;
  width: 36px !important;
}

.v-tab {
  text-transform: none !important;
  text-align: center !important;
}

.v-tab--active {
  font-weight: 600 !important;
}

body {
  margin: 0;
}

 .v-sheet {
   border-radius: 20px !important;
 }
/*.v-dialog {*/
/*  border-radius: 20px !important;*/
/*}*/

 .v-sheet.v-card--flat {
   border-radius: 0 !important;
 }

.v-btn {
  letter-spacing: normal !important;
  font-size: inherit !important;
  text-transform: none !important;
}

  .v-data-table td,th {
    padding: 0 35px !important;
    white-space: nowrap !important;
  }
    .v-data-table th {
        color: #707070;
        font-weight: 600;
    }

  .v-date-picker-table--date th {
    padding: 8px 0 !important;
  }

  .v-data-table__mobile-row__header {
    font-weight: 500 !important;
    color: #707070;
  }

    .table {
        margin-top: .3rem;
        width: 100%;
        * {
            td, th {
                font-size: 16pt !important;
                @media screen and (max-width: 1400px) {
                    font-size: 16px !important;
                }
                @media screen and (max-width: 400px) {
                  font-size: 12px !important;
                }
            }
            th {
                i {
                    font-size: 1.5rem !important;
                    @media screen and (max-width: 1300px) {
                        font-size: 1.1rem !important;
                    }
                    @media screen and (max-width: 400px) {
                      font-size: 0.7rem !important;
                    }
                }
            }
        }
        tr {
            height: 57px !important;
        }
    }
.alz-title {
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  letter-spacing: .0125em !important;
}

.alz-subtitle-1 {
  font-size: 1rem !important;
  font-weight: 400;
  letter-spacing: .009375em !important;
  line-height: 1.75rem;
}

@media screen and (max-width: 1200px) {
    .alz-title {
      font-size: .9rem !important;
    }

    .alz-subtitle-1 {
      // @extend .subtitle-1 !optional;
        font-size: .9rem !important;
    }
}
  @media screen and (max-width: 600px) {
    .v-input * {
      font-size: 14px !important;
    }
    .table {
      margin-top: 0 !important;
    }
    .v-data-table td,th {
      padding: 0 15px !important;
    }
  }
</style>
