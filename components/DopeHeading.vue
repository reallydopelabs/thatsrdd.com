<template>
  <component :is="props.as ?? props.level" :class="variants[props.level]">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  level: {
    type: String,
    required: true,
    validator(value) {
      return Object.keys(variants).includes(value)
    },
  },
  as: String,
})
</script>

<script>
const variants = {
  h1: 'text-7xl xl:text-8xl font-bold uppercase',
  h2: 'text-7xl xl:text-8xl font-medium',
  h3: 'text-3xl font-medium',
  h4: 'text-3xl font-bold uppercase',
}
</script>
