<template>
    <div id="wrapper">
        <button><Icon name="heroicons-solid:chevron-left"/></button>
        <input v-model="value" type="number">
        <button><Icon name="heroicons-solid:chevron-right"/></button>
    </div>
</template>

<script>
    let value = 0;
    setInterval(() => {
        value += 1;
    }, 3000);
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 200px;
        height: 50px;

        button {
            transition: .3s;
            &:hover {
                font-size: 40px;
            }
            &:active {
                transition: .2s;
                font-size: 30px;
            }
       }


        input {
            width: 50px;
            height: 50px;
            text-align: center;
            font-size: 1.5rem;
            -moz-appearance:textfield; /* Firefox */

        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            /* display: none; <- Crashes Chrome on hover */
            -webkit-appearance: none;
            margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        }
    }
</style>