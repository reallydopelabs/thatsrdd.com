<template>
  <main>
    <Head>
      <Title>Ideas</Title>
    </Head>

    <section class="pt-24 xl:pt-36">
      <header class="py-4">
        <DopeContainer>
          <DopeHeading level="h1">Ideas</DopeHeading>
        </DopeContainer>
      </header>

      <DopeContainer class="py-4">
        <ContentList path="/ideas" :query="{ only: ['title', 'author', 'date', '_path'], sort: { date: -1 } }">
          <!-- Default list slot -->
          <template v-slot="{ list }">
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              <IdeasCard v-for="article in list" :key="article._path" :article="article" />
            </ul>
          </template>

          <!-- slot to display message when no content is found -->
          <template #not-found>
            <p>No articles found.</p>
          </template>
        </ContentList>
      </DopeContainer>
    </section>
  </main>
</template>
