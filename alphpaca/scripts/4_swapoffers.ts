import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { Tokenswap } from '../artifacts/ts'

//! TestNet Token $PACA
// 23ced1fcda7fb1f53641dc299cf49b12a89338c80d05534fc5b366d5b65acd02
//? DEV ADDY
// 1EEorqQ8fud76F7BrFNncfKvxf7doGmfcUdKR9JCLnDvg

//! Mainnet Token $PACA
// b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002
//? PROD ADDY
// 16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd

// This deploy function will be called by cli deployment tool automatically
//* Note that deployment scripts should prefixed with numbers (starting from 0)
const swapoffers: DeployFunction<Settings> = async (
  deployer: Deployer,
): Promise<void> => {
  // Get settings
  const result = await deployer.deployContract(Tokenswap, {
    // The initial states of the faucet contract
    initialFields: {
      contract: "e9f5a6f13ca97ef56c171a08594c7354dd7a38f46fe18f9d44b8b5cf21c44901",
      owner: "1EEorqQ8fud76F7BrFNncfKvxf7doGmfcUdKR9JCLnDvg",                           //! Owner
      pacafee: 15n,
      alphfee: 100000000000000000n,
      feeToken: "23ced1fcda7fb1f53641dc299cf49b12a89338c80d05534fc5b366d5b65acd02"

    }
  })
  console.log('Token faucet contract id: ' + result.contractInstance.contractId)
  console.log('Token faucet contract address: ' + result.contractInstance.address)
}

export default swapoffers