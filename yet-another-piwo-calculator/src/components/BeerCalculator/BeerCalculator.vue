<template>
    <!-- <a-space direction="horizontal" class="piwo-calculator">
            <a-input-number id="bottleInput" :addonAfter="t('units.bottles/cans')" v-model:value="value" :min="1" :max="1000" />
            <a-input-number id="capacityInput" :addonAfter="t('units.capacity-ml')" v-model:value="value" :min="0.01" :max="1000000" :step="500" />
            <a-input-number id="alcoholInput" :addonAfter="t('units.alcohol')" v-model:value="value" :min="0" :max="100" :precision="2" :step="0.05" />
            <a-input-number id="priceInput" :addonAfter="t('units.price')" v-model:value="value" :min="0.01" :max="110" :precision="2" :step="0.5"/>
        </a-space> -->
    <form class="beer-calculator">
        <v-text-field 
            class="beer-calculator__input" 
            v-model="props.itemCounter" 
            type="number" :counter="10" 
            :label="t('units.bottles/cans')"
            required/>

        <v-text-field 
            class="beer-calculator__input" 
            v-model="props.capacity" 
            type="number" 
            :counter="10" 
            :label="t('units.capacity-ml')"
            required/>

        <v-text-field 
            class="beer-calculator__input" 
            v-model="props.alcohol" 
            type="number" 
            :label="t('units.alcohol')"
            required/>

        <v-text-field 
            class="beer-calculator__input" 
            v-model="props.price" 
            type="number" 
            :label="t('units.price')"
            required/>
    </form>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    import type BeerCalculatorProps from './Models/BeerCalculatorProps';

    const { t } = useI18n()

    const props = withDefaults(defineProps<BeerCalculatorProps>(), {
        alcohol: 5,
        capacity: 500,
        itemCounter: 1,
        price: 10
    })
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


