/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { RunScriptResult, DeployContractExecutionResult } from "@alephium/cli";
import { NetworkId } from "@alephium/web3";
import {
  Faucet,
  FaucetInstance,
  Token,
  TokenInstance,
  CreateToken,
  CreateTokenInstance,
  BurnToken,
  BurnTokenInstance,
  FeeCollection,
  FeeCollectionInstance,
  NFT,
  NFTInstance,
  NFTOpenCollection,
  NFTOpenCollectionInstance,
  NFTOpenCollectionWithRoyalty,
  NFTOpenCollectionWithRoyaltyInstance,
  NFTPublicSaleCollectionSequential,
  NFTPublicSaleCollectionSequentialInstance,
  NFTPublicSaleCollectionSequentialWithRoyalty,
  NFTPublicSaleCollectionSequentialWithRoyaltyInstance,
} from ".";
import { default as mainnetDeployments } from "../.deployments.mainnet.json";
import { default as testnetDeployments } from "../.deployments.testnet.json";

export type Deployments = {
  deployerAddress: string;
  contracts: {
    Faucet: DeployContractExecutionResult<FaucetInstance>;
    Token: DeployContractExecutionResult<TokenInstance>;
    CreateToken: DeployContractExecutionResult<CreateTokenInstance>;
    BurnToken: DeployContractExecutionResult<BurnTokenInstance>;
    FeeCollection?: DeployContractExecutionResult<FeeCollectionInstance>;
    NFT?: DeployContractExecutionResult<NFTInstance>;
    NFTOpenCollection?: DeployContractExecutionResult<NFTOpenCollectionInstance>;
    NFTOpenCollectionWithRoyalty?: DeployContractExecutionResult<NFTOpenCollectionWithRoyaltyInstance>;
    NFTPublicSaleCollectionSequential?: DeployContractExecutionResult<NFTPublicSaleCollectionSequentialInstance>;
    NFTPublicSaleCollectionSequentialWithRoyalty?: DeployContractExecutionResult<NFTPublicSaleCollectionSequentialWithRoyaltyInstance>;
  };
};

function toDeployments(json: any): Deployments {
  const contracts = {
    Faucet: {
      ...json.contracts["Faucet"],
      contractInstance: Faucet.at(
        json.contracts["Faucet"].contractInstance.address
      ),
    },
    Token: {
      ...json.contracts["Token"],
      contractInstance: Token.at(
        json.contracts["Token"].contractInstance.address
      ),
    },
    CreateToken: {
      ...json.contracts["CreateToken"],
      contractInstance: CreateToken.at(
        json.contracts["CreateToken"].contractInstance.address
      ),
    },
    BurnToken: {
      ...json.contracts["BurnToken"],
      contractInstance: BurnToken.at(
        json.contracts["BurnToken"].contractInstance.address
      ),
    },
    FeeCollection:
      json.contracts["FeeCollection"] === undefined
        ? undefined
        : {
            ...json.contracts["FeeCollection"],
            contractInstance: FeeCollection.at(
              json.contracts["FeeCollection"].contractInstance.address
            ),
          },
    NFT:
      json.contracts["NFT"] === undefined
        ? undefined
        : {
            ...json.contracts["NFT"],
            contractInstance: NFT.at(
              json.contracts["NFT"].contractInstance.address
            ),
          },
    NFTOpenCollection:
      json.contracts["NFTOpenCollection"] === undefined
        ? undefined
        : {
            ...json.contracts["NFTOpenCollection"],
            contractInstance: NFTOpenCollection.at(
              json.contracts["NFTOpenCollection"].contractInstance.address
            ),
          },
    NFTOpenCollectionWithRoyalty:
      json.contracts["NFTOpenCollectionWithRoyalty"] === undefined
        ? undefined
        : {
            ...json.contracts["NFTOpenCollectionWithRoyalty"],
            contractInstance: NFTOpenCollectionWithRoyalty.at(
              json.contracts["NFTOpenCollectionWithRoyalty"].contractInstance
                .address
            ),
          },
    NFTPublicSaleCollectionSequential:
      json.contracts["NFTPublicSaleCollectionSequential"] === undefined
        ? undefined
        : {
            ...json.contracts["NFTPublicSaleCollectionSequential"],
            contractInstance: NFTPublicSaleCollectionSequential.at(
              json.contracts["NFTPublicSaleCollectionSequential"]
                .contractInstance.address
            ),
          },
    NFTPublicSaleCollectionSequentialWithRoyalty:
      json.contracts["NFTPublicSaleCollectionSequentialWithRoyalty"] ===
      undefined
        ? undefined
        : {
            ...json.contracts["NFTPublicSaleCollectionSequentialWithRoyalty"],
            contractInstance: NFTPublicSaleCollectionSequentialWithRoyalty.at(
              json.contracts["NFTPublicSaleCollectionSequentialWithRoyalty"]
                .contractInstance.address
            ),
          },
  };
  return {
    ...json,
    contracts: contracts as Deployments["contracts"],
  };
}

export function loadDeployments(
  networkId: NetworkId,
  deployerAddress?: string
): Deployments {
  const deployments =
    networkId === "mainnet"
      ? mainnetDeployments
      : networkId === "testnet"
      ? testnetDeployments
      : undefined;
  if (deployments === undefined) {
    throw Error("The contract has not been deployed to the " + networkId);
  }
  const allDeployments = Array.isArray(deployments)
    ? deployments
    : [deployments];
  if (deployerAddress === undefined) {
    if (allDeployments.length > 1) {
      throw Error(
        "The contract has been deployed multiple times on " +
          networkId +
          ", please specify the deployer address"
      );
    } else {
      return toDeployments(allDeployments[0]);
    }
  }
  const result = allDeployments.find(
    (d) => d.deployerAddress === deployerAddress
  );
  if (result === undefined) {
    throw Error("The contract deployment result does not exist");
  }
  return toDeployments(result);
}
