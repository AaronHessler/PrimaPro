<template>
    <div class="logo flex w-screen h-screen items-center justify-center flex-col">
        <img class="scale-50" src="~/assets/svgs/logo.svg" alt="Discover Nuxt 3" />
        <p>Fuck you</p>
    </div>
</template>

<style lang="scss">
    @keyframes pulse {
        0% {opacity: .8;};
        50% {opacity: 1;};
        100% {opacity: .8;};
    }
.logo {
    animation: pulse 1.5s ease-in-out infinite;
}
</style>