<template>
  <main class="home">
    <h1 class="home__welcome">
      Hi
    </h1>
    <h2 class="home__description">
      Tired of trying to do mental gymnastics to figure out which beer gives you the most alcohol for your money? Let our beer profitability calculator take the wheel! We'll help you find the cheapest way to get the biggest buzz. Just plug in the numbers and let the calculator work its magic. Who knew beer and economics could be so much fun?
    </h2>
    <BeerCalculator/>
  </main>
</template>

<script setup lang="ts">

</script>

<style>
  .home {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;

    .home__welcome {
      text-align: center;
      font-size: 5em;
    }

    .home__description {
      text-align: center;
    }

    .beer-calculator {
      margin-top: 1em;;
    }
  }
</style>
