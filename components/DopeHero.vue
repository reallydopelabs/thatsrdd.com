<template>
  <section class="pt-24 xl:pt-36">
    <div class="overflow-clip whitespace-nowrap">
      <Vue3Marquee class="text-8xl font-bold uppercase sm:text-9xl" :clone="true" :duration="10">
        {{ props.title }}
      </Vue3Marquee>
    </div>

    <DopeContainer>
      <p class="mt-12 max-w-3xl text-3xl font-bold uppercase leading-normal xl:text-5xl xl:leading-normal">
        <slot />
      </p>
    </DopeContainer>
  </section>
</template>

<script setup>
const props = defineProps(['title'])
</script>
