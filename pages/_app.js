import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Head from 'next/head'

import '../styles/index.css'
import '../styles/tailwind.css'
import '../styles/coffee-cup.css'
import '../styles/nav-burger.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Teman Gawe Coffee</title>
        <link rel="icon" href="/public/favicon.ico" key="favico" />
        <meta
          name="description" 
          content="Teman Gawe is a coffee establishment founded in Yogyakarta, Indonesia. 
          We provide high quality coffee at competitive prices, because everyone deserves
          a great coffee."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0JB8BK6XRK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0JB8BK6XRK');
            `
          }}
        />          
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
