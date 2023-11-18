<template>
    <div class="header w-screen">
        <nuxt-link aria-label="Go to home" to="/">
            <img src="@/assets/svgs/logo.svg" alt="">
        </nuxt-link>
        <nuxt-link aria-label="Go to login page" to="/login">Login</nuxt-link>
        <nuxt-link aria-label="Learn" to="/learn">Learn</nuxt-link>
        <nuxt-link aria-label="Test your knowledge" to="/test">Test</nuxt-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .header {
        z-index: 100;
        position: absolute;
        top: 0;
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
    a {
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
        transition: .4s;
        transition-timing-function: cubic-bezier(.87,-.41,.19,1.44);
        &:hover {
            font-style: oblique 7deg;
            filter: brightness(200%);
            margin: 0px 10px;
            scale: 1.2;
        }
        &:active {
            transition-timing-function: inherit;
            margin: 0px -10px;
            scale: .9;
        }
    }
.router-link-exact-active {
    font-weight: 600;
    margin: 0px 10px;
    scale: 1.2;
}
</style>