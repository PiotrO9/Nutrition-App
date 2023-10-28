<template>
    <nav class="add-meal-nav">
        <div class="add-meal-nav__wrapper">
            <span class="add-meal-nav__wrapper--current-meal">
                {{ currentMeal }}
            </span>
        </div>
    </nav>
</template>

<script setup lang="ts">
const { currentMeal } = defineProps(["currentMeal"]);
</script>

<style scoped lang="scss">
.add-meal-nav {
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &__wrapper {
        width: max-content;
        @include flex-center;

        &--current-meal {
            @include font-style(24px, 700, $Raleway);
            text-align: center;

            @include breakpoint-up(md) {
                @include font-style(44px, 700, $Raleway);
            }
        }
    }
}
</style>