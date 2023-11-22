import { NodeProvider } from "@alephium/web3"

const nodeProvider = new NodeProvider("http://98.227.84.182:12973/docs/")

async function getBlockChainInfo() {
    const result = await nodeProvider.blockflow.getBlockflowChainInfo({
        fromGroup: 0,
        toGroup: 0
    })
    return result
}

console.log(getBlockChainInfo())

