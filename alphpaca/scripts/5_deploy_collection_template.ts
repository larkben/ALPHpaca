import { Deployer, DeployFunction } from '@alephium/cli'
import { NFTOpenCollection, NFTOpenCollectionWithRoyalty, NFTPublicSaleCollectionSequential, NFTPublicSaleCollectionSequentialWithRoyalty } from '../artifacts/ts'
import { ZERO_ADDRESS } from '@alephium/web3'

const deployCollectionTemplate: DeployFunction = async (deployer: Deployer): Promise<void> => {
  const openCollection = await deployer.deployContract(NFTOpenCollection, {
    initialFields: {
      nftTemplateId: '',
      collectionUri: '',
      collectionOwner: ZERO_ADDRESS,
      totalSupply: 0n
    }
  })
  console.log(`NFT open collection without royalty template contract id: ${openCollection.contractInstance.contractId}`)
  console.log(`NFT open collection without royalty template contract address: ${openCollection.contractInstance.address}`)

  const openCollectionWithRoyalty = await deployer.deployContract(NFTOpenCollectionWithRoyalty, {
    initialFields: {
      nftTemplateId: '',
      collectionUri: '',
      collectionOwner: "16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd",
      totalSupply: 1152n,
      royaltyRate: 250n
    }
  })
  console.log(`NFT open collection with royalty template contract id: ${openCollectionWithRoyalty.contractInstance.contractId}`)
  console.log(`NFT open collection with royalty template contract address: ${openCollectionWithRoyalty.contractInstance.address}`)

  const publicSaleCollection = await deployer.deployContract(NFTPublicSaleCollectionSequential, {
    initialFields: {
      nftTemplateId: '',
      collectionUri: '',
      nftBaseUri: '',
      collectionOwner: ZERO_ADDRESS,
      maxSupply: 0n,
      mintPrice: 0n,
      maxBatchMintSize: 0n,
      totalSupply: 0n
    }
  })
  console.log(`NFT public sale collection template contract id: ${publicSaleCollection.contractInstance.contractId}`)
  console.log(`NFT public sale collection template contract address: ${publicSaleCollection.contractInstance.address}`)

  const publicSaleCollectionWithRoyalty = await deployer.deployContract(NFTPublicSaleCollectionSequentialWithRoyalty, {
    initialFields: {
      nftTemplateId: '',
      collectionUri: '',
      nftBaseUri: '',
      collectionOwner: "16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd",
      maxSupply: 1152n,
      mintPrice: 60n ** 18n,
      maxBatchMintSize: 1n,
      royaltyRate: 250n,
      totalSupply: 0n
    }
  })
  console.log(`NFT public sale collection with royalty template contract id: ${publicSaleCollectionWithRoyalty.contractInstance.contractId}`)
  console.log(`NFT public sale collection with royalty template contract address: ${publicSaleCollectionWithRoyalty.contractInstance.address}`)
}

export default deployCollectionTemplate