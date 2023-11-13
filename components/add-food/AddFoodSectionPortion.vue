<template>
    <div class="add-food-section__portion">
        <span class="add-food-section__portion--portion row">
            1x Łyżeczka
        </span>
        <span class="add-food-section__portion--amount row">
            {{ quanity }}{{ unit }}
        </span>
        <div class="add-food-section__portion--kcal row">
            {{ kcal }} kcal
        </div>
        <div class="add-food-section__portion--action row">
            <div class="wrapper" @click="addItem">
                <Icon name="tabler:chevron-right" class="icon" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useActionsStore } from "~/stores/actions";

const quanity = 5;
const unit = "g"
const kcal = 37;

const productId = "ffd77010-0aff-428c-bff0-751c9390f625";

const supabase = useSupabaseClient();
const actionStore = useActionsStore();

const addItem = (): void => {
    actionStore.addProduct(productId, quanity);
    navigateTo("/dashboard");
}
</script>

<style scoped lang="scss">
.add-food-section {
    &__portion {
        display: grid;
        grid-template-columns: 4fr 2fr 2fr 60px;
        margin-bottom: 3px;

        .row {
            background-color: black;
            color: white;
            height: 60px;
            display: flex;
            align-items: center;
            padding: 10px;
        }

        &--action {
            .wrapper {
                @include square-size(100%);
                @include flex-center;
                background-color: #C8F2A5;
                border-radius: 50%;
                cursor: pointer;

                .icon {
                    @include square-size(90%);
                }
            }
        }
    }
}
</style>