<template>
    <AddMealNav currentMeal="Kolacja" />
    <div class="wrapper">
        <main>
            <AddFoodSection />
        </main>
    </div>
    <MacrosFooter />
</template>

<script setup lang="ts">
import MacrosFooter from '~/components/dashboard/Footer/MacrosFooter.vue';
</script>

<style scoped lang="scss">
.wrapper {
    height: calc(100% - 120px);

    @include breakpoint-up(md) {
        height: calc(100% - 170px);
    }

    main {
        display: flex;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
}
</style>