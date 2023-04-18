<template>
    <div class="nav__dark-mode">
        <font-awesome-icon icon="fa-regular fa-sun" />
        <!-- <a-switch id="nav__dark-mode-switch" :checked="isDarkModeChecked" @change="onChangeMode" /> -->
        <font-awesome-icon icon="fa-regular fa-moon"/>
    </div>

</template>

<script setup lang="ts">
    import { ref } from 'vue';

    let isDarkModeChecked = ref<boolean>(true);

    const onChangeMode = () => {
        isDarkModeChecked.value = !isDarkModeChecked.value;
    }
</script>
  

<style scoped>
    .nav__dark-mode {
        display: flex;
        align-items: center;

        #nav__dark-mode-switch {
            max-width: 1em;
        }

        > *  {
            margin: 1em;
        }
    }


</style>
  