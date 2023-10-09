<template>
    <DashboardNav />
    <div class="wrapper">
        <main class="main">
            <Meals />
        </main>
    </div>
    <DashboardFooter />
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import Meals from '~/components/dashboard/Meals/Meals.vue';

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

</script>

<style scoped lang="scss">
.wrapper {
    @include flex-center;
}

.main {
    @include flex-center;
    height: 100%;
    width: 100%;
    max-width: 1024px;
}
</style>