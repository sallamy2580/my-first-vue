<template>
    <Card
        :width="width"
        :height="height">
        <div class="header">
            <div class="header-content">{{headerContent}}</div>
            <div class="action" v-on="$listeners">{{action}}</div>
        </div>
        <slot></slot>
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
export default class AdminCard extends Vue {
    @Prop({type: Number}) height: number;
    @Prop({type: Number}) width: number;
    @Prop({default: 'My recent Bookings', type: String}) headerContent: string;
    @Prop({default: 'More', type: String}) action: string;
}
</script>

<style lang="scss" scoped>
 .card {
        border-radius: 20px !important;
        overflow: hidden;
        margin: 30px 10px;
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.116);
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 23px 35px 0;
            .header-content, .action {
                font-size: 20px;
            }

            .action {
                font-weight: bold;
                color: $foreground;
                text-transform: uppercase;
                text-align: right;
                max-width: 40%;
                &:hover {
                    cursor: pointer;
                }

                @media screen and (max-width: 960px) {
                    font-size: 16px;
                }
            }
        }
    }
</style>
