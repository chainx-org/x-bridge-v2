import { createContext, useContext } from "react";
import { TradingPrice } from "../interfaces/types";
interface FeeContextProps {
  exchangeRate: TradingPrice;
}

export const FeeContext = createContext(({} as unknown) as FeeContextProps);
export const useFeeContext = () => useContext(FeeContext);
