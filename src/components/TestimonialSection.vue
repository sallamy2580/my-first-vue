<template>
    <div class="testimonial-backcover">
        <div class="green-blend">
            <HeaderSection
                :header="'Our Testimonials'"
                :subHeader="'WE ARE HONORED TO BE YOUR HOST'"
                :dividerColor="'#ffffff'"
                :foreColor="'#ffffff'"
                style="margin-bottom: 30px;"
                class="d-none d-md-flex">
            </HeaderSection>
            <div class="d-none d-md-flex center-flex" @mousemove="mouseMove" @mousedown="mouseDown">
                <TestimonialCard 
                v-for="(i, index) in showingElements" 
                class="card-style"
                :cardCountry="i.country" 
                :key="index"
                :translateX="i.translateX"
                :style="{'position': !i.isSelected ? 'absolute': ''}"></TestimonialCard>
            </div>
            <div class="buttons d-none d-md-flex">
                <div 
                    v-for="(element,index) in elements" :key="index"
                    :class="['circle', index === selectedIndex ? 'circle-selected': '']"
                    @click="(e) => selectThis(e, index)" 
                >
                </div>
            </div>
            <v-window  class="d-flex d-md-none" v-model="window" style="width: 90%;">
                <v-window-item v-for="item in 3" :key="item">
                    <v-card flat color="transparent" style="border-radius: 0 !important;">
                        <TestimonialCard style="margin: 0; width: 100% !important;"
                        ></TestimonialCard>
                    </v-card>
                </v-window-item>
            </v-window>
            <v-item-group
                v-model="window"
                class="shrink mr-0 mr-md-6 d-flex d-md-none align-center justify-center"
                mandatory
                tag="v-flex"
                style="min-height: 40px; position: absolute; bottom: 3%;"
                >
                <v-item
                    v-for="n in 3"
                    :key="n"
                    class="mx-5"
                    v-slot:default="{ active, toggle }"
                >
                        <v-icon :input-value="active"
                            @click="toggle"
                            color="white"
                            :x-large="active"
                            :style="{'opacity': active ? '1': '0.3'}"
                            :medium="!active">mdi-record</v-icon>
                </v-item>
            </v-item-group>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TestimonialCard from './TestimonialCard.vue';
import HeaderSection from './HeaderSection.vue';

interface Element {
    isSelected: boolean,
    country: string,
    translateX: number
}

@Component({
    components: {
        TestimonialCard,
        HeaderSection
    }
})
export default class TestimonialSection extends Vue {
    private elements: Array<Element>
    private selectedIndex: number
    private showingElements: Array<Element>;
    private window: number = 0;
    
    constructor() {
        super();
        this.elements = [
            { isSelected: false, country: 'USA', translateX: 0 },
            { isSelected: true, country: 'France', translateX: 0 },
            { isSelected: false, country: 'UK', translateX: 0 }
        ];
        this.showingElements = this.elements.slice();
        this.selectedIndex = 1;

    }

    mounted() {
        let index: number = this.showingElements.findIndex((el) => el.isSelected);
        let elem = document.getElementsByClassName('testimonial-card');
        var elemRect = elem[0].getBoundingClientRect();
        for (let i = 0; i < this.showingElements.length; i++) {
            const element = this.showingElements[i];
            if (i < index) {
                this.showingElements[i].translateX = -(index - i) * (elemRect.width + 30); 
            }
            else if(i > index) {
                this.showingElements[i].translateX = -(index - i) * (elemRect.width + 30); 
            }
        }

        setInterval(() => {
            if (this.selectedIndex !== 2) {
                // @ts-ignore
                this.selectThis(null, this.selectedIndex + 1);

            } else {

                // @ts-ignore
                this.selectThis(null, 0);
            }
        }, 5000);
    }

    startedMove: boolean = false;
    startPos: number = 0;
    mouseDown(e: MouseEvent) {
        this.startedMove = true;
        this.startPos = e.offsetX;
    }

    mouseMove(e: MouseEvent) {
        if (e.buttons === 1 && this.startedMove) {
            if (e.movementX > 0 && this.selectedIndex !== 0 && Math.abs(this.startPos - e.offsetX) > 100){
                this.selectThis(e, this.selectedIndex - 1);
                this.startedMove = false;
            } else if (e.movementX < 0 && this.selectedIndex !== 2) {
                this.selectThis(e, this.selectedIndex + 1);
                this.startedMove = false;
            }
        }
    }

    selectThis(e: MouseEvent, index: number) : void {
        if (index === this.selectedIndex)
            return;
        let elem = document.getElementsByClassName('testimonial-card');
        var elemRect = elem[0].getBoundingClientRect();
        for (let i = 0; i < index; i++) {
            this.showingElements[i].translateX = (elemRect.width + 30) * -(index - i);
        }
        for (let i = index; i < this.showingElements.length; i++) {
            this.showingElements[i].translateX = (elemRect.width + 30) * -(index - i);
        }

        this.selectedIndex = index;
        this.showingElements[index].translateX = 0;

    }
}
</script>

<style lang="scss" scoped>
    .testimonial-backcover {
        background-image: url('../assets/quran.png');
        background-position: center;
        background-size: cover;
        height: 694px;
        position: relative;
    }

    .testimonial-window {
        width: 60%;
    }

    .green-blend {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: transparentize($color: $foreground, $amount: 0.6);
        align-items: center;
        overflow: hidden;
        justify-content: center;
        flex-wrap: nowrap;
    }

    .center-flex {
        width: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
        justify-content: center;
        flex-wrap: nowrap;
        position: relative;
    }

    .card-style {
        flex: none;
        box-shadow: none;
    }

    .circle {
        border-radius: 50%;
        background-color: white !important;
        width: 20px;
        height: 20px;
        transition: opacity .1s linear;
        opacity: 0.3;
        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    }

    .circle-selected {
        opacity: 1 !important;
        width: 30px;
        height: 30px;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 120px;
        margin-top: 30px;
    }
</style>
