<template>
    <Card
        :height="204"
        :width="1275"
        class="blurred-card testimonial-card"
        :style="{'transform': `translateX(${translateX}px)`}"
        >
        <div class="blurred-background d-none d-md-block" :style="{'left': left + 'px', 'top': top + 'px'}">
        </div>
        <div class="content-background">
            <div class="content-header mb-4 mb-md-0">
                <img class="avatar" src="../assets/avatar.png">
                <div class="header">
                    <div class="title text-no-wrap">{{cardTitle}}</div>
                    <div class="country text-no-wrap">{{cardCountry}}</div>
                </div>
            </div>
            <div class="d-none d-md-block content"><span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</span></div>
            <div class="content d-md-none"><span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit</span></div>
        </div>
    </Card>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Watch } from 'vue-property-decorator';
import Card from './Card.vue';

@Component({
    components: {
        Card
    }
})
export default class TestimonialCard extends Vue {
    left: number;
    top: number;
    @Prop({default: 'Tim Johnson', type: String}) cardTitle: string;
    @Prop({default: 'France', type: String}) cardCountry: string;
    @Prop({default: 0, type: Number}) translateX: number;
    @Watch('translateX', { immediate: true, deep: true })
    changebackground(val: number, oldVal: number) {
        let interval = setInterval(() => {
            this.changeBackground();
        }, 0);
        setTimeout(() => {
            clearInterval(interval);
        }, 150);
    }

    /**
     *
     */
    constructor() {
        super();
        this.left = 0;
        this.top = 0;
    }

    mounted (): void {
        
        var rect = this.$el.getBoundingClientRect();
        this.left = -rect.left;
        this.top = -286.7;
        window.addEventListener("resize", () => {
            var rect = this.$el.getBoundingClientRect();
            this.left = -rect.left;
        });
    }

    changeBackground() {
        var rect = this.$el.getBoundingClientRect();
        this.left = -rect.left;
    }
}
</script>

<style lang="scss" scoped>
    .testimonial-card {
        * {
            user-select: none;
            &:hover {
                cursor: pointer;
            }
        }
        margin: 0;
        @media screen and (max-width: 960px) {
            border-radius: 15px !important;
            height: initial !important;
            margin: 0;
            .content-background {
                padding: 36px 44px;
            }
            .content {
                width: 100%;
                // height: 38%;
                max-height: 268px;
                // overflow: visible;
                text-overflow: ellipsis;
            }
        }
    }

    .blurred-card {
        position: relative;
        overflow: hidden;
        width: 90% !important;
        background-color: none;
        background: none;
        border-radius: 15px;
        transition: transform .1s linear;
    }
    .blurred-background
    {
        position: absolute;
        // z-index: -1;
        height: 690px;
        width: calc(100vw - 17px);
        background: url('../assets/quran.png');
        background-size: cover;
        background-position: center;
        filter: blur(8px);
    }

    .content-background {
        z-index: 2; 
        background-color: transparentize($color: lighten($color: $foreground, $amount: 30%), $amount: 0.6);
        height: 100%;
        color: white;
        display: flex;
        padding: 30px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: baseline;
    }

    .content {
        font-size: 20px;
        font-style: italic;
        max-height: 60px;
        overflow: hidden;
        text-align: left;
        @media screen and (max-width: 960px) {
            word-wrap: normal;
            // overflow: initial;
        }
    }

    .content-header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-width: 220px;
        .avatar {
            height: 72px;
            width: 72px;
        }
        .header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: baseline;
            width: auto;
            margin-left: 30px;
            & > * {
                text-align: left;
            }
            .title {
                font-size: 20px;
                font-weight: bold;
                color: white;
            }

            .country {
                font-size: 20px;
                font-weight: lighter;
                color: white;
            }
        }

        @media screen and (max-width: 960px) {
            min-width: initial;
        }
    }
</style>
