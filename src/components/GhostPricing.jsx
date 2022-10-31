import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Startup',
    href: '/contact',
    priceMonthly: 350,
    description:
      'Everything you need to launch your platform and build a core audience.',
    features: [
      'Site setup',
      'Theme library',
      'Hosting & maintenance',
      '30 minute monthly consulting call',
    ],
  },
  {
    name: 'Growth',
    href: '/contact',
    priceSetup: 3900,
    priceMonthly: 1500,
    description:
      "You've proven your niche and built steady revenue. Take it to the next level.",
    features: [
      'Site setup',
      'Custom theme development',
      'High-traffic hosting & maintenance',
      '1 hour monthly consulting call',
      'Personalized monthly consulting memo',
    ],
  },
]

export function GhostPricing() {
  return (
    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-2 lg:max-w-3xl">
            <h2 className="text-sm font-bold text-lime-400 uppercase">
              Pricing
            </h2>
            <p className="my-6 text-3xl font-bold leading-normal tracking-tight text-white sm:text-4xl">
              Transparent and upfront pricing
            </p>
            <p className="mx-auto max-w-2xl my-6 text-lg text-slate-200">
              Don't get screwed over by hourly rates. We've packaged up our services into concrete pricing for tier 1 and tier 2 creators. We can also work with larger publishers on custom projects.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-gray-50 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex rounded-full bg-lime-100 px-4 py-1 text-base font-semibold text-lime-800"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center text-6xl font-bold tracking-tight">
                      ${tier.priceMonthly}
                      <span className="ml-3">
                        <span className="block text-2xl font-medium tracking-normal text-gray-500">
                          /month
                        </span>

                        {tier.priceSetup && <span className="block text-sm font-medium tracking-normal text-gray-500">${tier.priceSetup} setup fee</span>}
                      </span>
                    </div>

                    <p className="mt-5 text-lg text-gray-500">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center rounded-md border border-transparent bg-slate-800 px-5 py-3 text-base font-medium text-white hover:bg-slate-800"
                        aria-describedby="tier-standard"
                      >
                        Schedule a Call
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:mt-5 lg:px-8">
          <div className="mx-auto max-w-md lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex rounded-full bg-white px-4 py-1 text-base font-semibold text-gray-800">
                    Custom
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  Looking for agency-level support? We offer a select amount of dedicated design &amp; development
                  retainers for clients with bigger needs at a fraction of agency costs.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="/contact"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  Ask About Retainers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
