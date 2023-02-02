<template>
  <div class="border-t border-neutral-400 pt-4 pb-16 pr-8">
    <NuxtLink :to="article._path" class="transition-colors hover:text-neutral-500">
      <div class="text-3xl font-bold uppercase lg:text-4xl">{{ article.title }}</div>
      <div class="mt-2 font-bold">{{ article.author }}</div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(['article'])
</script>
