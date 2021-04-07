// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type {
  BTreeMap,
  Bytes,
  Compact,
  Option,
  Text,
  Vec,
  bool,
  u32,
  u64,
} from "@polkadot/types";
import type { AnyNumber, ITuple } from "@polkadot/types/types";
import type {
  AddrStr,
  AssetInfo,
  AssetRestrictions,
  AssetType,
  BtcHeaderIndex,
  BtcRelayedTxInfo,
  Chain,
  CurrencyPair,
  Desc,
  FixedAssetPower,
  Handicap,
  Memo,
  OrderId,
  OrderType,
  Price,
  PriceFluctuation,
  ReferralId,
  Side,
  StakingRequirement,
  Token,
  TradingPairId,
  TrusteeInfoConfig,
  UnbondedIndex,
  WithdrawalRecordId,
  WithdrawalState,
} from "./chainx";
import type { BtcAddress, RequestId, TradingPrice } from "./xGatewayBitcoinV2";
import type { Extrinsic } from "@polkadot/types/interfaces/extrinsics";
import type {
  AccountId,
  AssetId,
  BalanceOf,
  BlockNumber,
  Call,
  LookupSource,
  Percent,
} from "@polkadot/types/interfaces/runtime";
import type { SessionIndex } from "@polkadot/types/interfaces/session";
import type { ApiTypes, SubmittableExtrinsic } from "@polkadot/api/types";

declare module "@polkadot/api/types/submittable" {
  export interface AugmentedSubmittables<ApiType> {
    xAssets: {
      /**
       * for transfer by root
       **/
      forceTransfer: AugmentedSubmittable<
        (
          transactor:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          dest:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          value: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, LookupSource, Compact<AssetId>, Compact<BalanceOf>]
      >;
      setAssetLimit: AugmentedSubmittable<
        (
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          restrictions: AssetRestrictions | { bits?: any } | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, AssetRestrictions]
      >;
      /**
       * set free token for an account
       **/
      setBalance: AugmentedSubmittable<
        (
          who:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          balances: BTreeMap<AssetType, BalanceOf>
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<AssetId>, BTreeMap<AssetType, BalanceOf>]
      >;
      /**
       * transfer between account
       **/
      transfer: AugmentedSubmittable<
        (
          dest:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          value: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<AssetId>, Compact<BalanceOf>]
      >;
    };
    xAssetsRegistrar: {
      /**
       * Deregister an asset with given `id`.
       *
       * This asset will be marked as invalid.
       *
       * This is a root-only operation.
       **/
      deregister: AugmentedSubmittable<
        (
          id: Compact<AssetId> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>]
      >;
      /**
       * Recover a deregister asset to the valid state.
       *
       * `RegistrarHandler::on_register()` will be triggered again during the recover process.
       *
       * This is a root-only operation.
       **/
      recover: AugmentedSubmittable<
        (
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          hasMiningRights: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, bool]
      >;
      /**
       * Register a new foreign asset.
       *
       * This is a root-only operation.
       **/
      register: AugmentedSubmittable<
        (
          assetId: Compact<AssetId> | AnyNumber | Uint8Array,
          asset:
            | AssetInfo
            | {
                token?: any;
                tokenName?: any;
                chain?: any;
                decimals?: any;
                desc?: any;
              }
            | string
            | Uint8Array,
          isOnline: bool | boolean | Uint8Array,
          hasMiningRights: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, AssetInfo, bool, bool]
      >;
      /**
       * Update the asset info, all the new fields are optional.
       *
       * This is a root-only operation.
       **/
      updateAssetInfo: AugmentedSubmittable<
        (
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          token: Option<Token> | null | object | string | Uint8Array,
          tokenName: Option<Token> | null | object | string | Uint8Array,
          desc: Option<Desc> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, Option<Token>, Option<Token>, Option<Desc>]
      >;
    };
    xGatewayBitcoin: {
      /**
       * Trustee create a proposal for a withdrawal list. `tx` is the proposal withdrawal transaction.
       * The `tx` would have a sign for current creator or do not have sign. if creator do not sign
       * for this transaction, he could do `sign_withdraw_tx` later.
       **/
      createWithdrawTx: AugmentedSubmittable<
        (
          withdrawalIdList: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
          tx: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<u32>, Bytes]
      >;
      /**
       * Dangerous! force replace current withdrawal proposal transaction. Please check business
       * logic before do this operation. Must make sure current proposal transaction is invalid
       * (e.g. when created a proposal, the inputs are not in double spend state, but after other
       * trustees finish signing, the inputs are in double spend due other case. Thus could create
       * a new valid transaction which outputs same to current proposal to replace current proposal
       * transaction.)
       **/
      forceReplaceProposalTx: AugmentedSubmittable<
        (tx: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * if use `BtcHeader` struct would export in metadata, cause complex in front-end
       **/
      pushHeader: AugmentedSubmittable<
        (header: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * if use `RelayTx` struct would export in metadata, cause complex in front-end
       **/
      pushTransaction: AugmentedSubmittable<
        (
          rawTx: Bytes | string | Uint8Array,
          relayedInfo:
            | BtcRelayedTxInfo
            | { blockHash?: any; merkleProof?: any }
            | string
            | Uint8Array,
          prevTx: Option<Bytes> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Bytes, BtcRelayedTxInfo, Option<Bytes>]
      >;
      /**
       * Allow root or trustees could remove pending deposits for an address and decide whether
       * deposit to an account id. if pass `None` to `who`, would just remove pendings, if pass
       * Some, would deposit to this account id.
       **/
      removePending: AugmentedSubmittable<
        (
          addr: BtcAddress | string,
          who: Option<AccountId> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BtcAddress, Option<AccountId>]
      >;
      /**
       * Dangerous! remove current withdrawal proposal directly. Please check business logic before
       * do this operation.
       **/
      removeProposal: AugmentedSubmittable<
        () => SubmittableExtrinsic<ApiType>,
        []
      >;
      /**
       * Dangerous! Be careful to set BestIndex
       **/
      setBestIndex: AugmentedSubmittable<
        (
          index:
            | BtcHeaderIndex
            | { hash?: any; height?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BtcHeaderIndex]
      >;
      /**
       * Set bitcoin deposit limit
       **/
      setBtcDepositLimit: AugmentedSubmittable<
        (
          value: Compact<u64> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u64>]
      >;
      /**
       * Set bitcoin withdrawal fee
       **/
      setBtcWithdrawalFee: AugmentedSubmittable<
        (
          fee: Compact<u64> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u64>]
      >;
      /**
       * Dangerous! Be careful to set ConfirmedIndex
       **/
      setConfirmedIndex: AugmentedSubmittable<
        (
          index:
            | BtcHeaderIndex
            | { hash?: any; height?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BtcHeaderIndex]
      >;
      /**
       * Trustees sign a withdrawal proposal. If `tx` is None, means this trustee vote to reject
       * this proposal. If `tx` is Some(), the inner part must be a valid transaction with this
       * trustee signature.
       **/
      signWithdrawTx: AugmentedSubmittable<
        (
          tx: Option<Bytes> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Option<Bytes>]
      >;
    };
    xGatewayBitcoinV2: {
      /**
       * Add extra collateral for registered vault.
       **/
      addExtraCollateral: AugmentedSubmittable<
        (
          collateral: BalanceOf | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BalanceOf]
      >;
      cancelIssue: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId]
      >;
      /**
       * Cancel a `RedeemRequest` when it has been expired.
       *
       * Call the extrinsic while request ain't expired will cause `RedeemRequestNotExpired`
       * error.
       **/
      cancelRedeem: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array,
          reimburse: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId, bool]
      >;
      /**
       * Execute issue request in `IssueRequests`. It verifies `tx` provided and marks
       * `IssueRequest` as completed.
       *
       * The execute_issue can only called by signed origin.
       **/
      executeIssue: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array,
          txId: Bytes | string | Uint8Array,
          merkleProof: Bytes | string | Uint8Array,
          rawTx: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId, Bytes, Bytes, Bytes]
      >;
      executeRedeem: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array,
          txId: Bytes | string | Uint8Array,
          merkleProof: Bytes | string | Uint8Array,
          rawTx: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId, Bytes, Bytes, Bytes]
      >;
      /**
       * Similar to [`update_exchange_rate`](crate::pallet::Pallet::update_exchange_rate),
       * except it only allows root.
       **/
      forceUpdateExchangeRate: AugmentedSubmittable<
        (
          exchangeRate:
            | TradingPrice
            | { price?: any; decimal?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [TradingPrice]
      >;
      /**
       * Force update oracles.
       *
       * DANGEROUS! The extrinsic will cover old oracles.
       **/
      forceUpdateOracles: AugmentedSubmittable<
        (
          oracles: Vec<AccountId> | (AccountId | string | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<AccountId>]
      >;
      /**
       * Register a vault with collateral and unique `btc_address`.
       *
       * The extrinsic's origin must be signed.
       * *Relative Functions*:
       * [`add_extra_collateral`](crate::Pallet::add_extra_collateral)
       **/
      registerVault: AugmentedSubmittable<
        (
          collateral: BalanceOf | AnyNumber | Uint8Array,
          btcAddress: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BalanceOf, Bytes]
      >;
      /**
       * User request issue xbtc
       *
       * `IssueRequest` couldn't be submitted while bridge during liquidating.
       **/
      requestIssue: AugmentedSubmittable<
        (
          vaultId: AccountId | string | Uint8Array,
          btcAmount: BalanceOf | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [AccountId, BalanceOf]
      >;
      /**
       * User request redeem
       **/
      requestRedeem: AugmentedSubmittable<
        (
          vaultId: AccountId | string | Uint8Array,
          redeemAmount: BalanceOf | AnyNumber | Uint8Array,
          btcAddress: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [AccountId, BalanceOf, Bytes]
      >;
      /**
       * Update exchange rate by oracle.
       *
       * The extrinsic only allows oracle accounts.
       *
       * *Relative Functions*:
       * [`force_update_exchange_rate`](crate::Pallet::force_update_exchange_rate)
       **/
      updateExchangeRate: AugmentedSubmittable<
        (
          exchangeRate:
            | TradingPrice
            | { price?: any; decimal?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [TradingPrice]
      >;
      /**
       * Update griefing fee for requesting issue
       **/
      updateIssueGriefingFee: AugmentedSubmittable<
        (
          griefingFee: Percent | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Percent]
      >;
    };
    xGatewayCommon: {
      /**
       * Cancel the withdrawal by the applicant.
       *
       * WithdrawalRecord State: `Applying` ==> `NormalCancel`
       **/
      cancelWithdrawal: AugmentedSubmittable<
        (
          id: WithdrawalRecordId | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [WithdrawalRecordId]
      >;
      /**
       * Set the referral binding of corresponding chain and account.
       *
       * This is a root-only operation.
       **/
      forceSetReferralBinding: AugmentedSubmittable<
        (
          chain:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array,
          who:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          referral:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Chain, LookupSource, LookupSource]
      >;
      /**
       * Set the config of trustee information.
       *
       * This is a root-only operation.
       **/
      setTrusteeInfoConfig: AugmentedSubmittable<
        (
          chain:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array,
          config:
            | TrusteeInfoConfig
            | { minTrusteeCount?: any; maxTrusteeCount?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Chain, TrusteeInfoConfig]
      >;
      /**
       * Set the state of withdraw record by the trustees.
       **/
      setWithdrawalState: AugmentedSubmittable<
        (
          id: Compact<WithdrawalRecordId> | AnyNumber | Uint8Array,
          state:
            | WithdrawalState
            | "Applying"
            | "Processing"
            | "NormalFinish"
            | "RootFinish"
            | "NormalCancel"
            | "RootCancel"
            | number
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<WithdrawalRecordId>, WithdrawalState]
      >;
      /**
       * Setup the trustee.
       **/
      setupTrustee: AugmentedSubmittable<
        (
          chain:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array,
          about: Text | string,
          hotEntity: Bytes | string | Uint8Array,
          coldEntity: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Chain, Text, Bytes, Bytes]
      >;
      /**
       * Transition the trustee session.
       **/
      transitionTrusteeSession: AugmentedSubmittable<
        (
          chain:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array,
          newTrustees: Vec<AccountId> | (AccountId | string | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Chain, Vec<AccountId>]
      >;
      /**
       * Create a withdrawal.
       * Withdraws some balances of `asset_id` to address `addr` of target chain.
       *
       * WithdrawalRecord State: `Applying`
       *
       * NOTE: `ext` is for the compatibility purpose, e.g., EOS requires a memo when doing the transfer.
       **/
      withdraw: AugmentedSubmittable<
        (
          assetId: Compact<AssetId> | AnyNumber | Uint8Array,
          value: Compact<BalanceOf> | AnyNumber | Uint8Array,
          addr: AddrStr | string,
          ext: Memo | string
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, Compact<BalanceOf>, AddrStr, Memo]
      >;
    };
    xGatewayRecords: {
      /**
       * Deposit asset token.
       *
       * This is a root-only operation.
       **/
      rootDeposit: AugmentedSubmittable<
        (
          who:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          assetId: Compact<AssetId> | AnyNumber | Uint8Array,
          balance: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<AssetId>, Compact<BalanceOf>]
      >;
      /**
       * Withdraw asset token (only lock token)
       *
       * This is a root-only operation.
       **/
      rootWithdraw: AugmentedSubmittable<
        (
          who:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          assetId: Compact<AssetId> | AnyNumber | Uint8Array,
          balance: Compact<BalanceOf> | AnyNumber | Uint8Array,
          addr: AddrStr | string,
          memo: Memo | string
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<AssetId>, Compact<BalanceOf>, AddrStr, Memo]
      >;
      /**
       * Set the state of withdrawal record with given id and state.
       *
       * This is a root-only operation.
       **/
      setWithdrawalState: AugmentedSubmittable<
        (
          withdrawalId: Compact<WithdrawalRecordId> | AnyNumber | Uint8Array,
          state:
            | WithdrawalState
            | "Applying"
            | "Processing"
            | "NormalFinish"
            | "RootFinish"
            | "NormalCancel"
            | "RootCancel"
            | number
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<WithdrawalRecordId>, WithdrawalState]
      >;
      /**
       * Set the state of withdrawal records in batches.
       *
       * This is a root-only operation.
       **/
      setWithdrawalStateList: AugmentedSubmittable<
        (
          item:
            | Vec<ITuple<[WithdrawalRecordId, WithdrawalState]>>
            | [
                WithdrawalRecordId | AnyNumber | Uint8Array,
                (
                  | WithdrawalState
                  | "Applying"
                  | "Processing"
                  | "NormalFinish"
                  | "RootFinish"
                  | "NormalCancel"
                  | "RootCancel"
                  | number
                  | Uint8Array
                )
              ][]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<ITuple<[WithdrawalRecordId, WithdrawalState]>>]
      >;
    };
    xMiningAsset: {
      /**
       * Claims the staking reward given the `target` validator.
       **/
      claim: AugmentedSubmittable<
        (
          target: Compact<AssetId> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>]
      >;
      setAssetPower: AugmentedSubmittable<
        (
          assetId: Compact<AssetId> | AnyNumber | Uint8Array,
          updated: Compact<FixedAssetPower> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, Compact<FixedAssetPower>]
      >;
      setClaimFrequencyLimit: AugmentedSubmittable<
        (
          assetId: Compact<AssetId> | AnyNumber | Uint8Array,
          updated: Compact<BlockNumber> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, Compact<BlockNumber>]
      >;
      setClaimStakingRequirement: AugmentedSubmittable<
        (
          assetId: Compact<AssetId> | AnyNumber | Uint8Array,
          updated: Compact<StakingRequirement> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, Compact<StakingRequirement>]
      >;
    };
    xSpot: {
      /**
       * Add a new trading pair.
       **/
      addTradingPair: AugmentedSubmittable<
        (
          currencyPair:
            | CurrencyPair
            | { base?: any; quote?: any }
            | string
            | Uint8Array,
          pipDecimals: Compact<u32> | AnyNumber | Uint8Array,
          tickDecimals: Compact<u32> | AnyNumber | Uint8Array,
          latestPrice: Compact<Price> | AnyNumber | Uint8Array,
          tradable: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [CurrencyPair, Compact<u32>, Compact<u32>, Compact<Price>, bool]
      >;
      cancelOrder: AugmentedSubmittable<
        (
          pairId: Compact<TradingPairId> | AnyNumber | Uint8Array,
          orderId: Compact<OrderId> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<TradingPairId>, Compact<OrderId>]
      >;
      /**
       * Force cancel an order.
       **/
      forceCancelOrder: AugmentedSubmittable<
        (
          who:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          pairId: Compact<TradingPairId> | AnyNumber | Uint8Array,
          orderId: Compact<OrderId> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<TradingPairId>, Compact<OrderId>]
      >;
      putOrder: AugmentedSubmittable<
        (
          pairId: Compact<TradingPairId> | AnyNumber | Uint8Array,
          orderType: OrderType | "Limit" | "Market" | number | Uint8Array,
          side: Side | "Buy" | "Sell" | number | Uint8Array,
          amount: Compact<BalanceOf> | AnyNumber | Uint8Array,
          price: Compact<Price> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [
          Compact<TradingPairId>,
          OrderType,
          Side,
          Compact<BalanceOf>,
          Compact<Price>
        ]
      >;
      setHandicap: AugmentedSubmittable<
        (
          pairId: Compact<TradingPairId> | AnyNumber | Uint8Array,
          updated:
            | Handicap
            | { highestBid?: any; lowestAsk?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<TradingPairId>, Handicap]
      >;
      setPriceFluctuation: AugmentedSubmittable<
        (
          pairId: Compact<TradingPairId> | AnyNumber | Uint8Array,
          updated: Compact<PriceFluctuation> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<TradingPairId>, Compact<PriceFluctuation>]
      >;
      /**
       * Update the trading pair profile.
       **/
      updateTradingPair: AugmentedSubmittable<
        (
          pairId: Compact<TradingPairId> | AnyNumber | Uint8Array,
          tickDecimals: Compact<u32> | AnyNumber | Uint8Array,
          tradable: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<TradingPairId>, Compact<u32>, bool]
      >;
    };
    xStaking: {
      /**
       * Nominate the `target` with `value` of the origin account's balance locked.
       **/
      bond: AugmentedSubmittable<
        (
          target:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          value: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<BalanceOf>]
      >;
      /**
       * Declare no desire to validate for the origin account.
       **/
      chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Claim the staking reward given the `target` validator.
       **/
      claim: AugmentedSubmittable<
        (
          target:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource]
      >;
      forceResetStakingLock: AugmentedSubmittable<
        (
          accounts: Vec<AccountId> | (AccountId | string | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<AccountId>]
      >;
      forceSetLock: AugmentedSubmittable<
        (
          newLocks:
            | Vec<ITuple<[AccountId, BalanceOf]>>
            | [
                AccountId | string | Uint8Array,
                BalanceOf | AnyNumber | Uint8Array
              ][]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<ITuple<[AccountId, BalanceOf]>>]
      >;
      /**
       * Clear the records in Staking for leaked `BondedWithdrawal` frozen balances.
       **/
      forceUnlockBondedWithdrawal: AugmentedSubmittable<
        (who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [AccountId]
      >;
      /**
       * Move the `value` of current nomination from one validator to another.
       **/
      rebond: AugmentedSubmittable<
        (
          from:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          to:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          value: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, LookupSource, Compact<BalanceOf>]
      >;
      /**
       * Register to be a validator for the origin account.
       *
       * The reason for using `validator_nickname` instead of `referral_id` as
       * the variable name is when we interact with this interface from outside
       * we can take this as the nickname of validator, which possibly
       * can help reduce some misunderstanding for these unfamiliar with
       * the referral mechanism in Asset Mining. In the context of codebase, we
       * always use the concept of referral id.
       **/
      register: AugmentedSubmittable<
        (
          validatorNickname: ReferralId | string,
          initialBond: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [ReferralId, Compact<BalanceOf>]
      >;
      setBondingDuration: AugmentedSubmittable<
        (
          updated: Compact<BlockNumber> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<BlockNumber>]
      >;
      setImmortals: AugmentedSubmittable<
        (
          updated: Vec<AccountId> | (AccountId | string | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<AccountId>]
      >;
      setMinimumPenalty: AugmentedSubmittable<
        (
          updated: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<BalanceOf>]
      >;
      setMinimumValidatorCount: AugmentedSubmittable<
        (
          updated: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      setSessionsPerEra: AugmentedSubmittable<
        (
          updated: Compact<SessionIndex> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<SessionIndex>]
      >;
      setValidatorBondingDuration: AugmentedSubmittable<
        (
          updated: Compact<BlockNumber> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<BlockNumber>]
      >;
      setValidatorCount: AugmentedSubmittable<
        (
          updated: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>]
      >;
      /**
       * Unnominate the `value` of bonded balance for validator `target`.
       **/
      unbond: AugmentedSubmittable<
        (
          target:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          value: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<BalanceOf>]
      >;
      /**
       * Unlock the frozen unbonded balances that are due.
       **/
      unlockUnbondedWithdrawal: AugmentedSubmittable<
        (
          target:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          unbondedIndex: Compact<UnbondedIndex> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<UnbondedIndex>]
      >;
      /**
       * Declare the desire to validate for the origin account.
       **/
      validate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
    };
    xSystem: {
      /**
       * Modify the paused status of the given pallet call.
       *
       * This is a root-only operation.
       **/
      modifyPaused: AugmentedSubmittable<
        (
          pallet: Bytes | string | Uint8Array,
          call: Option<Bytes> | null | object | string | Uint8Array,
          shouldPaused: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Bytes, Option<Bytes>, bool]
      >;
      /**
       * Toggle the blacklist status of the given account id.
       *
       * This is a root-only operation.
       **/
      toggleBlacklist: AugmentedSubmittable<
        (
          who:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          shouldBlacklist: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, bool]
      >;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes>
    extends AugmentedSubmittables<ApiType> {
    (
      extrinsic: Call | Extrinsic | Uint8Array | string
    ): SubmittableExtrinsic<ApiType>;
  }
}
