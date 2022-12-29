<template>
  <footer class="bg-neutral-900 text-lg font-semibold text-gray-300">
    <DopeContainer class="py-24">
      <div class="grid gap-8 md:grid-cols-4">
        <div class="col-span-1">
          <h6 class="mb-2"><span class="font-light">&copy;</span> Really Dope Digital LLC.</h6>
          <a target="_blank" href="https://instagram.com/magxsamrapaport" class="block">Instagram</a>
          <a target="_blank" href="https://twitter.com/thatsrdd" class="block">Twitter</a>
          <a target="_blank" href="https://www.pinterest.com/reallydopedigital" class="block">Pinterest</a>
        </div>
        <div class="col-span-1">
          <h6 class="mb-2">Los Angeles</h6>
          8605 Santa Monica BLVD<br />
          PMB 830584<br />
          West Hollywood, CA 90069<br />
          hey@thatsrdd.com
        </div>
        <div class="col-span-1 md:col-span-2">
          <h6 class="mb-2">Explore</h6>
          <NuxtLink to="/projects" class="block">Work</NuxtLink>
          <NuxtLink to="/coming-soon" class="block">Ideas</NuxtLink>
          <NuxtLink to="/about" class="block">About</NuxtLink>
          <NuxtLink to="/contact" class="block">Get in touch</NuxtLink>
        </div>
      </div>
    </DopeContainer>

    <div>
      <Vue3Marquee class="text-7xl font-bold uppercase text-neutral-500">
        <span>Really dope <span class="text-neutral-300">design</span><span class="mx-8">&#10036;&#xFE0E;</span></span>
        <span>Really dope <span class="text-neutral-300">UI</span><span class="mx-8">&#10036;&#xFE0E;</span></span>
        <span
          >Really dope <span class="text-neutral-300">branding</span><span class="mx-8">&#10036;&#xFE0E;</span></span
        >
        <span><span class="text-neutral-300">Really Dope Digital</span><span class="mx-8">&#10036;&#xFE0E;</span></span>
      </Vue3Marquee>
    </div>
  </footer>
</template>
