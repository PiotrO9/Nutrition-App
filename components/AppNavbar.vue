<template>
    <nav class="navbar">
        <span class="navbar__app-title">
            Nutrition App
        </span>
        <ul class="navbar__menu">
            <li class="navbar__menu--item">
                <NuxtLink to="#">
                    Baza produktów
                </NuxtLink>
            </li>
            <li class="navbar__menu--item">
                <NuxtLink to="#">
                    Premium
                </NuxtLink>
            </li>
            <li class="navbar__menu--item">
                <NuxtLink to="/login">
                    Zaloguj
                </NuxtLink>
            </li>
        </ul>
        <div class="navbar__burger" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenuState">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </nav>
    <div v-if="isMobileMenuOpen" class="overlay">
        <aside class="mobile-menu">
            <ul class="mobile-menu__menu">
                <li class="mobile-menu__menu--item">
                    <NuxtLink to="#">
                        Baza produktów
                    </NuxtLink>
                </li>
                <li class="mobile-menu__menu--item">
                    <NuxtLink to="#">
                        Premium
                    </NuxtLink>
                </li>
                <li class="mobile-menu__menu--item">
                    <NuxtLink to="/login">
                        Premium
                    </NuxtLink>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref<boolean>(false)

const toggleMobileMenuState = (): void => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

</script>

<style lang="scss" scoped>
.navbar {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    position: relative;
    background-color: $pure-white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &__app-title {
        @include font-style(32px, 700);
        @include unselectable;
        @include flex-center;
        color: $deepSkyBlue;
        text-align: center;

        @include breakpoint-down(xs) {
            font-size: 24px;
        }
    }

    &__menu {
        display: flex;
        flex-direction: row;
        gap: 40px;

        @include breakpoint-down(md) {
            display: none;
        }

        &--item {
            @include flex-center;
            height: 100%;

            a {
                @include font-style(24px, 500);
                position: relative;
                text-align: center;
                font-family: $Raleway;
                color: $pure-black;
                cursor: pointer;

                &::after {
                    content: '';
                    height: 3px;
                    width: 0;
                    position: absolute;
                    left: 0;
                    bottom: -10px;
                    background-color: $deepSkyBlue;
                    transition: 0.3s;
                }

                &:hover {
                    &::after {
                        width: 100%;
                    }
                }
            }
        }
    }

    &__burger {
        @include flex-center;
        @include square-size(50px);
        display: none;
        flex-direction: column;
        align-self: center;
        gap: 4px;
        z-index: 2;
        cursor: pointer;

        @include breakpoint-down(md) {
            display: flex;
        }

        &.active {
            .bar {
                transition: transform 0.5s, opacity 0.5s;

                @include breakpoint-down(md) {
                    &:nth-child(1) {
                        transform: rotate(-45deg) translateX(-4px) translateY(10px);
                    }

                    &:nth-child(2) {
                        opacity: 0;
                    }

                    &:nth-child(3) {
                        transform: rotate(45deg) translateX(-4px) translateY(-10px);
                    }
                }
            }
        }

        .bar {
            width: 40px;
            height: 6px;
            background-color: $deepSkyBlue;
            border-radius: 12px;
            transition: transform 0.5s;
        }
    }
}

.overlay {
    display: none;

    @include breakpoint-down(md) {
        width: 100vw;
        height: fit-content;
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: flex-end;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1;

        .mobile-menu {
            height: 100vh;
            width: min(200px, 100vw);
            padding-top: 60px;
            padding-left: 4px;
            background-color: $pure-white;

            &__menu {
                display: flex;
                flex-direction: column;
                gap: 10px;

                &--item {
                    a {
                        @include font-style(24px, 500);
                        font-family: $Raleway;
                        color: $pure-black;
                    }
                }
            }
        }
    }
}
</style>