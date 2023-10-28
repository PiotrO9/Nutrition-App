<template>
    <AddMealNav currentMeal="Kolacja" />
    <div class="wrapper">
        <main>
            <AddMealSearchSection />
        </main>
    </div>
    <AddMealFooter />
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.wrapper {
    height: 100%;

    main {
        height: calc(100vh - 120px);
    }
}
</style>