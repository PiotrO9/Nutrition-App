<template>
    <li class="result-item" @click="itemResultClick">
        <span class="result-item__title">
            Jaja kurze
        </span>
        <div class="result-item__wrapper">
            <span class="result-item__wrapper--amount-description text">
                6 x sztuka (360 g)
            </span>
            <span class="result-item__wrapper--kcal text">
                503 kcal
            </span>
        </div>
    </li>
</template>

<script setup lang="ts">
const itemResultClick = (): void => {
    navigateTo("/add-food");
}
</script>

<style scoped lang="scss">
.result-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 6px;
    cursor: pointer;

    &__title {
        @include font-style(16px, 700, $Raleway);
        color: black;

        @include breakpoint-up(md) {
            @include font-style(24px, 700, $Raleway);
        }
    }

    &__wrapper {
        display: flex;
        justify-content: space-between;

        .text {
            @include font-style(13px, 700, $Inter);
            color: $mediumGray;

            @include breakpoint-up(md) {
                @include font-style(20px, 700, $Inter);
            }
        }
    }
}
</style>