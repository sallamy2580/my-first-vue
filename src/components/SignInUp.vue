<template>
    <div class="action">
        <div>{{actionTitle}}</div>
        <btn class="btn" :outline="true" @click="changePage">{{actionName}}</btn>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import btn from './btn.vue';

@Component({
    components: {
        btn
    }
})
export default class SignInUp extends Vue {
    @Prop({default: `Don't have an account?`}) actionTitle: string;
    @Prop({default: `Sign Up`}) actionName: string;
    @Prop({}) action: string;
    changePage() {

        this.$router.replace(`/${this.action}`);
    }
}
</script>

<style lang="scss" scoped>
    .action {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 74px;
        div {
            align-self: center;
            font-size: 18px;
            color: #707070;
            font-weight: lighter;
            margin-bottom: 12px;
        }
    }

    .btn {
        width: 100%;
    }
</style>
