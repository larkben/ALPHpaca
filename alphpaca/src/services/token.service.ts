
import { DUST_AMOUNT, ExecutableScript, ExecuteScriptResult, SignerProvider } from '@alephium/web3'
import { Destroy, Sendout, Topup } from '../../artifacts/ts/scripts'
import { TokenFaucetConfig } from './utils'

//* PACA FAUCET SERVICES

export const sendoutToken = async (
  signerProvider: SignerProvider,
  amount: string,
  tokenId: string
): Promise<ExecuteScriptResult> => {
  return await Sendout.execute(signerProvider, {
    initialFields: {
      contract: TokenFaucetConfig.faucetID,
      amount: BigInt(amount),
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const topupToken = async (
  signerProvider: SignerProvider,
  amount: string,
  tokenId: string
): Promise<ExecuteScriptResult> => {
  return await Sendout.execute(signerProvider, {
    initialFields: {
      contract: TokenFaucetConfig.faucetID,
      amount: BigInt(amount),
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: tokenId, amount: amount}]
  })
}

export const destroyFaucet = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Destroy.execute(signerProvider, {
    initialFields: {
      contract: TokenFaucetConfig.faucetID
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

//* TOKEN CREATION SERVICES




