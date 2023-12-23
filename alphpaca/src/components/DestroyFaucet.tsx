import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import { destroy } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TokenFaucetConfig } from '@/services/utils'

export const DevBoard: FC<{
    config: TokenFaucetConfig
  }> = ({ config }) => {
    const context = useAlephiumConnectContext()
    const addressGroup = config.groupIndex
    const [ongoingTxId, setOngoingTxId] = useState<string>()
  
    // Handle of Destroy Faucet
    const handleDestroySubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (context.signerProvider) {
        const result = await destroy(context.signerProvider)
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
        {ongoingTxId && <TxStatus txId={ongoingTxId} txStatusCallback={txStatusCallback} />}
  
        <div className="columns">
          <form onSubmit={handleDestroySubmit}>
            <>
              <h2 className={styles.title}>Alephium Token Faucet on {config.network}</h2>
              <p>PublicKey: {context.account?.publicKey ?? '???'}</p>
              <p>Destroys $PACA Faucet &quot;FOR ADMIN USE ONLY&quot;</p>
              <table>
                <thead>
                  <tr>
                    <td>id</td>
                    <th>group</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={addressGroup} style={{ background: 'red', color: 'white' }}>
                    <td>{config.tokenID}</td>
                    <td>{addressGroup}</td>
                  </tr>
                </tbody>
              </table>
              <label htmlFor="topup-amount">Amount</label>
              <br />
              <input type="submit" disabled={!!ongoingTxId} value="Destroy Faucet" />
            </>
          </form>
        </div>
      </>
    )
  }
  