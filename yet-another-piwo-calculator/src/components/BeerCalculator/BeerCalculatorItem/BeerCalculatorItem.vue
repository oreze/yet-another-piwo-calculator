<template>

    <!-- <draggable v-model="beerCalculatorItemOptions" @start="drag=true" :move="movee">
        <template class="item" #item="{ element }">
           <img class="item__image" :src="element.url">
        </template>
    </draggable> -->
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import type { BeerCalculatorItemOptions } from './Models/BeerCalculatorItemOptions';



    const onDragStart = (event: DragEvent) => {
       console.log(event);
    }
    
</script>

<style scoped>

</style>


