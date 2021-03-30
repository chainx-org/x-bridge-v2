import { Balance } from "@polkadot/types/interfaces";
import { useContext, useEffect, useState } from "react";
import { FeeContext } from "./useFeeContext";

export const useRatio = (
  btc: Balance | undefined,
  collateral: Balance | undefined
) => {
  const { exchangeRate } = useContext(FeeContext);
  const [ratio, setRatio] = useState(NaN);

  useEffect(() => {
    if (!btc || !collateral) {
      setRatio(NaN);
    } else {
      const btcInPcx = btc
        .muln(Math.pow(10, exchangeRate.decimal.toNumber()))
        .div(exchangeRate.price);
      setRatio(collateral.div(btcInPcx).toNumber() * 100);
    }
  }, [btc, collateral]);
  return ratio;
};
