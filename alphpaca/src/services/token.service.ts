
import { DUST_AMOUNT, ExecuteScriptResult, SignerProvider } from '@alephium/web3'
import { Topup, Sendout, Destroy, Buildtoken, Destroytoken } from '../../artifacts/ts/scripts'
import { TokenCreate, TokenFaucetConfig, } from './utils'
import * as web3 from '@alephium/web3'

//? Sendout and Topup and Destroy Functions

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

//? Token Creation + Destroy Functions

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
    attoAlphAmount: DUST_AMOUNT + web3.ONE_ALPH 
                                  // Notice no Asset required here. Means the user doesn't require $PACA.
  })
}

export const DestroyToken = async (
  signerProvider: SignerProvider,
  contractID: string              //! Must be pulled from database
): Promise<ExecuteScriptResult> => {
  return await Destroytoken.execute(signerProvider, {
    initialFields: {
      contract: contractID
    },
    attoAlphAmount: DUST_AMOUNT,
                                  // Notice no Asset required here. Means the user doesn't require $PACA.
  })
}

//? TokenSwapContract

export const CreateSwap = async (
  signerProvider: SignerProvider,
  contractID: string              //! Must be pulled from database
): Promise<ExecuteScriptResult> => {
  return await Destroy.execute(signerProvider, {
    initialFields: {
      contract: contractID
    },
    attoAlphAmount: DUST_AMOUNT,
                                  // Notice no Asset required here. Means the user doesn't require $PACA.
  })
}





