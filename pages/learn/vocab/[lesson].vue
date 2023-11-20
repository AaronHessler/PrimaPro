<template>
    <div>
        <OptionsPanel :title=lesson></OptionsPanel>
    </div>
</template>

<script setup>
    const { lesson } = useRoute().params;
</script>

<style lang="scss" scoped>

</style>