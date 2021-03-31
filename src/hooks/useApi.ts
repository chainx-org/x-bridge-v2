import { ApiPromise } from "@polkadot/api";
import { createContext, useContext } from "react";
// import definitions from "../interfaces";

export interface ApiInfo {
  api: ApiPromise;
  isApiReady: boolean;
}

// const types = Object.values(definitions).reduce(
//   (res, { types }) => ({ ...res, ...types }),
//   {}
// );

export const ApiContext = createContext(({} as unknown) as ApiInfo);

export const useApi = () => useContext(ApiContext);
