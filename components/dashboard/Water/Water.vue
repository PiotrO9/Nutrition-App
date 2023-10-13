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

    .wrapper {
        width: 100%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    &__title {
        @include font-style(20px, 700, $Inter);
    }

    &__stats {
        color: $mediumGray;
    }

    &__glasses {
        .glass {
            @include square-size(40px);
        }
    }

    .add-glass {
        @include square-size(40px);
        @include flex-center;
        background-color: $seagreen;
        border-radius: 50px;
        cursor: pointer;

        .plus {
            @include square-size(30px);
            color: $pure-white;
        }
    }
}
</style>