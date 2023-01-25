<template>
  <NuxtLink :to="`/projects/${props.project.attributes.slug}`" class="group">
    <div
      class="aspect-w-4 aspect-h-5 relative z-0 origin-bottom bg-neutral-900 transition-all duration-1000 ease-in-out group-hover:scale-105">
      <img
        v-if="props.project.attributes.card.data"
        :src="props.project.attributes.card.data.attributes.url"
        alt=""
        class="object-cover" />
    </div>
    <div class="relative z-10 mt-1 text-2xl font-bold uppercase">
      {{ props.project.attributes.name }}
      <span class="ml-1 text-neutral-500 transition-all duration-500 group-hover:text-neutral-900"
        >&#10036;&#xFE0E; {{ props.project.attributes.tldr }}</span
      >
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['project'])
</script>
