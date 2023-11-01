<template>
    <div class="search-section">
        <AddMealSearchBar />
        <ul class="search-section__results">
            <AddMealResult v-for="result in results" :key="result" />
        </ul>
    </div>
</template>

<script setup lang="ts">
const results: string[] = ["test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test"];
</script>

<style scoped lang="scss">
.search-section {
    @include square-size(100%);
    @include flex-center;
    flex-direction: column;

    &__results {
        height: 100%;
        width: 95%;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: $paleGray;
        border-radius: 8px;
        @include invisible-scroll;
    }
}
</style>