<template>
    <section class="macros-section">
        <MacrosFooterSectionBar :limit="100" :value="101" />
        <span class="macros-section__total">
            {{ sectionData }} <b> {{ dataValue }} </b>
        </span>
        <span class="macros-section__range">
            / {{ range[0] }} - {{ range[1] }} {{ rangeUnit }}
        </span>
    </section>
</template>

<script setup lang="ts">
import MacrosFooterSectionBar from "./MacrosFooterSectionBar.vue";

const sectionData = "Kalorie";
const dataValue = 1234;
const range = [123, 124];
const rangeUnit = "g";

</script>

<style scoped lang="scss">
.macros-section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 7px;
    @include font-style(12px, 300, $Inter);

    &__total {
        @include breakpoint-up(sm) {
            font-size: 14px;
        }

        b {
            font-weight: 700;
        }
    }

    &__range {
        font-size: 11px;

        @include breakpoint-up(sm) {
            font-size: 14px;
        }
    }
}
</style>