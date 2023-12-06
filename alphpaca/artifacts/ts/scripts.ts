/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { default as BuildtokenScriptJson } from "../scripts/Buildtoken.ral.json";
import { default as BurnScriptJson } from "../scripts/Burn.ral.json";
import { default as BuyvirlScriptJson } from "../scripts/Buyvirl.ral.json";
import { default as CreateOpenCollectionScriptJson } from "../scripts/CreateOpenCollection.ral.json";
import { default as CreateOpenCollectionWithRoyaltyScriptJson } from "../scripts/CreateOpenCollectionWithRoyalty.ral.json";
import { default as CreatePublicSaleCollectionSequentialScriptJson } from "../scripts/CreatePublicSaleCollectionSequential.ral.json";
import { default as CreatePublicSaleCollectionSequentialWithRoyaltyScriptJson } from "../scripts/CreatePublicSaleCollectionSequentialWithRoyalty.ral.json";
import { default as DestroyScriptJson } from "../scripts/Destroy.ral.json";
import { default as DestroytokenScriptJson } from "../scripts/Destroytoken.ral.json";
import { default as EditfeeScriptJson } from "../scripts/Editfee.ral.json";
import { default as GettokenScriptJson } from "../scripts/Gettoken.ral.json";
import { default as MintBatchSequentialScriptJson } from "../scripts/MintBatchSequential.ral.json";
import { default as MintNextSequentialScriptJson } from "../scripts/MintNextSequential.ral.json";
import { default as MintOpenNFTScriptJson } from "../scripts/MintOpenNFT.ral.json";
import { default as MintSpecificScriptJson } from "../scripts/MintSpecific.ral.json";
import { default as ReedeemalphScriptJson } from "../scripts/Reedeemalph.ral.json";
import { default as SellvirlScriptJson } from "../scripts/Sellvirl.ral.json";
import { default as SendoutScriptJson } from "../scripts/Sendout.ral.json";
import { default as TopupScriptJson } from "../scripts/Topup.ral.json";
import { default as WithdrawFromOpenCollectionScriptJson } from "../scripts/WithdrawFromOpenCollection.ral.json";
import { default as WithdrawFromPublicSaleCollectionRandomScriptJson } from "../scripts/WithdrawFromPublicSaleCollectionRandom.ral.json";
import { default as WithdrawFromPublicSaleCollectionSequentialScriptJson } from "../scripts/WithdrawFromPublicSaleCollectionSequential.ral.json";
import { default as WithdrawlassetsScriptJson } from "../scripts/Withdrawlassets.ral.json";

export const Buildtoken = new ExecutableScript<{
  contract: HexString;
  symbol: HexString;
  name: HexString;
  decimals: bigint;
  tokenTotal: bigint;
}>(Script.fromJson(BuildtokenScriptJson));
export const Burn = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(BurnScriptJson));
export const Buyvirl = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(BuyvirlScriptJson));
export const CreateOpenCollection = new ExecutableScript<{
  openCollectionTemplateId: HexString;
  nftTemplateId: HexString;
  collectionUri: HexString;
  collectionOwner: Address;
  totalSupply: bigint;
}>(Script.fromJson(CreateOpenCollectionScriptJson));
export const CreateOpenCollectionWithRoyalty = new ExecutableScript<{
  openCollectionWithRoyaltyTemplateId: HexString;
  nftTemplateId: HexString;
  collectionUri: HexString;
  collectionOwner: Address;
  royaltyRate: bigint;
  totalSupply: bigint;
}>(Script.fromJson(CreateOpenCollectionWithRoyaltyScriptJson));
export const CreatePublicSaleCollectionSequential = new ExecutableScript<{
  publicSaleCollectionTemplateId: HexString;
  nftTemplateId: HexString;
  collectionUri: HexString;
  nftBaseUri: HexString;
  collectionOwner: Address;
  maxSupply: bigint;
  mintPrice: bigint;
  maxBatchMintSize: bigint;
  totalSupply: bigint;
}>(Script.fromJson(CreatePublicSaleCollectionSequentialScriptJson));
export const CreatePublicSaleCollectionSequentialWithRoyalty =
  new ExecutableScript<{
    publicSaleCollectionTemplateId: HexString;
    nftTemplateId: HexString;
    collectionUri: HexString;
    nftBaseUri: HexString;
    collectionOwner: Address;
    maxSupply: bigint;
    mintPrice: bigint;
    maxBatchMintSize: bigint;
    royaltyRate: bigint;
    totalSupply: bigint;
  }>(
    Script.fromJson(CreatePublicSaleCollectionSequentialWithRoyaltyScriptJson)
  );
export const Destroy = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(DestroyScriptJson)
);
export const Destroytoken = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(DestroytokenScriptJson)
);
export const Editfee = new ExecutableScript<{
  contract: HexString;
  edit: bigint;
}>(Script.fromJson(EditfeeScriptJson));
export const Gettoken = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(GettokenScriptJson));
export const MintBatchSequential = new ExecutableScript<{
  nftCollectionId: HexString;
  batchSize: bigint;
  mintPrice: bigint;
  royalty: boolean;
}>(Script.fromJson(MintBatchSequentialScriptJson));
export const MintNextSequential = new ExecutableScript<{
  nftCollectionId: HexString;
  mintPrice: bigint;
  royalty: boolean;
}>(Script.fromJson(MintNextSequentialScriptJson));
export const MintOpenNFT = new ExecutableScript<{
  nftCollectionId: HexString;
  uri: HexString;
  royalty: boolean;
}>(Script.fromJson(MintOpenNFTScriptJson));
export const MintSpecific = new ExecutableScript<{
  index: bigint;
  mintPrice: bigint;
  nftCollectionId: HexString;
  royalty: boolean;
}>(Script.fromJson(MintSpecificScriptJson));
export const Reedeemalph = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(ReedeemalphScriptJson));
export const Sellvirl = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(SellvirlScriptJson));
export const Sendout = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(SendoutScriptJson));
export const Topup = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(TopupScriptJson));
export const WithdrawFromOpenCollection = new ExecutableScript<{
  to: Address;
  amount: bigint;
  nftCollectionId: HexString;
  royalty: boolean;
}>(Script.fromJson(WithdrawFromOpenCollectionScriptJson));
export const WithdrawFromPublicSaleCollectionRandom = new ExecutableScript<{
  to: Address;
  amount: bigint;
  nftCollectionId: HexString;
  royalty: boolean;
}>(Script.fromJson(WithdrawFromPublicSaleCollectionRandomScriptJson));
export const WithdrawFromPublicSaleCollectionSequential = new ExecutableScript<{
  to: Address;
  amount: bigint;
  nftCollectionId: HexString;
  royalty: boolean;
}>(Script.fromJson(WithdrawFromPublicSaleCollectionSequentialScriptJson));
export const Withdrawlassets = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(WithdrawlassetsScriptJson)
);
