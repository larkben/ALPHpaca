import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AlephiumConnectProvider } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlephiumConnectProvider
      useTheme="midnight"
      network={tokenFaucetConfig.network}
      addressGroup={tokenFaucetConfig.groupIndex}
    >
      <Component {...pageProps} />
    </AlephiumConnectProvider>
  )
}
