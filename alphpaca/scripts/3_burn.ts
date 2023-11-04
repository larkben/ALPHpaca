import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { Burn, BurnToken } from '../artifacts/ts'

//! TestNet Token $PACA
// 23ced1fcda7fb1f53641dc299cf49b12a89338c80d05534fc5b366d5b65acd02

//! Mainnet Token $PACA
// b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002

// This deploy function will be called by cli deployment tool automatically
//* Note that deployment scripts should prefixed with numbers (starting from 0)
const tokenBurn: DeployFunction<Settings> = async (
  deployer: Deployer,
): Promise<void> => {
  // Get settings
  const result = await deployer.deployContract(BurnToken, {
    // The initial states of the faucet contract
    initialFields: {
      tokensburned: 0n,
      tokenid: "1516c410b54470d667e1315ce2faa81870c76c5c7a491e3e86eeec8366495502"
    }
  })
  console.log('Burn contract id: ' + result.contractInstance.contractId)
  console.log('Burn contract address: ' + result.contractInstance.address)
}

export default tokenBurn
