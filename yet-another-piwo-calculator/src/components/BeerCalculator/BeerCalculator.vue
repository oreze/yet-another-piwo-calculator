<template>
    <div>
        <form class="beer-calculator">
            <v-text-field 
                class="beer-calculator__input" 
                v-model="beerCalculatorOptions.capacity" 
                type="number" 
                :counter="10" 
                :label="t('units.capacity-ml')"
                required/>

            <v-text-field 
                class="beer-calculator__input" 
                v-model="beerCalculatorOptions.alcohol" 
                type="number" 
                :label="t('units.alcohol')"
                required/>

            <v-text-field 
                class="beer-calculator__input" 
                v-model="beerCalculatorOptions.price" 
                type="number" 
                :label="t('units.price')"
                required/>
        </form>
        <BeerCalculatorResult :factor="result"/>
    </div>
</template>

<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    import { useBeerCalculator } from './Services/BeerCalculator';
    import type { BeerCalculatorOptions } from './Models/BeerCalculatorOptions';
    import { computed, ref, watch } from 'vue';
    import { refDebounced, watchDebounced } from '@vueuse/core';

    const { t } = useI18n()
    const beerCalculator = useBeerCalculator();

    const beerCalculatorOptions = ref<BeerCalculatorOptions>({
        alcohol: 1,
        capacity: 2,
        price: 3
    });

    const result = ref(beerCalculator.updateProfitability(beerCalculatorOptions.value));
    watchDebounced(
        beerCalculatorOptions,
        (options) => { result.value = beerCalculator.updateProfitability(options)},
        { debounce: 1000, immediate: true, deep: true },   
    );


</script>

<style scoped>
    .beer-calculator {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .beer-calculator__input :deep(input::-webkit-outer-spin-button),
        .beer-calculator__input :deep(input::-webkit-inner-spin-button) {
            -webkit-appearance: none;
            margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        }

        .beer-calculator :deep(input[type=number]) {
            -moz-appearance: textfield; /* Firefox */
        }
    }
</style>


