<template>
    <OptionsPanel title="Learn" icon="heroicons-solid:academic-cap">
        <Btn href="/selection" id="selection"><Icon name="heroicons-solid:dots-horizontal"/>Select lesson</Btn>
        <Btn :href=lessonUrl><Icon name="heroicons-solid:collection"/> Vocabulary</Btn>
        <Btn><Icon name="heroicons-solid:translate"/> Translation</Btn>
        <Btn><Icon name="heroicons-solid:beaker"/>Declination</Btn>
        <Btn><Icon name="heroicons-solid:book-open"/>Conjugation</Btn>
    </OptionsPanel>
</template>

<script setup>
    let lesson = await useCookie("lesson");
    let lessonUrl = "/learn/vocab/" + lesson.value;
    if (!lesson.value) {
        lessonUrl = "/learn";
    }
</script>

<style lang="scss" scoped>
    #selection {
        margin-bottom: 20px;
    }
</style>