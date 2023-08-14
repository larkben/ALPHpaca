import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton, useAccount } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

import Router from './router'

export default function Tools() {
  
    return (
        <div className={styles.alignCenter}>
            <div className={styles.NFTheaderElement}>
                <button className={styles.button}> <a href='/' className={styles.noDeco} style={{color: 'white'}}>  ALPHpaca HUB </a> </button>
            </div>
            <p style={{color: 'white'}}> Information will be posted here soon, please refer to Whitepaper. </p>
        </div>
    )
}