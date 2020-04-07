<template>
    <Card class="card" :class="[outline ? 'card-outline': '']" :height="489.9" :width="width">
        <div class="container">
            <div class="title-icon" :class="[horizontal? 'title-icon-horizontal': '']">
                <div class="title-image">
                    <img src="../assets/mosque_moon.svg">
                </div>
                <div class="title-container">
                    <div class="title">{{title}}</div>
                    <!-- <div class="rating">
                        <div v-for="i in [1,2,3,4,5]" :key="i">
                            <img src="../assets/star.svg">
                        </div>
                    </div> -->
                    <v-rating 
                        color="yellow darken-2" 
                        background-color="grey lighten-2"
                        empty-icon="mdi-star"
                        v-model="rating"
                        :size="horizontal ? 24: 30"
                        dense
                        readonly></v-rating>
                </div>
            </div>
            <div class="info-container">
                <div class="info-title">Package Code</div>
                <div class="package-info">{{packageCode}}</div>
            </div>
            <div class="info-container" v-if="!!travelDate">
                <div class="info-title">Travel Date</div>
                <div class="package-info">{{travelDate}}</div>
            </div>
            <div class="info-container">
                <div class="info-title">Starting From</div>
                <div class="package-info" style="font-weight: bold;">${{startingPrice}}</div>
            </div>
            <v-btn depressed rounded color="primary" x-large v-on="$listeners">Book Now</v-btn>
        </div>
    </Card>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Card from './Card.vue';
import btn from './btn.vue';

@Component({
    components: {
        Card,
        btn
    }
})
export default class PackageCard extends Vue {
    @Prop({default: 'Hajj Ummrah 2019'}) title: string;
    @Prop({default: 'KDS25'}) packageCode: string;
    @Prop({default: '08.21.2019'}) travelDate: string;
    @Prop({default: '11,999'}) startingPrice: string;
    @Prop({default: false}) horizontal: boolean;
    @Prop({default: false}) outline: boolean;
    @Prop() width: number;
    
    @Prop({default: 4}) rating: number;
    /**
     *
     */
    constructor() {
        super();
        // this.packageCode = 'KDS25';
        // this.travelDate = '08.21.2019';
        // this.startingPrice = '$11,999';
    }
}
</script>

<style lang="scss" scoped>
    .card {
        border-radius: 20px !important;
    }

    .card-outline {
        box-shadow: none;
        border: 0.7px solid #BDBDBD !important;
        height: 333px !important;
        .container {
            padding: 21px;
        }
    }

    .container {
        padding: 32px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        text-align: left;
        justify-content: flex-end;
    }

    .title {
        font-size: 20px !important;
        font-weight: bold !important;
        line-height: 40px !important;
    }

    .title-icon {
        height: inherit; 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .title-image {
        height: inherit;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title-icon-horizontal {
        flex-direction: row-reverse;
        justify-content: space-between;
        height: initial;
        margin-bottom: 10px;
        
        .title-image {
            width: initial;
            height: initial;
            >img {
                height: 43px;
                width: 43px;
            }
        }
    }

    .rating {
        margin-left: -8px;
    }

    .title-container {
        align-self: flex-start;
    }

    .info-container {
        width: 100%;
        position: relative;
        margin: 0 0 11px;

        &:nth-of-type(2) {
            margin-top: 24px;
        }

        &:last-of-type {
            margin-bottom: 24px;
        }

        .info-title {
            font-size: 16px;
            font-weight: normal;
            color: #707070;
        }
    }

    .package-info {
        position: absolute;
        right: 0;
        top: 0;
    } 

    button {
        width: 100%;
        font-size: 18px;
        text-transform: initial;
    }
</style>
