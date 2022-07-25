import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { composeProviders } from '../utils'
import { CartProvider, ModalProvider } from '../context'

const Providers = composeProviders(
  CartProvider,
  ModalProvider,
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
