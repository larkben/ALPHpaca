import { NodeProvider } from "@alephium/web3"

const nodeProvider = new NodeProvider("https://alephium-backend.ono.re/")

async function getBlockChainInfo() {
    const result = await nodeProvider.blockflow.getBlockflowChainInfo({
        fromGroup: 0,
        toGroup: 0
    })
    return result
}

console.log(getBlockChainInfo())

