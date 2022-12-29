<template>
  <div>
    <Head>
      <Title>About</Title>
    </Head>

    <DopeHero title="About &middot; RDD &#10036;&#xFE0E;&nbsp;"
      >Combining over a decade of creative digital innovation.</DopeHero
    >

    <DopeContainer class="mt-24 space-y-8">
      <p class="max-w-5xl text-lg font-bold">
        Founded in 2020, Really Dope Digital (a.k.a RDD) is a digital consultancy specializing in design and
        engineering. Based out of LA and operating globally, our focus is utilizing our broad set of digital expertise
        to turn impossible visions into reality. Our partners appreciate the power of good design and trust us to
        deliver expert branding, strategy, creative direction, and engineering solutions for their ventures.
      </p>

      <p class="max-w-5xl text-lg font-bold">
        We are a tight-knit team of designers, engineers, and entrepreneurs with top industry experience across many
        disciplines. We've designed and developed web strategy for massive brands like Virgin Group, engineered complex
        infrastructure at Stripe, scaled ecommerce solutions for global businesses, and directed creative for countless
        niche brands. Most importantly, we are passionate about great design and precise development to create memorable
        experiences online.
      </p>
    </DopeContainer>

    <DopeSection>
      <DopeContainer>
        <header class="mb-16">
          <DopeHeading level="h3">Services</DopeHeading>
        </header>
        <div class="grid grid-cols-1 gap-x-4 gap-y-12 xl:grid-cols-3">
          <div
            v-for="(service, i) in services"
            :key="i"
            class="flex flex-col justify-between border-t border-neutral-900 pt-8 xl:border-l xl:border-t-0 xl:pl-2 xl:pt-0">
            <div class="text-xl uppercase">
              <span class="mb-2 block text-5xl font-bold">&#10036;&#xFE0E;</span>
              {{ service.name }}
            </div>

            <div class="mt-36 text-lg font-medium">
              <ul>
                <li v-for="(sub, i) in service.includes" :key="i" class="text-2xl uppercase">
                  {{ sub }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DopeContainer>
    </DopeSection>
  </div>
</template>
