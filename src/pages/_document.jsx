import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-black antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <meta property="og:image" name="og:image" content="/og-image.png" />

        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
      </Head>
      <body className="flex h-full flex-col text-white bg-black selection:bg-purple-400 selection:text-purple-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
