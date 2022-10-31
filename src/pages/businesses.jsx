import Head from 'next/head'
import Image from 'next/future/image'
import {
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  PencilIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  CheckIcon,
  RectangleGroupIcon,
  PresentationChartBarIcon,
  CloudIcon,
} from '@heroicons/react/24/outline'

import { CodeHero } from '@/components/CodeHero'
import { Container } from '@/components/Container'
import { SimpleFeatures } from '@/components/SimpleFeatures'
import { CallToAction } from '@/components/CallToAction'

import screenshotFeatured1 from '@/images/screenshots/featured-1.png'
import screenshotFeatured2 from '@/images/screenshots/featured-2.png'
import screenshotFeatured3 from '@/images/screenshots/featured-3.png'
import screenshotFeatured4 from '@/images/screenshots/featured-4.png'
import { Dots } from '@/components/Dots'

const capabilities = [
  {
    name: 'Strategy',
    icon: (
      <PresentationChartBarIcon
        className="absolute h-6 w-6 text-orange-500"
        aria-hidden="true"
      />
    ),
    description:
      'Evaluate and select platforms, strategize content and sitemaps, audit technologies, and consult on growth.',
  },
  {
    name: 'Design & Wireframing',
    icon: (
      <RectangleGroupIcon
        className="absolute h-6 w-6 text-orange-500"
        aria-hidden="true"
      />
    ),
    description:
      'For custom projects we use the latest design tools in-house to provide site mockups, UI/UX design, and rapid prototyping',
  },
  {
    name: 'Development',
    icon: (
      <CodeBracketIcon
        className="absolute h-6 w-6 text-orange-500"
        aria-hidden="true"
      />
    ),
    description:
      'Our development services range from front end website builds to custom user experiences and heavy back end integrations',
  },
  {
    name: 'Quality Assurance',
    icon: (
      <CheckIcon
        className="absolute h-6 w-6 text-orange-500"
        aria-hidden="true"
      />
    ),
    description:
      "All of our builds go through a rigorous QA process to ensure the upmost quality upon delivery. We don't ship until you approve.",
  },
  {
    name: 'Cloud Infrastructure',
    icon: (
      <CloudIcon
        className="absolute h-6 w-6 text-orange-500"
        aria-hidden="true"
      />
    ),
    description:
      'Our hosting capabilities span from reliable web hosting to engineering custom infra-as-code platforms.',
  },
  {
    name: 'Growth & Consulting',
    icon: (
      <ChartBarIcon
        className="absolute h-6 w-6 text-orange-500"
        aria-hidden="true"
      />
    ),
    description:
      'Growth retainers that focus on analytics, conversion rate optimization, and content creation.',
  },
]

function FeaturedWork() {
  return (
    <div>
      <Container className="py-12 lg:py-24">
        <section className="grid grid-cols-1 gap-y-10 gap-x-6 pt-10 lg:grid-cols-3">
          <h2 className="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <a href="https://virginorbit.com" target="_blank">
              <Image
                src={screenshotFeatured1}
                alt="This is a detail image"
                className="aspect-[1080/790] rounded-lg bg-slate-200 ring-1 ring-slate-900/10 transition-all duration-500 hover:scale-110"
              />
            </a>
            <a href="https://vexus.samrapaport.com" target="_blank">
              <Image
                src={screenshotFeatured2}
                alt="This is a detail image"
                className="aspect-[1080/790] rounded-lg bg-slate-200 ring-1 ring-slate-900/10 transition-all duration-500 hover:scale-110"
              />
            </a>
            <a href="https://quillette.com" target="_blank">
              <Image
                src={screenshotFeatured4}
                alt="This is a detail image"
                className="aspect-[1080/790] rounded-lg bg-slate-200 ring-1 ring-slate-900/10 transition-all duration-500 hover:scale-110"
              />
            </a>
            <a href="https://playersonlyholdings.com" target="_blank">
              <Image
                src={screenshotFeatured3}
                alt="This is a detail image"
                className="aspect-[1080/790] rounded-lg bg-slate-200 ring-1 ring-slate-900/10 transition-all duration-500 hover:scale-110"
              />
            </a>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default function Businesses() {
  return (
    <>
      <Head>
        <title>Web design and development services for businesses | RDG</title>
      </Head>
      <main>
        <CodeHero></CodeHero>

        <Container className="py-12 lg:py-24">
          <h2 className="text-sm font-bold uppercase text-orange-500">
            Stand Apart
          </h2>
          <p className="my-6 max-w-xl text-3xl font-bold leading-normal tracking-tight text-gray-900 lg:text-4xl">
            Building next-level digital experiences that engage with consumers
          </p>
          <p className="my-6 max-w-3xl text-lg text-gray-500">
            Today's businesses are competing for attention more than ever. To
            stand apart, your brand must deliver exceptional digital experiences
            that cultivate meaningful relationships with customers while
            delivering real business value. We craft websites that are
            intuitive, beautiful, and optimized across all devices.
          </p>
        </Container>

        <SimpleFeatures features={capabilities} className="bg-slate-50">
          <h2 className="text-sm font-bold uppercase text-orange-500">
            Capabilities
          </h2>
          <p className="my-6 text-3xl font-bold leading-normal tracking-tight lg:text-4xl">
            We know our way around the web
          </p>
          <p className="my-6 text-lg text-gray-500">
            With nearly a decade of digital marketing, web development and
            software engineering experience, our abilities don't stop at the
            code editor.
          </p>
        </SimpleFeatures>

        <FeaturedWork></FeaturedWork>

        <CallToAction></CallToAction>
      </main>
    </>
  )
}
