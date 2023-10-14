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
    height: max-content;
    width: 100%;
    background-color: #F7F8F8;

    &__wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1024px;
        gap: 10px;
        padding: 0px 10px;
    }
}
</style>