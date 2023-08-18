
import { DUST_AMOUNT, ExecutableScript, ExecuteScriptResult, SignerProvider, contractIdFromAddress } from '@alephium/web3'
import { Topup, Sendout, Destroy, Buildtoken, Buildtokenpaca } from '../../artifacts/ts/scripts'
import { TokenCreate, TokenFaucetConfig, TokenTemplate } from './utils'
import { Faucet } from 'artifacts/ts'
import * as web3 from '@alephium/web3'

// Sendout and Withdraw and Destroy Functions

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

const defaultTokenCreation: bigint = 1n          // Listing price default to 3 ALPH
const defaultPacaFee: bigint = 100n

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
      symbol: web3.hexToString(symbol),
      name: web3.hexToString(name),
      decimals: BigInt(decimals),
      tokenTotal: BigInt(supply)
    },
    attoAlphAmount: DUST_AMOUNT + web3.ONE_ALPH + defaultTokenCreation 
                                  // Notice no Asset required here. Means the user doesn't require $PACA.
  })
}

export const BuildTokenPaca = async (
  signerProvider: SignerProvider,
  tokenId: string,
  amount: string,
  symbol: string,
  name: string,
  decimals: string,
  supply: string
): Promise<ExecuteScriptResult> => {
  return await Buildtokenpaca.execute(signerProvider, {
    initialFields: {
      contract: TokenCreate.contractId,
      symbol: Buffer.from(symbol, 'utf8').toString('hex'),
      name: Buffer.from(name, 'utf8').toString('hex'),
      decimals: BigInt(decimals),
      tokenTotal: BigInt(supply)
    },
    attoAlphAmount: DUST_AMOUNT + web3.ONE_ALPH,
    tokens: [{id: tokenId, amount: amount}]
                                            // Notice no Asset required here. Means the user doesn't require $PACA.
  })
}
