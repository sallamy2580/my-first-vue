<template>
    <div class="packages white how-to-ummrah">
        <AlzuhudHeader :light="true"></AlzuhudHeader>
        <PageInfo :is-rtl="language === 'ar'" :pageName="language === 'ar' ? 'ارشادات' : 'How to perform Ummrah'.toUpperCase()" :routes="routes" style="margin-top: 60px; position: relative;"></PageInfo>
        <main style="position: relative;">
            <div class="backdrop-image d-none d-md-flex">
                <img src="../assets/rainbow-curve.svg">
            </div>
            <p>
                The only rites of Ummrah are: <br>
                - Entering the state of Ihram <br>
                - Tawaf of Ka’bah (7 times) <br>
                - Sa’yee between the hills of Safa and Marwah <br>
                - Shaving or clipping of the hair <br>
            </p>
            <br>
            <br>
            <br>
            <p class="font-weight-bold" :style="{'font-size': $vuetify.breakpoint.mdAndUp ? '30px': '20px'}">IHRAM FOR UMMRAH AND ENTERING MASJID AL-HARAM</p>
            <br>
            <p>You should be already in Ihram for Ummrah before entering Mecca.</p>
            <br>
            <br>
            <label class="secondary--text font-weight-bold headline">Entering Masjid al-Haram</label>
            <br>
            <p>
                While reciting Talbiyah, enter Masjid al-Haram with right foot first. Supplicate to Allah and proceed towards Ka’bah. You may recite the following supplication which is usually used before entering a mosque:
                Allah huma aftah li abwabe rahmate ka
                First Sight: At the first sight of Ka’bah, keep your eyes fixed at Baitullah and standing at one side, it is suggested that you do the following:
                <p style="padding-left: 60px;">
                    - Say Allahu Akbar three times <br>
                    - Say La Ilaha Illallah three times <br>
                    - Proclaim Darud on our beloved Prophet (peace be upon him) and very humbly and with tears in your eyes supplicate to Allah for whatever you wish. This is a special time for the acceptance of prayers. <br>
                    <br>
                    The idea is to praise and glorify your Creator before proclaiming Darud and supplications. Therefore, in lieu of Allahu Akbar and La Ilaha Illallah, you may recite some other similar holy verses if you so desire.

                </p>
                <br>
                <p>After this, while uttering Talbiyah, move forward to perform Tawaf of Ka’bah.</p>
            </p>
            <br>
            <br>
            <br>
            <svg style="margin:-40px -322px 0 0; width: 100%; padding: 0; height: 100%;"
                class="d-block d-lg-none"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                width="1920"
                height="402"
                viewBox="0 0 1920 402"
                version="1.1"
                id="svg3"
                sodipodi:docname="curve.svg"
                inkscape:version="0.92.2 (5c3e80d, 2017-08-06)"
                transform="translate(0 1)">
                <path
                    id="Path_135"
                    data-name="Path 135"
                    d="M 0,0 C 0,0 478.543,190 958.543,190 1438.543,190 1920,0 1920,0 V 804 H 0 Z"
                    clip-path="url(#clipPath3726)"
                    inkscape:connector-curvature="0"
                    style="fill:#f3f7f3"
                    />
            </svg>
            <div class="main-content">
                <label class="secondary--text font-weight-bold headline">Tawaf Of Ummrah</label>
                <br>
                <br>
                <p :class="[$vuetify.breakpoint.mdAndUp ? 'font-weight-bold': '']">Tawaf means circling around something. Here it means moving around Ka’bah seven times with extreme love and devotion.</p>
                <p class="padded-less">
                    <span class="primary--text" style="font-weight: 600;">Preparation:</span> Pass the upper sheet of Ihram from underneath the right arm and put it on the left shoulder. This act bares the right shoulder and is known as Iztaba. Ablutions (vudu) is essential for tawaf. Reciting of Talbiyah is stopped when you reach Hajar-e- Aswad, the starting point of tawaf. <br>
                    <span class="primary--text" style="font-weight: 600;">Niyyah (Intention):</span> Stand in front of Ka’bah facing Hajar-e-Aswad (the Black Stone) in such a way that the whole Hajre-e-Aswad is on your right side. To achieve this end, you may get help from the black stripe on the floor. This stripe should be on your right side. Then without raising your hands make Niyyah (intention) for Ummrah: <br>
                    <br>
                </p>
                <p class="padded">" O Allah, I perform Tawaf of Ummrah to please You. Make it easy for me and accept it from me."</p><br>
                <br>
                <p class="padded-less"><span class="primary--text" style="font-weight: 600;">Istilam:</span> Now moving towards right, come
                    in front of Hajar-e-Aswad and kiss it if possible, if that is not possible, raise your hands to your
                    ears keeping your open palms towards Hajre-e-Aswad and say:<br>
                </p>
                <br>
                <br>
                <p class="padded">" Bismillahi Allahu Akbar Wa Lilla Hil Hamd" and drop your hands down. Now point the palms of your hands again towards Hajar-e- Aswad. This act of kissing Hajar-e-Aswad or pointing towards it is called Istilam
                </p>
                <br>
                <br>
                <br>
                <p class="padded-less">
                    <span class="primary--text" style="font-weight: 600;">Tawaf Starts:</span> After Istilam, turn right and start tawaf counter clockwise. <br>
                    <span class="primary--text" style="font-weight: 600;">Ramal:</span> For the first three circuits of Tawaf of Ummrah and Tawaf of Arrival, men are required to move their shoulders and walk with quick short steps. This act is called Ramal and is Sunnah. They walk normally during the remaining four circuits. <br>
                    <span class="primary--text" style="font-weight: 600;">Supplications of Tawaf:</span> There are no fixed supplications for tawaf but there are several recommended supplications listed in the books of Hajj and Ummrah out of which the following supplication is easy to memorize:<br>
                </p>
                <br>
                <p class="padded">
                    "Subhan-Allah wal-hamdu-lillahi wa la ilaha ill-Allah wa-Allahu Akbar wa la haula wa la quwwata illa-billah."<br>
                    <br>
                    <span class="grey--text">- If you don’t remember these words, you may glorify Allah by repeatedly uttering:</span><br>
                    Subhan Allah,<br>
                    Al-Hamdu lilla,<br>
                    Allahu Akbar,<br>
                    La Ilaha Illallah, etc.<br>
                    <br>
                    <span class="grey--text">- The Prophet of Islam (peace be upon him) has said that there are two kalimahs that are light on tongue and (on the day of judgment) they weigh heavy on the scale (Mizan) and are liked by Allah. These kalimahs are:</span>
                    <br>
                    <br>
                    Subhan Allah Wabe Hamde hi Subhan Allah Hil Azeem (Bukhari, Muslim, Tirmizi)<br>
                    <br>
                    <span class="grey--text">- You may also use supplications used in the daily Salah or you may seek forgiveness of Allah and ask Him whatever you wish in your own language.</span>
                    <br>
                </p>
                <br>
                <p class="padded-less">
                    <span class="primary--text" style="font-weight: 600;">Rukn Yamani and its Supplications:</span> After passing the three corners of the Ka’bah you reach the fourth corner known as Rukn Yamani. Touch it with both hands or with right hand. There is a beautiful supplication to be used while walking between Rukn Yamani and Hajar-e-Aswad:
                </p>
                <br>
                <p class="padded">
                    "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina azabin-nar."<br>
                    <br>
                    <span class="grey--text">- Our beloved Prophet (peace be upon him) has repeatedly recited this supplication. The first circuit is complete when you reach Hajar-e-Aswad.</span>
    
                </p>
                <p class="padded-less">
                    <span class="primary--text" style="font-weight: 600;">Seven Circuits:</span> At Hajar-e-Aswad, start the second circuit by kissing it or pointing towards it as you started the first circuit, i.e., come in front of Hajar-e-Aswad, raise both hands to your ears with open palms towards it and say:
                </p>
                <p class="padded">
                    "Bismillahi Allahu Akbar Wa Lillah Hil Hamd<br>
                    <br>
                    <span class="grey--text">- Now kiss both palms and drop your hands. After this go around Ka’bah as you did before and similarly complete the seven circuits.</span><br>
                    <br>
                </p>
                <p class="padded-less">
                    <span class="primary--text" style="font-weight: 600;">The End of Tawaf:</span> At the end of seven circuits, do Istilam of Hajar-e- Aswad or point towards it eighth time which is Sunnat Mu’akidah. Also say:
                </p>
                <p class="padded">"Bismillahi Allahu Akbar Wa Lillah Hill Hamd"</p>
                <br>
                <br>
                <p class="padded-less">
                    <span class="primary--text" style="font-weight: 600;">Iztaba Finished:</span> Now Iztaba is finished, therefore, you cover your both shoulders with upper portion of the Ihram sheet. This does not apply to women.<br>
                    <span class="primary--text" style="font-weight: 600;">Multazam:</span> Now, come to Multazam which is a place five or six feet in length between Hajar-e-Aswad and the door of Ka’bah. This is a highly sacred place where prayers are accepted. Among a large crowd of people, if it is possible to reach Multazam, cling to it pressing your chest and cheeks, and while trembling and crying with devotion and with all humility seek Allah’s mercy, His blessings and ask Him whatever you wish. If you are unable to come close to Multazam, just face towards it and supplicate from a distance.<br>
                    <span class="primary--text" style="font-weight: 600;">Maqam Ibrahim:</span> Next offer two rakahs of nafls behind and close to Maqam Ibrahim without covering your head. If it is zawal time when sajdah is not allowed, you have to wait till this undesirable time is passed and then offer prayers.<br>
                </p>
                <br>
                <br>
            </div>
            <svg style="margin:0 -322px 0 0; width: 100%; padding: 0; z-index: -1 !important;"
                class="d-block d-lg-none"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                width="1920"
                height="269"
                viewBox="0 0 1920 269"
                version="1.1"
                id="svg3"
                sodipodi:docname="curve-card-3.svg"
                inkscape:version="0.92.2 (5c3e80d, 2017-08-06)"
                transform="translate(0 -16)">
                <path
                    id="Path_135"
                    data-name="Path 135"
                    d="m 0.04199549,-1619.7452 c 0,0 478.54299451,194.4119 958.54289451,194.4119 479.99991,0 961.45691,-194.4119 961.45691,-194.4119 V 1.03649 c 0,0 -477.891,266.0374 -957.89091,266.0374 -479.9999,0 -962.10889451,-266.0374 -962.10889451,-266.0374 z"
                    inkscape:connector-curvature="0"
                    style="fill:#f3f7f3;stroke-width:1.01154375; z-index: -1 !important;"
                    mask="url(#mask831)" />
            </svg>
            <p :style="{'margin-top': $vuetify.breakpoint.smAndDown ? '-120px' : ''}" :class="[$vuetify.breakpoint.mdAndUp ? 'font-weight-bold': '']">In the niyyah (intention), say that you are offering 2 rakahs of nafls wajib al- tawaf. Recite Qul ya ayya hal kafroon in the first rakah and Qulhu wallah in the second rakah. After this, supplicate to Allah in Arabic or in your own language. Ask Him whatever you wish and invoke His blessings. If it is not possible to offer this obligatory prayer near Maqam Ibrahim, it can be offered anywhere in Mataf, or in Hatim or anywhere in Masjid al-Haram or even at any place in Haram of Makkah.</p>
            <br>
            <p class="padded-less"><span class="primary--text" style="font-weight: 600;">Zamzam:</span> Now go to Zamzam well situated in the basement of the Haram about 200 feet from the Ka’bah’s door. There are separate portions for men and women. Zamzam is the best available water in the world. Drink this water to fill while in standing position saying Bismillah. Then supplicate to Allah:</p>
            <br>
            <p class="padded"> 
                "Allahummah inni as’aluka ilm-an naafi’an wa rizqan waasi’an wa shifa’am min kulli daa’in."<br>
                <br>
                <span class="grey--text">(O Allah! I implore Thee for beneficial knowledge, for vast provisions, and for cure from every disease.)</span>
            </p>
            <br>
            <br>
            <br>
            <br>
        </main>
<!--        <AppSection></AppSection>-->
        <Footer style="position: relative;"></Footer>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AlzuhudHeader from '@/components/AlzuhudHeader.vue';
import PageInfo from '@/components/PageInfo.vue';
import AppSection from '@/components/AppSection.vue';
import Footer from '@/components/Footer.vue';
import {State} from "vuex-class";


@Component({
    components: {
        AlzuhudHeader,
        PageInfo,
        AppSection,
        Footer,
    }
})
export default class Packages extends Vue {
    routes: Array<string>;
    @State language: string;
    /**
     *
     */
    constructor() {
        super();
        this.routes = ['services', 'how to perfom ummrah'];
    }

    mounted() {
        document.title = 'How to Perfom Ummrah - Alzuhud';
        window.scrollTo(0,0);
    }
}
</script>

<style lang="scss" scoped>
    .backdrop-image {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1 !important;
        margin: 0 !important;
        img {
            z-index: -1 !important;
            width: 100%;
            height: 1844px;
        }
    }

    * {
        z-index: 3 !important;
    }

    main {
        >* {
            margin: 0 322px;
            font-size: 22px;
            @media screen and (max-width: 1903px) {
                margin: 0 150px;
            }
            @media screen and (max-width: 1264px) {
                margin: 0;
                padding: 0 20px;
                font-size: 16px;
            }
            
        }
    }
    .main-content {
        @media screen and (max-width: 1264px) {
            >* {
                background-color: #f3f7f3;
            }
            background-color: #f3f7f3;
        }
    }

    .padded {
        padding-left: 200px;
        @media screen and (max-width: 1264px) {
            padding-left: 50px;
        }
    }

    .padded-less {
        padding-left: 100px;
        @media screen and (max-width: 1264px) {
            padding-left: 20px;
        }
    }

    .how-to-ummrah {
        .headline {
            @media screen and (max-width: 960px) {
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

        @media screen and (max-width: 1265px) {
            margin: 0 20px !important;
        }

        /*@media screen and (max-width: 960px) {*/
        /*    margin: 0 20px;*/
        /*}*/
    }
</style>
