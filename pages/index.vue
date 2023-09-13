<template>
    <AppNavbar />
    <div class="content">
        <main>
            <section class="section">
                <div class="section__text-part">
                    <span class="heading">
                        Najprostszy kalkulator kalorii i makroskładników
                    </span>
                    <p class="description">
                        Chcesz odżywiać się bardziej świadomie? Monitoruj posiłki, poznaj swoje nawyki i osiągaj wyznaczone
                        cele dzięki aplikacji
                        <span>
                            Nutrition App
                        </span>
                        .
                    </p>
                    <button class="start-now">
                        <span>Zacznij już dziś</span>
                    </button>
                </div>
                <div class="section__image-part section-one">
                    <div class="bg-stain">
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="section__image-part section-two">
                    <div class="bg-stain">
                        <div class="bg-stain__input">
                            <Icon name="pajamas:search" />
                            <span>
                                Strawberry
                            </span>
                        </div>
                        <div class="bg-stain__circle-chart">
                            <img class="image" src="../assets/icons/circle-chart.svg" alt="">
                            <span>
                                32
                            </span>
                            <span>KCAL</span>
                        </div>
                    </div>
                </div>
                <div class="section__text-part">
                    <span class="heading">
                        Rejestruj posiłki dzięki bazie ponad 14 milionów produktów.
                    </span>
                    <p class="description">
                        Wyświetl wartości kalorii oraz składników odżywczych, porównaj wielkości porcji i odkryj, jak
                        spożywane produkty wspierają Twoje cele.
                    </p>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
import AppNavbar from '~/components/AppNavbar.vue';

</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    main {
        max-width: 1024px;

        .section {
            display: flex;
            justify-content: center;
            flex-direction: row;
            width: 100%;
            margin-top: 60px;
            margin-bottom: 130px;

            &__text-part {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 15px;
                width: max-content;
                max-width: 55%;

                .heading {
                    @include font-style(56px, 800);
                    color: $pure-black;
                    text-align: center;
                    word-wrap: break-word;
                }

                .description {
                    @include font-style(16px, 300);
                    text-align: center;
                    max-width: 330px;

                    span {
                        font-weight: 700;
                    }
                }

                .start-now {
                    @include flex-center;
                    @include reset-button;
                    background-color: $deepSkyBlue;
                    border-radius: 10px;
                    width: 345px;
                    height: 60px;
                    cursor: pointer;

                    span {
                        @include font-style(24px, 700);
                        color: $pure-white;
                    }
                }
            }

            &__image-part {
                width: 45%;
                background-image: url("../assets/images/owsianka.png");
                background-position: center;
                background-size: 100%;
                background-repeat: no-repeat;
                position: relative;


                .bg-stain {
                    background-color: $goldenYellow;
                    position: absolute;
                    z-index: -1;
                }

                &.section-one {
                    background-image: url("../assets/images/owsianka.png");
                    background-size: 100%;


                    .bg-stain {
                        height: 450px;
                        width: 152px;
                        top: -20px;
                        left: 35%;
                        transform: rotate(38deg);
                        border-radius: 70px;
                    }
                }

                &.section-two {
                    background-image: url("../assets/images/truskawa.png");
                    background-size: 130%;
                    background-position-y: 80px;
                    height: 600px;

                    .bg-stain {
                        height: 420px;
                        width: 280px;
                        position: absolute;
                        border-radius: 55px;

                        &__input {
                            @include flex-center;
                            justify-content: start;
                            gap: 10px;
                            position: absolute;
                            top: 40px;
                            left: 20px;
                            padding-left: 5px;
                            background-color: $pure-white;
                            border-radius: 21px;
                            width: 200px;
                            height: 50px;
                            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

                            svg {
                                @include square-size(27px);
                            }

                            span {
                                @include font-style(18px, 700);
                            }
                        }

                        &__circle-chart {
                            @include square-size(170px);
                            @include flex-center;
                            position: absolute;
                            right: -50px;
                            top: -50px;

                            span {
                                position: absolute;

                                &:nth-child(2) {
                                    @include font-style(40px, 700);
                                    left: 62px;
                                    top: 50px;
                                }

                                &:nth-child(3) {
                                    @include font-style(16px, 300);
                                    left: 68px;
                                    top: 95px;
                                }
                            }
                        }
                    }
                }

                &::before {
                    height: 50px;
                    width: 50px;
                    background-color: red;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }
    }
}
</style>