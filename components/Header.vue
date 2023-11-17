<template>
    <div class="header w-screen">
        <nuxt-link to="/">
            <img src="@/assets/svgs/logo.svg" alt="">
        </nuxt-link>
        <nuxt-link to="/login">Login</nuxt-link>
        <nuxt-link to="/learn">Learn</nuxt-link>
        <nuxt-link to="/test">Test</nuxt-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .header {
        gap: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        padding: 20px 30px;

        img {
            width: 100px;
            margin-right: 10px;
        }
    }
</style>