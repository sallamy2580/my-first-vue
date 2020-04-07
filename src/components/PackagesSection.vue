<template>
    <div class="package-container" :style="{'align-items': 'center', 'min-height': packages.length !== 0 ? '100vh': '50vh'}">
        <HeaderSection
            header="Our Packages"
            subHeader="SELECT ONE OF THESE PACKAGES">
        </HeaderSection>
        <Card class="package-card d-flex flex-column flex-md-row justify-center justify-md-start align-center align-self-stretch pa-5 mx-md-12 mx-4" style="box-sizing: border-box;" :style="{'width': 'initial !important'}"
            :height="128">
            <div class="d-flex flex-row mt-6 mt-md-0">
                <img src="../assets/puzzel.svg">
                <div class="">
                    <div class="question">Our Packages Do Not Fit You?</div>
                    <div class="action">Create Your Own</div>
                </div>
            </div>
            <v-btn rounded depressed color="primary" class="mt-9 mt-md-0" x-large :block="block" style="padding: 0 57px; text-transform: capitalize;" @click="$router.push('/sign-in')">{{language === 'ar' ? 'أبدا':'Start'}}</v-btn>
        </Card>
        <div class="d-flex flex-column align-center flex-grow-1" :style="{'width': $vuetify.breakpoint.mdAndUp ? '': '90% !important'}" v-resize="resizeBtn">
            <v-window v-model="window" v-if="packages.length !== 0">
                <v-window-item v-for="(item, index) in 3" :key="item">
                    <v-card flat style="border-radius: 0 !important;" class="d-flex">
                        <PackageCard v-for="i in packages.splice(index * ($vuetify.breakpoint.lgAndUp ? 3 : ($vuetify.breakpoint.mdOnly ? 2 : 1)), index * ($vuetify.breakpoint.lgAndUp ? 3 : ($vuetify.breakpoint.mdOnly ? 2 : 1)) + ($vuetify.breakpoint.lgAndUp ? 3 : ($vuetify.breakpoint.mdOnly ? 2 : 1)))" :title="i.name" :startingPrice="i.price" :rating="i.rate" :packageCode="i.code" :travelDate="i.start_date" :key="index" :class="[index!== 0 ? 'd-none': '', index === 1 ? 'd-md-flex': '', index === 2 ?'d-lg-flex': '']" :style="{'width': $vuetify.breakpoint.mdAndUp ? '412px': '100%', 'margin': $vuetify.breakpoint.mdAndUp ? '': '0 !important'}" @click="$router.push('/sign-in')"></PackageCard>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
        <v-item-group
            v-model="window"
            class="shrink mr-6 d-flex align-center align-self-center"
            mandatory
            tag="v-flex"
            style="min-height: 40px;"
            v-if="packages.length !== 0"
            >
            <v-item
                v-for="n in 3"
                :key="n"
                v-slot:default="{ active, toggle }"
            >
                    <v-icon :input-value="active"
                        @click="toggle"
                        color="#00897B"
                        :x-large="active"
                        :style="{'opacity': active ? '1': '0.3'}"
                        :medium="!active">mdi-record</v-icon>
            </v-item>
        </v-item-group>
    </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HeaderSection from './HeaderSection.vue';
import Card from './Card.vue';
import btn from './btn.vue';
import PackageCard from './PackageCard.vue';
import Axios from 'axios';
import alzuhudLink from "@/components/Functions/Functions";
import {State} from "vuex-class";

@Component({
    components: {
        HeaderSection,
        Card,
        btn,
        PackageCard
    }
})
export default class PackagesSection extends Vue {
    private selectedIndex: number;
    window: number = 0;
    block: boolean = true;
    packages: any[] = [];
    @State language: any;

    resizeBtn():void {
        let width = document.body.clientWidth;
        if (width < 940) {
            this.block = true;
        } else {
            this.block = false;
        }
    }
    /**
     *
     */
    constructor() {
        super();
        this.selectedIndex = 0;
    }

    async mounted() {
        document.title = 'Packages - Alzuhud';
        const response = await Axios.get(`http://${alzuhudLink}:8080/api/packages/all`, {

        });

        this.packages = response.data.res.data.map((item: any) => ({
            name: item.name,
            rating: item.rate,
            date: item.start_date,
            packageCode: item.code,
            price: item.price,
            start_date: item.start_date
        }))


    }
}
</script>

<style lang="scss" scoped>
    .package-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 30px 0;

        @media screen and (max-width: 960px) {
            width: 100%;
            align-items: stretch;
        }
    }

    .package-card {
        text-align: left;
        width: 100% !important; 
        margin: 30px 10px !important;
        box-shadow: none;
        border: 1px solid #bdbdbd;
        border-radius: 20px;
        position: relative;

        img {
            margin: 0 30px 0 40px;
        }

        button {
            position: absolute;
            right: 40px;
            top: 27%;
        }

        .question {
            font-weight: lighter;
            font-size: 20px;
        }

        .action {
            font-size: 25px;
            font-weight: bold;
        }

        @media screen and (max-width: 960px) {
            height: initial !important;

            img {
                margin: 0 18px 0 0;
            }

            .question {
                font-size: 14px;
            }

            .action {
                font-size: 20px;
            }

            button {
                position: static;
            }
        }
    }

    .card-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .circle {
        border-radius: 50%;
        background-color: transparentize($color: $foreground, $amount: 0.6);
        width: 20px;
        height: 20px;
        transition: background-color .2s linear;
        &:hover {
            background-color: $foreground;
            cursor: pointer;
        }
    }

    .circle-selected {
        background-color: $foreground;
        width: 30px;
        height: 30px;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 120px;
        margin-top: 30px;
    }

    .v-window {
        .card {
            margin: 30px 10px;
            &:first-of-type {
                margin-left: 0 !important;
                @media screen and (max-width: 960px) {
                    margin: 20px;
                    margin-left: 20px !important;
                }
            }

            &:last-of-type {
                margin-right: 0 !important;
            }
        }
    }

</style>
