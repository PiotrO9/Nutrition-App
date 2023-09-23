<template>
    <div class="alert">
        <div class="alert__content"
            :class="{ 'collapsed': isCollapsed, 'ok': alertMessageType === alertType.OK, 'error': alertMessageType === alertType.ERROR }">
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
import alertType from "../../enums/alertType";

const alertStore = useAlertStore();
const alertMessage: Ref<string> = ref<string>('');
const alertMessageType: Ref<alertType | null> = ref<alertType | null>(null);
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
            alertMessage.value = alertStore.$state.message;
            alertMessageType.value = alertStore.$state.alertType;
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
        border-radius: 8px;

        &--cancel-wrapper {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            .close-icon {
                @include square-size(30px);
            }
        }

        &--message {
            @include font-style(28px, 700);
            margin-bottom: 20px;
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
