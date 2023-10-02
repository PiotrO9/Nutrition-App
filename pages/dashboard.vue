<template>
    <DashboardNav />
    <div class="wrapper">
        <main class="main">
            <h1>test</h1>
        </main>
    </div>
    <DashboardFooter />
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

<style scoped lang="scss">
.main {
    height: 100%;
}
</style>