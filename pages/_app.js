import Head from 'next/head'
import NProgress from 'next-nprogress-emotion'

import '../styles/globals.css'
import CountProvider from "../context/search"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Suno Movies</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Suno Movies"
        />
        <meta
          name="description"
          content="Suno Movies é um site para você encontrar diversos filmes interessantes!"
        />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://suno-movies-livid.vercel.app/"
        />
        <meta
          property="og:title"
          content="Suno Movies"
        />
        <meta
          property="og:description"
          content="Suno Movies é um site para você encontrar diversos filmes interessantes!"
        />
        <meta
          property="og:image" content="https://suno-movies-livid.vercel.app/tag.png"
        />

        {/* <!-- Twitter --> */}
        <meta
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:url"
          content="https://suno-movies-livid.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Suno Movies"
        />
        <meta
          property="twitter:description"
          content="Suno Movies é um site para você encontrar diversos filmes interessantes!"
        />
        <meta
          property="twitter:image"
          content="https://suno-movies-livid.vercel.app/tag.png" />
        <meta
          name='theme-color'
          content='#1B1B1F'
        />
        <link rel='apple-touch-icon' href='/logo192.png'></link>
      </Head>
      <CountProvider>
        <NProgress
          color="#fff"
          options={{ trickleSpeed: 50 }}
          showAfterMs={500}
          spinner
        />
        <Component {...pageProps} />
      </CountProvider>
    </>
  )
}

export default MyApp