<template>
    <div id="wrapper">
        <button @click="decrement"><Icon name="heroicons-solid:chevron-left"/></button>
        <input type="number" v-model="counter">
        <button @click="increment"><Icon name="heroicons-solid:chevron-right"/></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            if (this.counter < 45) {
                this.counter++;
            }
        },
        decrement() {
            if (this.counter > 0) {
                this.counter--;
            }
        }
    },
    watch: {
        counter(newVal) {
            if (newVal < 0) {
                this.counter = 0;
            } else if (newVal > 45) {
                this.counter = 45;
            }
        }
    }
}
</script>

<!-- Your existing styles here -->

<!-- Your existing styles here -->
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
            font-size: 30px;
            &:hover {
                font-size: 40px;
            }
            &:active {
                transition: .2s;
                font-size: 30px;
            }
       }


        input {
            font-weight: 600;
            width: 50px;
            height: 50px;
            text-align: center;
            font-size: 1.5rem;
            -moz-appearance:textfield; /* Firefox */
            appearance: textfield; /* Standard */


        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            /* display: none; <- Crashes Chrome on hover */
            -webkit-appearance: none;
            margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        }
    }
</style>
