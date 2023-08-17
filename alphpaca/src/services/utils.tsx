import { NetworkId } from '@alephium/web3'
import { loadDeployments } from '../../artifacts/ts/deployments'

//* Interfaces
export interface TokenFaucetConfig {
  network: NetworkId
  groupIndex: number
  tokenFaucetAddress: string                //TODO line 7 + 8 might be duplicates
  faucetID: string // ID of the contract
  tokenID: string
}

export interface TokenCreate {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string
  tokenContract: string
  pacaFee: string // PACA fee
}

function getNetwork(): NetworkId {
  const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'testnet') as NetworkId //! This is where you change the network
  return network
}

//* Faucet
function getTokenFaucetConfig(): TokenFaucetConfig {
  const network = getNetwork()
  const faucet = loadDeployments(network).contracts.Faucet.contractInstance
  const groupIndex = faucet.groupIndex
  const tokenFaucetAddress = faucet.address
  const faucetID = faucet.contractId
  const tokenID = "b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002" // $PACA ID
  return { network, groupIndex, tokenFaucetAddress, faucetID, tokenID }
}

//* TokenCreate
function getTokenCreateConfig(): TokenCreate {
  const network = getNetwork()
  const createToken = loadDeployments(network).contracts.CreateToken.contractInstance // This is not in the initial setup but is super important
  const groupIndex = createToken.groupIndex
  const contractAddress = createToken.address
  const contractId = createToken.contractId
  const tokenContract = ""
  const pacaFee = "b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002" // $PACA ID
  return { network, groupIndex, contractAddress, contractId, tokenContract, pacaFee}
}

export const TokenFaucetConfig = getTokenFaucetConfig()
export const TokenCreate = getTokenCreateConfig()
