<template>
    <div>
        <h2>Wow! Tym to można się najebać bracie!</h2>
        <h3>Twój współczynnik najebania wynosi:</h3>
        <h1>{{ props.factor }}</h1>
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

</style>


