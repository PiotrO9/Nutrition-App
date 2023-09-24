<template>
    <nav class="navbar">
        <div class="navbar__wrapper">
            <span class="navbar__wrapper--title">
                <NuxtLink to="/">
                    Nutrition App
                </NuxtLink>
            </span>
            <menu class="navbar__wrapper--menu">
                <NuxtLink to="/login" class="login">
                    Zaloguj się
                </NuxtLink>
                <NuxtLink to="/register" class="register">
                    Zarejestruj się
                </NuxtLink>
            </menu>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    position: relative;
    background-color: $pure-white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &__wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;

        &--title {
            @include font-style(32px, 700);
            @include unselectable;
            @include flex-center;
            color: $deepSkyBlue;
            text-align: center;

            @include breakpoint-down(sm) {
                font-size: 22px;
            }

            @include breakpoint-down(xs) {
                font-size: 16px;
            }
        }

        &--menu {
            @include flex-center;
            color: black;

            .login {
                @include font-style(16px, 300);
                border-right: 1px solid grey;
                padding-right: 10px;

                @include breakpoint-down(sm) {
                    font-size: 14px;
                    padding-right: 5px;
                }
            }

            .register {
                @include font-style(16px, 300);
                margin-left: 10px;

                @include breakpoint-down(sm) {
                    font-size: 14px;
                    margin-left: 5px;
                }
            }
        }
    }
}
</style>