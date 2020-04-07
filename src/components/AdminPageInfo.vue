<template>
    <div class="admin-page-info">
        <div class="route" style="white-space: nowrap;">{{language === 'ar' ? arabic(adminUser):adminUser}}</div>
        <template v-for="(route, index) in routes">
            <img src="../assets/arrow.svg" alt="" class="arrow">
            <div class="route" :key="index" style="white-space: nowrap;" :style="{'overflow': index === routes.length - 1 ? 'hidden': '', 'text-overflow': index === routes.length - 1 ? 'ellipsis': ''}">{{language === 'ar' ? arabicRoute(route):route}}</div>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import {State} from "vuex-class";
import {makeArabic} from "@/components/Functions/Functions";

@Component({})
export default class PageInfo extends Vue {
    @Prop({default: []}) routes: string[];
    @Prop({default: ''}) adminUser: string;
    @State language: any;
    arabic(user: string): string {
        if (user.toLowerCase() !== 'user')
            return user;
        return 'المستخدم';
    }

    arabicRoute(route: string): string {
        return makeArabic(route);
    }
}
</script>


<style lang="scss" scoped>
    .routes {
        display: flex;
        margin-bottom: 42px;
    }

    .route {
        font-size: 16px;
    }

    .arrow {
        margin: 0 11px;
        min-width: 11px;
    }

    .admin-page-info {
        display: flex;
        align-items: center;
        color: #707070;
        max-width: 100%;
        margin-right: -20px;
    }
</style>
