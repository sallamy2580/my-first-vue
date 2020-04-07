<template>
    <Card>
        <div class="name-image">
            <img :src="image">
        </div>
        <div class="name">{{name}}</div>
        <div class="description">{{description}}</div>
    </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from './Card.vue';

@Component({
    components: {
        Card
    }
})
export default class FeatureCard extends Vue {
    @Prop({default: '', type: String}) name: string;
    @Prop({default: '', type: String}) description: string;
    @Prop({default: '', type: String}) image: string;
}
</script>

<style lang="scss" scoped>
    .card {
        border-radius: 50px;
        height: 422px;
        margin: 30px 10px;
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.116);
        width: 412px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        @media screen and (max-width: 960px) {
            margin: 0 20px;
        }
        
    }

    .name-image {
            margin: 90px 0 0;
            border-radius: 50%;
            img {
                width: 50px;
                height: 46px;
                margin: 30px;
            }
            background-color: #00897B;
            @media screen and (max-width: 960px) {
                margin: 60px 0 0;
            }
        }

        .name {
            font-weight: 500;
            font-size: 22px;
            color: #00897B;
            margin: 20px;
            text-align: center;
        }

        .description {
            width: 300px;
            text-align: center;
            @media screen and (max-width: 960px) {
                width: 80%;
                // margin: 0 48px;
            }
        }
</style>
