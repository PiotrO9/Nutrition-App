<template>
    <div class="search-bar">
        <div class="search-bar__wrapper">
            <input class="search-bar__wrapper--input" />
            <div class="search-bar__wrapper--icon-wrapper">
                <Icon name="mdi:magnify" class="icon" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.search-bar {

    width: 100%;
    display: flex;
    justify-content: center;

    &__wrapper {
        width: 100%;
        max-width: 620px;
        display: flex;
        padding: 10px;
        gap: 10px;

        &--input {
            @include reset-input;
            @include font-style(16px, 500, $Raleway);
            width: calc(100% - 50px);
            height: 40px;
            background-color: $seagreen;
            border-radius: 6px;
            padding: 4px 4px 4px 10px;
            color: $paleGray;

            @include breakpoint-up(md) {
                @include font-style(24px, 500, $Raleway);
                padding: 10px 10px 10px 14px;
            }
        }

        &--icon-wrapper {
            @include square-size(40px);
            @include flex-center;
            border-radius: 6px;
            background-color: $seagreen;
            cursor: pointer;

            .icon {
                color: $paleGray;
                @include square-size(28px);
            }
        }
    }
}
</style>