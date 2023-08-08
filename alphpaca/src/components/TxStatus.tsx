import React from 'react'
import { useTxStatus } from '@alephium/web3-react'
import { node } from '@alephium/web3'

interface TxStatusAlertProps {
  txId: string
  txStatusCallback(status: node.TxStatus, numberOfChecks: number): Promise<any>
}

export const TxStatus = ({ txId, txStatusCallback }: TxStatusAlertProps) => {
  let numberOfChecks = 0
  const { txStatus } = useTxStatus(txId, (status) => {
    numberOfChecks = numberOfChecks + 1
    return txStatusCallback(status, numberOfChecks)
  })

  return (
    <>
      <h3 style={{ margin: 0 }}>
        Transaction status: <code>{txStatus?.type || 'unknown'}</code>
      </h3>
      <h3 style={{ margin: 0 }}>
        Transaction hash: <code>{txId}</code>
      </h3>
    </>
  )
}
