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
                <div class="section__image-part">
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
    height: 100%;

    main {
        max-width: 1024px;

        .section {
            display: flex;
            justify-content: center;
            flex-direction: row;
            width: 100%;
            margin-top: 60px;

            &__text-part {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 15px;
                width: 55%;

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
                background-size: 120%;
                background-repeat: no-repeat;
                position: relative;

                &::after {
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