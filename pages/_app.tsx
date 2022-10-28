import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="px-4 min-h-screen md:container md:mx-auto ">
    <Component {...pageProps} />
  </div>
}

export default MyApp
