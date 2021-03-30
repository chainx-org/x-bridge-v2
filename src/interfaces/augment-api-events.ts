// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Vec, bool, u32 } from "@polkadot/types";
import type {
  AssetType,
  BtcTxState,
  Chain,
  GenericTrusteeIntentionProps,
  GenericTrusteeSessionInfo,
  OrderExecutedInfo,
  PriceFluctuation,
  TradingPairId,
  TradingPairProfile,
  WithdrawalRecord,
  WithdrawalRecordId,
  WithdrawalState,
} from "./chainx";
import type {
  BlockNumberFor,
  BtcAddress,
  RequestId,
  TradingPrice,
} from "./xGatewayBitcoinV2";
import type { SessionIndex } from "@polkadot/types/interfaces/session";
import type { Order } from "@polkadot/types/interfaces/parachains";
import type {
  AccountId,
  AssetId,
  Balance,
  BalanceOf,
  H256,
  Percent,
} from "@polkadot/types/interfaces/runtime";
import type { ApiTypes } from "@polkadot/api/types";

declare module "@polkadot/api/types/events" {
  export interface AugmentedEvents<ApiType> {
    xAssets: {
      /**
       * Set asset balance of an account by root. [asset_id, who, asset_type, amount]
       **/
      BalanceSet: AugmentedEvent<
        ApiType,
        [AssetId, AccountId, AssetType, Balance]
      >;
      /**
       * Some balances of an asset were destoryed. [asset_id, who, amount]
       **/
      Destroyed: AugmentedEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * New balances of an asset were issued. [asset_id, receiver, amount]
       **/
      Issued: AugmentedEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * Some balances of an asset was moved from one to another. [asset_id, from, from_type, to, to_type, amount]
       **/
      Moved: AugmentedEvent<
        ApiType,
        [AssetId, AccountId, AssetType, AccountId, AssetType, Balance]
      >;
    };
    xAssetsRegistrar: {
      /**
       * An asset was deregistered. [asset_id]
       **/
      Deregistered: AugmentedEvent<ApiType, [AssetId]>;
      /**
       * A deregistered asset was recovered. [asset_id, has_mining_rights]
       **/
      Recovered: AugmentedEvent<ApiType, [AssetId, bool]>;
      /**
       * A new asset was registered. [asset_id, has_mining_rights]
       **/
      Registered: AugmentedEvent<ApiType, [AssetId, bool]>;
    };
    xGatewayBitcoin: {
      /**
       * An account deposited some token. [tx_hash, who, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [H256, AccountId, Balance]>;
      /**
       * A Bitcoin header was validated and inserted. [btc_header_hash]
       **/
      HeaderInserted: AugmentedEvent<ApiType, [H256]>;
      /**
       * A unclaimed deposit record was removed. [depositor, deposit_amount, tx_hash, btc_address]
       **/
      PendingDepositRemoved: AugmentedEvent<
        ApiType,
        [AccountId, Balance, H256, BtcAddress]
      >;
      /**
       * A Bitcoin transaction was processed. [tx_hash, block_hash, tx_state]
       **/
      TxProcessed: AugmentedEvent<ApiType, [H256, H256, BtcTxState]>;
      /**
       * A new record of unclaimed deposit. [tx_hash, btc_address]
       **/
      UnclaimedDeposit: AugmentedEvent<ApiType, [H256, BtcAddress]>;
      /**
       * A fatal error happened during the withdrwal process. [tx_hash, proposal_hash]
       **/
      WithdrawalFatalErr: AugmentedEvent<ApiType, [H256, H256]>;
      /**
       * The proposal has been processed successfully and is waiting for broadcasting. [tx_hash]
       **/
      WithdrawalProposalCompleted: AugmentedEvent<ApiType, [H256]>;
      /**
       * A new withdrawal proposal was created. [proposer, withdrawal_ids]
       **/
      WithdrawalProposalCreated: AugmentedEvent<ApiType, [AccountId, Vec<u32>]>;
      /**
       * A withdrawal proposal was dropped. [reject_count, total_count, withdrawal_ids]
       **/
      WithdrawalProposalDropped: AugmentedEvent<ApiType, [u32, u32, Vec<u32>]>;
      /**
       * A trustee voted/vetoed a withdrawal proposal. [trustee, vote_status]
       **/
      WithdrawalProposalVoted: AugmentedEvent<ApiType, [AccountId, bool]>;
      /**
       * A list of withdrawal applications were processed successfully. [tx_hash, withdrawal_ids, total_withdrawn]
       **/
      Withdrawn: AugmentedEvent<ApiType, [H256, Vec<u32>, Balance]>;
    };
    xGatewayBitcoinV2: {
      /**
       * The collateral was released to the user successfully. [who, amount]
       **/
      BridgeCollateralReleased: AugmentedEvent<ApiType, [AccountId, BalanceOf]>;
      /**
       * Vault released collateral.
       **/
      CollateralReleased: AugmentedEvent<ApiType, [AccountId, BalanceOf]>;
      /**
       * Collateral was slashed. [from, to, amount]
       **/
      CollateralSlashed: AugmentedEvent<
        ApiType,
        [AccountId, AccountId, BalanceOf]
      >;
      /**
       * Update `ExchangeRateExpiredPeriod`
       **/
      ExchangeRateExpiredPeriodForceUpdated: AugmentedEvent<
        ApiType,
        [BlockNumberFor]
      >;
      /**
       * Update exchange rate by root
       **/
      ExchangeRateForceUpdated: AugmentedEvent<ApiType, [TradingPrice]>;
      /**
       * Update exchange rate by oracle
       **/
      ExchangeRateUpdated: AugmentedEvent<ApiType, [AccountId, TradingPrice]>;
      /**
       * Extra collateral was added to a vault.
       **/
      ExtraCollateralAdded: AugmentedEvent<ApiType, [AccountId, BalanceOf]>;
      /**
       * Root updated `IssueGriefingFee`.
       **/
      GriefingFeeUpdated: AugmentedEvent<ApiType, [Percent]>;
      /**
       * `IssueRequest` cancelled.`
       **/
      IssueRequestCancelled: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * `IssueRequest` excuted.
       **/
      IssueRequestExecuted: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * An issue request was submitted and waiting user to excute.
       **/
      NewIssueRequest: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Redeem request is accepted
       **/
      NewRedeemRequest: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Update oracles by root
       **/
      OracleForceUpdated: AugmentedEvent<ApiType, [Vec<AccountId>]>;
      /**
       * Cancel redeem is accepted
       **/
      RedeemCancelled: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Execute redeem is accepted
       **/
      RedeemExecuted: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * New vault has been registered.
       **/
      VaultRegistered: AugmentedEvent<ApiType, [AccountId, BalanceOf]>;
    };
    xGatewayCommon: {
      /**
       * An account set its referral_account of some chain. [who, chain, referral_account]
       **/
      ReferralBinded: AugmentedEvent<ApiType, [AccountId, Chain, AccountId]>;
      /**
       * A (potential) trustee set the required properties. [who, chain, trustee_props]
       **/
      SetTrusteeProps: AugmentedEvent<
        ApiType,
        [AccountId, Chain, GenericTrusteeIntentionProps]
      >;
      /**
       * The trustee set of a chain was changed. [chain, session_number, session_info]
       **/
      TrusteeSetChanged: AugmentedEvent<
        ApiType,
        [Chain, u32, GenericTrusteeSessionInfo]
      >;
    };
    xGatewayRecords: {
      /**
       * An account deposited some asset. [who, asset_id, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [AccountId, AssetId, Balance]>;
      /**
       * A withdrawal proposal was canceled. [withdrawal_id, withdrawal_state]
       **/
      WithdrawalCanceled: AugmentedEvent<
        ApiType,
        [WithdrawalRecordId, WithdrawalState]
      >;
      /**
       * A withdrawal application was created. [withdrawal_id, record_info]
       **/
      WithdrawalCreated: AugmentedEvent<
        ApiType,
        [WithdrawalRecordId, WithdrawalRecord]
      >;
      /**
       * A withdrawal proposal was finished successfully. [withdrawal_id, withdrawal_state]
       **/
      WithdrawalFinished: AugmentedEvent<
        ApiType,
        [WithdrawalRecordId, WithdrawalState]
      >;
      /**
       * A withdrawal proposal was processed. [withdrawal_id]
       **/
      WithdrawalProcessed: AugmentedEvent<ApiType, [WithdrawalRecordId]>;
      /**
       * A withdrawal proposal was recovered. [withdrawal_id]
       **/
      WithdrawalRecovered: AugmentedEvent<ApiType, [WithdrawalRecordId]>;
    };
    xMiningAsset: {
      /**
       * An asset miner claimed the mining reward. [claimer, asset_id, amount]
       **/
      Claimed: AugmentedEvent<ApiType, [AccountId, AssetId, Balance]>;
      /**
       * Issue new balance to the reward pot. [reward_pot_account, amount]
       **/
      Minted: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    xSpot: {
      /**
       * There is an update to the order due to it gets canceled. [order_info]
       **/
      CanceledOrderUpdated: AugmentedEvent<ApiType, [Order]>;
      /**
       * There was an update to the order due to it gets executed. [maker_order_info]
       **/
      MakerOrderUpdated: AugmentedEvent<ApiType, [Order]>;
      /**
       * A new order was created. [order_info]
       **/
      NewOrder: AugmentedEvent<ApiType, [Order]>;
      /**
       * Overall information about the maker and taker orders when there was an order execution. [order_executed_info]
       **/
      OrderExecuted: AugmentedEvent<ApiType, [OrderExecutedInfo]>;
      /**
       * Price fluctuation of trading pair has been updated. [pair_id, price_fluctuation]
       **/
      PriceFluctuationUpdated: AugmentedEvent<
        ApiType,
        [TradingPairId, PriceFluctuation]
      >;
      /**
       * There was an update to the order due to it gets executed. [taker_order_info]
       **/
      TakerOrderUpdated: AugmentedEvent<ApiType, [Order]>;
      /**
       * A new trading pair is added. [pair_profile]
       **/
      TradingPairAdded: AugmentedEvent<ApiType, [TradingPairProfile]>;
      /**
       * Trading pair profile has been updated. [pair_profile]
       **/
      TradingPairUpdated: AugmentedEvent<ApiType, [TradingPairProfile]>;
    };
    xStaking: {
      /**
       * A nominator bonded to the validator this amount. [nominator, validator, amount]
       **/
      Bonded: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A nominator claimed the staking dividend. [nominator, validator, dividend]
       **/
      Claimed: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Unlock the unbonded withdrawal by force. [account]
       **/
      ForceAllWithdrawn: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Offenders were forcibly to be chilled due to insufficient reward pot balance. [session_index, chilled_validators]
       **/
      ForceChilled: AugmentedEvent<ApiType, [SessionIndex, Vec<AccountId>]>;
      /**
       * Issue new balance to this account. [account, reward_amount]
       **/
      Minted: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A nominator switched the vote from one validator to another. [nominator, from, to, amount]
       **/
      Rebonded: AugmentedEvent<
        ApiType,
        [AccountId, AccountId, AccountId, Balance]
      >;
      /**
       * A validator (and its reward pot) was slashed. [validator, slashed_amount]
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A nominator unbonded this amount. [nominator, validator, amount]
       **/
      Unbonded: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * The nominator withdrew the locked balance from the unlocking queue. [nominator, amount]
       **/
      Withdrawn: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    xSystem: {
      /**
       * An account was added to the blacklist. [who]
       **/
      Blacklisted: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An account was removed from the blacklist. [who]
       **/
      Unblacklisted: AugmentedEvent<ApiType, [AccountId]>;
    };
    xTransactionFee: {
      /**
       * Transaction fee was paid to the block author and its reward pot in 1:9.
       * [author, author_fee, reward_pot, reward_pot_fee]
       **/
      FeePaid: AugmentedEvent<
        ApiType,
        [AccountId, Balance, AccountId, Balance]
      >;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes>
    extends AugmentedEvents<ApiType> {}
}
