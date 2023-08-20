import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import { gettokens } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TestFees } from '@/services/utils'

export const FeeCollection: FC<{
  config: TestFees
}> = ({ config }) => {
  const context = useAlephiumConnectContext()
  const addressGroup = config.groupIndex
  const [topupAmount, setTopupAmount] = useState('')
  const [ongoingTxId, setOngoingTxId] = useState<string>()


  // Handle of Deposit
  const handleTestSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (context.signerProvider) {
      const result = await gettokens(context.signerProvider, topupAmount, "10", TestFees.tokenOne, TestFees.tokenTwo)
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

      <div className="columns" style={{color: 'white'}}>
        <form onSubmit={handleTestSubmit}>
          <>
            <h2 className={styles.title}> Testing {config.network}</h2>
            <p>PublicKey: {context.account?.publicKey ?? '???'}</p>
            <p>Test Retrieval of Assets  </p>
            <table>
              <thead>
                <tr>
                  <td>id</td>
                  <th>group</th>
                </tr>
              </thead>
              <tbody>
                <tr key={addressGroup} style={{ background: 'red', color: 'white' }}>
                  <td>{config.tokenOne}</td>
                  <td>{addressGroup}</td>
                </tr>
              </tbody>
            </table>
            <label htmlFor="withdraw-amount">Amount</label>
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
            <input type="submit" disabled={!!ongoingTxId} value="Test" />
          </>
        </form>
      </div>

    </>
  )
}
