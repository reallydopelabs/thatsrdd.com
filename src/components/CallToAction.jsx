import { Button } from './Button'

export function CallToAction() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="my-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Ready to launch?</span>
            <span className="block text-indigo-600">Let's get you set up</span>
          </h2>

          <p className="my-6 max-w-xs text-gray-500">
            Schedule a phone call or reach out via email and we'll get you what
            you need to make an informed decision.
          </p>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <Button
            href="/contact"
            size="large"
            className="hover:shadow hover:shadow-slate-600/50"
          >
            Let's Go
          </Button>
        </div>
      </div>
    </div>
  )
}
