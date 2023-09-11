/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as SwapofferContractJson } from "../swaps/Swapoffer.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace SwapofferTypes {
  export type Fields = {
    owner: Address;
    tokenOffered: HexString;
    tokenWanted: HexString;
    offered: bigint;
    wanted: bigint;
  };

  export type State = ContractState<Fields>;

  export type OfferCanceledEvent = ContractEvent<{
    creator: Address;
    id: HexString;
  }>;
  export type OfferCompletedEvent = ContractEvent<{
    creator: Address;
    user: Address;
    id: HexString;
  }>;

  export interface CallMethodTable {
    getOfferedToken: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getWantedToken: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getOfferedAmt: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getWantedAmt: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getSymbol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getName: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  SwapofferInstance,
  SwapofferTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as SwapofferTypes.Fields;
  }

  eventIndex = { OfferCanceled: 0, OfferCompleted: 1 };
  consts = { ErrorCodes: { InvalidCaller: BigInt(1) } };

  at(address: string): SwapofferInstance {
    return new SwapofferInstance(address);
  }

  tests = {
    getOfferedToken: async (
      params: Omit<TestContractParams<SwapofferTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getOfferedToken", params);
    },
    getWantedToken: async (
      params: Omit<TestContractParams<SwapofferTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getWantedToken", params);
    },
    getOfferedAmt: async (
      params: Omit<TestContractParams<SwapofferTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getOfferedAmt", params);
    },
    getWantedAmt: async (
      params: Omit<TestContractParams<SwapofferTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getWantedAmt", params);
    },
    getSymbol: async (
      params: Omit<TestContractParams<SwapofferTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getSymbol", params);
    },
    getName: async (
      params: Omit<TestContractParams<SwapofferTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getName", params);
    },
    acceptswap: async (
      params: Omit<TestContractParams<SwapofferTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "acceptswap", params);
    },
    cancelswap: async (
      params: Omit<TestContractParams<SwapofferTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "cancelswap", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Swapoffer = new Factory(
  Contract.fromJson(
    SwapofferContractJson,
    "",
    "eff58254ad637e2e6ad3b4abe749845e19f310d334187b7c585ea2ccbaa9523e"
  )
);

// Use this class to interact with the blockchain
export class SwapofferInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<SwapofferTypes.State> {
    return fetchContractState(Swapoffer, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeOfferCanceledEvent(
    options: EventSubscribeOptions<SwapofferTypes.OfferCanceledEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Swapoffer.contract,
      this,
      options,
      "OfferCanceled",
      fromCount
    );
  }

  subscribeOfferCompletedEvent(
    options: EventSubscribeOptions<SwapofferTypes.OfferCompletedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Swapoffer.contract,
      this,
      options,
      "OfferCompleted",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      SwapofferTypes.OfferCanceledEvent | SwapofferTypes.OfferCompletedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      Swapoffer.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getOfferedToken: async (
      params?: SwapofferTypes.CallMethodParams<"getOfferedToken">
    ): Promise<SwapofferTypes.CallMethodResult<"getOfferedToken">> => {
      return callMethod(
        Swapoffer,
        this,
        "getOfferedToken",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getWantedToken: async (
      params?: SwapofferTypes.CallMethodParams<"getWantedToken">
    ): Promise<SwapofferTypes.CallMethodResult<"getWantedToken">> => {
      return callMethod(
        Swapoffer,
        this,
        "getWantedToken",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getOfferedAmt: async (
      params?: SwapofferTypes.CallMethodParams<"getOfferedAmt">
    ): Promise<SwapofferTypes.CallMethodResult<"getOfferedAmt">> => {
      return callMethod(
        Swapoffer,
        this,
        "getOfferedAmt",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getWantedAmt: async (
      params?: SwapofferTypes.CallMethodParams<"getWantedAmt">
    ): Promise<SwapofferTypes.CallMethodResult<"getWantedAmt">> => {
      return callMethod(
        Swapoffer,
        this,
        "getWantedAmt",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getSymbol: async (
      params?: SwapofferTypes.CallMethodParams<"getSymbol">
    ): Promise<SwapofferTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        Swapoffer,
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: SwapofferTypes.CallMethodParams<"getName">
    ): Promise<SwapofferTypes.CallMethodResult<"getName">> => {
      return callMethod(
        Swapoffer,
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends SwapofferTypes.MultiCallParams>(
    calls: Calls
  ): Promise<SwapofferTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Swapoffer,
      this,
      calls,
      getContractByCodeHash
    )) as SwapofferTypes.MultiCallResults<Calls>;
  }
}