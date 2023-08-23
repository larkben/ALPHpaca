import { NodeProvider } from "@alephium/web3"


const API_KEY = "JD7nmH317d8Os5brQ9ee9CsD3lzY1k6uJ2P0AmDkzEe7pvAQ"

const nodeProvider = new NodeProvider("http://98.228.42.4:12973/", API_KEY)

async function getBlockChainInfo() {
    const result = await nodeProvider.blockflow.getBlockflowChainInfo({
        fromGroup: 0,
        toGroup: 0
    })
    return result
}

console.log(getBlockChainInfo())

