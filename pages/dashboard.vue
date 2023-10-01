<template>
    <h1>dashboard</h1>
    <h2>{{ user?.email }}</h2>

    <button @click="logout">
        log out
    </button>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const authStorage = useAuthStore();
const user = useSupabaseUser();

const logout = () => {
    authStorage.SignOut();
}

watchEffect(() => {
    if (!user.value) {
        navigateTo("/");
    }
})

console.log(user);

</script>

<style></style>