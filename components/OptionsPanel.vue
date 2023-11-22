<template>
    <div id="wrapper">
        <div id="container">
            <h1 class="text-center">
                <Icon id="icon" :name=icon />
                {{ title }}
            </h1>
            <slot />
        </div>
    </div>
</template>

<script>
  export default {
    props: [
      "title",
      "icon"
    ]
  }
</script>

<style lang="scss">
    #wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
    #container {
        display: flex;
        gap: 7px;
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
        margin-right: 10px;
    }
</style>