import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton, useAccount } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

export default function WhitePaper() {
  
    return (
        <div className={`${styles.alignCenter} ${styles.textBox}`}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Tektur&display=swap');
            </style>
            <h1 className={`${styles.whitepaperText} ${styles.whitepaperHeading}`}> Whitepaper: </h1>
            <div>
                <p className={styles.whitepaperText}> ALPHpaca's is so much more than just NFTs and tokens. 
                <br/> <br/> Here at ALPHpaca headquarters we believe in an experimental method of development. <br/> <br/> 
                We aim to be rapidly evolving our potential tools and if we decide to Dapps. </p>
            </div>
        </div>
    )
}