
import type { Btn } from '#build/components';

<template>
    <OptionsPanel title="Learn" icon="heroicons-solid:academic-cap">
        <Btn id="vocab"><Icon name="heroicons-solid:dots-horizontal" />Select Vocab</Btn>
        <Btn>Vocabulary</Btn>
        <Btn>Translation</Btn>
        <Btn>Declination</Btn>
        <Btn>Conjugation</Btn>
    </OptionsPanel>
</template>

<style lang="scss" scoped>
    #vocab {
        margin-bottom: 15px;

        svg {
            margin-right: 8px;
        }
    }
</style>