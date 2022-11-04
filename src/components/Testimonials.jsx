import Image from 'next/future/image'

import { Container } from '@/components/Container'
import avatarClaireLehmann from '@/images/avatars/claire-lehmann.png'
import avatarKrisChase from '@/images/avatars/kris-chase.png'
import avatarCoreyMangold from '@/images/avatars/corey-mangold.png'
import avatarJeremySifuentes from '@/images/avatars/jeremy-sifuentes.png'
import { SamRapaport } from './SamRapaport'

const testimonials = [
  [
    {
      content:
        "Sam's technical acumen and professional manner has been indispensable to our company. Sam responds to requests rapidly and delivers solutions with careful precision and attention to detail. Having a holistic attitude towards business, Sam has ensured that our company has greatly improved technical infrastructure while at the same time delivering extensive cost savings. His services are highly recommended.",
      author: {
        name: 'Claire Lehmann',
        role: 'CEO, Quillette',
        image: avatarClaireLehmann,
      },
    },
  ],
  [
    {
      content:
        "I first met Sam in 2015 when we hired him at the creative agency I owned at the time. I knew it was only a matter of time before he would start his own thing. His work kicked ass and won us a ton of awards between 2015 and 2018. I've gone on to start several businesses since and use him and now RDD any time I need a website or custom software. ",
      author: {
        name: 'Corey Mangold',
        role: 'Entrepreneur',
        image: avatarCoreyMangold,
      },
    },
  ],
  [
    {
      content:
        "Rockstar developers with an impressive industry background, these guys know what they're doing.",
      author: {
        name: 'Kris Chase',
        role: 'VP of Technology at Envoy',
        image: avatarKrisChase,
      },
    },
    {
      content:
        "I went to RDD with an idea for my real estate website and they brought it to life. They made it look flawless and from that I've acquired numerous clients. If you're looking for a website to be professionally made, RDD is the choice!",
      author: {
        name: 'Jeremy S',
        role: 'Realtor',
        image: avatarJeremySifuentes,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <>
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="bg-black py-16 sm:py-24"
      >
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="text-sm font-bold uppercase text-emerald-400">
              Testimonials
            </h2>
            <p className="my-6 text-3xl font-bold leading-normal tracking-tight text-white lg:text-4xl">
              Building lasting partnerships
            </p>
            <p className="mx-auto my-6 max-w-3xl text-lg text-zinc-200">
              As a small team of creators and entrepreneurs, we care deeply
              about every project and aim to build ongoing, long-term success
              with our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
          >
            {testimonials.map((column, columnIndex) => (
              <li key={columnIndex}>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  {column.map((testimonial, testimonialIndex) => (
                    <li key={testimonialIndex}>
                      <figure className="relative rounded-2xl bg-zinc-900 p-6 outline-1 outline-zinc-600">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-zinc-200">
                            {testimonial.content}
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-zinc-600 pt-6">
                          <div>
                            <div className="font-display text-base text-zinc-200">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-zinc-500">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-zinc-50">
                            <Image
                              className="h-14 w-14 object-cover grayscale"
                              src={testimonial.author.image}
                              alt=""
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <SamRapaport></SamRapaport>
    </>
  )
}
