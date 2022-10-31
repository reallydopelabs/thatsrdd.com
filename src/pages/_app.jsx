import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (<>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-HPKCKKH20R`}
    />

    <Script strategy="lazyOnload">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-HPKCKKH20R');
      `}
    </Script>

    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}
