<template>
    <div class="add-food-section">
        <div class="add-food-section__heading-wrapper">
            <span class="add-food-section__heading-wrapper--food-name">
                Masło
            </span>
            <Icon class="add-food-section__heading-wrapper--add-favourite" name="ph:heart" />
        </div>
        <AddFoodSectionPortion />
        <AddFoodSectionPortion />
        <AddFoodSectionPortion />
        <AddFoodSectionCustomPortion />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.add-food-section {
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;

    &__heading-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;

        &--food-name {
            @include font-style(20px, 700, $Raleway);
        }

        &--add-favourite {
            @include square-size(28px);
            cursor: pointer;
        }
    }
}
</style>