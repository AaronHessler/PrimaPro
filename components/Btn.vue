<template>
  <nuxt-link :to="href" v-if="href !== null && href !== ''">
      <slot />
  </nuxt-link>
  <button v-else>
      <slot />
  </button>
</template>

<script setup>
  const { href } = defineProps({
    href: {
      type: String,
      default: null
    }
  })
</script>

<style lang="scss" scoped>
button, a {
  color: $clr-default;
  align-items: center;
  cursor: default;
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
  outline: 0;
  border: 0;
  padding: 0;
  transition: .6s;
}

button:before, a:before {
  background-color: $clr-default;
  content: "";
  display: inline-block;
  height: 2px;
  margin-right: 10px;
  transition: all .5s cubic-bezier(.25,.8,.25,1);
  width: 0;
}

button:hover:before, a:hover:before {
  background-color: $clr-default;
  width: 3rem;
}
button:active:before, a:active:before {
  width: 2rem;
}
</style>