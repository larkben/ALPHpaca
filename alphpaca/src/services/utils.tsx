import { NetworkId } from '@alephium/web3'
import { loadDeployments } from '../../artifacts/ts/deployments'

//* Interfaces
export interface TokenFaucetConfig {
  network: NetworkId
  groupIndex: number
  faucetAddress: string               
  faucetID: string // ID of the contract
  tokenID: string
}

export interface TokenCreate {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string
  tokenContract: string
  pacaId: string // PACA fee
}

export interface TokenTemplate {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string
}

export interface Swapoffer {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string

}

export interface Tokenswap {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string
  feetoken: string
}

function getNetwork(): NetworkId {
  const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'mainnet') as NetworkId //! This is where you change the network
  return network
}

//* Faucet
function getTokenFaucetConfig(): TokenFaucetConfig {
  const network = getNetwork()
  const faucet = loadDeployments(network).contracts.Faucet.contractInstance
  const groupIndex = faucet.groupIndex
  const faucetAddress = faucet.address
  const faucetID = faucet.contractId
  const tokenID = "23ced1fcda7fb1f53641dc299cf49b12a89338c80d05534fc5b366d5b65acd02" // $PACA ID
  return { network, groupIndex, faucetAddress, faucetID, tokenID }
}

//* TokenCreate
function getTokenCreateConfig(): TokenCreate {
  const network = getNetwork()
  const createToken = loadDeployments(network).contracts.CreateToken.contractInstance // This is not in the initial setup but is super important
  const tokenTemplate = loadDeployments(network).contracts.Token.contractInstance
  const groupIndex = createToken.groupIndex
  const contractAddress = createToken.address
  const contractId = createToken.contractId
  const tokenContract = tokenTemplate.contractId   
  const pacaId = "23ced1fcda7fb1f53641dc299cf49b12a89338c80d05534fc5b366d5b65acd02" // $PACA ID
  return { network, groupIndex, contractAddress, contractId, tokenContract, pacaId}
}

//* Token Template
function getTokenTemplateConfig(): TokenTemplate {
  const network = getNetwork()
  const TokenTemplate = loadDeployments(network).contracts.Token.contractInstance
  const groupIndex = TokenTemplate.groupIndex
  const contractAddress = TokenTemplate.address
  const contractId = TokenTemplate.contractId
  return {network, groupIndex, contractAddress, contractId}
}

/*
//* SwapContractCreation
function getSwapContractCreationConfig(): Tokenswap {
  const network = getNetwork()
  const SwapContractCreation = loadDeployments(network).contracts.
  const groupIndex = SwapContractCreation?.groupIndex
  const contractAddress = SwapContractCreation?.address
  const contractId = SwapContractCreation?.contractId
  return {network, groupIndex, contractAddress, contractId}
}

//* SwapContract
function getSwapContractConfig(): Swapoffer {
  const network = getNetwork()
}
*/

export const TokenFaucetConfig = getTokenFaucetConfig()
export const TokenCreate = getTokenCreateConfig()
export const TokenTemplate = getTokenTemplateConfig()
