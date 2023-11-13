<template>
    <div class="meals">
        <div class="meals__wrapper">
            <ul class="meals-list">
                <Meal v-for="(meal, id) in mealsList" :key="meal" :mealName="meal" :mealId="id" />
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import Meal from "./Meal.vue";
import getMealsNames from "../../../utils/getters/getMealsNames";
import { useActionsStore } from "~/stores/actions";

const actionsStore = useActionsStore()
const mealsList = getMealsNames();

onMounted(async () => {
    const meals = await actionsStore.getMeals().then((res) => { return res.data.value });

    console.log(meals)
})

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