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
import { default as TokenswapContractJson } from "../swaps/Tokenswap.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace TokenswapTypes {
  export type Fields = {
    contract: HexString;
    owner: Address;
    pacafee: bigint;
    alphfee: bigint;
    feeToken: HexString;
  };

  export type State = ContractState<Fields>;

  export type SwapCreatedEvent = ContractEvent<{
    creator: Address;
    tokenOffered: HexString;
    tokenWanted: HexString;
    swap: HexString;
  }>;
  export type DestroyEvent = ContractEvent<{ caller: Address }>;
  export type PacaFeeChangeEvent = ContractEvent<{ pacafee: bigint }>;
  export type AlphFeeChangeEvent = ContractEvent<{ alphfee: bigint }>;

  export interface CallMethodTable {
    getPacaToken: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getPacaFee: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getAlphFee: {
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
  TokenswapInstance,
  TokenswapTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as TokenswapTypes.Fields;
  }

  eventIndex = {
    SwapCreated: 0,
    Destroy: 1,
    PacaFeeChange: 2,
    AlphFeeChange: 3,
  };
  consts = { ErrorCodes: { InvalidCaller: BigInt(1) } };

  at(address: string): TokenswapInstance {
    return new TokenswapInstance(address);
  }

  tests = {
    getPacaToken: async (
      params: Omit<TestContractParams<TokenswapTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getPacaToken", params);
    },
    getPacaFee: async (
      params: Omit<TestContractParams<TokenswapTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getPacaFee", params);
    },
    getAlphFee: async (
      params: Omit<TestContractParams<TokenswapTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getAlphFee", params);
    },
    getSymbol: async (
      params: Omit<TestContractParams<TokenswapTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getSymbol", params);
    },
    getName: async (
      params: Omit<TestContractParams<TokenswapTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getName", params);
    },
    createswappaca: async (
      params: TestContractParams<
        TokenswapTypes.Fields,
        {
          tokenOffered: HexString;
          tokenOfferedAmt: bigint;
          tokenWanted: HexString;
          tokenWantedAmt: bigint;
        }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "createswappaca", params);
    },
    createswapalph: async (
      params: TestContractParams<
        TokenswapTypes.Fields,
        {
          tokenOffered: HexString;
          tokenOfferedAmt: bigint;
          tokenWanted: HexString;
          tokenWantedAmt: bigint;
        }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "createswapalph", params);
    },
    feepaca: async (
      params: TestContractParams<TokenswapTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "feepaca", params);
    },
    feealph: async (
      params: TestContractParams<TokenswapTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "feealph", params);
    },
    destroytokenswap: async (
      params: Omit<TestContractParams<TokenswapTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "destroytokenswap", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Tokenswap = new Factory(
  Contract.fromJson(
    TokenswapContractJson,
    "",
    "6e34a577621f081f98be619be483ad8e7b69805bf7ae1a0fcf56ff1bfee9a5a5"
  )
);

// Use this class to interact with the blockchain
export class TokenswapInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<TokenswapTypes.State> {
    return fetchContractState(Tokenswap, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeSwapCreatedEvent(
    options: EventSubscribeOptions<TokenswapTypes.SwapCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Tokenswap.contract,
      this,
      options,
      "SwapCreated",
      fromCount
    );
  }

  subscribeDestroyEvent(
    options: EventSubscribeOptions<TokenswapTypes.DestroyEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Tokenswap.contract,
      this,
      options,
      "Destroy",
      fromCount
    );
  }

  subscribePacaFeeChangeEvent(
    options: EventSubscribeOptions<TokenswapTypes.PacaFeeChangeEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Tokenswap.contract,
      this,
      options,
      "PacaFeeChange",
      fromCount
    );
  }

  subscribeAlphFeeChangeEvent(
    options: EventSubscribeOptions<TokenswapTypes.AlphFeeChangeEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Tokenswap.contract,
      this,
      options,
      "AlphFeeChange",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | TokenswapTypes.SwapCreatedEvent
      | TokenswapTypes.DestroyEvent
      | TokenswapTypes.PacaFeeChangeEvent
      | TokenswapTypes.AlphFeeChangeEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      Tokenswap.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getPacaToken: async (
      params?: TokenswapTypes.CallMethodParams<"getPacaToken">
    ): Promise<TokenswapTypes.CallMethodResult<"getPacaToken">> => {
      return callMethod(
        Tokenswap,
        this,
        "getPacaToken",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getPacaFee: async (
      params?: TokenswapTypes.CallMethodParams<"getPacaFee">
    ): Promise<TokenswapTypes.CallMethodResult<"getPacaFee">> => {
      return callMethod(
        Tokenswap,
        this,
        "getPacaFee",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getAlphFee: async (
      params?: TokenswapTypes.CallMethodParams<"getAlphFee">
    ): Promise<TokenswapTypes.CallMethodResult<"getAlphFee">> => {
      return callMethod(
        Tokenswap,
        this,
        "getAlphFee",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getSymbol: async (
      params?: TokenswapTypes.CallMethodParams<"getSymbol">
    ): Promise<TokenswapTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        Tokenswap,
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: TokenswapTypes.CallMethodParams<"getName">
    ): Promise<TokenswapTypes.CallMethodResult<"getName">> => {
      return callMethod(
        Tokenswap,
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends TokenswapTypes.MultiCallParams>(
    calls: Calls
  ): Promise<TokenswapTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Tokenswap,
      this,
      calls,
      getContractByCodeHash
    )) as TokenswapTypes.MultiCallResults<Calls>;
  }
}