<template>
  <figure class="not-prose my-8 flex w-full flex-col items-center">
    <blockquote class="twitter-tweet">
      <div class="w-full max-w-md text-sm text-center rounded border border-neutral-900 p-8">
        <p>Due to Twitter's functionality, you may not be able to see this Tweet if you have tracking disabled.</p>
        <a class="mt-4 inline-block underline" :href="`https://twitter.com/mtaibbi/status/${props.tid}?ref_src=twsrc%5Etfw`">View Tweet Directly</a>
      </div>
    </blockquote>
  </figure>
</template>

<script setup>
const props = defineProps(['tid'])

useHead({
  script: [
    { src: 'https://platform.twitter.com/widgets.js', async: true },
  ],
})
</script>
