import { Dots } from './Dots'
import screenshotCode from '@/images/screenshots/code.png'
import Image from 'next/future/image'
import { Container } from './Container'

import logoVexus from '@/images/logos/vexus.png'
import logoVirginOrbit from '@/images/logos/virgin-orbit.png'
import logoMXSR from '@/images/logos/mxsr.png'
import logoQuillette from '@/images/logos/quillette.png'
import logoPlayersOnly from '@/images/logos/players-only.png'

export function CodeHero() {
  return (
    <div className="bg-white">
      <Dots>
        <Container className="pt-12 pb-16 text-left sm:pb-24 lg:text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:max-w-3xl md:text-6xl lg:mx-auto">
            Design and development services to elevate your online presence
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-gray-500 md:mt-5 md:max-w-3xl md:text-xl">
            From eye catching landing pages to interactive branded websites, we
            have the expertise to push digital boundaries for businesses of all
            sizes.
          </p>
        </Container>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="w-full flex-1 bg-orange-400" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <Image
              className="relative w-full rounded-lg shadow-lg"
              src={screenshotCode}
              alt="App screenshot"
            />
          </div>
        </div>
      </Dots>
      <div className="bg-orange-400">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-base font-semibold text-gray-900">
            We work with businesses and brands of all sizes
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                height={36}
                src={logoVexus}
                alt="Vexus"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                height={36}
                src={logoVirginOrbit}
                alt="Virgin Orbit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                height={36}
                src={logoMXSR}
                alt="MXSR"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <Image
                height={36}
                src={logoQuillette}
                alt="Quillette"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
