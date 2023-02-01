<template>
  <main>
    <section v-if="article" class="pt-24 xl:pt-36">
      <header class="border-b border-neutral-400 py-8">
        <DopeContainer>
          <h1 class="text-5xl lg:text-7xl xl:text-8xl uppercase font-bold">{{ article.title }}</h1>
        </DopeContainer>
      </header>

      <DopeContainer class="py-4">
        <div class="mb-8 font-bold uppercase">{{ article.author }} / {{ new Date(article.date).getFullYear() }}</div>

        <ContentRenderer :value="article" class="prose prose-xl prose-dope font-medium pb-16">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </DopeContainer>

      <footer class="border-t border-neutral-400 pt-4 pb-16">
        <DopeContainer>
          <IdeasSurround :prev="prev" :next="next" />
        </DopeContainer>
      </footer>
    </section>
  </main>
</template>

<script setup>
const { path } = useRoute()
const { data: article, error } = await useAsyncData(`content/${path}`, () =>
  queryContent().where({ _path: path }).findOne()
)

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const { data: surround } = await useAsyncData(`content/${path}-surround`, () =>
  queryContent().only(['_path', 'title']).sort({ date: 1 }).findSurround(path)
)

const [prev, next] = surround.value

useHead({
  title: article.value.title,
  meta: [
    { name: 'description', content: article.value.description },
    // {
    //   hid: "og:image",
    //   property: "og:image",
    //   content: `https://site.com/${data.value.article.img}`,
    // },
  ],
})
</script>
