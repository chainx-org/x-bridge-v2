import { AccountId } from "@polkadot/types/interfaces";
import { createModel } from "hox";
import { useState } from "react";

export interface AccountInfo {
  name?: string;
  address: string;
}

function useAccount() {
  const [accounts, setAccounts] = useState<AccountInfo[]>([]);
  const [currentAccount, setCurrentAccount] = useState<AccountInfo | null>();
  return {
    accounts,
    setAccounts,
    currentAccount,
    setCurrentAccount,
  };
}

export default createModel(useAccount);
