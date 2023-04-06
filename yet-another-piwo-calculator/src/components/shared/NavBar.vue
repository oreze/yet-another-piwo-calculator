<template>
    <a-switch :checked="isDarkModeChecked" @change="onChangeMode" />
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    let isDarkModeChecked = ref<boolean>(true);

    const onChangeMode = () => {
        isDarkModeChecked.value = !isDarkModeChecked.value;
    }
</script>
  
  