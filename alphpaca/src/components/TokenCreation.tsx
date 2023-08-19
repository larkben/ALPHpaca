import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import { BuildToken, BuildTokenPaca } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TokenFaucetConfig, TokenCreate } from '@/services/utils'
import * as web3 from '@alephium/web3'

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

  // Handle of Withdraw 
  const handleBuildTokenSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (context.signerProvider) {
      const result = await BuildToken(context.signerProvider, symbol, name, decimals, supply)
      setOngoingTxId(result.txId)
    }
  }

  // Handle of Topup
  const handleBuildTokenPacaSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (context.signerProvider) {
      const result = await BuildTokenPaca(context.signerProvider, symbol, name, decimals, supply)
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
        <form onSubmit={handleBuildTokenSubmit}>
          <>
            <h2 className={styles.title}> PacaTokenBuilder {config.network}</h2>
            <p>PublicKey: {context.account?.publicKey ?? '???'}</p>
            <p> Create your token here with a fee of 1 ALPH </p>
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
            <label htmlFor="symbol">Symbol</label>
            <input
                type="text"
                id="symbol"
                name="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
            />
            <br/>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <label htmlFor="symbol">Decimals</label>
            <input
                type="number"
                id="decimals"
                name="decimals"
                value={decimals}
                onChange={(e) => setDecimals(e.target.value)}
            />
            <br/>
            <label htmlFor="symbol">Supply</label>
            <input
                type="number"
                id="supply"
                name="supply"
                value={supply}
                onChange={(e) => setSupply(e.target.value)}
            />
            <br/>
            <input type="submit" disabled={!!ongoingTxId} value="Create Token" />
          </>
        </form>
      </div>

      <div className="columns">
        <form onSubmit={handleBuildTokenPacaSubmit}>
          <>
            <h2 className={styles.title}> PacaTokenBuilder {config.network}</h2>
            <p>PublicKey: {context.account?.publicKey ?? '???'}</p>
            <p> Create your token here with a fee of 100 $PACA </p>
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
            <label htmlFor="symbol">Symbol</label>
            <input
                type="text"
                id="symbol"
                name="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
            />
            <br/>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <label htmlFor="symbol">Decimals</label>
            <input
                type="number"
                id="decimals"
                name="decimals"
                value={decimals}
                onChange={(e) => setDecimals(e.target.value)}
            />
            <br/>
            <label htmlFor="symbol">Supply</label>
            <input
                type="number"
                id="supply"
                name="supply"
                value={supply}
                onChange={(e) => setSupply(e.target.value)}
            />
            <br/>
            <input type="submit" disabled={!!ongoingTxId} value="Create Token" />
          </>
        </form>
      </div>
    </>
  )
}
