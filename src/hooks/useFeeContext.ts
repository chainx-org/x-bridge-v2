import {createContext, useContext, useState} from "react";
import { TradingPrice } from "../interfaces/types";
import type {Percent} from "@polkadot/types/interfaces/runtime";
interface FeeContextProps {
  exchangeRate: TradingPrice;
  percent: Percent;
  pcxPrice: number
}

export const FeeContext = createContext(({} as unknown) as FeeContextProps);
export const useFeeContext = () => useContext(FeeContext);