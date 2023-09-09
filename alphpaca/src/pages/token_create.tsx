import React, { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { AlephiumConnectButton, AlephiumWalletProvider } from '@alephium/web3-react'
import { TokenFaucetConfig, TokenCreate, TokenTemplate } from '@/services/utils'
import { TokenDapp } from '@/components/PacaFaucet'
import { DevBoard } from '@/components/DevDashboard'
import { TokenAutomationCreate } from '@/components/TokenCreation'
import { NodeProvider, EventSubscribeOptions } from '@alephium/web3'
import { CreateToken, CreateTokenInstance, CreateTokenTypes } from 'artifacts/ts'

import Router from './router'
import Link from 'next/link'
import tokenCreate from 'scripts/2_token_create'
import WhitePaper from './whitepaper'

// Testnet: https://wallet-v20.testnet.alephium.org

// Mainnet: https://node-alephium.ono.re/

const nodeProvider = new NodeProvider('http://127.0.0.1:12973/') // LocalHost

const contractAddress = '22mZiGqqbrvFmVWjXbU6TXtS7DR9Yxix5BHSvEj2uzu9R' // ContractAddress

async function getTokenEvents() {
    const result = await nodeProvider.events.getEventsContractContractaddress(
        contractAddress, {start: 0, limit: 1}
    )
    console.log(result)
    return result
}

export default function AutoTokenMake() {

    getTokenEvents()
    .then(data => {
        if (data) {
            console.log(data)
        }
        else {
            console.log("No Data Available")
        }
    })
  
    return (
        <div className={styles.alignCenter}>
            <div className={styles.NFTheaderElement}>
                <button className={styles.button}> <Link href='/tools' className={styles.noDeco} style={{color: 'white'}}>  Back to Tools </Link> </button>
            </div>
            <br/>
            <div style={{backgroundColor: 'darkorange', padding: 20}} className={styles.showBorder}>
                <AlephiumConnectButton></AlephiumConnectButton>
                <h2 style={{color: 'black', textAlign: 'center'}}> Please connect wallet before creating token! </h2>
                {/*<TokenDapp config={TokenFaucetConfig}></TokenDapp> This is the $PACA faucet; actively not in use at the moment*/}
                {/*<DevBoard config={TokenFaucetConfig}></DevBoard> This is the dev dashboard*/}
                <TokenAutomationCreate config={TokenFaucetConfig}></TokenAutomationCreate>
            </div>
            <div>
                <h1 style={{color: 'white', textAlign: 'center'}}> Using the Token Creation Tool? </h1>
                <p style={{color: 'white', textAlign: 'center'}}> Decimals are the most complex component of this tool. <br/> When using decimals the number you enter is how many zeros you should to add to your supply. <br/> <br/>
                For Example: If you enter 4 Decimals and Supply of 1000 you will get a token with a supply of 1. If you want a supply of 1000 you should add 4 zeros. 10000000 is what the supply should be. <br/> <br/> 
                The Math: 6 Decimals 10000 Supply. Supply should be 10000(000000); do not enter parenthesis, they are meant to show the supply decimal logic. </p>
                <h1 style={{color: 'white', textAlign: 'center'}}> Redeeming ALPH Deposit? </h1>
                <p style={{color: 'white', textAlign: 'center'}}> We are currently scaling our DB and platform to accommodate this. </p>
            </div>
        </div>
    )
}