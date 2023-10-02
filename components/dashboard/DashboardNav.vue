<template>
    <nav class="nav">
        <menu class="nav__menu">
            <ul class="nav__menu--list">
                <DashboardNavItem dateDay="test" weekDate="test" :isSelected="test2" />
                <DashboardNavItem dateDay="test" weekDate="test" :isSelected="test2" />
                <DashboardNavItem dateDay="test" weekDate="test" :isSelected="test" />
                <DashboardNavItem dateDay="test" weekDate="test" :isSelected="test2" />
                <DashboardNavItem dateDay="test" weekDate="test" :isSelected="test2" />
            </ul>
        </menu>
    </nav>
</template>

<script setup lang="ts">
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