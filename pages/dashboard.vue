<template>
    <DashboardNav />
    <div class="wrapper">
        <main class="main">
            <Meals />
            <Water />
        </main>
    </div>
    <MacrosFooter />
    <DashboardFooter />
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import Meals from '~/components/dashboard/Meals/Meals.vue';
import Water from '~/components/dashboard/Water/Water.vue';
import MacrosFooter from '~/components/dashboard/Footer/MacrosFooter.vue';

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
    height: calc(100% - 194px);

    @media (min-width: 370px) {
        height: calc(100% - 179px);
    }

    @include breakpoint-up(xl) {
        height: calc(100% - 268px);
    }
}

.main {
    @include square-size(100%);
    @include invisible-scroll;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 1024px;
    overflow-y: scroll;
}
</style>