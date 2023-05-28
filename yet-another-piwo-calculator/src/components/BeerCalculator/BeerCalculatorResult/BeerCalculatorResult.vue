<template>
    <div>
        <h1>Wow! Tym to można się najebać bracie!</h1>
        <h2>Twój współczynnik najebania wynosi:</h2>
        <h2>{{ props.factor }}</h2>
    </div>

</template>

<script setup lang="ts">
    interface BeerCalculatorResultProps {
        factor: number
    }

    const props = withDefaults(defineProps<BeerCalculatorResultProps>(), {
        factor: 0,
    })
</script>

<style scoped>
    .beer-calculator__result {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>


