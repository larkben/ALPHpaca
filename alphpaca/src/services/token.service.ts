
import { DUST_AMOUNT, ExecutableScript, ExecuteScriptResult, SignerProvider, contractIdFromAddress } from '@alephium/web3'
import { Topup, Sendout, Destroy } from '../../artifacts/ts/scripts'
import { TokenFaucetConfig } from './utils'
import { Faucet } from 'artifacts/ts'

// Sendout and Withdraw Functions

export const topup = async (
  signerProvider: SignerProvider, // Signed Amount
  amount: string,                 // $PACA Amount
  tokenId: string                 // $PACA ID
): Promise<ExecuteScriptResult> => {
  return await Topup.execute(signerProvider, {
    initialFields: {
      contract: TokenFaucetConfig.faucetID, // The contract
      amount: BigInt(amount)                // The amount
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: tokenId, amount: amount}] // Asset in Wallet
  })
}

export const sendout = async (
  signerProvider: SignerProvider,
  amount: string,
  tokenId: string
): Promise<ExecuteScriptResult> => {
  return await Sendout.execute(signerProvider, {
    initialFields: {
      contract: TokenFaucetConfig.faucetID,
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT,
                                  // Notice no Asset required here. Means the user doesn't require $PACA.
  })
}

// Destroy Function

export const destroy = async (
  signerProvider: SignerProvider,
  amount: string,
  tokenId: string
): Promise<ExecuteScriptResult> => {
  return await Destroy.execute(signerProvider, {
    initialFields: {
      contract: TokenFaucetConfig.faucetID
    },
    attoAlphAmount: DUST_AMOUNT,
                                  // Notice no Asset required here. Means the user doesn't require $PACA.
  })
}