<template>
    <input type="submit" :value="this.$slots['default'] !== undefined ? this.$slots['default'][0].text: ''" v-if="isSubmit">
    <button v-else :class="[outline ? 'outline': '']">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class btn extends Vue {
    @Prop({default: false}) isSubmit: boolean;
    @Prop({default: false}) outline: boolean;
}
</script>
 
<style lang="scss" scoped>
button {
    background-color: $foreground;
    outline: none;
    border: none;
    border-radius: 50px;
    color: white;
    padding: 15px 50px;
    font-size: 18px;
    font-weight: 500;
    border: 1px solid $foreground;
    transition: all .2s linear;
    &:hover {
    color: $foreground;
    background: white;
    cursor: pointer;
    }
}

.outline {
    background-color: white;
    outline: none;
    border: none;
    border-radius: 50px;
    color: $foreground;
    padding: 15px 50px;
    font-size: 18px;
    font-weight: 500;
    border: 1px solid $foreground;
    transition: all .2s linear;
    &:hover {
    color: white;
    background: $foreground;
    cursor: pointer;
    }
}

input[type="submit"] {
    background-color: $foreground;
    outline: none;
    border: none;
    border-radius: 50px;
    color: white;
    padding: 15px 50px;
    font-size: 18px;
    font-weight: 500;
    border: 1px solid $foreground;
    transition: all .2s linear;
    &:hover {
    color: $foreground;
    background: white;
    cursor: pointer;
    }
}
</style>
