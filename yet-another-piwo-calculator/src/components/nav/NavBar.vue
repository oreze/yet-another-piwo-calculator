<template>
    <div class="nav__dark-mode">
        <font-awesome-icon icon="fa-regular fa-sun" />
        <!-- <a-switch id="nav__dark-mode-switch" :checked="isDarkModeChecked" @change="onChangeMode" /> -->
        <font-awesome-icon icon="fa-regular fa-moon"/>
    </div>
    <button @click="playMusic()">CLICK ME</button>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import wino from '../../assets/wino.mp3'

    let isDarkModeChecked = ref<boolean>(true);

    const onChangeMode = () => {
        isDarkModeChecked.value = !isDarkModeChecked.value;
    }

    const audio = new Audio(wino);
    audio.loop = true;
    audio.autoplay = true;
    audio.volume = 0.1;

    const playMusic = () => {
        audio.play();
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
  