<template>
    <div class="macros-progress-bar">
        <div class="macros-progress-bar__background">
        </div>
        <div class="macros-progress-bar__value" :style="customStyles" :class="{ overLimit: isOverLimit }" ref="valueBar">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface macrosBarProps {
    limit: number;
    value: number;
}

const valueBar = ref<HTMLElement | null>(null);

const isOverLimit = ref<boolean>(false);

const { limit, value } = defineProps<macrosBarProps>();
let percentageValue = ref("0%");

onMounted(() => {
    const percentage = ref((value / limit) * 100);
    if(percentage.value > 100) {
        percentage.value = 100;
        isOverLimit.value = true;
    }
    percentageValue.value = (percentage.value + "%");
    console.log(percentageValue.value)
})

const customStyles = computed(() => ({
    width: percentageValue.value,
}))

</script>

<style scoped lang="scss">
$border-radius-value: 10px;

.macros-progress-bar {
    position: relative;
    widows: 50px;
    height: 10px;

    &__background {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: grey;
        border-radius: $border-radius-value;
    }

    &__value {
        // width: 50%;
        background-color: yellow;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: $border-radius-value;
        
        &.overLimit {
            background-color: red;
        }
    }
}
</style>