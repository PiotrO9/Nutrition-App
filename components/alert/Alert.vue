<template>
    <div class="alert">
        <div class="alert__content" :class="{ 'collapsed': isCollapsed }">
            <div class="alert__content--cancel-wrapper">
                <Icon class="close-icon" name="iconoir:cancel" @click="closeAlert" />
            </div>
            <span class="alert__content--message">
                {{ alertMessage }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAlertStore } from "~/stores/alert";
import { Ref, ref } from 'vue';

const alertStore = useAlertStore();
const alertMessage: Ref<string> = ref<string>('');
const isCollapsed: Ref<boolean> = ref(false);

const closeAlert = (): void => {
    isCollapsed.value = true;

    setTimeout(() => {
        alertStore.disableAlert();
    }, 500);
}

onMounted(() => {
    watchEffect(() => {
        if (alertStore.$state.isActive) {
            alertMessage.value = alertStore.$state.message
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
        flex-direction: column;
        background-color: white;
        text-align: center;
        padding: 10px;
        animation: slideDown 0.5s ease forwards;

        &--cancel-wrapper {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            .close-icon {
                @include square-size(24px);
                color: red;
            }
        }

        &--message {
            @include font-style(24px, 700);
        }

        &.collapsed {
            animation: slideToClose 0.5s ease forwards;
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
