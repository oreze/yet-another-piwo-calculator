<template>
    <section>
        <h2>Piwko list</h2>
        <v-list class="items">
            <v-list-item v-for="item in beerCalculatorItemsOptions">
                <img :draggable="true" class="item__image" :src="item.url" @dragstart="draggedData = item" @dragend="onDragStart">
            </v-list-item>
        </v-list>
        
        <form class="beer-calculator" @drop="onDrop" @dragover.prevent>
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
        <BeerCalculatorResult class="beer-calculator__result" :factor="result"/>
        <button id="unmuteButton"></button>
    </section>
</template>

<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    import { useBeerCalculator } from './Services/BeerCalculator';
    import type { BeerCalculatorOptions } from './Models/BeerCalculatorOptions';
    import { onMounted, ref } from 'vue';
    import { watchDebounced } from '@vueuse/core';
import type { BeerCalculatorItemOptions } from './BeerCalculatorItem/Models/BeerCalculatorItemOptions';

    const { t } = useI18n()
    const beerCalculator = useBeerCalculator();

    const beerCalculatorOptions = ref<BeerCalculatorOptions>({
        alcohol: 5,
        capacity: 14,
        price: 44
    });

    const beerCalculatorItemsOptions = ref<[BeerCalculatorItemOptions]>([{
        url: 'https://sklep.spolemkielce.pl/wp-content/uploads/2020/04/perla_perla-export_piwo-56-procent-butelka-bzw_500ml.png',
        alcohol: 544,
        capacity: 42,
        price: 2
    },
    {
        url: 'https://ocen-piwo.pl/upload/vip.webp',
        alcohol: 542224,
        capacity: 42,
        price: 2
    }]);
    
    const draggedData = ref<BeerCalculatorItemOptions>();
    const result = ref(beerCalculator.updateProfitability(beerCalculatorOptions.value));

    watchDebounced(
        beerCalculatorOptions,
        (options) => { result.value = beerCalculator.updateProfitability(options)},
        { debounce: 300, immediate: true, deep: true },   
    );

    const onDrop = () => {
        beerCalculatorOptions.value.alcohol = draggedData.value?.alcohol;
        beerCalculatorOptions.value.capacity = draggedData.value?.capacity;
        beerCalculatorOptions.value.price = draggedData.value?.price;
    }
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

    .items {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item__image {
        max-width: 10em;
        max-height: 10em;
    }

    ul {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    ul li {
        margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    }
</style>


