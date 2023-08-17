import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
//import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton } from '@alephium/web3-react'
import { TokenFaucetConfig } from '@/services/utils'

import Router from './router'
import Link from 'next/link'

export default function Tools() {
  
    return (
        <div className={styles.alignCenter}>
            <div className={styles.NFTheaderElement}>
                <button className={styles.button}> <Link href='/' className={styles.noDeco} style={{color: 'white'}}>  ALPHpaca HUB </Link> </button>
            </div>
            <h1>
                $PACA Faucet
            </h1>
            <div className={styles.NFTheaderElement}>
                <button className={styles.button}> <Link href='/faucet' className={styles.noDeco} style={{color: 'white'}}>  $PACA Faucet </Link> </button>
            </div>
        </div>
    )
}