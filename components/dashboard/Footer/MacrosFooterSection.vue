<template>
    <section class="macros-section">
        <MacrosFooterSectionBar />
        <span class="macros-section__total">
            {{ sectionData }} <b> {{ dataValue }} </b>
        </span>
        <span class="macros-section__range">
            / {{ range[0] }} - {{ range[1] }} {{ rangeUnit }}
        </span>
    </section>
</template>

<script setup lang="ts">
const sectionData = "Kalorie";
const dataValue = 1234;
const range = [123, 124];
const rangeUnit = "g";

</script>

<style scoped lang="scss">
.macros-section {
    display: flex;
    flex-direction: column;
}
</style>