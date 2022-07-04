import '../styles/globals.css'
import type { AppProps } from 'next/app'
import StateWrapper from '../components/StateWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateWrapper>
      <Component {...pageProps} />
    </StateWrapper>
  )
}

export default MyApp
