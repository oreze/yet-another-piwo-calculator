<template>
        <a-space direction="horizontal" class="piwo-calculator">
            <a-input-number id="bottleInput" :addonAfter="t('units.bottles/cans')" v-model:value="value" :min="1" :max="1000" />
            <a-input-number id="capacityInput" :addonAfter="t('units.capacity-ml')" v-model:value="value" :min="0.01" :max="1000000" :step="500" />
            <a-input-number id="alcoholInput" :addonAfter="t('units.alcohol')" v-model:value="value" :min="0" :max="100" :precision="2" :step="0.05" />
            <a-input-number id="priceInput" :addonAfter="t('units.price')" v-model:value="value" :min="0.01" :max="110" :precision="2" :step="0.5"/>
        </a-space>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n()

    const value = ref<number>(3);
</script>

<style>
    .ant-space {
        display: flex;
        
        .ant-input-number-group-wrapper {
            width: 100%;
        }
    }
</style>
