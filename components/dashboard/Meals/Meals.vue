<template>
    <div class="meals">
        <div class="meals__wrapper">
            <ul class="meals-list">
                <Meal v-for="meal in mealsList" :key="meal" :mealName="meal" />
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import Meal from "./Meal.vue";

const mealsList = ["Śniadanie", "II Śniadanie", "Obiad", "Podwieczorek", "Kolacja"];

</script>

<style scoped lang="scss">
.meals {
    @include flex-center;
    width: 100%;

    &__wrapper {
        @include flex-center;
        width: 100%;

        .meals-list {
            @include flex-center;
            width: 100%;
            flex-direction: column;
            gap: 20px;
        }
    }
}
</style>