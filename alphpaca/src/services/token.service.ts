
import { DUST_AMOUNT, ExecutableScript, ExecuteScriptResult, SignerProvider, contractIdFromAddress } from '@alephium/web3'
import { Topup, Sendout, Destroy, Buildtoken, Gettoken, Withdrawlassets, Editfee, Destroytoken, Burn } from '../../artifacts/ts/scripts'
import { TokenCreate, TokenFaucetConfig, TokenTemplate, TokenBurnConfig } from './utils'
import { BurnToken, Faucet } from 'artifacts/ts'
import * as web3 from '@alephium/web3'

// Sendout and Withdraw and Destroy Functions
export const topup = async (
  signerProvider: SignerProvider,                  // Signed Amount
  amount: string,                                  // $PACA Amount
  tokenId: string                                  // $PACA ID
): Promise<ExecuteScriptResult> => {
  return await Topup.execute(signerProvider, {
    initialFields: {
      contract: TokenFaucetConfig.faucetID,        // The contract
      amount: BigInt(amount)                       // The amount
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: tokenId, amount: amount}]        // Asset in Wallet
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
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Destroy.execute(signerProvider, {
    initialFields: {
      contract: TokenFaucetConfig.faucetID
    },
    attoAlphAmount: DUST_AMOUNT,
                                                  // Notice no Asset required here. Means the user doesn't require $PACA.
  })
}

// Token Creation Functions
export const BuildToken = async (
  signerProvider: SignerProvider,
  symbol: string,
  name: string,
  decimals: string,
  supply: string
): Promise<ExecuteScriptResult> => {
  return await Buildtoken.execute(signerProvider, {
    initialFields: {
      contract: TokenCreate.contractId,
      symbol: web3.stringToHex(symbol),
      name: web3.stringToHex(name),
      decimals: BigInt(decimals),
      tokenTotal: BigInt(supply)
    },
    attoAlphAmount: DUST_AMOUNT + web3.ONE_ALPH                // Notice no Asset required here. Means the user doesn't require $PACA.
  })
}

// Token Destroy (Only Callable by Token Creators)


// TokenOfferCreation


// Token Offer Accept


// Token Offer Cancel


// Token Burn
export const BurnTokenContract = async (
  signerProvider: SignerProvider,
  amount: string,
): Promise<ExecuteScriptResult> => {
  return await Burn.execute(signerProvider, {
    initialFields: {
      contract: TokenBurnConfig.contractId,
      amount: BigInt(amount),
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: TokenBurnConfig.tokenId, amount: amount}]
  })
}



