import React, { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Router from './router'

import { AlephiumConnectButton, AlephiumWalletProvider } from '@alephium/web3-react'
import { TokenFaucetConfig, TokenCreate, TokenTemplate } from '@/services/utils'
import { TokenAutomationCreate } from '@/components/TokenCreation'
import { NodeProvider, EventSubscribeOptions } from '@alephium/web3'
import { CreateToken, CreateTokenInstance, CreateTokenTypes } from 'artifacts/ts'

import Link from 'next/link'
import tokenCreate from 'scripts/2_token_create'
import WhitePaper from '../components/whitepaper'

// Testnet: https://wallet-v20.testnet.alephium.org

// Mainnet: https://node-alephium.ono.re/

export default function AutoTokenMake() {
  
    return (
        <div className={styles.alignCenter}>
            <div className={styles.NFTheaderElement}>
                <button className={styles.buttonDapp}> <Link href='/' className={styles.link}> Back to Tools </Link> </button>
            </div>
            <br/>
            <div style={{backgroundColor: 'darkorange', padding: 20}} className={styles.showBorder}>
                <AlephiumConnectButton></AlephiumConnectButton>
                <h2 style={{color: 'black', textAlign: 'center'}}> Please connect wallet before creating token! </h2>
                {/*<TokenDapp config={TokenFaucetConfig}></TokenDapp> This is the $PACA faucet; actively not in use at the moment*/}
                {/*<DevBoard config={TokenFaucetConfig}></DevBoard> This is the dev dashboard*/}
                <TokenAutomationCreate config={TokenFaucetConfig}></TokenAutomationCreate>
            </div>
        </div>
    )
}