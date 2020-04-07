<template>
    <div class="header-section">
      <div class="header" :style="{'color': foreColor}">{{header}}</div>
      <div class="divider-line" :style="{'background-color': dividerColor}"></div>
      <div class="sub-header" :style="{'color': foreColor}">{{subHeader}}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class HeaderSection extends Vue {
    @Prop() header: string;
    @Prop() subHeader: string;
    @Prop({default: '#00897B'}) dividerColor: string;
    @Prop({default: '#000000'}) foreColor: string;
}
</script>


<style lang="scss" scoped>
    .header {
        font-size: 35px;
        color: black;
        width: 520px;
        text-align: center;
        font-weight: bold;
        @media screen and (max-width: 960px) {
            font-size: 20px;
            width: auto;
        }
    }

    .header-section {
        display: flex;
        align-items: center;
        flex-direction: column;
        @media screen and (max-width: 960px) {
            justify-content: center;
            padding: 0 20px;
        }
    }

    .divider-line {
        margin-top: 10px;
        margin-bottom: 30px;
        width: 50px;
        height: 5px;
        background-color: $foreground;
        border-radius: 5px;
    }

    .sub-header {
        font-weight: lighter;
        font-size: 20px;
        color: black;
        @media screen and (max-width: 960px) {
            font-size: 16px;
            text-align: center;
        }
    }
</style>
