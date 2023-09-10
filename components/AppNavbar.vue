<template>
    <nav class="navbar">
        <span class="navbar__app-title">
            Nutrition App
        </span>
        <ul class="navbar__menu">
            <li class="navbar__menu--item">
                <a href="#">Baza produktów</a>
            </li>
            <li class="navbar__menu--item">
                <a href="#">Premium</a>
            </li>
            <li class="navbar__menu--item">
                <a href="#">Zaloguj</a>
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
            <span>.</span>
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
    widows: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    background-color: $pure-white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;

    &__app-title {
        @include font-style(32px, 700);
        @include unselectable;
        color: $deepSkyBlue;
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
                @include font-style(24px, 300);
                text-align: center;
                color: $pure-black;
                cursor: pointer;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    background-color: $deepSkyBlue;
                    height: 3px;
                    width: 0;
                    left: 0;
                    bottom: -10px;
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
        flex-direction: column;
        gap: 4px;
        display: none;
        align-self: center;
        z-index: 2;

        @include breakpoint-down(md) {
            display: flex;
        }

        &.active {
            .bar {
                transition: transform 0.5s, opacity 0.5s;

                &:nth-child(1) {
                    @include breakpoint-down(md) {
                        transform: rotate(-45deg) translateX(-4px) translateY(10px);
                    }
                }

                &:nth-child(2) {
                    @include breakpoint-down(md) {
                        opacity: 0;
                    }
                }

                &:nth-child(3) {
                    @include breakpoint-down(md) {
                        transform: rotate(45deg) translateX(-4px) translateY(-10px);
                    }
                }
            }
        }

        .bar {
            height: 6px;
            width: 40px;
            background-color: $deepSkyBlue;
            border-radius: 12px;
            transition: transform 0.5s;
        }
    }
}

.overlay {
    height: fit-content;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;

    .mobile-menu {
        height: 100vh;
        width: 200px;
        background-color: $pure-white;
    }
}
</style>