<template>
    <footer class="footer">
        <div class="footer__info">
            <span>
                © Nutrition App 2023
            </span>
        </div>
        <div class="footer__wrapper">
            <a href="#">
                Polityka prywatności
            </a>
            <a href="#">
                Polityka Cookie
            </a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    @include flex-center;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100vw;
    height: 60px;
    background-color: $paleGray;

    @include breakpoint-down(md) {
        height: 100px
    }

    span,
    a {
        @include font-style(20px, 300);

        @include breakpoint-down(md) {
            font-size: 16px;
        }
    }

    &__wrapper {
        display: flex;
        justify-content: space-between;
        gap: 50px;

        @include breakpoint-down(md) {
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
    }
}
</style>