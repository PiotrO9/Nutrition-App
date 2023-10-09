<template>
    <li class="meal">
        <div class="meal__total">
            <div class="meal__total--datas-wrapper">
                <span class="meal-title">
                    Śniadanie
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
                <div class="add-meal-wrapper">
                    <Icon class="plus" name="ic:baseline-plus" />
                </div>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
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

            .meal-title {
                @include font-style(20px, 700, $Inter);
            }

            .meal-macros-summary {
                display: grid;
                grid-template-columns: 2fr repeat(3, 1fr);

                .summary-label {
                    color: $mediumGray;
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
                    transform: rotate(90deg)
                }
            }

            .add-meal-wrapper {
                @include square-size(40px);
                @include flex-center;
                background-color: $seagreen;
                border-radius: 50px;

                .plus {
                    @include square-size(30px);
                    color: $pure-white;
                }
            }
        }
    }
}
</style>