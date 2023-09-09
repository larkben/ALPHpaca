import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import { BuildToken } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TokenFaucetConfig} from '@/services/utils'
import Link from 'next/link'

export const TokenAutomationCreate: FC<{
  config: TokenFaucetConfig
}> = ({ config }) => {
  const context = useAlephiumConnectContext()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState<string>()
  const [symbol, setSymbol] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [decimals, setDecimals] = useState('')
  const [supply, setSupply] = useState('')

  // Handle of TokenCreation
  const handleBuildTokenSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (context.signerProvider) {
      const result = await BuildToken(context.signerProvider, symbol, name, decimals, supply)
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
            <input className={styles.button} type="submit" disabled={!!ongoingTxId} value="Create Token" />
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
