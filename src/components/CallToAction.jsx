import { ActionLink } from './ActionLink'
import { Button } from './Button'
import { Container } from './Container'

export function CallToAction() {
  return (
    <div className="pt-12 bg-black">
      <Container>
        <div className="md:flex md:items-center md:justify-between">
          <div className="max-w-sm">
            <h2 className="my-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
              <span className="block">Ready to launch?</span>
              <span className="block text-emerald-400">
                Let's get you set up
              </span>
            </h2>

            <p className="my-6 text-xl max-w-xs text-zinc-200">
              Schedule a phone call or reach out via email and we'll get you
              what you need to make an informed decision.
            </p>

            <Button href="/contact">Get Started</Button>
          </div>

          <div className="mt-12 flex items-start justify-center md:w-1/2 md:mt-0">
            <div className="w-1/2 border-l border-zinc-700 py-10 px-4">
              <p className="-ml-4 mb-2 font-bold text-white pl-4 border-l border-emerald-400">For Creators</p>
              <p className="mb-6 text-zinc-200">Turn your audience into a content-driven business.</p>
              <ActionLink href="/creators" color="emerald">Learn More</ActionLink>
            </div>
            <div className="w-1/2 border-l border-zinc-700 py-10 pl-4">
              <p className="-ml-4 mb-2 font-bold text-white pl-4 border-l border-purple-400">For Businesses</p>
              <p className="mb-6 text-zinc-200">Stand out online with an elevated brand website.</p>
              <ActionLink href="/businesses" color="purple">Learn More</ActionLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
