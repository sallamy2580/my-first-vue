<template>
    <div class="saey white">
        <AlzuhudHeader :light="true"></AlzuhudHeader>
        <PageInfo pageName="Sa'ey" :routes="routes" :style="{'margin-top': $vuetify.breakpoint.mdAndUp ? '60px': ''}"></PageInfo>
        <p>The literal meaning of Sa’ey is to run or to make effort, but as a Hajj and Ummrah term, Sa’ey denotes walking back and forth seven times between the hills of Safa and Marwah which are situated to the south and north of the Ka’bah respectively. Now there are only signs of these hills and the whole route between them is enclosed in a long gallery.
            Sa’ey has a historical background. Prophet Abraham left his wife Hazrat Hajra and infant son Hazrat Ismael in the wilderness of Makkah at the command of Allah. The mother and son lived for five days on the food and water they had when the water was completely finished. The mother ran frantically seven times between the hills of Safa and Marwah in search of water for her son. Suddenly the fountain of Zamzam oozed miraculously near the feet of Hazrat Ismael. Sa’ey is included in the rites of Hajj and Ummrah to commemorate this event of search and struggle.
        </p>
        <br>
        <p>How to perform Sa'ey:</p>
        <v-timeline dense align-top>
            <v-timeline-item class="timeline-content"
                large color="white" >
                <template v-slot:icon>
                    <label class="grey--text font-weight-bold">1</label>
                </template>
                <label class="secondary--text font-weight-bold headline">Istilam of Hajar-e-Aswad</label>
                <br>
                <br>
                <p>Before starting Sa’ey, do Istilam of Hajar-e-Aswad again the ninth time or point towards it, saying:</p>
                <div class="d-flex tip">
                    <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="32.557" height="39.04" viewBox="0 0 32.557 39.04">
                        <path id="Path_177" data-name="Path 177" d="M14.88,6A4.881,4.881,0,0,0,10,10.88v29.28a1.623,1.623,0,0,0,.48,1.153,4.7,4.7,0,0,0,4.4,3.727H40.906a1.627,1.627,0,1,0,0-3.253H14.88a1.627,1.627,0,0,1,0-3.253h24.4a3.251,3.251,0,0,0,3.253-3.253V9.253A3.251,3.251,0,0,0,39.28,6Zm0,3.253H37.653A1.626,1.626,0,0,1,39.28,10.88V33.653a1.626,1.626,0,0,1-1.627,1.627H14.88a1.626,1.626,0,0,1-1.627-1.627V10.88A1.626,1.626,0,0,1,14.88,9.253Zm1.627,3.253v19.52h19.52V12.507Zm9.76,1.627a1.627,1.627,0,0,1,0,3.253H29.52a1.626,1.626,0,0,1,1.627,1.627v3.253a1.627,1.627,0,1,1,1.627,1.627,1.626,1.626,0,0,1-1.627-1.627V25.52a1.626,1.626,0,0,1-1.627,1.627H26.266a1.627,1.627,0,1,1-1.627,1.627,1.626,1.626,0,0,1,1.627-1.627H23.013a1.626,1.626,0,0,1-1.627-1.627V22.266A1.627,1.627,0,1,1,19.76,20.64a1.626,1.626,0,0,1,1.627,1.627V19.013a1.626,1.626,0,0,1,1.627-1.627h3.253a1.627,1.627,0,0,1,0-3.253ZM24.64,20.64v3.253h3.253V20.64Z" transform="translate(-10 -6)" fill="#00897b"/>
                    </svg>
                    <p style="font-weight: 600;">"Bismillahi Allahu Akbar Wa Lillah Hil Hamad."</p>
                </div>
                <p>Now Proceed towards Safa. It is a Sunnah to be in the state of ablutions during Sa’ey.</p>
                <br>
                <br>
                <br>
            </v-timeline-item>
            <v-timeline-item class="timeline-content"
                large color="white" >
                <template v-slot:icon>
                    <label class="grey--text font-weight-bold">2</label>
                </template>
                <label class="secondary--text font-weight-bold headline">Start of Sa’ey at Safa</label>
                <br>
                <br>
                <p>Climb the hill of Safa and make intention (niyyah) for Sa’ey:</p>
                <div class="d-flex tip">
                    <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="32.557" height="39.04" viewBox="0 0 32.557 39.04">
                        <path id="Path_177" data-name="Path 177" d="M14.88,6A4.881,4.881,0,0,0,10,10.88v29.28a1.623,1.623,0,0,0,.48,1.153,4.7,4.7,0,0,0,4.4,3.727H40.906a1.627,1.627,0,1,0,0-3.253H14.88a1.627,1.627,0,0,1,0-3.253h24.4a3.251,3.251,0,0,0,3.253-3.253V9.253A3.251,3.251,0,0,0,39.28,6Zm0,3.253H37.653A1.626,1.626,0,0,1,39.28,10.88V33.653a1.626,1.626,0,0,1-1.627,1.627H14.88a1.626,1.626,0,0,1-1.627-1.627V10.88A1.626,1.626,0,0,1,14.88,9.253Zm1.627,3.253v19.52h19.52V12.507Zm9.76,1.627a1.627,1.627,0,0,1,0,3.253H29.52a1.626,1.626,0,0,1,1.627,1.627v3.253a1.627,1.627,0,1,1,1.627,1.627,1.626,1.626,0,0,1-1.627-1.627V25.52a1.626,1.626,0,0,1-1.627,1.627H26.266a1.627,1.627,0,1,1-1.627,1.627,1.626,1.626,0,0,1,1.627-1.627H23.013a1.626,1.626,0,0,1-1.627-1.627V22.266A1.627,1.627,0,1,1,19.76,20.64a1.626,1.626,0,0,1,1.627,1.627V19.013a1.626,1.626,0,0,1,1.627-1.627h3.253a1.627,1.627,0,0,1,0-3.253ZM24.64,20.64v3.253h3.253V20.64Z" transform="translate(-10 -6)" fill="#00897b"/>
                    </svg>
                    <p style="font-weight: 600;">" O Allah! I perform Sa’ey between Safa and Marwah to please You. Make it easy for me and accept it from me."</p>
                </div>
                <p>Now recite:</p>
                <div class="d-flex tip">
                    <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="32.557" height="39.04" viewBox="0 0 32.557 39.04">
                        <path id="Path_177" data-name="Path 177" d="M14.88,6A4.881,4.881,0,0,0,10,10.88v29.28a1.623,1.623,0,0,0,.48,1.153,4.7,4.7,0,0,0,4.4,3.727H40.906a1.627,1.627,0,1,0,0-3.253H14.88a1.627,1.627,0,0,1,0-3.253h24.4a3.251,3.251,0,0,0,3.253-3.253V9.253A3.251,3.251,0,0,0,39.28,6Zm0,3.253H37.653A1.626,1.626,0,0,1,39.28,10.88V33.653a1.626,1.626,0,0,1-1.627,1.627H14.88a1.626,1.626,0,0,1-1.627-1.627V10.88A1.626,1.626,0,0,1,14.88,9.253Zm1.627,3.253v19.52h19.52V12.507Zm9.76,1.627a1.627,1.627,0,0,1,0,3.253H29.52a1.626,1.626,0,0,1,1.627,1.627v3.253a1.627,1.627,0,1,1,1.627,1.627,1.626,1.626,0,0,1-1.627-1.627V25.52a1.626,1.626,0,0,1-1.627,1.627H26.266a1.627,1.627,0,1,1-1.627,1.627,1.626,1.626,0,0,1,1.627-1.627H23.013a1.626,1.626,0,0,1-1.627-1.627V22.266A1.627,1.627,0,1,1,19.76,20.64a1.626,1.626,0,0,1,1.627,1.627V19.013a1.626,1.626,0,0,1,1.627-1.627h3.253a1.627,1.627,0,0,1,0-3.253ZM24.64,20.64v3.253h3.253V20.64Z" transform="translate(-10 -6)" fill="#00897b"/>
                    </svg>
                    <div>
                        <p ><span style="font-weight: 600;">"Inn-as-Safa wal-Marwah min Sha’a’irillah."     (Al-Qur’an 2 : 158)</span><br>
                        <span class="grey--text">Indeed Safa and Marwah are among the Signs of Allah.</span></p>
                    </div>
                </div>
                <p>After this climb Safa to the point from where you can see the Ka’bah, then facing the Ka’bah raise your hands in supplication, say Allahu Akbar three times and recite the following supplication or ask Allah whatever you wish:</p>
                <div class="d-flex tip">
                    <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="32.557" height="39.04" viewBox="0 0 32.557 39.04">
                        <path id="Path_177" data-name="Path 177" d="M14.88,6A4.881,4.881,0,0,0,10,10.88v29.28a1.623,1.623,0,0,0,.48,1.153,4.7,4.7,0,0,0,4.4,3.727H40.906a1.627,1.627,0,1,0,0-3.253H14.88a1.627,1.627,0,0,1,0-3.253h24.4a3.251,3.251,0,0,0,3.253-3.253V9.253A3.251,3.251,0,0,0,39.28,6Zm0,3.253H37.653A1.626,1.626,0,0,1,39.28,10.88V33.653a1.626,1.626,0,0,1-1.627,1.627H14.88a1.626,1.626,0,0,1-1.627-1.627V10.88A1.626,1.626,0,0,1,14.88,9.253Zm1.627,3.253v19.52h19.52V12.507Zm9.76,1.627a1.627,1.627,0,0,1,0,3.253H29.52a1.626,1.626,0,0,1,1.627,1.627v3.253a1.627,1.627,0,1,1,1.627,1.627,1.626,1.626,0,0,1-1.627-1.627V25.52a1.626,1.626,0,0,1-1.627,1.627H26.266a1.627,1.627,0,1,1-1.627,1.627,1.626,1.626,0,0,1,1.627-1.627H23.013a1.626,1.626,0,0,1-1.627-1.627V22.266A1.627,1.627,0,1,1,19.76,20.64a1.626,1.626,0,0,1,1.627,1.627V19.013a1.626,1.626,0,0,1,1.627-1.627h3.253a1.627,1.627,0,0,1,0-3.253ZM24.64,20.64v3.253h3.253V20.64Z" transform="translate(-10 -6)" fill="#00897b"/>
                    </svg>
                    <p style="font-weight: 600;">"La ilaha ill-Allahu wahdahu la Sharika lahu, lahul-mulku wa lahul-hamdu wa ‘ala kulli shai’in Qadeer."</p>
                </div>
                <p>If you don’t remember this, you may use the supplication recited earlier during Tawaf:</p>
                <div class="d-flex tip">
                    <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="32.557" height="39.04" viewBox="0 0 32.557 39.04">
                        <path id="Path_177" data-name="Path 177" d="M14.88,6A4.881,4.881,0,0,0,10,10.88v29.28a1.623,1.623,0,0,0,.48,1.153,4.7,4.7,0,0,0,4.4,3.727H40.906a1.627,1.627,0,1,0,0-3.253H14.88a1.627,1.627,0,0,1,0-3.253h24.4a3.251,3.251,0,0,0,3.253-3.253V9.253A3.251,3.251,0,0,0,39.28,6Zm0,3.253H37.653A1.626,1.626,0,0,1,39.28,10.88V33.653a1.626,1.626,0,0,1-1.627,1.627H14.88a1.626,1.626,0,0,1-1.627-1.627V10.88A1.626,1.626,0,0,1,14.88,9.253Zm1.627,3.253v19.52h19.52V12.507Zm9.76,1.627a1.627,1.627,0,0,1,0,3.253H29.52a1.626,1.626,0,0,1,1.627,1.627v3.253a1.627,1.627,0,1,1,1.627,1.627,1.626,1.626,0,0,1-1.627-1.627V25.52a1.626,1.626,0,0,1-1.627,1.627H26.266a1.627,1.627,0,1,1-1.627,1.627,1.626,1.626,0,0,1,1.627-1.627H23.013a1.626,1.626,0,0,1-1.627-1.627V22.266A1.627,1.627,0,1,1,19.76,20.64a1.626,1.626,0,0,1,1.627,1.627V19.013a1.626,1.626,0,0,1,1.627-1.627h3.253a1.627,1.627,0,0,1,0-3.253ZM24.64,20.64v3.253h3.253V20.64Z" transform="translate(-10 -6)" fill="#00897b"/>
                    </svg>
                    <p style="font-weight: 600;">"Bismillahi Allahu Akbar Wa Lillah Hill Hamd"</p>
                </div>
                <br>
                <br>
                <br>
            </v-timeline-item>
            <v-timeline-item class="timeline-content"
                large color="white" >
                <template v-slot:icon>
                    <label class="grey--text font-weight-bold">3</label>
                </template>
                <label class="secondary--text font-weight-bold headline">Proceed towards Marwah</label>
                <br>
                <br>
                <p>Come down from Safa and move towards Marwah while reciting this supplication:</p>
                <div class="d-flex tip">
                    <svg id="surface1" xmlns="http://www.w3.org/2000/svg" width="32.557" height="39.04" viewBox="0 0 32.557 39.04">
                        <path id="Path_177" data-name="Path 177" d="M14.88,6A4.881,4.881,0,0,0,10,10.88v29.28a1.623,1.623,0,0,0,.48,1.153,4.7,4.7,0,0,0,4.4,3.727H40.906a1.627,1.627,0,1,0,0-3.253H14.88a1.627,1.627,0,0,1,0-3.253h24.4a3.251,3.251,0,0,0,3.253-3.253V9.253A3.251,3.251,0,0,0,39.28,6Zm0,3.253H37.653A1.626,1.626,0,0,1,39.28,10.88V33.653a1.626,1.626,0,0,1-1.627,1.627H14.88a1.626,1.626,0,0,1-1.627-1.627V10.88A1.626,1.626,0,0,1,14.88,9.253Zm1.627,3.253v19.52h19.52V12.507Zm9.76,1.627a1.627,1.627,0,0,1,0,3.253H29.52a1.626,1.626,0,0,1,1.627,1.627v3.253a1.627,1.627,0,1,1,1.627,1.627,1.626,1.626,0,0,1-1.627-1.627V25.52a1.626,1.626,0,0,1-1.627,1.627H26.266a1.627,1.627,0,1,1-1.627,1.627,1.626,1.626,0,0,1,1.627-1.627H23.013a1.626,1.626,0,0,1-1.627-1.627V22.266A1.627,1.627,0,1,1,19.76,20.64a1.626,1.626,0,0,1,1.627,1.627V19.013a1.626,1.626,0,0,1,1.627-1.627h3.253a1.627,1.627,0,0,1,0-3.253ZM24.64,20.64v3.253h3.253V20.64Z" transform="translate(-10 -6)" fill="#00897b"/>
                    </svg>
                    <p style="font-weight: 600;">"Subhan-Allah wal-hamdu-lillahi wa la ilaha ill-Allah wa-Allahu Akbar wa la haula wa la quwwata illa-billa."</p>
                </div>
                <p>If you don’t remember this supplication also, recite Subhan Allah, Alhamdu Lillah, Allahu Akbar repeatedly and keep moving. You may also praise Allah and ask for His mercy in your language or use supplications taken from the daily Salah. When you reach two green pillars between which men have to run but the women walk with their normal pace.<br><br><span class="font-weight-bold">At Marwah.</span> When on top of marwah, praise Allah facing the Ka’bah and repeat the same supplications that were recited at Safa. One trip is over, second trip will be on Safa and third trip will be on Marwah.</p>
                <br>
                <br>
                <br>
            </v-timeline-item>
            <v-timeline-item class="timeline-content"
                large color="white" >
                <template v-slot:icon>
                    <label class="grey--text font-weight-bold">4</label>
                </template>
                <label class="secondary--text font-weight-bold headline">End of Sa’ey</label>
                <br>
                <br>
                <p>In the same way, the seventh trip will end at Marwah. In all trips the men will run between the green pillars but the women will walk in a normal way.</p>
                <br>
                <br>
                <br>
            </v-timeline-item>
            <v-timeline-item class="timeline-content"
                large color="white" >
                <template v-slot:icon>
                    <label class="grey--text font-weight-bold">5</label>
                </template>
                <label class="secondary--text font-weight-bold headline">Shaving or clipping of hair</label>
                <br>
                <br>
                <p>After Sa’ey, men should get their heads completely shaved or get their hair clipped to the length of the upper third of their finger or a little more. Both shaving and clipping are permissible for men, though shaving is preferable. Women are, however, allowed to have a lock of their hair clipped. They are forbidden to shave their heads.</p>
                <br>
                <br>
                <br>
            </v-timeline-item>
            <v-timeline-item class="timeline-content"
                large color="white" style="position: relative;">
                <template v-slot:icon>
                    <label class="grey--text font-weight-bold">6</label>
                </template>
                <label class="secondary--text font-weight-bold headline">Ummrah is complete</label>
                <br>
                <br>
                <p>After cutting the hair, Ummrah is complete. The restrictions of Ihram are finished. Now wear your everyday clothes and lead a normal life. Be thankful to Allah that He provided the opportunity for performing Ummrah and lead rest of your life according to the commands of your Creator.</p>
                <div style="height: 100%; position:absolute; top: 0; left: -49px; width: 2px; background: white;"></div>
            </v-timeline-item>
            
        </v-timeline>
<!--        <AppSection></AppSection>-->
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AlzuhudHeader from '@/components/AlzuhudHeader.vue';
import PageInfo from '@/components/PageInfo.vue';
import AppSection from '@/components/AppSection.vue';
import Footer from '@/components/Footer.vue';


@Component({
    components: {
        AlzuhudHeader,
        PageInfo,
        AppSection,
        Footer,
    }
})
export default class Saey extends Vue {
    routes: Array<string>;
    /**
     *
     */
    constructor() {
        super();
        this.routes = ['services', 'sa\'ey'];
    }

    mounted() {
        document.title = 'Saey - Alzuhud';
    }
}
</script>

<style lang="scss">
    .saey {
        
        .heading {
            font-size: 22px;
            margin: 0 322px;
            color: black;
            // @media screen and (max-width: 1900px) {
            //     margin: 0 200px 0;
            // }

            @media screen and (max-width: 1903px) {
                margin: 0 150px 0;
            }

            @media screen and (max-width: 1264px) {
                margin: 0 20px 0;
                font-size: 16px;
            }
        }

        .card-container {
            display: flex;
            flex-wrap: wrap;
            margin: 0 304px 160px;
            @media screen and (max-width: 1903px) {
                margin: 0 150px 160px;
            }

            @media screen and (max-width: 1264px) {
                margin: 0 20px 160px;
            }
        }

        >P, .v-timeline {
            margin: 0 322px;
            font-size: 22px;
            color: black;
            @media screen and (max-width: 1903px) {
                margin: 0 150px 0;
            }

            @media screen and (max-width: 1264px) {
                margin: 0 20px 0;
                font-size: 16px;
            }
        }

        .v-timeline {
            margin: 0 322px;
            @media screen and (max-width: 1903px) {
                margin: 0 150px 0;
            }

            @media screen and (max-width: 1264px) {
                margin: 0 20px 0 -10px;
                font-size: 16px;
            }
        }

        .v-timeline-item {
            .headline {
                @media screen and (max-width: 1264px) {
                    font-size: 16px !important;
                }
            }
        }

        .page-info {
            font-size: 22px;
            margin: 0 322px;
            color: black;

            @media screen and (max-width: 1903px) {
                margin: 0 150px;
            }

            @media screen and (max-width: 1264px) {
                margin: 0 20px;
            }
        }
    }

    .v-timeline-item__dot {
        box-shadow: none !important;
        border: 1px solid #bdbdbd;
    }

    .v-timeline::before {
        margin: 60px 0;
        height: initial !important;
    }
    
    .timeline-content {
        p {
            font-size: 22px;
            @media screen and (max-width: 1264px) {
                font-size: 16px;
            }
        }
    }

    

    .tip {
        p {
            margin-left: 12px;
        }
    }
</style>
