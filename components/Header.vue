<template>
  <div
    :class="[
      isMenuOpen || isMenuClosing ? '' : 'mix-blend-difference invert',
      'fixed top-0 left-0 z-40 w-full p-2 transition-all duration-500 ease-in-out sm:p-4',
    ]">
    <div class="relative z-10 mx-auto flex w-full max-w-8xl items-center justify-between border border-neutral-900">
      <div class="shrink-0 pl-4">
        <NuxtLink @click="closeMenu" to="/">
          <DopeLogo class="text-5xl ui-open:text-neutral-300" />
        </NuxtLink>
      </div>

      <div class="w-24 shrink-0 xl:w-40">
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex h-12 w-full items-center justify-center bg-neutral-900 text-center font-bold uppercase text-neutral-200">
          <span class="sr-only">Toggle menu</span>
          Menu
        </button>
      </div>
    </div>

    <transition
      @before-leave="isMenuClosing = true"
      @after-leave="isMenuClosing = false"
      enter-active-class="duration-500 ease-out"
      enter-from-class="-translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="duration-500 ease-in"
      leave-from-class="translate-y-0"
      leave-to-class="-translate-y-full">
      <div
        v-if="isMenuOpen"
        class="absolute inset-x-0 top-0 z-0 min-h-screen w-full origin-top transform bg-neutral-900 transition">
        <DopeContainer>
          <nav class="mt-64 text-5xl text-neutral-300 xl:text-7xl">
            <NuxtLink @click="closeMenu" to="/projects" class="block py-2">Work</NuxtLink>
            <NuxtLink @click="closeMenu" to="/ideas" class="block py-2">Ideas</NuxtLink>
            <NuxtLink @click="closeMenu" to="/about" class="block py-2">About</NuxtLink>
            <NuxtLink @click="closeMenu" to="/contact" class="block py-2">Get in touch</NuxtLink>
          </nav>
        </DopeContainer>
      </div>
    </transition>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)
const isMenuClosing = ref(false)

const closeMenu = () => (isMenuOpen.value = false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
</script>
