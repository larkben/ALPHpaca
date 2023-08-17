import { NetworkId } from '@alephium/web3'
import { loadDeployments } from '../../artifacts/ts/deployments'

export interface TokenFaucetConfig {
  network: NetworkId
  groupIndex: number
  tokenFaucetAddress: string                //TODO line 7 + 8 might be duplicates
  faucetID: string // ID of the contract
  tokenID: string
}

export interface TokenCreate {
  network: NetworkId
  //groupIndex: number
  //contractAddress: string
}

function getNetwork(): NetworkId {
  const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'testnet') as NetworkId //! This is where you change the network
  return network
}

function getTokenFaucetConfig(): TokenFaucetConfig {
  const network = getNetwork()
  const faucet = loadDeployments(network).contracts.Faucet.contractInstance
  const groupIndex = faucet.groupIndex
  const tokenFaucetAddress = faucet.address
  const faucetID = faucet.contractId
  const tokenID = "b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002" // $PACA ID
  return { network, groupIndex, tokenFaucetAddress, faucetID, tokenID }
}

function getTokenCreateConfig(): TokenCreate {
  const network = getNetwork()
  return { network }
}

export const TokenFaucetConfig = getTokenFaucetConfig()
export const TokenCreate = getTokenCreateConfig()
