import Head from 'next/head';
import '../scss/styles.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="Xvb4gwANkjawbswtWrAYq5eQyAKD3LYhblsMe6_lXec" />
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
    
  )
}