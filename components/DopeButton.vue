<template>
  <NuxtLink
    class="inline-flex h-12 items-center justify-center border-b-2 text-xl font-bold uppercase tracking-wide"
    :class="variants[props.variant]">
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  variant: {
    default: 'dark',
  },
})

const variants = {
  light: 'bg-transparent text-neutral-300 border-neutral-300 hover:text-neutral-900 hover:bg-neutral-300',
  dark: 'bg-transparent text-neutral-900 border-neutral-900 hover:text-neutral-300 hover:bg-neutral-900',
}
</script>
