import Head from 'next/head'

import '../styles/globals.css'

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
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp