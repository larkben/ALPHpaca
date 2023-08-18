import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import { topup, sendout } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TokenFaucetConfig } from '@/services/utils'

export const TokenDapp: FC<{
  config: TokenFaucetConfig
}> = ({ config }) => {
  const context = useAlephiumConnectContext()
  const addressGroup = config.groupIndex
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [topupAmount, setTopupAmount] = useState('')
  const [ongoingTxId, setOngoingTxId] = useState<string>()


  // Handle of Withdraw 
  const handleWithdrawSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (context.signerProvider) {
      const result = await sendout(context.signerProvider, withdrawAmount, config.tokenID)
      setOngoingTxId(result.txId)
    }
  }

  // Handle of Topup
  const handleTopupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (context.signerProvider) {
      const result = await topup(context.signerProvider, withdrawAmount, config.tokenID)
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
        <form onSubmit={handleWithdrawSubmit}>
          <>
            <h2 className={styles.title}>Alephium Token Faucet on {config.network}</h2>
            <p>PublicKey: {context.account?.publicKey ?? '???'}</p>
            <p>Maximum of 1 $PACA can be withdrawn at a time... getting scarcer. </p>
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
            <label htmlFor="withdraw-amount">Amount</label>
            <input
              type="number"
              id="transfer-amount"
              name="amount"
              max="2"
              min="1"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <br />
            <input type="submit" disabled={!!ongoingTxId} value="Gimme $PACA" />
          </>
        </form>
      </div>

      <div className="columns">
        <form onSubmit={handleTopupSubmit}>
          <>
            <h2 className={styles.title}>Alephium Token Faucet on {config.network}</h2>
            <p>PublicKey: {context.account?.publicKey ?? '???'}</p>
            <p>TopUp $PACA for Faucet. &quot;FOR ADMIN / DONATION USE ONLY&quot;</p>
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
            <input
              type="number"
              id="transfer-amount"
              name="amount"
              max="10000"
              min="1"
              value={topupAmount}
              onChange={(e) => setTopupAmount(e.target.value)}
            />
            <br />
            <input type="submit" disabled={!!ongoingTxId} value="TopUp Faucet" />
          </>
        </form>
      </div>
    </>
  )
}
