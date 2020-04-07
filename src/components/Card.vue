<template>
    <div class="card" :style="{'height': height+'px', 'width': width+'px'}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Card extends Vue {
    @Prop({default: 422, type: Number}) height: number;
    @Prop({default: 412, type: Number}) width: number;
}
</script>

<style lang="scss" scoped>
 .card {
        border-radius: 50px;
        margin: 30px 10px;
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.116);
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
