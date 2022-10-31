import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  ScaleIcon,
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
  RectangleStackIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/future/image'
import screenshotGhostPublish from '@/images/screenshots/ghost-publish.png'
import screenshotGhostInstall from '@/images/screenshots/ghost-install.png'
import { ActionLink } from './ActionLink'

const transferFeatures = [
  {
    id: 1,
    name: 'Premium tiers with 0% fees',
    description:
      "Publish private content exclusively for paying members. Offer unique benefits so you can generate revenue to support your work. Everything you earn is yours to keep, Ghost doesn't take payment fees.",
    icon: BanknotesIcon,
  },
  {
    id: 2,
    name: 'Multi-channel publishing',
    description:
      'Write your content in the editor and publish to both the web and your email newsletter with a single click. Ghost editing tools provide advanced workflows without the clumsy toolbars.',
    icon: RectangleGroupIcon,
  },
  {
    id: 3,
    name: 'Native analytics',
    description:
      "Get instant insight on engagement analytics for your audience straight from the dashboard. Identify what's working and discover your biggest fans.",
    icon: ArrowTrendingUpIcon,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: EnvelopeIcon,
  },
]

const timeline = [
  {
    id: 1,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]

export function GhostIntro() {
  return (
    <div className="overflow-hidden bg-gray-900 py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-slate-700"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-sm font-bold uppercase text-lime-400">
            Publish like a pro
          </h2>
          <p className="my-6 max-w-3xl text-3xl font-bold leading-normal tracking-tight text-white sm:text-4xl">
            Own your platform with an expertly crafted Ghost website.
          </p>
          <p className="my-6 max-w-3xl text-lg text-slate-200">
            Ghost is an all-in-one platform to run a media business, collect
            subscribers, send newsletters, publish premium content, and earn
            recurring revenue. It's the best way to turn your audience into a
            business and we know it inside and out.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold leading-normal tracking-tight text-white sm:text-3xl">
              Why do we love Ghost?
            </h3>
            <p className="mt-3 text-lg text-slate-200">
              Ghost comes with all the tools you need to launch and scale an
              online media business. It's built on a modern tech stack and
              completely open source, giving you full ownership over your
              content and audience with the best tech under the hood.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-white">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-slate-200">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>

            <div class="mt-10 text-lg">
              <ActionLink href="https://ghost.org" target="_blank" color="lime">
                Learn more on ghost.org
              </ActionLink>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-slate-700"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <Image
              className="relative mx-auto rounded-xl shadow-lg"
              width={490}
              src={screenshotGhostPublish}
            />
          </div>
        </div>

        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-slate-700"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold leading-normal tracking-tight text-white sm:text-3xl">
                We know the platform,<span class="hidden lg:block"></span>{' '}
                inside and out.
              </h3>
              <p className="mt-3 text-lg text-slate-200">
                Anyone can launch a publication on Ghost with a few clicks, but
                our expertise will save you time and set you apart so you can
                focus on what you do best, <em>creating</em>. Whether it's
                designing custom themes from the ground up, deploying
                high-traffic infrastructure, or building deep customizations,
                we've done it all.
              </p>

              <div class="mt-10 text-lg">
                <ActionLink href="#quillette" color="lime">
                  Read our case study on <em>Quillette</em>
                </ActionLink>
              </div>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-slate-700"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <div class="relative mx-auto max-w-lg">
                <Image src={screenshotGhostInstall} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
