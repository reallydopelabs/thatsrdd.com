import Head from 'next/head'
import Image from 'next/future/image'

import {
  ChartBarIcon,
  CloudIcon,
  CodeBracketIcon,
  InboxIcon,
  PencilSquareIcon,
  RectangleGroupIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
import { SimpleHero } from '@/components/SimpleHero'
import { ActionLink } from '@/components/ActionLink'
import { Dots } from '@/components/Dots'
import screenshotGhostDashboard from '@/images/screenshots/ghost-dashboard-night.png'
import avatarClaireLehmann from '@/images/avatars/claire-lehmann.png'
import screenshotVexus from '@/images/screenshots/vexus.png'
import { Testimonials } from '@/components/Testimonials'
import { CallToAction } from '@/components/CallToAction'
import { AmazonLogo, GhostLogo, LaravelLogo, NextLogo, TailwindLogo, TerraformLogo } from '@/components/TechLogos'

function Segments() {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-16">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <h2 className="text-sm font-bold uppercase text-lime-400">
                For Creators
              </h2>
              <p className="my-6 text-3xl font-bold leading-normal tracking-tight text-white sm:text-4xl">
                Own your platform, monetize your content, scale your audience.
              </p>
              <p className="my-6 text-lg text-slate-200">
                Did you know that you don't need to bend to the algorithms of
                Big Tech to turn your audience into a business?
              </p>
              <p className="my-6 text-lg text-slate-200">
                We build content-driven websites that allow creators and
                publishers to monetize and scale their audience while holding
                ownership and complete control over the platform.
              </p>
              <div className="mt-6 text-lg">
                <ActionLink href="/creators" color="lime">
                  Explore creator options
                </ActionLink>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-slate-200">
                    &ldquo;Sam's expertise in scaling content platforms more
                    than doubled our five-figure monthly revenue in under a year
                    while cutting costs and improving the overall
                    platform.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-6 w-6 rounded-full"
                        src={avatarClaireLehmann}
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-slate-400">
                      Claire Lehmann, Founder &amp; Editor at <em>Quillette</em>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={screenshotGhostDashboard}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:pt-32 lg:pb-4 lg:px-0">
            <div>
              <h2 className="text-sm font-bold uppercase text-orange-400">
                For Businesses
              </h2>
              <p className="my-6 text-3xl font-bold leading-normal tracking-tight text-white sm:text-4xl">
                Strengthen brand identity with a luxury web presence
              </p>

              <p className="my-6 text-lg text-slate-200">
                What's the point of competing for attention online if the
                website you're driving traffic to is slow and outdated? Those ad
                clicks are wasted money if your site doesn't convert and your
                brand identity is lacking if you don't leave a lasting
                impression.
              </p>
              <p className="my-6 text-lg text-slate-200">
                We craft beautiful web experiences with a combination of
                cutting-edge design and world-class coding for businesses and
                entrepreneurs looking for a competitive edge online. Whether
                marketing your brand, services, or product, we have the eye and
                expertise to drive strong conversions and build true identity
                into your offering.
              </p>
              <div className="mt-6 text-lg">
                <ActionLink href="/businesses" color="orange">
                  Explore business options
                </ActionLink>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-slate-200">
                    &ldquo;We're excited to go to market with such a great
                    looking site out of the gate. The custom illustrations bring
                    our product to life and the site is blazing fast. We
                    couldn't be happier with the end result and look forward to
                    building more pages as we grow!&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-base font-medium text-slate-400">
                      &mdash; Vexus Team
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:max-h-[700px] lg:w-auto lg:max-w-none"
                src={screenshotVexus}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stack() {
  return (
    <Container className="py-12 lg:py-24">
      <h2 className="text-sm font-bold uppercase text-indigo-600">
        Built to Last
      </h2>
      <p className="my-6 max-w-xl text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl">
        Crafted from the ground up with industry-leading technology stacks
      </p>
      <p className="my-6 max-w-2xl text-lg text-gray-500">
        Many agencies and freelancers are using outdated technologies and
        (frankly) sh*tty development practices. With nearly a decade of
        experience building premium websites and complex infrastructure in Big
        Tech, we know the right processes, tools and frameworks for the job. All
        of our offerings are designed by industry professionals and developed
        with rigorous standards that deliver world-class performance and
        functionality.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
          <LaravelLogo className="max-h-12 fill-gray-400"></LaravelLogo>
        </div>
        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
          <NextLogo className="max-h-12 fill-gray-400"></NextLogo>
        </div>
        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
          <TailwindLogo className="max-h-6 fill-gray-400"></TailwindLogo>
        </div>
        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
          <GhostLogo className="max-h-12 fill-gray-400"></GhostLogo>
        </div>
        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
          <AmazonLogo className="max-h-12 fill-gray-400"></AmazonLogo>
        </div>
        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
          <TerraformLogo className="max-h-12 fill-gray-400"></TerraformLogo>
        </div>
      </div>
    </Container>
  )
}

function Services() {
  const features = [
    {
      name: 'Design & Wireframing',
      description:
        'Desktop and mobile designs are created in-house before entering development.',
      icon: RectangleGroupIcon,
    },
    {
      name: 'Development',
      description:
        'We write the code that makes any vision a reality using the latest technology standards.',
      icon: CodeBracketIcon,
    },
    {
      name: 'Hosting',
      description:
        'With expertise in cloud infrastructure, our highly available hosting platform scales as you do.',
      icon: CloudIcon,
    },
    {
      name: 'Growth Consulting',
      description:
        "We'll work with you on a regular or as-needed basis to establish the right mindset and tools for steady online growth.",
      icon: ChartBarIcon,
    },
  ]

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
        <h2 className="text-sm font-bold uppercase text-sky-400">
          Full Service
        </h2>
        <p className="my-6 max-w-4xl text-3xl font-bold leading-normal tracking-tight text-white sm:text-4xl">
          Get it done right,<span className="block sm:hidden"></span> the first
          time
        </p>
        <p className="my-6 max-w-2xl text-lg text-slate-200">
          We provide everything you need to launch or relaunch your web presence
          for the modern world. From design through development, hosting, and
          even consulting partnerships, we'll take you from concept to
          production and help you scale along the way.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                  <feature.icon
                    className="h-6 w-6 text-sky-400"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-slate-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Budgets() {
  return (
    <Dots className="py-16 lg:py-24">
      <Container className="relative bg-white py-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-bold uppercase text-indigo-600">
            Stay on Budget
          </h2>
          <p className="my-6 max-w-4xl text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl">
            Pricing designed for<span className="hidden lg:block"></span> businesses of all sizes
          </p>
          <p className="my-6 max-w-xl text-lg text-gray-500">
            We understand that launching a premium website can be a large
            investment, especially for new businesses. Our frameworks allow us
            to provide custom quality for startups with limited budgets while
            providing full-service design and development for businesses that
            want something extra.
          </p>
        </div>

        <div className="lg:flex lg:gap-x-6">
          <div className="lg:flex-1">
            <p className="my-4 text-2xl font-bold leading-normal tracking-tight text-gray-900 sm:text-3xl">
              Startup
            </p>
            <p className="mx-auto my-4 text-base text-gray-500">
              After years of building custom websites for clients with deep
              pockets, we've designed a modular system that allows us to create
              branded websites for startups at a fraction of the cost with the
              right foundations to grow as you do. We'll focus on your brand
              identity while using proven sitemaps and layouts that optimize for
              conversions in your market.
            </p>
          </div>

          <div className="mt-12 lg:mt-0 lg:flex-1">
            <p className="my-4 text-2xl font-bold leading-normal tracking-tight text-gray-900 sm:text-3xl">
              Growth
            </p>
            <p className="mx-auto my-4 text-base text-gray-500">
              Designing your website from the ground up is still the best way to
              stand out. For proven businesses looking to level up or startups
              that want to go the extra mile, we'll work with you to scope out a
              custom project tailored specifically to your vision, timeframe, and
              budget.
            </p>
          </div>
        </div>
      </Container>
    </Dots>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Crafting websites for the modern internet | Really Dope Digital</title>
        <meta name="description" content="Creators and businesses work with us to build modern digital experiences for their brands. Whether you're a new creator looking to build an audience or a business in need of a beautiful website, we've got you covered." />
      </Head>
      <main>
        <SimpleHero />
        <Segments />
        <Stack />
        <Services />
        <Budgets />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  )
}
