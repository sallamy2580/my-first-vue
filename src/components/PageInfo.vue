<template>
    <div class="page-info" :style="{'direction': isRtl ? 'rtl': ''}">
        <div class="header">{{pageName}}</div>
        <div class="divider"></div>
        <div class="routes">
            <div class="route">HOME</div>
            <template v-for="(route, index) in routes">
                <img src="../assets/arrow.svg" alt="" class="arrow" :style="{'transform': isRtl ? 'rotateZ(-180deg)': ''}" :key="index">
                <div class="route" :key="index" :style="{'overflow': index === routes.length - 1 ? 'hidden': '', 'text-overflow': index === routes.length - 1 ? 'ellipsis': ''}">{{route.toUpperCase()}}</div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class PageInfo extends Vue {
    @Prop({default: []}) routes: Array<string>;
    @Prop({default: ''}) pageName: string;
    @Prop({default: false}) isRtl: boolean;
}
</script>


<style lang="scss">

    .page-info {
        margin: 0 322px;
        color: black;
        .routes {
            display: flex;
            margin-bottom: 42px;
        }

        .divider {
            height: 3px;
            background: $foreground;
            border-radius: 3px;
            width: 52px;
            margin-bottom: 24px;
            @media screen and (max-width: 960px) {
                margin-bottom: 10px;
            }
        }

        .header {
            font-size: 35px;
            font-weight: bold;
            margin-bottom: 32px;
            @media screen and (max-width: 960px) {
                font-size: 20px;
                margin-bottom: 10px;
            }
        }

        .route {
            font-size: 20px;
            font-weight: lighter;
            @media screen and (max-width: 960px) {
                font-size: 17px;

                white-space: nowrap;
            }
        }

        .arrow {
            margin: 0 11px;
        }

        @media screen and (max-width: 1903px) {
            margin: 0 150px !important;
        }
        @media screen and (max-width: 1264px) {
            margin: 0 20px !important;
        }

    }
</style>
