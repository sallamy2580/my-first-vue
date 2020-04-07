<template>
    <v-row class="row-flex justify-center mt-12 mt-md-0">
        <v-col cols="12" md="3" class="d-flex px-0 px-md-3 justify-center"
            v-for="(feature, index) in features" 
                :key="index"
        >
                <!-- :class="[index === 0 ? 'justify-end' : (index === 1 ? 'justify-center': 'justify-start')]" -->
            <FeatureCard
                :image="feature.image"
                :name="feature.name"
                :description="feature.description" class="mx-7 mx-md-0">
            </FeatureCard>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FeatureCard from './FeatureCard.vue';
// @ts-ignore
import kaaba from '../assets/kaaba.svg';
// @ts-ignore
import mosque from '../assets/mosque.svg';
// @ts-ignore
import hotel from '../assets/hotel.svg';

interface Feature {
    name: string,
    description: string,
    image: string
}



@Component({
    name: 'alzuhud-header',
    components: {
        FeatureCard
    }
})
export default class AlzuhudHeader extends Vue {
    features: Array<Feature>;
    /**
     *
     */
    constructor() {
        super();
        this.features = [
            {
                name: 'Ummrah Services',
                description: 'We are here in Al-Zuhud directing and allocating ways of care and comfort for Hajj or Ummrah to enable the guests of the Rahman to devote full time to worship without hardship or trouble. ',
                image: kaaba
            },
            {
                name: 'Beautiful Facilities',
                description: 'We always make sure all our facilities ensure quality and comfort. Zahd for Hajj and Ummrah services is always seeking to provide the best services to our guests',
                image: hotel
            },
            {
                name: 'Visitor Services',
                description: 'Providing all the amenities and safety of transportation and guidance services and the organization of the arbitrator in addition to the expansions in the vast areas of the Holy Mosque and the Prophet’s Mosque.',
                image: mosque
            }
        ];     
    }  
}
</script>

<style lang="scss" scoped>
    .row-flex {
        // display: flex;
        // justify-content: center;
        background: url('../assets/curve.svg') no-repeat;
        background-position: 0 103%;
        background-size: 100%;
        @media screen and (max-width: 960px) {
            background-position: 0 101%;
        }
    }

    .zero-margin {
        margin: 0;
        width: 100% !important;
    }
</style>

