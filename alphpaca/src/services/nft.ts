import {
  addressFromTokenId,
  NFTMetaData
} from "@alephium/web3"
import axios from "axios"
import { NFT } from "../../artifacts/ts"

export interface NFT {
  name: string,
  description: string,
  image: string,
  tokenId: string,
  listed: boolean,
  minted: boolean,
  nftIndex: number
  collectionId: string,
  price?: bigint,
}