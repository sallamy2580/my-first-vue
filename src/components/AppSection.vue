<template>
    <div class="backdrop">
        <div class="prompt">
            Get Alzuhud<br>on your mobile phone
        </div>
        <div class="button">
            <div class="content">
                <svg xmlns="http://www.w3.org/2000/svg" width="36.612" height="43.112" viewBox="0 0 36.612 43.112">
                    <path id="Path_138" data-name="Path 138" d="M14.971,6.422l19,18.994,4.9-4.9C32.174,16.448,23.2,11,19.166,8.546l-2.7-1.638A3.4,3.4,0,0,0,14.971,6.422ZM12.071,8.7A3.416,3.416,0,0,0,12,9.34V46.877a3.156,3.156,0,0,0,.054.454L31.38,28ZM42.093,22.47,36.558,28,42,33.443c2.882-1.745,4.877-2.961,5.1-3.093a2.876,2.876,0,0,0,1.516-2.489A2.775,2.775,0,0,0,47.1,25.495C46.892,25.373,44.925,24.186,42.093,22.47Zm-8.124,8.124L15.029,49.534a3.1,3.1,0,0,0,1.087-.386c.486-.3,13.641-8.278,22.659-13.749Z" transform="translate(-12 -6.422)"/>
                </svg>
                <div class="text">
                    <div class="light-text">Android App on</div>
                    <div class="store">Google Play</div>
                </div>
            </div>
        </div>
        <div class="button">
            <div class="content">
                <svg xmlns="http://www.w3.org/2000/svg" width="34.911" height="42.818" viewBox="0 0 34.911 42.818">
                    <path id="Path_139" data-name="Path 139" d="M41.279,15.317a9.667,9.667,0,0,0-4.725,8.216,9.679,9.679,0,0,0,5.817,8.6,23.075,23.075,0,0,1-3.016,6.1c-1.733,2.638-3.654,5.3-6.577,5.3C30,43.529,29,41.772,25.8,41.772c-3.443,0-4.417,1.758-7.055,1.758-2.919,0-4.986-2.8-6.816-5.415a26.668,26.668,0,0,1-4.462-13.94,14.7,14.7,0,0,1,1.8-7.7,10.739,10.739,0,0,1,8.882-5.415c2.8-.094,5.3,1.924,7.006,1.924,1.64,0,4.7-1.924,8.168-1.924A9.526,9.526,0,0,1,41.279,15.317Zm-16.36-4.8c-.5-2.493.877-4.986,2.16-6.577A9.111,9.111,0,0,1,33.538.711a9.307,9.307,0,0,1-2.375,6.722C29.714,9.357,27.221,10.8,24.919,10.519Z" transform="translate(-7.461 -0.711)"/>
                </svg>
                <div class="text">
                    <div class="light-text">Download on the</div>
                    <div class="store">App Store</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class AppSection extends Vue {
    
}
</script>

<style lang="scss" scoped>

    .backdrop {
        background-color: $foreground-secondary;
        width: 100%;
        min-height: 194px;
        padding: 53px 120px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        position: relative;

        @media screen and (min-width: 960px) and (max-width: 1264px) {
            padding: 53px 60px;
            .prompt {
                right: 40px;
            }
        }

        @media screen and (max-width: 960px) {
            display: flex;
            flex-direction: column;
            padding: 55px 0;
            .button {
                margin: 30px 0 0;
            }
            .prompt {
                position: static;
                text-align: center;
                text-transform: uppercase;
                font-size: 20px;
                margin-top: 10px;
                margin-bottom: 10px;
            }
        }
    }

    .button {
        background: white;
        border-radius: 8px;
        padding: 22px 32px;
        margin: 0 10px 0 0;
        width: 261px;
        box-sizing: border-box;
        transition: all .2s linear;

        &:hover {
            cursor: pointer;
            background: $foreground;
            
            svg {
                fill: white !important;
            }

            .content {
                color: white;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }

            .text {
                margin-left: 20px;
            }

            .light-text {
                font-size: 12px;
            }

            .store {
                font-size: 25px;
                font-weight: 500;
            }
        }

        .content {
            color: $foreground-secondary;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            svg {
                fill: $foreground-secondary;
            }

            .text {
                margin-left: 20px;
            }

            .light-text {
                font-size: 12px;
            }

            .store {
                font-size: 25px;
                font-weight: 500;
            }
        }
    }

    .prompt {
        position: absolute;
        right: 120px;
        color: white;
        font-size: 30px;
    }

</style>
