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
            <div className={styles.NFTheaderElement} style={{paddingBottom: 25}}>
                <button className={styles.button}> <Link href='/' className={styles.noDeco} style={{color: 'white'}}>  ALPHpaca HUB </Link> </button>
            </div>
            <div className={styles.showBorder} style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 10, backgroundColor: 'darkorange'}}>
                <h1 style={{color: 'black'}}>
                    Token Builder on Alephium
                </h1>
                <p style={{color: 'black'}}> <i>Here you can build your own token on the Alephium blockchain.</i></p>
                <div className={styles.NFTheaderElement}>
                    <button className={styles.button}> <Link href='/token_create' className={styles.noDeco} style={{color: 'white'}}>  Token Builder </Link> </button>
                </div>
            </div>
        </div>
    )
}