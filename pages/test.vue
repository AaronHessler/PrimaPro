<template>
    <OptionsPanel title="Test" icon="heroicons-solid:flag">
        <Btn id="selection"><Icon name="heroicons-solid:dots-horizontal"/>Select lesson</Btn>
        <Btn><Icon name="heroicons-solid:lightning-bolt"/>Lightning Exam</Btn>
        <Btn><Icon name="heroicons-solid:library"/>Realistic Exam</Btn>
        <Btn><Icon name="heroicons-solid:fire"/>Challenge Mode</Btn>
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
    #selection {
        margin-bottom: 20px;
    }
</style>