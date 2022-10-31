import { Dots } from './Dots'
import screenshotGhostDashboard from '@/images/screenshots/ghost-dashboard-night.png'
import Image from 'next/future/image'
import { Container } from './Container'

export function ProductHero() {
  return (
    <div className="bg-white">
      <Dots>
        <Container className="pt-12 pb-16 text-left lg:text-center sm:pb-24">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:max-w-3xl md:text-6xl lg:mx-auto">
            <span className="block">Turn your audience</span>
            <span className="block text-lime-500">into a business</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-gray-500 md:mt-5 md:max-w-3xl md:text-xl">
            We help creators build and scale their content on Ghost, an open-source media platform for the
            modern era.
          </p>
        </Container>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="w-full flex-1 bg-lime-400" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <Image
              className="relative w-full rounded-lg shadow-lg"
              src={screenshotGhostDashboard}
              alt="App screenshot"
            />
          </div>
        </div>
      </Dots>
      <div className="bg-lime-400">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-base font-semibold text-slate-900 lg:text-xl">
            Ghost is trusted by thousands of new creators and global publications alike.
          </h2>
        </div>
      </div>
    </div>
  )
}