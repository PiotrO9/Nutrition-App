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
    </nav>
</template>

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

    &__app-title {
        @include font-style(32px, 700);
        color: $deepSkyBlue;
    }

    &__menu {
        display: flex;
        flex-direction: row;
        gap: 40px;

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
}
</style>