<template>
    <div class="alert">
        <div class="alert__content"
            :class="{ 'collapsed': isCollapsed, 'ok': alertMessageType === alertType.OK, 'error': alertMessageType === alertType.ERROR }">
            <div class="alert__content--cancel-wrapper">
                <Icon class="close-icon" name="iconoir:cancel" @click="closeAlert" />
            </div>
            <div class="alert__content--wrapper">
                <Icon :name="alertIcon" class="icon" />
                <span class="message">
                    {{ alertMessage }}
                </span>
            </div>
            <div v-if="linkText" class="alert__content--link">
                <button class="button" @click="disableAlert">
                    <a class="button__link" :href="link">
                        {{ linkText }}
                    </a>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAlertStore } from "~/stores/alert";
import { Ref, ref } from 'vue';
import alertType from "../../enums/alertType";

const alertStore = useAlertStore();
const alertMessage: Ref<string> = ref<string>('');
const alertMessageType: Ref<alertType | null> = ref<alertType | null>(null);
const isCollapsed: Ref<boolean> = ref<boolean>(false);
const alertIcon: Ref<string> = ref<string>("");
const link: Ref<string> = ref<string>("");
const linkText: Ref<string> = ref<string>("");

const disableAlert = (): void => {
    alertStore.disableAlert();
}

const closeAlert = (): void => {
    isCollapsed.value = true;

    setTimeout(() => {
        disableAlert();
    }, 500);
}

onMounted(() => {
    watchEffect(() => {
        if (alertStore.$state.isActive) {
            alertMessage.value = alertStore.$state.message;
            alertMessageType.value = alertStore.$state.alertType;
            alertIcon.value = alertStore.$state.alertIcon;
            link.value = alertStore.$state.link;
            linkText.value = alertStore.$state.linkText;
        }
    })
})
</script>

<style scoped lang="scss">
.alert {
    @include flex-center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3px);
    z-index: 1000;

    &__content {
        @include flex-center;
        width: 80%;
        max-width: 375px;
        flex-direction: column;
        gap: 5px;
        background-color: white;
        text-align: center;
        padding: 10px;
        padding-bottom: 20px;
        animation: slideDown 0.5s ease forwards;
        border-radius: 8px;

        &--cancel-wrapper {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            justify-self: start;
            align-self: flex-start;

            .close-icon {
                @include square-size(30px);
                cursor: pointer;
            }
        }

        &--wrapper {
            display: flex;
            flex-direction: row;
            gap: 20px;

            .icon {
                @include square-size(50px);
            }

            .message {
                @include flex-center;
                @include font-style(24px, 700, $Raleway);
                text-align: center;

                @include breakpoint-down(xs) {
                    font-size: 18px;
                }
            }
        }

        &.collapsed {
            animation: slideToClose 0.5s ease forwards;
        }

        &.ok {
            background-color: #90cf92;
            color: white;
        }

        &.error {
            background-color: #DB6057;
            color: white;
        }

        &--link {
            @include flex-center;
            width: 100%;
            margin-top: 10px;

            .button {
                @include flex-center;
                outline: none;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                cursor: pointer;

                &__link {
                    @include font-style(14px, 700, $Raleway);
                }
            }
        }
    }

    @keyframes slideDown {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideToClose {
        0% {
            transform: translateY(0);
            opacity: 1;
        }

        100% {
            transform: translateY(100%);
            opacity: 0;
        }
    }
}
</style>
