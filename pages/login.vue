<template>
    <LoginNavbar />
    <div class="content">
        <main class="wrapper">
            <span class="wrapper__heading">
                Logowanie
            </span>
            <div class="wrapper__input-wrapper">
                <input class="wrapper__input-wrapper--input" type="text" placeholder="Adres E-mail" v-model="email">
            </div>
            <div class="wrapper__input-wrapper">
                <input class="wrapper__input-wrapper--input" :type="isPasswordVisible ? 'text' : 'password'"
                    placeholder="Hasło" v-model="password">
                <Icon v-if="isPasswordVisible" class="wrapper__input-wrapper--icon" name="basil:eye-solid"
                    @click="switchPasswordVisibility" />
                <Icon v-else class="wrapper__input-wrapper--icon" name="basil:eye-closed-solid"
                    @click="switchPasswordVisibility" />
            </div>
            <div class="wrapper__reminder">
                <NuxtLink class="wrapper__reminder--text" to="#">
                    Nie pamietasz hasła?
                </NuxtLink>
            </div>
            <button class="wrapper__login-email" @click="login">
                ZALOGUJ SIĘ
            </button>
            <span class="wrapper__divider-text">
                lub
            </span>
            <button class="wrapper__login-google">
                <Icon class="wrapper__login-google--icon" name="devicon:google" />
                <span class="wrapper__login-google--text">
                    Zaloguj z Google
                </span>
            </button>
            <button class="wrapper__login-google">
                <Icon class="wrapper__login-google--icon" name="jam:discord" />
                <span class="wrapper__login-google--text">
                    Zaloguj z Discord
                </span>
            </button>
            <div class="wrapper__register">
                <span class="wrapper__register--text">
                    Nie jesteś jeszcze członkiem?
                </span>
                <NuxtLink to="/register" class="wrapper__register--link">
                    Zajerestruj się
                </NuxtLink>
            </div>
        </main>
    </div>
    <AppFooter />
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { useAuthStore } from "~/stores/auth";

const store = useAuthStore();

const email: Ref<string> = ref<string>('');
const password: Ref<string> = ref<string>('');
const isPasswordVisible: Ref<boolean> = ref<boolean>(false);

const switchPasswordVisibility = (): void => {
    isPasswordVisible.value = !isPasswordVisible.value;
}

const login = () => store.logIn(email.value, password.value);
</script>

<style scoped lang="scss">
$maxWrapperContentWidth: 375px;

.content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    .wrapper {
        @include flex-center;
        width: 500px;
        height: max-content;
        flex-direction: column;
        padding: 50px;
        border-radius: 20px;
        background-color: $pure-white;
        box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);

        @include breakpoint-down(sm) {
            width: 100%;
            box-shadow: unset;
        }

        &__heading {
            @include font-style(32px, 700);
            color: $deepSkyBlue;
            margin-bottom: 20px;
        }

        &__input-wrapper {
            max-width: $maxWrapperContentWidth;
            width: 100%;
            height: 55px;
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid grey;
            margin-bottom: 10px;

            &--input {
                @include reset-input;
                width: 100%;
            }

            &--icon {
                @include square-size(28px);
                color: grey;
            }
        }

        &__reminder {
            width: 100%;
            max-width: $maxWrapperContentWidth;
            margin-bottom: 20px;

            &--text {
                @include font-style(15px, 400);
                color: $deepSkyBlue;
            }
        }

        &__login-email {
            @include flex-center;
            @include font-style(16px, 700);
            width: 100%;
            max-width: $maxWrapperContentWidth;
            height: 55px;
            outline: none;
            border: none;
            border-radius: 5px;
            background-color: $deepSkyBlue;
            color: $pure-white;
            cursor: pointer;

            @include breakpoint-down(xs) {
                font-size: 14px;
            }
        }

        &__divider-text {
            margin: 10px 0px;
        }

        &__login-google {
            @include flex-center;
            width: 100%;
            max-width: $maxWrapperContentWidth;
            height: 55px;
            margin-bottom: 20px;
            gap: 10px;
            outline: none;
            border: 1px solid $pure-black;
            border-radius: 5px;
            background-color: $pure-white;
            color: $pure-white;
            cursor: pointer;

            &--icon {
                @include square-size(20px);
                display: flex;
                justify-self: flex-start;
                color: grey;
            }

            &--text {
                @include font-style(16px, 700);
                display: flex;
                color: $pure-black;
                justify-self: center;

                @include breakpoint-down(xs) {
                    font-size: 14px;
                }
            }
        }

        &__register {
            @include font-style(15px, 400);
            margin-top: 20px;

            &--link {
                color: $deepSkyBlue;
            }
        }
    }
}
</style>~/stores/auth