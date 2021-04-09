import {useApi} from './useApi'
import { AccountInfo } from "@polkadot/types/interfaces";
import { useEffect, useState} from "react";

export function useAccountInfo(account: string): AccountInfo | null {
    const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null);
    const { api, isApiReady } = useApi();
  
    useEffect(() => {
      const fetchData = async () => {
        const info = await api.query.system.account(account);
        setAccountInfo(info);
      };
  
      if (isApiReady) {
        fetchData();
      }
    }, [account, isApiReady]);
  
    useEffect(() => {
      if (isApiReady) {
        let unsubscribe = api.rpc.chain.subscribeFinalizedHeads(async header => {
          const info = await api.query.system.account(account);
          setAccountInfo(info);
        });
  
        return () => {
          (async () => await unsubscribe)();
        };
      }
      return () => {};
    }, [account, isApiReady]);
  
    return accountInfo;
  }