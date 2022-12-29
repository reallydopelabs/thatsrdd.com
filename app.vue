<template>
  <div>
    <Header />

    <NuxtLoadingIndicator />
    <NuxtPage />

    <Footer />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} \u2014 Really Dope Digital` : 'Really Dope Digital'
  },
})
</script>

<script>
import 'vue3-marquee/dist/style.css'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
