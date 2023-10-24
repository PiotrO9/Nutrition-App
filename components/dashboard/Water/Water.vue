<template>
    <div class="water">
        <div class="wrapper">
            <span class="water__title">
                Woda
            </span>
            <div class="water__stats">
                {{ currentater }} / {{ maxWater }} ml
            </div>
            <div class="water__glasses">
                <NuxtImg src="water-glass.png" class="glass" />
            </div>
        </div>
        <div class="add-glass">
            <Icon class="plus" name="ic:baseline-plus" @click="addGlass" />
        </div>
    </div>
</template>

<script setup lang="ts">
let currentater = 0;
let maxWater = 2304;

const addGlass = (): void => {

}

</script>

<style scoped lang="scss">
.water {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 20px;
    width: 100%;
    gap: 50px;

    @include breakpoint-up(xl) {
        gap: 35px;
    }

    .wrapper {
        width: 100%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        gap: 5px;

        @include breakpoint-up(xl) {
            max-width: 588px;
        }
    }

    &__title {
        @include font-style(20px, 700, $Inter);

        @include breakpoint-up(xl) {
            @include font-style(48px, 700, $Inter);
        }
    }

    &__stats {
        color: $mediumGray;

        @include breakpoint-up(xl) {
            @include font-style(24px, 300, $Inter);
        }
    }

    &__glasses {
        .glass {
            @include square-size(40px);

            @include breakpoint-up(xl) {
                @include square-size(50px);
            }
        }
    }

    .add-glass {
        @include square-size(40px);
        @include flex-center;
        background-color: $seagreen;
        border-radius: 50px;
        cursor: pointer;

        @include breakpoint-up(xl) {
            @include square-size(56px);
            margin-left: 25px;
        }

        .plus {
            @include square-size(30px);
            color: $pure-white;

            @include breakpoint-up(xl) {
                @include square-size(40px);
            }
        }
    }
}
</style>