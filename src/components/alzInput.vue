<template>
    <div>
        <div class="input-title">{{inputTitle}}</div>
        <textarea v-if="textArea" style="resize: none; height: 140px;" :placeholder="placeholder"></textarea>
        <input v-else type="text" name="" id="" :placeholder="placeholder">
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class alzInput extends Vue {
    @Prop({default: ''}) placeholder: string;
    @Prop({default: ''}) inputTitle: string;
    @Prop({default: false}) textArea: boolean;
}
</script>

<style lang="scss" scoped>
    input[type="text"], textarea {
        width: 100%;
        padding: 14px 25px;
        border: 1px solid #BDBDBD;
        border-radius: 7px; 
        outline: none;
        box-sizing: border-box;
    }

    .input-title {
        font-size: 16px;
        font-weight: lighter;
        margin-bottom: 5px;
        color: #707070;
    }
</style>
