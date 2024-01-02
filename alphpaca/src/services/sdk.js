import { NodeProvider, Project } from "@alephium/web3"
await Project.build

const tokenCreateAddress = "22mZiGqqbrvFmVWjXbU6TXtS7DR9Yxix5BHSvEj2uzu9R"

//const wallet = new PrivateKeyWallet(process.env.WALLETSDK1)

const API_KEY = "q4YJcksGa1ISzWPspxpSlKppgoHzodnpyWANx8nxtsUIFhtJ";
const nodeProvider = new NodeProvider('http://98.227.84.182:12973', API_KEY);

async function getBlockHeight() {
  let result = await nodeProvider.blockflow.getBlockflowChainInfo({
    fromGroup: 0,
    toGroup: 0
  });
  console.log("The current block height is " + result.currentHeight + ".");
}

async function getTokenCreators() {
  let result = await nodeProvider.events.getEventsContractContractaddress(tokenCreateAddress, {start: 0, limit: 100});
  console.log(result.events[5]);
}

/* ! Work in Progress ( Issue with PrivateKeyWalletImport )
async function redeemTokenAlph() {
    let tx = await Destroy.execute(wallet, {
        initialFields: {
          token: contractId,
          amount: 1n
        }
    })
}
*/

// TODO
//! Take Data and import into database via script
//! Then start testing token redemption for token creation so users can redeem alph back

getBlockHeight(); // node works and is up and running
console.log("\n");
getTokenCreators(); // gets token creator events