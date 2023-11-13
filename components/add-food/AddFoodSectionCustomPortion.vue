<template>
    <div class="add-food-section__custom-portion">
        <div class="add-food-section__custom-portion--datas row">
            <input class="input" type="number">
            <select class="select">
                <option value="g">g</option>
                <option value="kg">kg</option>
            </select>
        </div>
        <div class="add-food-section__custom-portion--kcal row">
            0 kcal
        </div>
        <div class="add-food-section__custom-portion--action row">
            <div class="wrapper">
                <Icon name="tabler:chevron-right" class="icon" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useActionsStore } from '../../stores/actions';

const actionStore = useActionsStore();
const supabase = useSupabaseClient()

</script>

<style scoped lang="scss">
.add-food-section {
    &__custom-portion {
        display: grid;
        grid-template-columns: 6fr 2fr 60px;

        .row {
            height: 60px;
            display: flex;
            align-items: center;
            padding: 10px;
            background-color: black;
            color: white;
        }

        &--datas {
            gap: 5px;

            .input {
                width: 60px;
                height: 100%;
                border-radius: 4px;
                border: none;
                outline: none;
                padding-left: 6px;
                font-weight: 500;

                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }

            .select {
                width: calc(100%);
                max-width: calc(60%);
                height: 100%;
                border-radius: 4px;

                &:focus {
                    outline: none;
                    border: none;
                }
            }
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