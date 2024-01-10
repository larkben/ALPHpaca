// Component `Burn.tsx`
import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// Alephium Imports 
import { BuildToken, BurnTokenContract } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useWallet } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TokenFaucetConfig} from '@/services/utils'

// PACA Burn Function
export const TokenAutomationCreate: FC<{
  config: TokenFaucetConfig
}> = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  const [amount, setAmount] = useState('')
  const [token, setToken] = useState<string>("")

  // Burning Token
  const handleBurnToken = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await BurnTokenContract(signer, amount)
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
        <form onSubmit={handleBurnToken} style={{alignContent: 'center', textAlign: 'center'}}>
          <>
            <h2 className={styles.title} style={{color: 'black', textAlign: 'center'}}> Alephium Token Burner ({config.network})</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{color: 'black', textAlign: 'center'}}> Burn your token + gas fees, there is no reverses all funds lost are lost. </p>
            <label htmlFor="amount">Amount :</label>
            <input
                className={styles.inputToken}
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <br/>
            <br/>
            <input className={styles.button} type="submit" disabled={!!ongoingTxId} value="Burn Token" />
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
