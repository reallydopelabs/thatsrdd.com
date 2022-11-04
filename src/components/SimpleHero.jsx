import { Dots } from './Dots'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/future/image'

import blurEmerald from '@/images/blur-emerald.png'
import blurPurple from '@/images/blur-purple.png'

export function SimpleHero() {
  return (
    <Container className="relative bg-black pt-12 pb-16 text-center lg:pt-32 lg:pb-32">
      <Image
          className="absolute z-0 top-0 right-0 opacity-60"
          src={blurEmerald}
          alt=""
          width={1000}
          height={1000}
          unoptimized
          priority
        />
        <Image
          className="absolute z-0 bottom-0 left-0 opacity-60"
          src={blurPurple}
          alt=""
          width={1000}
          height={1000}
          unoptimized
          priority
        />

      <div className="relative z-10 text-left sm:text-center">
        <h1 class="font-bold text-sm uppercase bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#c084fc_14.06%,#34d399_51.02%,#9333ea_79.09%)] bg-clip-text text-transparent">Really Dope Digital</h1>
        <p className="mx-auto my-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:max-w-3xl md:text-6xl">
          Crafting websites<span className="block sm:hidden"></span> for the
          modern internet
        </p>
        <p className="mx-auto mt-6 max-w-md text-lg text-white md:mt-5 md:max-w-3xl md:text-xl">
          Creators and businesses work with us to build elevated digital
          experiences for their brands. Whether you're a new creator looking to
          build an audience or a business in need of a beautiful website, RDD
          has you covered.
        </p>
        <div className="mx-auto mt-6 max-w-md md:mt-8">
          <Button
            href="/creators"
            className="mr-2"
            variant="outline"
            color="emerald"
          >
            For Creators
          </Button>
          <Button
            href="/businesses"
            className="ml-2"
            variant="outline"
            color="purple"
          >
            For Businesses
          </Button>
        </div>
      </div>
    </Container>
  )
}
