import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { AlephiumConnectButton } from '@alephium/web3-react'
import { TokenFaucetConfig } from '@/services/utils'
import { TokenDapp } from '@/components/PacaFaucet'

import Router from './router'
import Link from 'next/link'

export default function Tools() {
  
    return (
        <div className={styles.alignCenter}>
            <div className={styles.NFTheaderElement}>
                <button className={styles.button}> <Link href='/tools' className={styles.noDeco} style={{color: 'white'}}>  Back to Tools </Link> </button>
            </div>
            <AlephiumConnectButton></AlephiumConnectButton>
            <TokenDapp config={TokenFaucetConfig}></TokenDapp>
        </div>
    )
}