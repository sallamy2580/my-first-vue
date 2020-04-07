<template>
    <div class="social-button" :style="{'border-color': isGoogle ? '#BDBDBD': '#3F51B5', 'color': isGoogle ? '#404040': '#3F51B5'}">
        <img v-if="isGoogle" src="../assets/google.svg" alt="">
        <img v-else src="../assets/facebook.svg" alt="">
        <div><slot></slot></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Card extends Vue {
    @Prop({default: true}) isGoogle: boolean;
}
</script>

<style lang="scss" scoped>
    .social-button {
        border-style: solid;
        border-width: 1px;
        border-radius: 50px;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48%;
        div {
            margin-left: 17px;
        }

        &:hover {
            cursor: pointer;
        }
    }
</style>