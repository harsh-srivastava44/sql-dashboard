import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="h-100 px-4 md:mx-auto aspect-ratio: auto;">
    <Component {...pageProps} />
  </div>
}

export default MyApp
