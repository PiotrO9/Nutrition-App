<template>
    <li class="nav-item" :class="{ selected: isSelected }">
        <span class="nav-item__date-day">{{ props.dateDay }}</span>
        <span class="nav-item__week-day">{{ props.weekDate }}</span>
    </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface navItemProps {
    dateDay: string,
    weekDate: string,
    isSelected: boolean
}

const props = defineProps<navItemProps>();
</script>

<style scoped lang="scss">
.nav-item {
    @include flex-center;
    flex-direction: column;
    max-width: 100px;
    width: 100%;
    padding-top: 10px;
    color: $mediumGray;

    &:first-child,
    &:last-child {
        display: none;

        @include breakpoint-up(sm) {
            display: flex;
        }
    }

    &.selected {
        color: $pure-black;
    }

    &__date-day {
        @include font-style(16px, 700);
    }

    &__week-day {
        @include font-style(20px, 300);
    }
}
</style>
