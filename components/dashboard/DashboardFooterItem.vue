<template>
    <li class="footer-item" :class="{ 'selected': selected }">
        <Icon :name="iconName" class="footer-item__icon" />
        <span class="footer-item__text">
            {{ text }}
        </span>
    </li>
</template>

<script setup lang="ts">
const { iconName, text, selected } = defineProps(["iconName", "text", "selected"]);
</script>

<style scoped lang="scss">
.footer-item {
    @include flex-center;
    width: 100px;
    height: 60px;
    flex-direction: column;
    color: $pure-white;
    gap: 5px;

    &.selected {
        color: $ceruleanBlue;

        &__icon {}
    }

    &__icon {
        @include square-size(24px);
    }
}
</style>