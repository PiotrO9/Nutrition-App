<template>
    <div class="macros">
        <div class="macros__wrapper">
            <MacrosFooterSection />
            <MacrosFooterSection />
            <MacrosFooterSection />
            <MacrosFooterSection />
        </div>
    </div>
</template>

<script setup lang="ts">
import MacrosFooterSection from './MacrosFooterSection.vue';

</script>

<style scoped lang="scss">
.macros {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    background-color: #F7F8F8;

    &__wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1024px;
        gap: 10px;

        @include breakpoint-up(md) {}

        @include breakpoint-up(xl) {
            gap: 20px;
        }
    }
}
</style>