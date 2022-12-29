<template>
  <div>
    <Head>
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <Link rel="manifest" href="/site.webmanifest" />

      <Meta property="og:image" name="og:image" content="/og-image.png" />
      <Meta name="twitter:image" content="/og-image.png" />
      <Meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Header />

    <NuxtLoadingIndicator color="linear-gradient(90deg, rgba(0,0,0,1) 12%, rgba(0,0,196,1) 100%)" />
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
