import Head from 'next/head'
import {
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  PencilIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

import { ProductHero } from '@/components/ProductHero'
import { GhostIntro } from '@/components/GhostIntro'
import { CallToAction } from '@/components/CallToAction'
import { SimpleFeatures } from '@/components/SimpleFeatures'
import { CaseStudy } from '@/components/CaseStudy'
import { GhostPricing } from '@/components/GhostPricing'

const introFeatures = [
  {
    name: 'Know your audience',
    icon: (
      <ChatBubbleLeftRightIcon
        className="absolute h-6 w-6 text-emerald-400"
        aria-hidden="true"
      />
    ),
    description:
      'Start with a discovery session where we discuss your niche, audience size, and growth goals.',
  },
  {
    name: 'Hit the ground running',
    icon: (
      <CodeBracketIcon
        className="absolute h-6 w-6 text-emerald-400"
        aria-hidden="true"
      />
    ),
    description:
      "We'll launch and customize a new Ghost site tailored to your content and brand. We can even migrate you from legacy platforms like WordPress.",
  },
  {
    name: 'Start creating',
    icon: (
      <PencilIcon
        className="absolute h-6 w-6 text-emerald-400"
        aria-hidden="true"
      />
    ),
    description:
      'Grow your audience with great content, build out membership tiers, and start collecting monthly income with zero royalties.',
  },
  {
    name: 'Grow with us',
    icon: (
      <ChartBarIcon
        className="absolute h-6 w-6 text-emerald-400"
        aria-hidden="true"
      />
    ),
    description:
      "We've helped creators make real money on Ghost and we'll help you too. Monthly consulting calls are part of the package.",
  },
]

export default function Creators() {
  return (
    <>
      <Head>
        <title>Turn your audience into a business | Really Dope Digital</title>
      </Head>
      <main>
        <ProductHero />
        <GhostIntro />
        <SimpleFeatures features={introFeatures}>
          <h2 className="text-sm font-bold text-emerald-400 uppercase">Proven Experts</h2>
          <p className="my-6 text-3xl font-bold leading-normal tracking-tight lg:text-4xl">
            Hit the ground running with our extensive Ghost knowledge
          </p>
          <p className="my-6 text-lg text-zinc-200">
            Whether you're just starting out or coming with an established
            audience, we'll set you up with the right design and integrations to
            hit your growth and monetization goals. Take advantage of monthly
            consulting calls as part of every package, or work with us more
            closely through a customized program.
          </p>
        </SimpleFeatures>
        <CaseStudy />
        <GhostPricing />
        <CallToAction />
      </main>
    </>
  )
}
