<template>
    <li class="meal">
        <div class="meal__total">
            <div class="meal__total--datas-wrapper">
                <span class="meal-title">
                    {{ mealName }}
                </span>
                <div class="meal-macros-summary">
                    <span class="kcal-summary summary-label">123 kcal</span>
                    <span class="whey-summary summary-label">5.9g</span>
                    <span class="fat-summary summary-label">3.5g</span>
                    <span class="carbs-summary summary-label">123.4g</span>
                </div>
            </div>
            <div class="meal__total--actions-wrapper">
                <div class="option-wrapper">
                    <Icon class="dots" name="tabler:dots" />
                </div>
                <div class="add-meal-wrapper" @click="addFood">
                    <Icon class="plus" name="ic:baseline-plus" />
                </div>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
const { mealName } = defineProps(["mealName"]);

const addFood = (): void => {
    navigateTo("/add-meal")
}
</script>

<style scoped lang="scss">
.meal {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    &__total {
        display: flex;
        gap: 10px;
        padding-top: 10px;
        width: 100%;
        align-items: center;
        justify-content: center;

        &--datas-wrapper {
            display: flex;
            flex-direction: column;
            gap: 10px;

            @include breakpoint-up(xl) {
                gap: 20px;
            }

            .meal-title {
                @include font-style(20px, 700, $Inter);

                @include breakpoint-up(xl) {
                    @include font-style(48px, 700);
                }
            }

            .meal-macros-summary {
                display: grid;
                grid-template-columns: 2fr repeat(3, 1fr);

                @include breakpoint-up(xl) {
                    column-gap: 70px;
                }

                .summary-label {
                    color: $mediumGray;

                    @include breakpoint-up(xl) {
                        @include font-style(24px, 300, $Inter);
                    }
                }
            }
        }

        &--actions-wrapper {
            @include flex-center;

            .option-wrapper {
                .dots {
                    @include square-size(33px);
                    color: $seagreen;
                    cursor: pointer;
                    transform: rotate(90deg);

                    @include breakpoint-up(xl) {
                        @include square-size(53px);
                    }
                }
            }

            .add-meal-wrapper {
                @include square-size(40px);
                @include flex-center;
                background-color: $seagreen;
                border-radius: 50px;
                cursor: pointer;

                @include breakpoint-up(xl) {
                    @include square-size(56px);
                }

                .plus {
                    @include square-size(30px);
                    color: $pure-white;

                    @include breakpoint-up(xl) {
                        @include square-size(40px);
                    }
                }
            }
        }
    }
}
</style>