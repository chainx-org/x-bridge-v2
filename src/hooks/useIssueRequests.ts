import { AccountId, Balance, BlockNumber } from "@polkadot/types/interfaces";
import { createContext } from "react";
import type { BtcAddress, IssueRequest, RequestId } from "../interfaces";

export interface IssueRequestRow {
  readonly id: RequestId;
  readonly vault: AccountId;
  readonly openTime: BlockNumber;
  readonly requester: AccountId;
  readonly btcAddress: BtcAddress;
  readonly btcAmount: Balance;
  readonly griefingCollateral: Balance;
}

interface IssueRequestsContextProps {
  requests: IssueRequestRow[];
}

export const IssueRequestsContext = createContext(
  ({} as unknown) as IssueRequestsContextProps
);
