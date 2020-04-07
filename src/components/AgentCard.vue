<template>
    <Card
    :width="628"
    :height="204">
        <div class="name-image">
            <img :src="image">
        </div>
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
export default class AgentCard extends Vue {
    @Prop({default: '', type: String}) description: string;
    @Prop({default: '', type: String}) image: string;
}
</script>

<style lang="scss" scoped>
    .card {
        margin: 10px;
        border-radius: 20px;
        align-items: flex-start;
        padding: 35px 40px;
        box-sizing: border-box;
        justify-content: flex-start;
    }

    .name-image {
        width: 47px;
        height: 41px;
    }

    .description {
        font-size: 22px;
        margin-top: 20px;
        @media screen and (max-width: 960px) {
            font-size: 18px;
        }
    }
</style>
