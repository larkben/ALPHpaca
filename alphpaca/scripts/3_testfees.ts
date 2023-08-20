import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { FeeCollection } from '../artifacts/ts'

// BENSON adefc2bbd26033d9debeaa311f2b64756e6454a44c7506b96c72f1ad5b21fe01

// WEB ae31c9081541057565fe0146937f49d6240c322d3027edb22c95e2e53cb9ec01

// This deploy function will be called by cli deployment tool automatically
//* Note that deployment scripts should prefixed with numbers (starting from 0)
const testfees: DeployFunction<Settings> = async (
  deployer: Deployer,
): Promise<void> => {
  // Get settings
  const result = await deployer.deployContract(FeeCollection, {
    // The initial states of the faucet contract
    initialFields: {
      tokenOne: "adefc2bbd26033d9debeaa311f2b64756e6454a44c7506b96c72f1ad5b21fe01",
      tokenTwo: "ae31c9081541057565fe0146937f49d6240c322d3027edb22c95e2e53cb9ec01",
      balanceOne: 0n,
      balanceTwo: 0n,
      fee: 10n,
      owner: "1EEorqQ8fud76F7BrFNncfKvxf7doGmfcUdKR9JCLnDvg" //! Owner
    }
  })
  console.log('Token faucet contract id: ' + result.contractInstance.contractId)
  console.log('Token faucet contract address: ' + result.contractInstance.address)
}

export default testfees
