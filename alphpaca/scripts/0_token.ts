import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { Token } from '../artifacts/ts'

// This deploy function will be called by cli deployment tool automatically
//* Note that deployment scripts should prefixed with numbers (starting from 0)
const tokenTemplate: DeployFunction<Settings> = async (
  deployer: Deployer,
): Promise<void> => {
  // Get settings
  const result = await deployer.deployContract(Token, {
    // The initial states of the faucet contract
    initialFields: {
      symbol: Buffer.from('TEMP', 'utf8').toString('hex'),
      name: Buffer.from('Template', 'utf8').toString('hex'),
      decimals: 18n,
      supply: 1000n,
      owner: "16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd" //! Owner
    }
  })
  console.log('Token contract id: ' + result.contractInstance.contractId)
  console.log('Token contract address: ' + result.contractInstance.address)
}

export default tokenTemplate
