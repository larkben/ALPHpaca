import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import { BuildToken } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TokenFaucetConfig, TokenCreate } from '@/services/utils'
import * as web3 from '@alephium/web3'
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
      <div style={{color: 'white'}} >
        <form onSubmit={handleBuildTokenSubmit}>
          <>
            <h2 className={styles.title} style={{color: 'orange', textAlign: 'center'}}> Alephium Token Builder ({config.network})</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{color: 'orange', textAlign: 'center'}}> Create your token here with a fee of 1 ALPH for the contract deposit + gas fees. </p>
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
            <label htmlFor="symbol">Symbol :</label>
            <input
                className={styles.input}
                type="text"
                id="symbol"
                name="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
            />
            <br/>
            <label htmlFor="name">Name :</label>
            <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <label htmlFor="symbol">Decimals :</label>
            <input
                className={styles.input}
                type="number"
                id="decimals"
                name="decimals"
                value={decimals}
                onChange={(e) => setDecimals(e.target.value)}
            />
            <br/>
            <label htmlFor="symbol">Supply :</label>
            <input
                className={styles.input}
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

      <div style={{color: 'orange', textAlign: 'center'}}>
        <h1 style={{fontSize: 20, color: 'white', textAlign: 'center'}}> About the <Link href='https://github.com/larkben/ALPHpaca/blob/main/alphpaca/contracts/token.ral'> contract </Link> you are creating for your token? Pro Tip: click &apos;contract&apos; </h1>
        <p> The contract is created with these values; symbol, name, decimals and supply. Symbol is the TICKER for your token and NAME is the name of your token.
            DECIMALS specify the divisibility of each coin, ie the main attraction of digital currencies over say a gold bar at a cash register; with 2 decimals a 
            supply of hundred means you have 1 TOKEN that is divisible by 100. Supply is the number of coins you wish to have. As always the contract specifies that
            you as the minter are the immutable or permanent owner of the coin you make. A destory function as well as event emit handling for future enhancements and features
            for you the owner.
        </p>
      </div>
      <div style={{color: 'orange', textAlign: 'center'}}>
        <h1 style={{fontSize: 20, color: 'white', textAlign: 'center'}}> Working with decimals? </h1>
        <p> Decimals can be complex. <br/>
            When designing a coin with a supply of 1000 and each coin being divisible by 4 decimals this is how you would do it.
            <br/>
            First type the number of decimals in as zeros in the supply. IE 0000 4 decimals
            <br/> 
            Second type the supply you want. IE 1000
            <br/>
            Final result should look like this. IE decimals: 4 supply: 10000000 ~ 1000 coins with 4 decimals
        </p>
      </div>

    </>
  )
}
