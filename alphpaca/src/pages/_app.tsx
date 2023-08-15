import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AlephiumWalletProvider } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlephiumWalletProvider
      useTheme="midnight"
      network={tokenFaucetConfig.network}
      addressGroup={tokenFaucetConfig.groupIndex}
    >
      <Component {...pageProps} />
    </AlephiumWalletProvider>
  )
}
