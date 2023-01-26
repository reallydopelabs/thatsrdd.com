<template>
  <div>
    <section id="hero" class="flex items-center justify-center overflow-hidden pt-48 pb-36 2xl:h-screen">
      <DopeContainer>
        <div class="grid grid-cols-4 items-center justify-between">
          <div class="col-span-4 whitespace-nowrap text-8xl font-bold uppercase xl:text-9xl" data-chaffle="en">
            Really
          </div>
          <div class="col-span-2 whitespace-nowrap text-8xl font-bold uppercase xl:text-9xl">
            <span data-chaffle="en">Dope</span>&#10036;&#xFE0E;
          </div>
          <div
            class="order-last col-span-4 mt-12 indent-16 text-2xl font-medium sm:order-none sm:col-span-2 sm:mt-0 xl:text-4xl">
            We craft <em class="underline">modern digital experiences</em> that elevate brands and creators online.
          </div>
          <div class="col-span-4 whitespace-nowrap text-8xl font-bold uppercase xl:text-9xl" data-chaffle="en">
            Digital
          </div>
        </div>
      </DopeContainer>
    </section>

    <DopeSection id="intro" class="bg-neutral-900 text-neutral-300">
      <header>
        <DopeContainer>
          <DopeTagline class="max-w-4xl">
            Combining <span class="underline">aesthetics</span> and <span class="underline">functionality</span> from
            concept through production.
          </DopeTagline>
        </DopeContainer>
      </header>

      <DopeContainer>
        <div class="mt-16 grid grid-cols-1 gap-8 xl:mt-24 xl:grid-cols-3">
          <div class="relative">
            <div class="absolute mb-4 text-3xl xl:relative">&#10036;&#xFE0E;</div>
            <p class="ml-8 max-w-sm text-2xl font-medium xl:ml-0">
              Really Dope Digital is a full service digital consultancy.
            </p>
          </div>
          <div class="relative">
            <div class="absolute mb-4 text-3xl xl:relative">&#10036;&#xFE0E;</div>
            <p class="ml-8 max-w-sm text-2xl font-medium xl:ml-0">
              We connect a decade of expertise in design and development with brands and content creators to create
              elevated experiences on the web.
            </p>
          </div>
          <div class="relative">
            <div class="absolute mb-4 text-3xl xl:relative">&#10036;&#xFE0E;</div>
            <p class="ml-8 max-w-sm text-2xl font-medium xl:ml-0">
              From concept through production, RDD has the answers and skills to build strong brand and technical
              visions into reality.
            </p>
          </div>
        </div>
      </DopeContainer>
    </DopeSection>

    <DopeSection id="capabilities">
      <DopeContainer>
        <div class="xl:flex">
          <div class="xl:w-1/2">
            <DopeHeading level="h2" class="mb-10">Capabilities</DopeHeading>
          </div>
          <div class="xl:w-1/2">
            <p class="text-2xl font-medium">
              RDD is a tight-knit team of creators and entrepreneurs with a broad set of digital skills. We love
              collaborating with partners to push the boundaries of what is possible to build online.
            </p>

            <dl class="mt-14 space-y-6 divide-y divide-neutral-900">
              <Disclosure as="div" v-for="service in services" :key="service.name" class="pt-6" v-slot="{ open }">
                <dt class="text-lg">
                  <DisclosureButton class="flex w-full items-start justify-between text-left">
                    <DopeHeading level="h3" as="span">{{ service.name }}</DopeHeading>
                    <span class="ml-6 flex h-7 items-center">
                      <ChevronDownIcon
                        class="transition duration-300"
                        :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
                        aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </dt>
                <transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition duration-75 ease-out"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
                  <DisclosurePanel as="dd" class="mt-4 pr-12">
                    <ul>
                      <li v-for="(sub, i) in service.includes" :key="i" class="text-lg font-medium">
                        {{ sub }}
                      </li>
                    </ul>
                  </DisclosurePanel>
                </transition>
              </Disclosure>
            </dl>
          </div>
        </div>
      </DopeContainer>
    </DopeSection>

    <DopeSection id="work">
      <header class="mb-12">
        <DopeContainer>
          <div class="xl:flex xl:items-end xl:justify-between">
            <DopeHeading level="h2" class="mb-10 max-w-xl">Selected Work</DopeHeading>
            <DopeButton to="/projects">View All Work</DopeButton>
          </div>
        </DopeContainer>
      </header>

      <DopeContainer>
        <div v-if="projects" class="grid grid-cols-1 gap-12 xl:grid-cols-2">
          <div v-for="project in projects.data" :key="project.id" class="xl:[&:nth-child(2n)]:pt-24">
            <ProjectCard :project="project" />
          </div>
        </div>

        <div class="mt-12 text-center">
          <DopeButton to="/projects">View All Work</DopeButton>
        </div>
      </DopeContainer>
    </DopeSection>

    <DopeSection id="process">
      <header>
        <DopeContainer>
          <div class="-mx-4 xl:flex">
            <div class="px-4 xl:w-1/2">
              <DopeHeading level="h2" class="mb-10">Our <span class="block"></span>Process</DopeHeading>
            </div>
            <div class="px-4 xl:w-1/2">
              <p class="text-2xl font-medium">
                We've spent years refining the way we work with our partners to simplify the process and maximize
                results. Our simple, three-step process to collaboration and execution applies to all of our services,
                ensuring strong and transparent partnerships.
              </p>
            </div>
          </div>
        </DopeContainer>
      </header>

      <DopeContainer>
        <div class="mt-24 grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div
            v-for="(step, i) in ourProcess"
            :key="i"
            class="flex flex-col justify-between border-t border-neutral-900 pt-8 xl:border-l xl:border-t-0 xl:pl-2 xl:pt-0">
            <div class="mb-8 text-7xl xl:order-last xl:mb-0">
              {{ String(i + 1).padStart(2, '0') }}
            </div>
            <DopeHeading level="h3">
              {{ step.name }}
            </DopeHeading>
            <div class="py-8 text-lg font-medium xl:py-16">
              {{ step.description }}
            </div>
          </div>
        </div>
      </DopeContainer>
    </DopeSection>

    <DopeSection id="tagline" class="bg-neutral-900 text-neutral-300">
      <DopeContainer>
        <DopeTagline class="text-center">
          <span class="mx-1">&#10036;&#xFE0E;</span>
          <span class="mx-1">&#10036;&#xFE0E;</span>
          <span class="mx-1">&#10036;&#xFE0E;</span>
          <br />
          We are a tight-knit group of creators, innovators, and entrepreneurs that help brands and online creators turn
          impossible visions into reality.
        </DopeTagline>

        <div class="mt-8 text-center">
          <DopeButton to="/contact" variant="light">Create with us</DopeButton>
        </div>
      </DopeContainer>
    </DopeSection>

    <DopeSection id="proof">
      <header>
        <DopeContainer>
          <DopeHeading level="h2">Results</DopeHeading>
          <p class="mt-12 max-w-3xl text-2xl font-medium">
            As a small team, we care deeply about every project and aim to build ongoing, long-term success with our
            clients. Read what some of them have to say about RDD.
          </p>
        </DopeContainer>
      </header>

      <div class="relative mx-auto mt-4 w-full max-w-7xl pt-20 pl-4 xl:pl-8">
        <div ref="scrollContainer" class="scrollbar-none flex gap-8 overflow-x-scroll 2xl:mr-[calc(-100vw/2+1280px/2)]">
          <div v-for="(testimonial, i) in testimonials" :key="i" class="w-4/5 shrink-0 xl:w-2/5">
            <figure class="h-full">
              <blockquote class="flex h-full flex-col justify-between">
                <p class="mb-8 text-lg leading-loose">
                  {{ testimonial.statement }}
                </p>
                <figcaption class="flex items-center gap-4">
                  <div class="h-12 w-12 overflow-hidden rounded-full bg-neutral-900">
                    <img :src="testimonial.avatar" :alt="testimonial.client" class="object-fit grayscale" />
                  </div>
                  <div>
                    <span class="block font-medium">{{ testimonial.client }}</span>
                    <span class="block">{{ testimonial.role }}</span>
                  </div>
                </figcaption>
              </blockquote>
            </figure>
          </div>
        </div>

        <div class="absolute top-0 right-4 inline-flex gap-4">
          <button
            @click="slideBack"
            class="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-900">
            <ChevronLeftIcon class="inline-block w-5"></ChevronLeftIcon>
          </button>
          <button
            @click="slideForward"
            class="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-900">
            <ChevronRightIcon class="w-5"></ChevronRightIcon>
          </button>
        </div>
      </div>
    </DopeSection>

    <DopeCta></DopeCta>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline/index.js'

const { find } = useStrapi()
const { data: projects } = await useAsyncData('projects', () =>
  find('projects', { filters: { featured: true }, populate: '*' })
)

const scrollContainer = ref(null)

const slideBack = () => {
  scrollContainer.value.scroll({ left: 0, behavior: 'smooth' })
}

const slideForward = () => {
  scrollContainer.value.scroll({ left: scrollContainer.value.scrollLeft + 300, behavior: 'smooth' })
}

const ourProcess = [
  {
    name: 'Discover',
    description:
      'We work with you to nail down branding, voice, and creative direction prior to scoping out development of the project. This ensures the full creative vision is laid out and all costs are understood.',
  },
  {
    name: 'Execute',
    description:
      'Once all the requirements and costs are identified, we scope out the project and execute on our collaborative discovery. This is where we bring your idea to life.',
  },
  {
    name: 'Refine',
    description:
      'We believe that a good product is never finished. True creativity is a constant refinement. We know how to analyze digital products in the wild and use that data to help you continuously move the line forward.',
  },
]

const testimonials = [
  {
    client: 'Claire Lehmann',
    role: 'CEO, Quillette',
    avatar: '/images/claire-lehmann.png',
    statement:
      "RDD's technical acumen and professional manner has been indispensable to our company. They respond to requests rapidly and deliver solutions with careful precision and attention to detail. Having a holistic attitude towards business, RDD has ensured that our company has greatly improved technical infrastructure while at the same time delivering extensive cost savings. Their services are highly recommended.",
  },
  {
    client: 'Corey Mangold',
    role: 'Entrepreneur',
    avatar: '/images/corey-mangold.png',
    statement:
      "I first met Sam in 2015 when we hired him at the creative agency I owned at the time. I knew it was only a matter of time before he would start his own thing. His work kicked ass and won us a ton of awards between 2015 and 2018. I've gone on to start several businesses since and use him and now RDD any time I need a website or custom software.",
  },
  {
    client: 'Jeremy Sifuentes',
    role: 'Realtor',
    avatar: '/images/jeremy-sifuentes.png',
    statement:
      "I went to RDD with an idea for my real estate website and they brought it to life. They made it look flawless and from that I've acquired numerous clients. If you're looking for a website to be professionally made, RDD is the choice!",
  },
  {
    client: 'Kris Chase',
    role: 'VP of Technology, Envoy',
    avatar: '/images/kris-chase.png',
    statement: "Rockstar developers with an impressive industry background, these guys know what they're doing.",
  },
]
</script>
