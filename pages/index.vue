<template>
    <div>
        <NuxtPage />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translate(0, -50px); /* Adjust values as needed */
}
</style>
