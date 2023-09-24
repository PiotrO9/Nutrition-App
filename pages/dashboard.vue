<template>
    <h1>dashboard</h1>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();

onMounted(() => {
    watchEffect(() => {
        if (!authStore.user) {
            navigateTo("/");
        }
    })
})
</script>

<style></style>