import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <div className="h-100 px-4 md:mx-auto aspect-ratio: auto;">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
