<template>
    <nav class="nav">
        <menu class="nav__menu">
            <ul class="nav__menu--list">
                <DashboardNavItem v-for="(date, index) in dateObjectsArray" :key="index" :dateDay="date.dayName"
                    :weekDate="date.weekDate" :isSelected="test" />
            </ul>
        </menu>
    </nav>
</template>

<script setup lang="ts">
import getDateObjectsArray from "../../../utils/date/getDateObjectsArray";
import DateObject from "~/types/DateObject";

const dateObjectsArray: DateObject[] = getDateObjectsArray()
const test = true;
const test2 = false;

</script>

<style scoped lang="scss">
.nav {
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &__menu {
        width: 100%;
        max-width: 1024px;

        &--list {
            display: flex;
            justify-content: center;
            gap: 10px;
        }
    }
}
</style>