
import { DUST_AMOUNT, ExecuteScriptResult, SignerProvider } from '@alephium/web3'
import { Sendout } from '../../artifacts/ts/scripts'
import { tokenFaucetConfig } from './utils'

export const sendoutToken = async (
  signerProvider: SignerProvider,
  amount: string,
  tokenId: string
): Promise<ExecuteScriptResult> => {
  return await Sendout.execute(signerProvider, {
    initialFields: {
      contract: tokenFaucetConfig.faucetID,
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT
  })
}
