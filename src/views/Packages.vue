<template>
    <div class="packages white">
        <AlzuhudHeader :light="true"></AlzuhudHeader>
        <PageInfo pageName="Packages" :routes="routes" style="margin-top: 60px;"></PageInfo>
        <div class="heading" v-if="packages.length !== 0">You can pick one of our packages below:</div>
        <div class="heading" v-else-if="!loading">There are no packages available at this moment.</div>
        <div class="card-container d-flex flex-wrap justify-center">
            <v-progress-circular
                :size="70"
                :width="7"
                color="secondary"
                indeterminate
                v-if="loading"
            ></v-progress-circular>
            <PackageCard v-for="(p, index) in packages" :key="i"
                         :title="p.name"
                         :packageCode="p.packageCode"
                         :rating="p.rating"
                         :startingPrice="p.price"
                         :travelDate="p.travelDate"
                         class="mx-0 mx-sm-2 my-2"
                         @click="$router.push('/sign-in')"></PackageCard>
        </div>
<!--        <AppSection></AppSection>-->
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AlzuhudHeader from '@/components/AlzuhudHeader.vue';
import PageInfo from '@/components/PageInfo.vue';
import AppSection from '@/components/AppSection.vue';
import Footer from '@/components/Footer.vue';
import PackageCard from '@/components/PackageCard.vue';
import Axios from "axios";
import alzuhudLink from "@/components/Functions/Functions";


@Component({
    components: {
        AlzuhudHeader,
        PageInfo,
        AppSection,
        Footer,
        PackageCard
    }
})
export default class Packages extends Vue {
    routes: Array<string>;
    packages: any[] = [];
    loading: boolean = true;
    /**
     *
     */
    constructor() {
        super();
        this.routes = ['services', 'packages'];
    }

    async mounted() {
        document.title = 'Packages - Alzuhud';
        try {
            const response = await Axios.get(`http://${alzuhudLink}:8080/api/packages/all`, {});

            this.packages = response.data.res.data.map((item: any) => ({
                name: item.name,
                rating: item.rate,
                date: item.start_date,
                packageCode: item.package,
                price: item.price,
            }))
        } finally {
            this.loading = false;
        }


    }
}
</script>

<style lang="scss" scoped>
    .card {
        @media screen and (max-width: 960px) {
            margin: 20px 0;
        }
    }

    .heading, .page-info {
        font-size: 22px;
        margin: 0 322px;
        color: black;

        @media screen and (max-width: 1900px) {
            margin: 0 220px;
        }

        @media screen and (max-width: 1700px) {
            margin: 0 100px;
        }
        
        @media screen and (max-width: 1464px) {
            margin: 0 70px;
        }
        
        @media screen and (max-width: 960px) {
            margin: 0 20px;
        }
    }

    .heading {
        @media screen and (max-width: 960px) {
            font-size: 16px;
            font-weight: normal;
            margin-bottom: 20px;
        }
    }

    .card-container {
        margin: 0 300px 160px;
        @media screen and (max-width: 1900px) {
            margin: 0 200px 120px;
        }

        @media screen and (max-width: 1700px) {
            margin: 0 100px 160px;
        }
        
        @media screen and (max-width: 1464px) {
            margin: 0 70px 160px;
        }

        @media screen and (max-width: 800px) {
            margin: 0 20px 120px;
        }
    }
</style>
