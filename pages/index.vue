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
                        <NuxtImg src="./owsianka.png" />
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
                        <NuxtImg class="bg-stain__image" src="./truskawa.png" />
                        <div class="bg-stain__circle-chart">
                            <NuxtImg class="image" src="../assets/icons/circle-chart.svg" />
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
            <section class="section">
                <div class="section__text-only">
                    <span class="heading">
                        Narzędzia dostosowane do Twoich celów
                    </span>
                    <p class="description">
                        Próbujesz schudnąć, poprawić kondycję, obniżyć BMI lub zadbać o swoje zdrowie? Dajemy Ci odpowiednie
                        narzędzia do osiągnięcia Twoich celów.
                    </p>
                    <div class="section__text-only--articles">
                        <article class="article">
                            <div class="article__wrapper">
                                <Icon name="bx:book" />
                            </div>
                            <span class="article__heading">
                                Zdobywaj wiedzę. Monitoruj. Ulepszaj.
                            </span>
                            <span class="article__description">
                                Prowadzenie dzienniczka posiłków pomaga zrozumieć zwyczaje i zwiększa prawdopodobieństwo
                                osiągnięcia celów.
                            </span>
                        </article>
                        <article class="article">
                            <div class="article__wrapper">
                                <Icon name="fa6-solid:bowl-food" />
                            </div>
                            <span class="article__heading">
                                Uproszczenie dodawania wpisów </span>
                            <span class="article__description">
                                Skanuj kody kreskowe, zapisuj posiłki i przepisy kulinarne, a także korzystaj z narzędzi do
                                szybkiego i łatwego monitorowania posiłków.
                            </span>
                        </article>
                        <article class="article">
                            <div class="article__wrapper">
                                <Icon name="fa-solid:running" />
                            </div>
                            <span class="article__heading">
                                Zachowaj motywację.
                            </span>
                            <span class="article__description">
                                Dołącz do największej na świecie społeczności fitness i zyskaj dostęp do porad i wsparcia 24
                                godziny na dobę, siedem dni w tygodniu.
                            </span>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    </div>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '~/components/AppNavbar.vue';
import AppFooter from '~/components/AppFooter.vue';

</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    main {
        max-width: 1024px;
        width: 100%;

        .section {
            display: flex;
            justify-content: center;
            flex-direction: row;
            width: 100%;
            margin-top: 60px;
            margin-bottom: 100px;

            @include breakpoint-down(lg) {
                flex-direction: column;
                height: max-content;
                align-items: center;
            }

            &:nth-child(2) {
                margin-top: 150px;

                @include breakpoint-down(lg) {
                    flex-direction: column-reverse;
                }
            }

            &__text-part {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 15px;
                width: max-content;
                max-width: 55%;

                @include breakpoint-down(sm) {
                    max-width: 100%;
                }

                .heading {
                    @include font-style(56px, 800);
                    color: $pure-black;
                    text-align: center;
                    word-wrap: break-word;

                    @include breakpoint-down(sm) {
                        @include font-style(32px, 800);
                        padding: 0px 5px;
                    }
                }

                .description {
                    @include font-style(16px, 300);
                    text-align: center;
                    max-width: 330px;

                    @include breakpoint-down(sm) {
                        font-size: 14px;
                        max-width: 260px;
                    }

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

                    @include breakpoint-down(sm) {
                        width: 290px;
                        height: 50px;
                    }

                    span {
                        @include font-style(24px, 700);
                        color: $pure-white;

                        @include breakpoint-down(sm) {
                            font-size: 18px;
                        }
                    }
                }
            }

            &__image-part {
                width: 45%;
                position: relative;

                @include breakpoint-down(lg) {
                    width: 100%;
                }

                .bg-stain {
                    background-color: $goldenYellow;
                    position: absolute;
                    z-index: -1;
                }

                &.section-one {
                    height: 400px;
                    display: flex;
                    justify-content: center;

                    @include breakpoint-down(lg) {
                        width: 100%;
                        background-size: 50%;
                        margin-top: 100px;
                        display: flex;
                        justify-content: center;
                    }

                    .bg-stain {
                        @include flex-center;
                        height: 450px;
                        width: 152px;
                        transform: rotate(38deg);
                        border-radius: 70px;

                        img {
                            width: 450px;
                            height: 300px;
                        }
                    }
                }

                &.section-two {
                    height: 500px;
                    display: flex;

                    @include breakpoint-down(lg) {
                        margin-top: 100px;
                        justify-content: center;
                        margin-right: 15%;
                    }

                    @include breakpoint-down(sm) {
                        margin-right: 5%;
                        height: 300px;
                    }

                    .bg-stain {
                        height: 420px;
                        width: 280px;
                        position: absolute;
                        border-radius: 55px;

                        @include breakpoint-down(sm) {
                            height: 320px;
                            width: 230px;
                        }

                        &__input {
                            @include flex-center;
                            justify-content: flex-start;
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

                        &__image {
                            position: absolute;
                            bottom: -100px;
                            left: -50px;
                            width: 550px;
                            height: 450px;

                            @include breakpoint-down(sm) {
                                height: 280px;
                                width: 330px;
                                bottom: -80px;
                                left: 0;
                                right: -50px;
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
            }

            &__text-only {
                @include flex-center;
                flex-direction: column;
                text-align: center;

                .heading {
                    @include font-style(48px, 700);
                    max-width: 900px;

                    @include breakpoint-down(lg) {
                        max-width: 600px;
                    }
                }

                .description {
                    @include font-style(16px, 300);
                    margin-top: 30px;
                    max-width: 500px;

                    @include breakpoint-down(lg) {
                        max-width: 350px;
                    }
                }

                &--articles {
                    display: flex;
                    flex-direction: row;
                    margin-top: 60px;
                    gap: 50px;

                    @include breakpoint-down(lg) {
                        flex-direction: column;
                    }

                    .article {
                        @include flex-center;
                        flex-direction: column;
                        max-width: 300px;

                        &__wrapper {
                            @include square-size(150px);
                            @include flex-center;
                            border-radius: 50%;
                            box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);

                            svg {
                                @include square-size(60px);
                            }
                        }

                        &__heading {
                            @include font-style(24px, 700);
                            margin-top: 30px;
                        }

                        &__description {
                            @include font-style(16px, 300);
                            margin-top: 30px;
                        }
                    }
                }
            }
        }
    }
}
</style>