<template>
    <div>Redirecting...</div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component({})
    export default class RedirectLogin extends Vue {
        @Prop() token: string;
        @Prop() role: string;
        @Prop() userId: number;
        @Prop() fullName: string;

        mounted() {
            if (!!this.token) {
                window.opener.postMessage({
                    token: this.token,
                    role: this.role,
                    userId: this.userId,
                    fullName: this.fullName,
                });
                close();
            }
        }
    }
</script>