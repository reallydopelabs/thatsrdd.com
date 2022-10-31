import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { Dots } from "@/components/Dots"
import Head from "next/head"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Schedule a call or email us to get started | Rapaport Development Group</title>
        <meta name="description" content="Schedule a call or email us to get started" />
      </Head>
      <main>
        <Dots>
          <Container className="pt-12 pb-16 lg:pt-32 lg:pb-32">
            <div>
              <h2 className="text-sm font-bold text-indigo-600 uppercase">Contact Us</h2>
                <p className="my-6 max-w-lg text-3xl font-bold leading-normal tracking-tight text-gray-900 lg:text-4xl">
                  Schedule a phone call or email us to get started
                </p>
                <p className="my-6 max-w-2xl text-lg text-gray-500">
                  Whether you're ready to get moving on a project right away or just want some more info, we're here to talk. Schedule a call online or email us at <strong>me@samrapaport.com</strong>.
                </p>

                <div class="mt-8">
                  <Button href="https://calendly.com/samrapaport" target="_blank" size="large">Book Phone Call</Button>
                </div>
            </div>
          </Container>
        </Dots>
      </main>
    </>
  )
}
