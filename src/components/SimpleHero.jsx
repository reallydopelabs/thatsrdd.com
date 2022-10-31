import { Dots } from './Dots'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function SimpleHero() {
  return (
    <Dots>
      <Container className="pt-12 pb-16 text-center lg:pt-32 lg:pb-32">
        <div className="text-left sm:text-center">
          <h1 className="mx-auto text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:max-w-3xl md:text-6xl">
            Crafting websites<span className="block sm:hidden"></span> for the
            modern internet
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-gray-500 md:mt-5 md:max-w-3xl md:text-xl">
            Creators and businesses work with us to build modern digital
            experiences for their brands. Whether you're a new creator looking
            to build an audience or a business in need of a beautiful website,
            we've got you covered.
          </p>
          <div className="mx-auto mt-6 max-w-md md:mt-8">
            <Button href="/creators" className="mr-2">
              For Creators
            </Button>
            <Button href="/businesses" className="ml-2" variant="outline">
              For Businesses
            </Button>
          </div>
        </div>
      </Container>
    </Dots>
  )
}
