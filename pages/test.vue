<template>
    <OptionsPanel title="Test" icon="heroicons-solid:flag">
        <Btn id="vocab"><Icon name="heroicons-solid:arrow-narrow-right" />Select Vocab</Btn>
    </OptionsPanel>
</template>

<style lang="scss" scoped>
    #wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
    #login {
        display: flex;
        align-items: center;
        flex-direction: column;
        form {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;
        }
    }
    svg {
            margin-right: 8px;
        }
</style>