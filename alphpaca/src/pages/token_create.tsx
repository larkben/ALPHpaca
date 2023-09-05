import React, { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { AlephiumConnectButton } from '@alephium/web3-react'
import { TokenFaucetConfig, TokenCreate, TokenTemplate } from '@/services/utils'
import { TokenDapp } from '@/components/PacaFaucet'
import { DevBoard } from '@/components/DevDashboard'
import { TokenAutomationCreate } from '@/components/TokenCreation'
import { NodeProvider, EventSubscribeOptions } from '@alephium/web3'
import { CreateToken, CreateTokenInstance, CreateTokenTypes } from 'artifacts/ts'

import Router from './router'
import Link from 'next/link'
import tokenCreate from 'scripts/2_token_create'

// Testnet: https://wallet-v20.testnet.alephium.org

// Mainnet: https://node-alephium.ono.re/

const nodeProvider = new NodeProvider('https://node-alephium.ono.re/')

async function getChainInfo() {
    const result = await nodeProvider.blockflow.getBlockflowChainInfo({
        fromGroup: 0,
        toGroup: 0
      })
      return result
}

//const contractAddress = '29NQz5dKwACqHw5beJ25v6eZQpxAC7rPYqK4xpFYc7CqN' // ContractAddress

/*
async function getTokenEvents() {
    const result = await nodeProvider.events.getEventsContractContractaddress(
        contractAddress, {start: 0, limit: 100}
    )
    return result
}
*/


export default function AutoTokenMake() {

    const [blockHeight, setBlockHeight] = useState<number>()

    getChainInfo()
    .then(data => {
        if (data) {
            const blockHeight = data.currentHeight
            console.log('Current Height:', blockHeight)
            setBlockHeight(blockHeight)
        }
        else {
            console.log('No Data Available')
        }
    })

    /*
    getTokenEvents()
    .then(data => {
        if (data) {
            let zero = 0
            for (let i = 0; i < data.events.length; i++) {
                zero++
            }
            console.log("There are a total of: ", zero , " events.")
        }
        else {
            console.log("No Data Available")
        }
    })
    */
  
    return (
        <div className={styles.alignCenter}>
            <div className={styles.NFTheaderElement}>
                <button className={styles.button}> <Link href='/tools' className={styles.noDeco} style={{color: 'white'}}>  Back to Tools </Link> </button>
            </div>
            <br/>
            <p style={{color: 'orange'}}> The current block height on group 0 is: {blockHeight} </p>
            <AlephiumConnectButton></AlephiumConnectButton>
            {/*<TokenDapp config={TokenFaucetConfig}></TokenDapp> This is the $PACA faucet; actively not in use at the moment*/}
            {/*<DevBoard config={TokenFaucetConfig}></DevBoard> This is the dev dashboard*/}
            <TokenAutomationCreate config={TokenFaucetConfig}></TokenAutomationCreate>
        </div>
    )
}