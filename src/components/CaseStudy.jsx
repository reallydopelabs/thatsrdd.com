import Image from "next/future/image";

import avatarClaireLehmann from '@/images/avatars/claire-lehmann.png'

export function CaseStudy() {
  return (
    <div id="quillette" className="overflow-hidden bg-zinc-900 py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <h2 className="text-sm font-bold uppercase text-emerald-400">
            Case Study
          </h2>
          <p className="my-6 max-w-2xl text-3xl font-bold leading-normal tracking-tight text-white sm:text-4xl">
            How we doubled Quillette's MRR after migrating to Ghost
          </p>
        </div>
        <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
          <p className="text-lg text-zinc-200">
            Quillette is an Australian based online magazine that focuses on
            long-form analysis and cultural commentary. Founded by Claire
            Lehmann in 2015, it has grown into a globally recognized publication
            with a strong list of contributors.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-emerald mx-auto text-zinc-200 lg:max-w-none">
              <p>
                In 2021, Claire was becoming frustrated with the scalability
                issues that Quillette was facing on WordPress. The clumsy
                editor, outdated plugins, and lack of analytics were beginning
                to stifle growth.
              </p>
              <p>
                Running primarily off of donations, Claire saw an opportunity to
                provide additional value to Quillette's most loyal readers while
                increasing revenue through paid subscriptions. She had already
                heard of Ghost's modern editing tools and integrated membership
                system and came to us for a migration project with a few key
                goals.
              </p>
              <ul role="list">
                <li>Relaunch the Quillette website on Ghost</li>
                <li>
                  Migrate years and gigabytes of articles, images, and authors
                  from WordPress into the new database with zero loss along with
                  30k+ subscriptions from Constant Contact
                </li>
                <li>
                  Build a cloud hosting infrastructure that can handle
                  high-traffic and scale with future growth
                </li>
                <li>
                  Begin collecting money from premium memberships immediately
                </li>
              </ul>
              <p>
                Sparing you the technical details, this was quite a complex
                project! In the end, we successfully relaunched Quillette on
                Ghost and have built a close partnership to provide continued
                growth.
              </p>
              <p>
                In under a year Quillette burst past their plataeu, more than
                doubling both free and premium subscribers. Most of that growth
                has been recent and we expect to accelarate even further thanks
                to improvements to the platform and our continued collaboration.
              </p>
              <h3 class="text-white">Building lasting partnerships</h3>
              <p>
                We genuinely care about our clients' success. It's why we focus
                on building lasting relationships rather than treating your
                business like a completed project. Whether you're new to online
                publishing or looking to scale an existing platform to the next
                level, we work with you on an ongoing basis to help drive
                continued success.
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
              {/*  */}
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                    className="text-zinc-700"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <blockquote className="relative rounded-lg bg-black shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 95"
                  className="h-12 fill-white"
                >
                  <g>
                    <path d="M0,50.12c6.06-.14,11.45,1.94,16.46,5.14,5.96,3.8,10.6,8.95,14.45,14.84,.76,1.16,1.6,1.7,2.94,1.58,4.01-.36,8.05-.58,12.04-1.07,4.5-.55,8.96-1.34,13.44-2.03,.23-.03,.45-.11,.94-.23-18.03-2.53-28.15-12.43-29.57-30.92,.58,.09,1.17,.09,1.7,.27,11.67,3.95,20.43,11.49,26.59,22.11,1.32,2.28,2.32,4.74,3.41,7.15,.56,1.25,.63,1.36,2.12,1.24,3.71-.32,7.4-.13,11.05,.58,2.48,.48,4.63,1.68,6.61,3.2,1.86,1.42,3.66,2.92,5.49,4.36,3.82,3.01,8.11,4.56,13.01,4.22,3.77-.26,6.93-1.79,9.56-4.58-.1,.22-.17,.44-.29,.65-4.47,8.03-13.96,10.82-22.09,6.35-2.03-1.11-3.84-2.65-5.7-4.05-1.63-1.22-3.13-2.63-4.8-3.78-6.12-4.22-12.36-3.91-18.64-.35-.25,.14-.48,.3-.72,.45-.05-.07-.1-.13-.16-.2,1.12-.97,2.18-2.02,3.37-2.9,1.2-.88,2.52-1.58,4.03-2.5-2.03,.23-3.83,.39-5.61,.65-2.7,.41-5.39,.91-8.09,1.33-1.23,.19-1.92,.8-2.5,1.96-5.17,10.26-12.53,18.03-24.07,20.88-2.85,.7-5.75,.58-8.66,.43-1.15-.06-2.3,0-3.62,0,1.73-5.22,4.7-9.6,8.75-13.25,4.02-3.62,8.64-6.21,13.71-8.08-.24,0-.47,0-.71,0-7.3,.27-14.48-.29-21.25-3.33C6.18,67.07,1.68,61.82,.3,54.09c-.09-.52-.2-1.04-.3-1.56,0-.8,0-1.61,0-2.41Zm59.08,13.17c.78,.96,1.56,1.93,2.34,2.89-2.77-6.17-6.45-11.7-11.18-16.5-4.73-4.8-13.74-10.65-16.57-10.73,4.76,2.25,8.8,5.39,12.54,8.95,4.05,3.85,7.72,8.05,11,12.59-.27-.24-.57-.44-.8-.72-4.26-5.27-8.87-10.2-14.05-14.54-2.29-1.92-4.83-3.54-7.28-5.27-.4-.28-.91-.4-1.42-.62,.01,.19,0,.24,.02,.26,.23,.19,.46,.38,.7,.57,9.69,7.92,19.14,16.07,26.11,26.69,.11,.16,.39,.21,.59,.31,0-.21,.06-.46-.04-.61-.64-1.1-1.3-2.18-1.96-3.26Zm-24.39-21.91c-.57-.63-1.13-1.25-1.7-1.88,1.8,6.56,20.46,25.96,26.11,27.37-.27-.25-.49-.45-.7-.66-5.97-5.98-11.99-11.91-17.89-17.96-2.09-2.14-3.89-4.57-5.82-6.87,.26,.19,.55,.34,.77,.56,3.14,3.33,6.23,6.71,9.42,10,4.63,4.77,9.33,9.48,14,14.2,.32,.33,.72,.58,1.08,.87,.08-.08,.15-.16,.23-.24-1.24-1.6-2.42-3.25-3.72-4.8-6.26-7.5-13.53-13.95-20.91-20.28-.22-.19-.57-.22-.86-.32ZM1.52,52.43c3.29,7.43,8.7,12.77,15.95,16.28,3.43,1.66,6.99,2.86,10.82,3.19-9.71-5.43-19.33-10.92-26.77-19.47Zm56.49,14.74c-5.4-2.53-10.46-5.58-14.97-9.5-4.53-3.94-8.18-8.57-10.76-14.04,1.01,5.54,3.5,10.32,7.33,14.37,5.01,5.3,11.29,8.09,18.39,9.17Zm-29.93,5.87c.04-.12,.08-.24,.12-.37-12.12-2.46-21.79-8.32-27.37-19.88-.02,.44,.01,.84,.07,1.23,.95,6.41,4.49,10.98,9.97,14.15,3.95,2.29,8.25,3.56,12.72,4.28,1.49,.24,3,.39,4.5,.58Zm20.6,.09c-7.81,10.22-17.42,17.86-29.99,21.34,5.03-.05,9.69-1.4,14.08-3.75,7.37-3.95,12.44-10.04,15.91-17.59ZM3.26,52.24c8.89,6.45,17.79,12.9,26.68,19.35,.06-.09,.13-.18,.19-.27-7.1-8.96-16.03-15.36-26.87-19.08Zm12.24,40.36c4.45-3.53,9.05-7.33,13.8-10.91,4.76-3.58,9.91-6.57,15.29-9.14-9.02,1.05-26.8,13.49-29.09,20.05Zm3.09-.61c5.3-.32,25.05-13.56,27.71-18.3-8.98,5.93-18.37,12.13-27.71,18.3Zm23.78-19.85c-6.09,1.11-11.79,3.2-16.9,6.77-5.18,3.62-11.08,11.13-11.2,14.37,3.22-5.29,7.31-9.58,12.22-13.1,4.88-3.5,10.26-6.02,15.88-8.04Zm14.18-6.22c-10.77-6.32-18.42-15.59-24.57-26.28,.12,7.57,15.44,23.89,24.57,26.28ZM2.41,50.77c-.03,.1-.06,.21-.1,.31,11.56,4.04,21.44,10.47,28.83,20.48,.03-.29-.02-.47-.13-.62-3.11-4.38-6.53-8.48-10.62-11.98-4.08-3.5-8.54-6.3-13.84-7.53-1.36-.32-2.77-.45-4.15-.66Zm43.36,22.26c-.06-.09-.12-.19-.19-.28-9.99,4.65-18.73,11.2-27.15,18.24,.07,.1,.13,.2,.2,.3,9.05-6.08,18.09-12.17,27.14-18.25Zm-28.98,20.44c6.31-.69,11.89-3.21,17.05-6.77,4.85-3.35,12.07-10.49,13.26-13.17-4.24,4.68-8.81,8.7-13.92,12.11-5.09,3.39-10.56,5.99-16.39,7.84ZM2.12,52.08c7.38,8.06,16.57,13.63,25.9,18.99,.05-.07,.11-.15,.16-.22-8.69-6.26-17.37-12.51-26.06-18.77Z" />
                    <path d="M86.77,.57c7.62,.15,14.53,2.11,20.22,7.42,4.63,4.31,7.37,9.73,8.75,15.84,2.24,9.95,1.4,19.57-3.89,28.45-5.19,8.7-13.05,13.36-22.99,14.54-4.88,.58-9.73,.31-14.46-1.12-7.63-2.3-13.37-7.03-17.12-14.05-5.08-9.49-5.96-19.52-2.5-29.67,3.98-11.68,12.65-18.13,24.46-20.51,2.47-.5,5.02-.6,7.53-.89Zm20.38,37c0-4.54-.35-9.04-1.49-13.45-1.59-6.17-4.21-11.76-8.78-16.32-7.88-7.86-19.34-6.56-25.48-1.49-3.54,2.93-5.82,6.7-7.14,11.05-2.67,8.83-2.33,17.67,.31,26.44,1.98,6.56,5.22,12.39,10.52,16.88,4.61,3.91,9.95,5.5,15.91,4.69,6.6-.89,10.74-4.95,13.27-10.88,2.31-5.4,2.88-11.11,2.87-16.92Z" />
                    <path d="M290.35,42.65h-31.89c-.42,5.74,2.03,14.52,9.78,17.79,4.02,1.7,8.17,1.81,12.35,.82,4.28-1.02,7.47-3.55,9.63-7.43,.08,.05,.16,.09,.23,.14-.54,1.24-.99,2.52-1.63,3.7-3.48,6.39-10.77,10.09-18.03,9.46-10.63-.92-18.24-8.91-19.27-19.61-.61-6.28,.5-12.15,4.71-17.03,5.16-5.99,11.81-8.48,19.6-7.47,7,.91,12.41,6.52,13.88,14.11,.34,1.76,.41,3.56,.63,5.51Zm-31.92-1.49c4.47,0,8.86,.07,13.25-.03,2.12-.05,4.25-.31,6.34-.7,2.75-.52,4.93-1.94,5.66-4.86,.9-3.6,.08-6.81-2.72-9.31-3.55-3.18-7.7-3.49-12.09-2.22-7.72,2.23-10.36,10.59-10.44,17.13Z" />
                    <path d="M400,42.65h-31.89c-.42,5.63,1.95,14.49,9.78,17.8,4.02,1.7,8.17,1.81,12.36,.82,4.28-1.02,7.47-3.55,9.69-7.38-.5,2.22-1.49,4.18-2.85,5.97-4.75,6.28-13.05,8.9-21.03,6.44-8.34-2.57-13.03-8.49-14.62-16.97-.92-4.92-.51-9.76,1.59-14.36,4.31-9.44,15.47-14.23,24.77-11.39,6.65,2.04,10.17,7.03,11.58,13.65,.36,1.71,.4,3.5,.61,5.42Zm-32.04-1.42c4.15,0,8.11,.09,12.06-.03,2.55-.08,5.12-.33,7.64-.77,2.75-.48,4.94-1.93,5.67-4.84,.92-3.65,.05-6.86-2.78-9.39-4.73-4.22-12.89-3.7-17.53,1.15-3.67,3.84-4.66,8.72-5.06,13.88Z" />
                    <path d="M203.99,6.9c3.61-2.33,7.05-4.55,10.69-6.9V1.33c0,19.24,0,38.49,0,57.73,0,4.15,1.06,5.62,4.97,6.91,.09,.03,.17,.08,.36,.17h-17.96c.48-.16,.69-.24,.9-.3,3.11-.88,4.59-2.81,4.59-6.09,0-12.4,0-24.81,0-37.21,0-3.49,.02-6.97-.01-10.46,0-.83-.09-1.68-.29-2.48-.43-1.72-1.28-2.41-3.24-2.7Z" />
                    <path d="M245.2,66.16h-17.66s-.02-.07-.04-.1c.26-.09,.51-.18,.77-.25,2.63-.77,4.09-2.53,4.34-5.26,.04-.43,.05-.87,.05-1.31,0-15.52,0-31.04,0-46.56,0-.7-.04-1.41-.11-2.11-.24-2.22-1.13-3.23-3.36-3.73,3.52-2.27,6.95-4.49,10.58-6.83,0,.56,0,.94,0,1.32,0,19.04,0,38.08,0,57.12,0,4.8,.79,5.96,5.43,7.71Z" />
                    <path d="M338.95,25.9c0,1.75,0,3.35,0,4.95,.01,6.84-.01,13.68,.06,20.52,.02,1.8,.19,3.63,.54,5.39,1.1,5.42,5.79,7.75,10.88,5.51,2.33-1.03,3.92-2.83,5.16-5,.16-.29,.32-.58,.65-.81-.28,.81-.53,1.64-.86,2.44-2.66,6.38-8.33,9.28-15.01,7.71-3.94-.93-6.2-3.58-7.37-7.32-.96-3.07-1.18-6.25-1.18-9.44-.02-7.54,0-15.09-.01-22.63,0-.39,0-.79,0-1.32-1.01,0-1.94-.08-2.85,.02-1.06,.12-1.57-.43-2.04-1.39h4.83c.02-.45,.05-.81,.05-1.16,0-3.05-.01-6.1,.02-9.15,0-.36,.14-.83,.38-1.04,2.17-1.88,4.38-3.72,6.74-5.7V24.51h11.04c-.26,.99-.66,1.44-1.69,1.42-3.06-.07-6.13-.03-9.35-.03Z" />
                    <path d="M325.51,56.25c-.57,5.55-5.85,10.46-11.51,10.71-1.26,.06-2.54-.02-3.78-.25-3.64-.67-6.09-2.85-7.45-6.29-1.15-2.91-1.52-5.98-1.55-9.07-.07-8.05-.04-16.09-.05-24.14,0-.39,0-.79,0-1.32-1.01,0-1.94-.08-2.85,.02-1.06,.12-1.57-.43-2.03-1.4h4.88c0-.46,0-.81,0-1.17,0-3.02-.02-6.03,.02-9.05,0-.41,.18-.95,.47-1.2,2.06-1.8,4.18-3.55,6.28-5.31,.09-.08,.21-.13,.42-.25V24.49h10.99c-.24,1.04-.72,1.46-1.76,1.44-3.03-.07-6.06-.03-9.15-.03-.04,.27-.11,.48-.11,.7,.02,8.62,0,17.23,.08,25.85,.01,1.56,.26,3.14,.57,4.68,.86,4.28,3.68,6.37,8.58,5.76,3.47-.43,5.7-2.7,7.38-5.59,.18-.31,.35-.64,.57-1.05Z" />
                    <path d="M124.99,24.63h12.03c0,.44,0,.83,0,1.23,0,8.52-.02,17.04,.05,25.55,.02,2.06,.22,4.16,.64,6.18,.66,3.18,2.68,4.83,5.9,5.05,4.22,.29,7.89-1.3,11.34-3.56,.33-.22,.65-.46,.98-.69,.04,.08,.09,.16,.08,.17-3.98,4.18-8.57,7.36-14.36,8.35-1.45,.25-3.01,.23-4.47,.02-3.96-.59-6.21-3.15-6.85-7.77-.3-2.22-.41-4.47-.42-6.71-.05-7.01-.02-14.02-.02-21.03,0-3.8-1.1-5.38-4.88-6.78Z" />
                    <path d="M176.68,66.11c.4-.14,.58-.21,.77-.27,2.74-.82,4.24-2.73,4.29-5.6,.04-2.38,.01-4.76,.01-7.14,0-6.17,0-12.33,0-18.5,0-.63,0-1.28-.12-1.9-.36-2-1.12-2.75-3.25-3.19,3.51-2.26,6.91-4.44,10.52-6.77v1.19c0,11.9,0,23.8,0,35.7,0,1.4,.19,2.74,.94,3.95,.85,1.36,2.16,2.04,3.64,2.53h-16.8Z" />
                    <path d="M153.44,24.61h11.6v1.2c0,9.99,0,19.97,0,29.96,0,.3,0,.6,0,.9,0,2.74,.47,3.34,3.2,3.95-3.45,2.24-6.8,4.43-10.33,6.72v-1.35c0-11.36-.05-22.72,.03-34.08,.02-3.48-.74-6.25-4.49-7.3Z" />
                    <path d="M184.94,8.25c2.48,.03,4.5,2.07,4.51,4.57,0,2.48-2.14,4.63-4.6,4.62-2.44-.01-4.47-2.11-4.47-4.61,0-2.59,2.01-4.6,4.56-4.57Z" />
                  </g>
                </svg>
                <div className="relative mt-8 text-lg font-medium text-white">
                  <svg
                    className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-zinc-700"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Sam's technical acumen and professional manner has been indispensable to our company. Sam responds to requests rapidly and delivers solutions with careful precision and attention to detail. Having a holistic attitude towards business, Sam has ensured that our company has greatly improved technical infrastructure while at the same time delivering extensive cost savings. His services are highly recommended.
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center rounded-b-lg bg-zinc-700 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
                <span className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                  <Image
                    className="h-12 w-12 rounded-full bg-zinc-300 sm:h-20 sm:w-20"
                    src={avatarClaireLehmann}
                    alt="Claire Lehmann"
                  />
                </span>
                <span className="relative ml-4 font-semibold leading-6 text-zinc-300 sm:ml-24 sm:pl-1">
                  <span className="font-semibold text-white sm:inline">
                    Claire Lehmann
                  </span>{' '}
                  <span className="sm:inline">
                    CEO, <em>Quillette</em>
                  </span>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
