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
import { onMounted } from 'vue';
import MacrosFooterSection from './MacrosFooterSection.vue';

onMounted(() => {
    const macrosElement = document.querySelector('.macros');
    const nextElement = macrosElement?.nextElementSibling;

    if (nextElement && nextElement.tagName.toLowerCase() === 'footer') {
        macrosElement.classList.add('has-footer');
    }
});
</script>


<style scoped lang="scss">
.macros {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #F7F8F8;

    &.has-footer {
        bottom: 60px;

        @include breakpoint-up(medium) {
            bottom: 90px;
        }
    }

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