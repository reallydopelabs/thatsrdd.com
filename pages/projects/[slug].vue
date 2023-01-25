<template>
  <div v-if="project">
    <Head>
      <Title>{{ project.data.attributes.name }}</Title>
    </Head>

    <section class="pt-24 xl:pt-36">
      <header>
        <DopeContainer>
            <DopeHeading level="h1" as="h1">
              {{ project.data.attributes.name }}
            </DopeHeading>

            <div class="mt-12 lg:flex lg:items-start lg:justify-between lg:gap-16">
              <div class="prose prose-dope prose-xl font-medium" v-html="$md.render(project.data.attributes.description)" />
              <div class="shrink-0 lg:sticky lg:top-24">
                <p class="mt-12 lg:mt-0 text-xl font-medium leading-[1.8] text-neutral-500 whitespace-pre-line">
                  {{ servicesList(project.data.attributes.services) }}
                </p>
              </div>
            </div>
        </DopeContainer>
      </header>
    </section>

    <DopeSection v-if="project.data.attributes.gallery">
      <DopeContainer class="space-y-8 2xl:max-w-8xl">
        <div v-for="galleryRow in project.data.attributes.gallery" :key="galleryRow.id">
          <div :class="`grid ${gridColsResponsive(galleryRow.layout)} gap-8`">
            <div class="col-span-1" v-for="image in galleryRow.images.data" :key="image.id">
              <img class="w-full" :src="image.attributes.url" :alt="image.attributes.alternativeText" />
              <div class="mt-2 text-sm font-bold" v-if="image.attributes.caption">
                {{ image.attributes.caption }}
              </div>
            </div>
          </div>
        </div>
      </DopeContainer>
    </DopeSection>

    <DopeCta></DopeCta>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
const route = useRoute()
const { findOne } = useStrapi()

const { data: project, error } = await useAsyncData('project', () => {
  return findOne('projects', route.params.slug, {
    populate: {
      card: true,
      services: true,
      gallery: {
        populate: { images: true },
      },
    },
  })
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const servicesList = (services) => {
  if (!services) {
    return false
  }

  return services.map((data) => data.item).join('\n')
}

const gridColsResponsive = (baseClass) => {
  const responsiveClasses = {
    'grid-cols-1': 'grid-cols-1',
    'grid-cols-2': 'grid-cols-1 sm:grid-cols-2',
    'grid-cols-3': 'grid-cols-1 md:grid-cols-3',
    'grid-cols-4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }

  if (Object.keys(responsiveClasses).includes(baseClass)) {
    return responsiveClasses[baseClass]
  }

  return responsiveClasses['grid-cols-1']
}
</script>
