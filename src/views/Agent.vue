<template>
    <div class="agent white">
        <AlzuhudHeader :light="true"></AlzuhudHeader>
        <PageInfo :is-rtl="language === 'ar'" :pageName="language === 'ar' ? 'وكلائنا' : 'Agent'" :routes="routes" style="margin-top: 60px;"></PageInfo>
        <main>
            <div v-if="language !== 'ar'">Al-Zuhud for Ummrah and visit has a distinct method of working and agreeing with its agents to implement the Ummrah programs, which are divided into several levels according to the services provided for the Ummrah.  Given the high credibility and desire of us to build a distinguished name in the field of Ummrah, it is our pleasure to have agreements with distinguished partners around the world. We aspire to build beneficial partnerships with those distinguished agents to serve pilgrims. Al-Zuhud has also adopted the establishment of a quality management system that complies with the international standards in the field of occupational safety and health, so that we can improve the services and activities expected from our agents.</div>
            <div v-else :style="{'direction': language === 'ar' ? 'rtl': ''}">
                لدى الزهد للعمرة والزيارة أسلوب متميز في العمل والاتفاق مع وكلائها لتنفيذ برامج العمرة التي تتوزع لعدة مستويات حسب الخدمات المقدمة للمعتمر. وبحمد من الله ونظرا للمصداقية العالية ورغبة منا في بناء اسم متميز في مجال العمرة سعدنا بالاتفاق مع عشرات الشركاء حول العالم. ونطمح لبناء شراكات جديدة مع وكلاء متميزين لخدمة ضيوف الرحمن. ايضا قد تبنت الزهد انشاء نظام إدارة الجودة الذي يتطابق مع المواصفات القياسية العالمية في مجال السلامة والصحة المهنية حتى نرتقى بخدمات وأنشطة الزهد وحتى نحافظ على العملاء وعلى الخدمات المتميزة
            </div>
            <br class="d-none d-md-block">
            <div v-if="language !== 'ar'">Our policy is as follows: </div>
            <div v-else :style="{'direction': language === 'ar' ? 'rtl': ''}">
                وتتمثل هذه السياسة فيما يلي:
            </div>
            <div class="cards">
                <div>
                    <AgentCard v-for="card in cards" :key="card" :image="card.image" :style="{'direction': language === 'ar' ? 'rtl': '', 'width': $vuetify.breakpoint.lgOnly ? '628px': ($vuetify.breakpoint.mdOnly ? '588px': '628px')}" :description="language !== 'ar' ? card.description: card.descriptionAr"></AgentCard>
                </div>
            </div>
            <div class="content">
                <div class="text" :style="{'direction': language === 'ar' ? 'rtl': ''}">
                    <template v-for="(textContent, i) in content">
                        <div class="header" :key="i">{{language === 'ar' ? textContent.titleAr : textContent.title}}</div>
                        <div class="main-content" :key="i" v-html="language === 'ar' ? textContent.textAr : textContent.text"></div>
                    </template>
                </div>
            </div>
            <div class="cards second-cards">
                <div>
                    <AgentCard :style="{'direction': language === 'ar' ? 'rtl': '', 'width': $vuetify.breakpoint.lgOnly ? '628px': ($vuetify.breakpoint.mdOnly ? '588px': '628px')}" v-for="card in cards2" :key="card" :image="card.image" :description="language=== 'ar' ? card.descriptionAr : card.description"></AgentCard>
                </div>
            </div>
            <div class="features">
                <div class="header" :style="{'direction': language === 'ar' ? 'rtl': ''}">{{language === 'ar' ? 'ويوجد ايضا برامج مختلفة مثل:': 'We also have different programs such as: '}}</div>
                <div class="feature" v-for="(feature, i) in features" :key="i" :style="{'direction': language === 'ar' ? 'rtl': ''}">
                    <img src="../assets/star.svg">
                    <div class="feature-content">{{language === 'ar' ? feature.textAr : feature.text}}</div>
                </div>
            </div>
            <div class="text content2">
                <div v-for="(textContent, i) in content2" :key="i" :style="{'direction': language === 'ar' ? 'rtl': ''}">
                    <div class="header">{{language === 'ar' ? textContent.titleAr : textContent.title}}</div>
                    <div class="main-content">{{language === 'ar' ? textContent.textAr : textContent.text}}</div>
                </div>
            </div>
            <div>For more Information please Contact us on</div>
            <div class="contacts">
                <div class="box" v-for="(contact, index) in contacts" :key="contact">
                    <img :src="contact.image">
                    <a class="text black--text" :href="`${index === 0 ? 'mailto:' : 'tel:'}${contact.info}`">{{contact.info}}</a>
                </div>
            </div>
        </main>
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
import AgentCard from '@/components/AgentCard.vue'; 
//cards
// @ts-ignore
import Kaaba from '@/assets/kaaba-filled.svg';
// @ts-ignore
import Update from '@/assets/update.svg';
// @ts-ignore
import Help from '@/assets/help.svg';
// @ts-ignore
import Service from '@/assets/service.svg';
// cards 2
// @ts-ignore
import Ticket from '@/assets/ticket.svg';
// @ts-ignore
import Plane from '@/assets/plane.svg';
// @ts-ignore
import Secure from '@/assets/secure.svg';
// @ts-ignore
import Hotel from '@/assets/hotel-lux.svg';
// @ts-ignore
import Translate from '@/assets/translate.svg';
// @ts-ignore
import Insurance from '@/assets/insurance.svg';
// contacts
// @ts-ignore
import Message from '@/assets/message.svg';
// @ts-ignore
import Phone from '@/assets/phone.svg';
import {State} from "vuex-class";

interface cardData {
    image: string,
    description: string,
    descriptionAr: string,
}

interface textContent {
    title: string,
    titleAr: string,
    text: string,
    textAr: string
}

interface contact {
    image: string,
    info: string
}

@Component({
    components: {
        AlzuhudHeader,
        PageInfo,
        AppSection,
        Footer,
        AgentCard
    }
})
export default class Agent extends Vue {
    routes: Array<string>;
    cards: Array<cardData>;
    cards2: Array<cardData>;
    content: Array<textContent>;
    content2: Array<textContent>;
    features: any[];
    contacts: Array<contact>;
    @State language: string;
    /**
     *
     */
    constructor() {
        super();
        this.routes = ['agent'];
        this.cards = [
            {
                image: Kaaba,
                description: 'To comply with the regulations and instructions of the Ministry of Hajj.',
                descriptionAr: 'الالتزام بتطبيق انظمة وتعليمات وزارة الحج.',
            },
            {
                image: Service,
                description: 'Commitment to the terms of contracts and requests of agents and respect all the conditions.',
                descriptionAr: 'الالتزام بتطبيق انظمة وتعليمات وزارة الحج.',
            },
            {
                image: Help,
                description: 'Work with respect and honesty and deal with all agents as partners.',
                descriptionAr: 'تقديم الخدمات التي تلبي طلبات العملاء.'
            },
            {
                image: Update,
                description: 'Development and continuous upgrading of Ummrah services.',
                descriptionAr: 'الالتزام ببنود عقود وطلبات العملاء واحترام كل ما فيها من شروط'
            },
        ];
        this.cards2 = [
            {
                image: Insurance,
                description: 'Insurance of the issuance of Ummrah visa. ',
                descriptionAr: 'تأمين إصدار تأشيرة العمرة.'
            },
            {
                image: Ticket,
                description: 'Confirmed flight bookings through our agents. ',
                descriptionAr: 'حجوزات طيران مؤكدة عن طريق وكلائنا.'
            },
            {
                image: Plane,
                description: 'Secure the reception and farewell of pilgrims at airports or ports. ',
                descriptionAr: 'توفير الدعم لغير الناطقين بالغة العربية'

            },
            {
                image: Secure,
                description: 'Secure convenient transportation for internal transfers and work (on request). ',
                descriptionAr: 'تأمين استقبال وتوديع المعتمرين في المطارات أو المواني.'

            },
            {
                image: Hotel,
                description: 'Secure hotel reservations in Mecca and Madinah at all levels as required.',
                descriptionAr: 'تأمين وسائل النقل المريحة للتنقلات الداخلية وعمل (المزارات حسب الطلب).'

            },
            {
                image: Translate,
                description: 'Providing support for non-Arabic speakers. ',
                descriptionAr: 'تأمين حجوزات الفنادق في مكة المكرمة والمدينة المنورة بجميع المستويات حسب الطلب.'

            },
        ];
        this.content = [
            {
                title: 'Arrival',
                titleAr: 'الاستقبال',
                text: 'The process of receiving the guests of the Rahman at Al-Zuhud for Ummrah and the visit according to a documented professional methodology uses the best applications to communicate and follow the passenger of the visa until it is left to the homeland. ',
                textAr: `تتم عملية استقبال ضيوف الرحمن لدينا في الزهد للعمرة والزيارة تبعا لمنهجية احترافية موثقة تستخدم افضل التطبيقات للتواصل ومتابعة المعتمر من اسصدار التاشيرة الى ان يتم مغادرته الى ارض الوطن`,
            },
            {
                title: 'First: Receiving the Ummrah Regiment according to the agreed upon:',
                titleAr: '',
                text: 'After the arrival of the information about the regiment from the agent and documenting it in the system, an integrated plan for the service of the regiment is drawn up and the responsibilities, tasks and persons are determined to provide services in airports, ports, hotels and transport means.<br><br>The company seeks to be a leader in providing Ummrah programs at unmatched levels, and the programs are distinguished and varied, and it is professional in providing the service with high efficiency and we provide all under the slogan of your service honor and pride, which includes travel, accommodation, transport and guidance. ',
                textAr: `بعد وصول المعلومات عن فوج المعتمرين من الوكيل الخارجي وتوثيقها في النظام يتم وضع خطة متكاملة لخدمة الفوج وتحدد المسئوليات والمهام والاشخاص لتقديم الخدمات في المطارات والمواني والفنادق ووسائل النقل. أيضا تسعى الشركة لأن تكون رائدة في مجال تقديم برامج العمرة بمستويات لا تضاهى، وتكون البرامج متميزة ومتنوعة، ويكون ذلك باحترافية في تقديم الخدمة وبكفاءة عالية ونقدم كل ذلك تحت شعار خدمتكم شرف لنا ونعتز بها والتي تحتوي على السفر والإقامة والنقل والإرشاد.`,
            },
            {
                title: 'Our Programs:',
                titleAr: 'برامجنا:',
                text: 'We offer different programs depending on the services provided and the preparation of pilgrims but all programs include the following: ',
                textAr: 'نقدم برامج متنوعة تختلف حسب الخدمات المقدمة واعداد المعتمرين لكن جميع البرامج تشمل التالي: '
            },
        ];
        this.features = [
            {
                text: 'Special programs for business and VIP (VIP)',
                textAr: 'برامج خاصة لرجال الأعمال وكبار الشخصيات (VIP)',
            },
            {
                text: 'Special rates programs for Ummrah donors.',
                textAr: 'برامج بأسعار خاصة للمتبرعين للعمرة.',
            },
            {
                text: 'Special rates for groups, companies and hospitals.',
                textAr: 'برامج بأسعار خاصة للمجموعات والشركات والمستشفيات.',
            },
            {
                text: 'Special prices for Ramadan.',
                textAr: 'برامج بأسعار خاصة لشهر رمضان المبارك.',
            },
            {
                text: 'Programs by land for groups only.',
                textAr: 'برامج عن طريق البر للمجموعات فقط.',
            },
        ];
        this.content2 = [
            {
                title: 'Transportation',
                titleAr: 'النقل',
                text: 'TransportationThe transfer of the guests of the Rahman is carried out with Al- Zuhud Ummrah and visit professionally and through an integrated fleet includes luxury buses, medium buses, Mercedes-Benz cars and VIP luxury cars with the presence of professional drivers have experience. ',
                textAr: 'تتم عملية نقل ضيوف الرحمن لدينا في الزهد العمرة والزيارة بشكل احترافي ومن خلال أسطول متكامل يشمل باصات فخمه وباصات متوسطة وسيارات مرسيدس فان وسيارات فخمه لكبار الشخصيات مع وجود سائقين محترفين لديهم خبرة.'
            },
            {
                title: 'Housing',
                titleAr: 'التسكين',
                text: 'The process of accommodation for the guests of Rahman, whether in Mecca or our city in the Al-Zuhud for Ummrah and Visit according to the demands of the pilgrim and his needs. We have five star hotels, four stars, three stars and various residences throughout the year at competitive prices. ',
                textAr: 'تتم عملية التسكين لضيوف الرحمن سواء بمكة أو المدينة لدينا في الزهد للعمرة والزيارة تبعا لطلبات المعتمر واحتياجاته. لدينا فنادق خمس نجوم واربع نجوم وثلاث نجوم ومساكن متنوعة على مدار العام وباسعار منافسة.'
            },
        ];
        this.contacts = [
            {
                image: Message,
                info: 'info@alzuhud.com'
            },
            {
                image: Phone,
                info: '+966 122349474'
            },
            {
                image: Phone,
                info: '+966 554175500'
            },
        ];
    }

    mounted() {
        document.title = 'Agent - Alzuhud';
    }
}
</script>

<style lang="scss" scoped>
    main {
        color: black;
        font-size: 22px;
        >* {
            margin: 0 322px;
            
            @media screen and (max-width: 1904px) {
                margin: 150px;
            }

            @media screen and (max-width: 1264px) {
                margin: 20px;
            }
        }

        @media screen and (max-width: 960px) {
            font-size: 16px;
        }
    }

    .page-info {
        font-size: 22px;
        margin: 0 322px;
        color: black;

        @media screen and (max-width: 1904px) {
            margin: 0 150px;
        }

        @media screen and (max-width: 1263px) {
            margin: 0 20px;
        }
    }

    .cards {
        min-height: 507px;
        background: url('../assets/curve-card.svg') no-repeat;
        margin: 20px 0 0;
        background-position: bottom;
        >div {
            margin: 0;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            @media screen and (min-width: 1904px) {
                margin: 0 300px;
            }
            @media screen and (max-width: 1264px) {
                margin: 0 20px;
            }
        }

        .card {
            @media screen and (max-width: 960px) {
                width: 100%;
                height: auto !important;
            }
        }
    }

    .content {
        background: #F3F7F3;
        padding-top: 60px;
        margin: 0;
        .text {
            margin: 0 322px;
            
            @media screen and (max-width: 1904px) {
                margin: 0 150px;
            }
            
            @media screen and (max-width: 1264px) {
                margin: 0 20px;
            }
        }
    }

    .header {
        font-size: 24px;
        font-weight: bold;
        color: $foreground-secondary;
        margin-bottom: 16px;
        @media screen and (max-width: 960px) {
            font-size: 16px;
        }
    }

    .main-content {
        font-size: 22px;
        margin-bottom: 94px;
        &:last-of-type {
            margin-bottom: 0;
            padding-bottom: 20px;
        }

        @media screen and (max-width: 960px) {
            font-size: 16px;
        }
    }

    .second-cards {
        background: url('../assets/curve-card-2.svg') no-repeat;
        margin-top: 0;
        margin-bottom: 94px;
        background-size: 100%;
    }

    .features {
        margin-bottom: 94px;
    }

    .feature {
        display: flex;
        margin: 30px 0;
        align-items: center;
        img {
            width: 32px;
            height: 32px;
        }
        .feature-content {
            font-size: 23px;
            margin-left: 15px;
            @media screen and (max-width: 960px) {
                font-size: 16px;
                font-weight: 600;                
            }
        }
    }
    

    .content2 {
        >div {
            margin-bottom: 94px;
            &:last-of-type {
                margin-bottom: 124px;
            }
        }
        .header {
            margin-bottom: 21px;
        }
    }

    .contacts {
        display: flex;
        justify-content: space-between;
        margin: 42px 322px 170px;
        align-items: center;
        .box {
            display: flex;
            align-items: center;
            .text {
                margin-left: 10px;
            }
        }
        
        @media screen and (max-width: 1900px) {
            margin: 42px 150px 170px;
        }
        
        @media screen and (max-width: 960px) {
            margin: 42px 20px 100px;
            flex-direction: column;
            .box {
                display: flex;
                justify-content: center;
                margin: 20px;
                width: 100%;
                .text {
                    font-size: 22px;
                    margin-left: 20px;
                }

                img {
                   margin-left: -20px !important;
                }

                &:first-of-type {
                    img {
                        margin-left: 0 !important;
                    }
                }
            }
        }
    }
    
</style>
