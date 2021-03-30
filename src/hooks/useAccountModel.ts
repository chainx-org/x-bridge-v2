import { AccountId } from "@polkadot/types/interfaces";
import { createModel } from "hox";
import { useState } from "react";

function useAccount() {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [currentAccount, setCurrentAccount] = useState<string | null>();
  return {
    accounts,
    setAccounts,
    currentAccount,
    setCurrentAccount,
  };
}

export default createModel(useAccount);
