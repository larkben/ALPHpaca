import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
//import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'
import WhitePaper from './whitepaper'

import Router from './router'
import Link from 'next/link'

export default function Token() {
  
    return (
        <div className={styles.alignCenter}>
            <div className={styles.NFTheaderElement}>
                <button className={styles.button}> <Link href='/' className={styles.noDeco} style={{color: 'white'}}>  ALPHpaca HUB </Link> </button>
            </div>
            <p style={{color: 'white'}}> Information will be posted here soon, please refer to Whitepaper. </p>
        </div>
    )
}
  