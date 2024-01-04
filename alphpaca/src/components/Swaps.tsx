// Component `Swaps.tsx`
import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// Alephium Imports 
import { BuildToken, BurnTokenContract } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TokenFaucetConfig} from '@/services/utils'

// PACA Burn Function
export const SwapsCreation: FC<{
  config: TokenFaucetConfig                 // edit to swap config file
}> = ({ config }) => {
  const context = useAlephiumConnectContext()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  // apply proper states for data entry

  // contract functions taken from utils

  // main page to create swap
  return (
    <>
        <div className={styles.swapFormContainer}>
            {/*<form onSubmit={handleSubmit}> */}
                {/* Form fields here */}
                <button type="submit">Create Swap</button>
            {/* </form> */}
        </div>
        <div className={styles.contractsListContainer}>
            {/* {contracts.map(contract => ( */}
            // Render each contract here
            {/* ))} */}
      </div>
    </>
  )
}
