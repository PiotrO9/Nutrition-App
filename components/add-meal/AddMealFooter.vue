<template>
    <footer class="add-meal-footer">
        <menu class="add-meal-footer__menu">
            <div class="add-meal-footer__menu--item">
                <div class="add-wrapper">
                    <div class="plus">+</div>
                </div>
                <span class="text">
                    Dodaj produkt
                </span>
            </div>
            <div class="add-meal-footer__menu--item">
                <div class="add-wrapper">
                    <div class="plus">+</div>
                </div>
                <span class="text">
                    Dodaj potrawę
                </span>
            </div>
            <div class="add-meal-footer__menu--item">
                <div class="add-wrapper">
                    <div class="plus">+</div>
                </div>
                <span class="text">
                    Szybkie dodawanie
                </span>
            </div>
        </menu>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.add-meal-footer {
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &__menu {
        display: flex;
        gap: 5px;

        @include breakpoint-up(md) {
            gap: 25px;
        }

        &--item {
            @include flex-center;
            gap: 10px;
            cursor: pointer;

            .add-wrapper {
                @include flex-center;
                @include square-size(30px);
                min-width: 30px;
                min-height: 30px;
                background-color: $seagreen;
                border-radius: 50%;

                .plus {
                    @include square-size(100%);
                    text-align: center;
                    margin-bottom: 3px;
                    font-size: 24px;
                    color: white;


                }
            }

            .text {
                max-width: 70px;
                font-size: 16px;

                @include breakpoint-up(md) {
                    font-size: 24px;
                    max-width: unset;
                }
            }
        }
    }
}
</style>