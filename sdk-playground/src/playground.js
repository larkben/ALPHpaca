import { NodeProvider } from "@alephium/web3"

const API_KEY = "q4YJcksGa1ISzWPspxpSlKppgoHzodnpyWANx8nxtsUIFhtJ";
const nodeProvider = new NodeProvider('http://98.227.84.182:12973', API_KEY);

async function getBlockHeight() {
  let result = await nodeProvider.blockflow.getBlockflowChainInfo({
    fromGroup: 0,
    toGroup: 0
  });
  console.log("The current block height is " + result.currentHeight + ".");
}

// TODO 
//! Get Events for Token Creation
//! Take Data and import into database via script
//! Then start testing token redemption for token creation so users can redeem alph back

getBlockHeight(); // node works and is up and running

