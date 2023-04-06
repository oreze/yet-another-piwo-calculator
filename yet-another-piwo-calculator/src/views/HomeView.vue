<script setup lang="ts">
  import PiwoCalculator from '../components/PiwoCalculator.vue';

</script>

<template>
  <main>
    <h1>
      Hi
    </h1>
    <h2>
      Tired of trying to do mental gymnastics to figure out which beer gives you the most alcohol for your money? Let our beer profitability calculator take the wheel! We'll help you find the cheapest way to get the biggest buzz. Just plug in the numbers and let the calculator work its magic. Who knew beer and economics could be so much fun?
    </h2>
    <PiwoCalculator/>
  </main>
</template>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
  }

  h1 {
    font-size: 5em;
  }

  .piwo-calculator {
    margin-top: 2em;
  }
</style>
