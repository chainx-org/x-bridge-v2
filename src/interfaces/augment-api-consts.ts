// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { u16, u32 } from "@polkadot/types";
import type { BlockNumberFor } from "./xGatewayBitcoinV2";
import type { BalanceOf } from "@polkadot/types/interfaces/runtime";
import type { ApiTypes } from "@polkadot/api/types";

declare module "@polkadot/api/types/consts" {
  export interface AugmentedConsts<ApiType> {
    xGatewayBitcoinV2: {
      /**
       * Lower bound of vault's collateral.
       **/
      dustCollateral: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Duration from `ExchangeRate` last updated to expired.
       **/
      exchangeRateExpiredPeriod: BlockNumberFor & AugmentedConst<ApiType>;
      /**
       * Vault will be liquidated if his collateral ratio lower than this.
       *
       * See also [liquidating](#Liquidating)
       **/
      liquidationThreshold: u16 & AugmentedConst<ApiType>;
      /**
       * Vault needs to pay additional fee to redeemer when his collateral ratio is below than
       * this.
       **/
      premiumThreshold: u16 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of btc that is accepted for redeem requests; any lower values would
       * risk the bitcoin client to reject the payment
       **/
      redeemBtcDustValue: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Vault considered as secure when his collateral ratio is upper than this.
       **/
      secureThreshold: u16 & AugmentedConst<ApiType>;
    };
    xStaking: {
      /**
       * The maximum byte length of referral id.
       **/
      maximumReferralId: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum byte length of referral id.
       **/
      minimumReferralId: u32 & AugmentedConst<ApiType>;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes>
    extends AugmentedConsts<ApiType> {}
}
