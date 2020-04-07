<template>
    <div>
        <p class="font-weight-light body-1 grey--text">{{title}}</p>
        <p class="title font-weight-regular black--text">{{titleName}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Label extends Vue {
    @Prop({}) title: string;
    @Prop({}) titleName: string;
}
</script>

<style lang="scss" scoped>
    
</style>
