<template>
  <ul class="flex flex-wrap gap-24">
    <li v-if="prev" class="max-w-sm">
      <div class="mb-6 font-bold uppercase">Prev</div>
      <NuxtLink
        v-if="prev"
        :to="prev._path"
        class="text-3xl font-bold uppercase transition-colors hover:text-neutral-400 lg:text-4xl">
        <span>{{ prev.title }}</span>
      </NuxtLink>
    </li>
    <li v-if="next" class="max-w-sm">
      <div class="mb-6 font-bold uppercase">Next</div>
      <NuxtLink
        v-if="next"
        :to="next._path"
        class="text-3xl font-bold uppercase transition-colors hover:text-neutral-400 lg:text-4xl">
        <span>{{ next.title }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['prev', 'next'])
</script>
