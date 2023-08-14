import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton, useAccount } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

import '@alephium/web3'

import NavBar from '@/components/NavBar'

// Notes / Storage
// {!!account && <TokenDapp config={tokenFaucetConfig} />}

//todo Navigation Bar
//todo CSS and Formatting

export default function Home() {
  const { account } = useAccount()

  return (
      <div className={styles.pagecolor}>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Tektur&display=swap');
        </style>
        <div>
          <NavBar></NavBar>
        </div>
      </div>
  )
}
