<template>
  <div>
    <Head>
      <Title>Work</Title>
    </Head>

    <DopeHero title="Our Work &#10036;&#xFE0E;&nbsp;">
      Building next-level digital experiences that engage with consumers.
    </DopeHero>

    <DopeSection>
      <DopeContainer>
        <header class="mb-12 border-b border-neutral-900">
          <DopeHeading level="h3" as="h1" class="mb-6">Recent Projects</DopeHeading>
        </header>

        <div v-if="projects" class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div v-for="project in projects.data" :key="project.id" class="sm:[&:nth-child(2n)]:pt-24">
            <ProjectCard :project="project"></ProjectCard>
          </div>
        </div>
      </DopeContainer>
    </DopeSection>

    <DopeCta></DopeCta>
  </div>
</template>

<script setup>
const { find } = useStrapi()
const { data: projects } = await useAsyncData('projects', () =>
  find('projects', { populate: 'card', sort: 'priority' })
)
</script>
