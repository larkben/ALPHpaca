// Component Token Create
import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// Alephium imports
import { BuildToken, BurnTokenContract, DestroyToken } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useWallet } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TokenFaucetConfig} from '@/services/utils'

// Token Creation
export const TokenAutomationCreate: FC<{
  config: TokenFaucetConfig
}> = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  // Token Variables
  const [symbol, setSymbol] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [decimals, setDecimals] = useState('')
  const [supply, setSupply] = useState('')

  // Token Destroy Variables
  const [contract, setContract] = useState<string>("")

  // Handle of TokenCreation
  const handleBuildTokenSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await BuildToken(signer, symbol, name, decimals, supply)
      setOngoingTxId(result.txId)
    }
  }

  const handleDestroyToken = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await DestroyToken(signer, contract)
      setOngoingTxId(result.txId)
    }
  }

  // Gets the TX and updates according to status on chain
  const txStatusCallback = (status: node.TxStatus, numberOfChecks: number): Promise<any> => {
    if ((status.type === 'Confirmed' && numberOfChecks > 2) || (status.type === 'TxNotFound' && numberOfChecks > 3)) {
      setOngoingTxId(undefined)
    }

    return Promise.resolve()
  } 

  console.log('ongoing..', ongoingTxId)

  // Form submit to insert values and receive input
  return (
    <>
      <br/>
      <style>
        @import url(&apos;https://fonts.googleapis.com/css2?family=Tektur&display=swap&apos;);
      </style>
      <div style={{color: 'black'}} >
        <form onSubmit={handleBuildTokenSubmit} style={{alignContent: 'center', textAlign: 'center'}}>
          <>
            <h2 className={styles.title} style={{color: 'black', textAlign: 'center'}}> Alephium Token Builder ({config.network})</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{color: 'black', textAlign: 'center'}}> Create your token here with a fee of 1 ALPH for the contract deposit + gas fees. </p>
            {/* Supply is now auto calculated with js math and determined by how many decimals you have entered. */}
            <label htmlFor="symbol">Symbol :</label>
            <input
                className={styles.inputToken}
                type="text"
                id="symbol"
                name="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
            />
            <br/>
            <label htmlFor="name">Name :</label>
            <input
                className={styles.inputToken}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <label htmlFor="symbol">Decimals :</label>
            <input
                className={styles.inputToken}
                type="number"
                id="decimals"
                name="decimals"
                value={decimals}
                onChange={(e) => setDecimals(e.target.value)}
            />
            <br/>
            <label htmlFor="symbol">Supply :</label>
            <input
                className={styles.inputToken}
                type="number"
                id="supply"
                name="supply"
                value={supply}
                onChange={(e) => setSupply(e.target.value)}
            />
            <br/>
            <br/>
            <input className={styles.buttonDapp} type="submit" disabled={!!ongoingTxId} value="Create Token" />
          </>
        </form>
        <form onSubmit={handleDestroyToken} style={{alignContent: 'center', textAlign: 'center'}}>
          <>
            <h2 className={styles.title} style={{color: 'black', textAlign: 'center'}}> Alephium Token Destroyer ({config.network})</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{color: 'black', textAlign: 'center'}}> Destroy Token and Get ALPH Deposit Back </p>
            {/* Supply is now auto calculated with js math and determined by how many decimals you have entered. */}
            <label htmlFor="contract"></label>
            <input
                className={styles.inputToken}
                type="text"
                id="contract"
                name="contract"
                value={contract}
                onChange={(e) => setContract(e.target.value)}
            />
            <br/>
            <br/>
            <input className={styles.buttonDapp} type="submit" disabled={!!ongoingTxId} value="Destroy Token" />
          </>
        </form>
      </div>

      <br/>

      <div style={{color: 'white'}}>
        {ongoingTxId && <TxStatus txId={ongoingTxId} txStatusCallback={txStatusCallback} />}
      </div>

      <br/>
    </>
  )
}
