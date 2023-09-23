<template>
  <Alert v-if="alertStore.isActive" />
  <router-view />
</template>

<script setup lang="ts">
import { useAlertStore } from "~/stores/alert";

const alertStore = useAlertStore();

onMounted(() => {
  watchEffect(() => {
    if (alertStore.isActive) {

    }
  })
})
</script>

<style lang="scss">
@import './assets/global.scss';
</style>