<template>
  <Popover
    class="fixed top-0 left-0 z-40 w-full p-2 transition-all duration-500 ease-in-out ui-not-open:mix-blend-difference ui-not-open:invert sm:p-4">
    <div class="relative z-10 mx-auto flex w-full max-w-8xl items-center justify-between border border-neutral-900">
      <div class="shrink-0 pl-4">
        <NuxtLink @click="close" to="/">
          <DopeLogo class="text-5xl ui-open:text-neutral-300" />
        </NuxtLink>
      </div>

      <div class="w-24 shrink-0 xl:w-40">
        <PopoverButton
          class="inline-flex h-12 w-full items-center justify-center bg-neutral-900 text-center font-bold uppercase text-neutral-200">
          <span class="sr-only">Toggle menu</span>
          Menu
        </PopoverButton>
      </div>
    </div>

    <transition
      enter-active-class="duration-500 ease-out"
      enter-from-class="-translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="duration-500 ease-in"
      leave-from-class="translate-y-0"
      leave-to-class="-translate-y-full">
      <PopoverPanel
        v-slot="{ close }"
        focus
        class="absolute inset-x-0 top-0 z-0 min-h-screen w-full origin-top transform bg-neutral-900 transition">
        <DopeContainer>
          <nav class="mt-64 text-5xl text-neutral-300 xl:text-7xl">
            <NuxtLink @click="close" to="/projects" class="block py-2">Work</NuxtLink>
            <NuxtLink @click="close" to="/coming-soon" class="block py-2">Ideas</NuxtLink>
            <NuxtLink @click="close" to="/about" class="block py-2">About</NuxtLink>
            <NuxtLink @click="close" to="/contact" class="block py-2">Get in touch</NuxtLink>
          </nav>
        </DopeContainer>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
</script>
