<template>
    <div>
        <OptionsPanel icon="heroicons-solid:at-symbol" :title=lesson>
        <p>This is were the lessons would start if I wasnt a lazy fu-</p>
        </OptionsPanel>
    </div>
</template>

<script setup>
    const { lesson } = useRoute().params;
</script>

<style lang="scss" scoped>

</style>