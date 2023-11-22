import { NetworkId, ONE_ALPH } from "@alephium/web3"
import { loadDeployments } from "../../artifacts/ts/deployments"

//* Interfaces
export interface TokenFaucetConfig {
  network: NetworkId
  groupIndex: number
  faucetAddress: string               
  faucetID: string                          // ID of the contract
  tokenID: string
}

export interface TokenCreate {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string
  tokenContract: string
  pacaId: string                            // PACA fee
}

export interface TokenTemplate {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string
}

export interface BurnToken {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string
  tokenId: string
}

export function getNetwork(): NetworkId {
  const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'testnet') as NetworkId
  return network
}

export function getDefaultNodeUrl(): string {
  const network = getNetwork()
  return network === 'devnet' ?
    'http://127.0.0.1:22973' : network === 'testnet' ?
      'https://wallet-v20.testnet.alephium.org' : 'https://wallet-v20.mainnet.alephium.org'
}

export function getDefaultExplorerUrl(): string {
  const network = getNetwork()
  return network === 'devnet' ?
    'http://localhost:9090' : network === 'testnet' ?
      'https://backend-v113.testnet.alephium.org' : 'https://backend-v113.mainnet.alephium.org'
}

export function getBackendUrl(): string {
  return process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://127.0.0.1:3019'
}

export function getMongoUrl(): string {
  return process.env.MONGO_URL ?? 'mongodb://localhost:27017'
}

function getPollingInterval(): number {
  const network = getNetwork()
  return network === 'testnet' ? 1000 : 100000
}

export function loadSettings(network: 'devnet' | 'testnet' | 'mainnet'): { commissionRate: number } {
  return {
    commissionRate: 200
  }
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

//* TokenTemplate // For TokenCreation
function getTokenTemplateConfig(): TokenTemplate {
  const network = getNetwork()
  const TokenTemplate = loadDeployments(network).contracts.Token.contractInstance
  const groupIndex = TokenTemplate.groupIndex
  const contractAddress = TokenTemplate.address
  const contractId = TokenTemplate.contractId
  return {network, groupIndex, contractAddress, contractId}
}

function getTokenBurnConfig(): BurnToken {
  const network = getNetwork()
  const groupIndex = 1
  const contractAddress = "uWNJCzc9jYyBTkmQvRfFT9J2h6E7tVaesSztCu1E2Bmh"
  const contractId = "0c25a4d394b16161459848f5b89088bf303776752dd467b0c1c96c2f7a5eeb00"
  const tokenId = "1516c410b54470d667e1315ce2faa81870c76c5c7a491e3e86eeec8366495502"     // MONTY COIN
  return {network, groupIndex, contractAddress, contractId, tokenId}
}

// Exports
export const TokenFaucetConfig = getTokenFaucetConfig()
export const TokenCreate = getTokenCreateConfig()
export const TokenTemplate = getTokenTemplateConfig()
export const TokenBurnConfig = getTokenBurnConfig()
