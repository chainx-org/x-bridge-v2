// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type {
  BTreeMap,
  Bytes,
  Data,
  Option,
  U8aFixed,
  Vec,
  bool,
  u32,
  u64,
} from "@polkadot/types";
import type { AnyNumber, ITuple, Observable } from "@polkadot/types/types";
import type {
  AssetInfo,
  AssetLedger,
  AssetRestrictions,
  AssetType,
  BondRequirement,
  BtcDepositCache,
  BtcHeader,
  BtcHeaderIndex,
  BtcHeaderInfo,
  BtcNetwork,
  BtcParams,
  BtcTxState,
  BtcTxVerifier,
  BtcWithdrawalProposal,
  Chain,
  ChainAddress,
  ClaimRestriction,
  FixedAssetPower,
  GenericTrusteeIntentionProps,
  GenericTrusteeSessionInfo,
  GlobalDistribution,
  HandicapInfo,
  LockedType,
  MinerLedger,
  MiningDistribution,
  NetworkType,
  NominatorLedger,
  OrderId,
  OrderInfo,
  Price,
  PriceFluctuation,
  ReferralId,
  TradingHistoryIndex,
  TradingPairId,
  TradingPairInfo,
  TradingPairProfile,
  TrusteeInfoConfig,
  ValidatorLedger,
  ValidatorProfile,
  WithdrawalRecordId,
  WithdrawalRecordOf,
  WithdrawalState,
} from "./chainx";
import type {
  BlockNumberFor,
  BtcAddress,
  IssueRequest,
  RedeemRequest,
  RequestId,
  Status,
  SystemVault,
  TradingPrice,
  Vault,
} from "./xGatewayBitcoinV2";
import type { UncleEntryItem } from "@polkadot/types/interfaces/authorship";
import type {
  BabeAuthorityWeight,
  MaybeRandomness,
  NextConfigDescriptor,
  Randomness,
} from "@polkadot/types/interfaces/babe";
import type {
  AccountData,
  BalanceLock,
} from "@polkadot/types/interfaces/balances";
import type {
  ProposalIndex,
  Votes,
} from "@polkadot/types/interfaces/collective";
import type { AuthorityId } from "@polkadot/types/interfaces/consensus";
import type {
  PreimageStatus,
  PropIndex,
  Proposal,
  ReferendumIndex,
  ReferendumInfo,
  Voting,
} from "@polkadot/types/interfaces/democracy";
import type { VoteThreshold } from "@polkadot/types/interfaces/elections";
import type {
  SetId,
  StoredPendingChange,
  StoredState,
} from "@polkadot/types/interfaces/grandpa";
import type {
  RegistrarInfo,
  Registration,
} from "@polkadot/types/interfaces/identity";
import type { AuthIndex } from "@polkadot/types/interfaces/imOnline";
import type {
  DeferredOffenceOf,
  Kind,
  OffenceDetails,
  OpaqueTimeSlot,
  ReportIdOf,
} from "@polkadot/types/interfaces/offences";
import type {
  ProxyAnnouncement,
  ProxyDefinition,
} from "@polkadot/types/interfaces/proxy";
import type {
  AccountId,
  AccountIndex,
  AssetId,
  Balance,
  BalanceOf,
  BlockNumber,
  H256,
  Hash,
  KeyTypeId,
  Moment,
  OpaqueCall,
  Perbill,
  Percent,
  Releases,
  Slot,
  ValidatorId,
} from "@polkadot/types/interfaces/runtime";
import type {
  Scheduled,
  TaskAddress,
} from "@polkadot/types/interfaces/scheduler";
import type { Keys, SessionIndex } from "@polkadot/types/interfaces/session";
import type {
  ActiveEraInfo,
  EraIndex,
  Forcing,
  SeatHolder,
  Voter,
} from "@polkadot/types/interfaces/staking";
import type {
  AccountInfo,
  ConsumedWeight,
  DigestOf,
  EventIndex,
  EventRecord,
  LastRuntimeUpgradeInfo,
  Phase,
} from "@polkadot/types/interfaces/system";
import type {
  Bounty,
  BountyIndex,
  OpenTip,
  TreasuryProposal,
} from "@polkadot/types/interfaces/treasury";
import type { Multiplier } from "@polkadot/types/interfaces/txpayment";
import type { Multisig } from "@polkadot/types/interfaces/utility";
import type { ApiTypes } from "@polkadot/api/types";

declare module "@polkadot/api/types/storage" {
  export interface AugmentedQueries<ApiType> {
    xAssets: {
      /**
       * asset balance for user&asset_id, use btree_map to accept different asset type
       **/
      assetBalance: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: AccountId | string | Uint8Array,
          key2: AssetId | AnyNumber | Uint8Array
        ) => Observable<BTreeMap<AssetType, BalanceOf>>,
        [AccountId, AssetId]
      >;
      /**
       * asset extend limit properties, set asset "can do", example, `CanTransfer`, `CanDestroyWithdrawal`
       * notice if not set AssetRestriction, default is true for this limit
       * if want let limit make sense, must set false for the limit
       **/
      assetRestrictionsOf: AugmentedQuery<
        ApiType,
        (
          arg: AssetId | AnyNumber | Uint8Array
        ) => Observable<AssetRestrictions>,
        [AssetId]
      >;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: AccountId | string | Uint8Array,
          key2: AssetId | AnyNumber | Uint8Array
        ) => Observable<Vec<BalanceLock>>,
        [AccountId, AssetId]
      >;
      /**
       * asset balance for an asset_id, use btree_map to accept different asset type
       **/
      totalAssetBalance: AugmentedQuery<
        ApiType,
        (
          arg: AssetId | AnyNumber | Uint8Array
        ) => Observable<BTreeMap<AssetType, BalanceOf>>,
        [AssetId]
      >;
    };
    xAssetsRegistrar: {
      /**
       * Asset id list for each Chain.
       **/
      assetIdsOf: AugmentedQuery<
        ApiType,
        (
          arg:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array
        ) => Observable<Vec<AssetId>>,
        [Chain]
      >;
      /**
       * Asset info of each asset.
       **/
      assetInfoOf: AugmentedQuery<
        ApiType,
        (
          arg: AssetId | AnyNumber | Uint8Array
        ) => Observable<Option<AssetInfo>>,
        [AssetId]
      >;
      /**
       * The map of asset to the online state.
       **/
      assetOnline: AugmentedQuery<
        ApiType,
        (arg: AssetId | AnyNumber | Uint8Array) => Observable<bool>,
        [AssetId]
      >;
      /**
       * The map of asset to the block number at which the asset was registered.
       **/
      registeredAt: AugmentedQuery<
        ApiType,
        (arg: AssetId | AnyNumber | Uint8Array) => Observable<BlockNumber>,
        [AssetId]
      >;
    };
    xGatewayBitcoin: {
      /**
       * best header info
       **/
      bestIndex: AugmentedQuery<ApiType, () => Observable<BtcHeaderIndex>, []>;
      /**
       * block hash list for a height, include forked header hash
       **/
      blockHashFor: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<H256>>,
        [u32]
      >;
      /**
       * min deposit value limit, default is 10w sotashi(0.001 BTC)
       **/
      btcMinDeposit: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * get BtcWithdrawalFee from genesis_config
       **/
      btcWithdrawalFee: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * get ConfirmationNumber from genesis_config
       **/
      confirmationNumber: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * confirmed header info
       **/
      confirmedIndex: AugmentedQuery<
        ApiType,
        () => Observable<Option<BtcHeaderIndex>>,
        []
      >;
      /**
       * get GenesisInfo (header, height)
       **/
      genesisInfo: AugmentedQuery<
        ApiType,
        () => Observable<ITuple<[BtcHeader, u32]>>,
        []
      >;
      /**
       * all valid blockheader (include forked blockheader)
       **/
      headers: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<BtcHeaderInfo>>,
        [H256]
      >;
      /**
       * mark this blockhash is in mainchain
       **/
      mainChain: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<bool>,
        [H256]
      >;
      /**
       * max withdraw account count in bitcoin withdrawal transaction
       **/
      maxWithdrawalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * NetworkId for testnet or mainnet
       **/
      networkId: AugmentedQuery<ApiType, () => Observable<BtcNetwork>, []>;
      /**
       * get ParamsInfo from genesis_config
       **/
      paramsInfo: AugmentedQuery<ApiType, () => Observable<BtcParams>, []>;
      /**
       * unclaimed deposit info, addr => tx_hash, btc value,
       **/
      pendingDeposits: AugmentedQuery<
        ApiType,
        (arg: BtcAddress | string) => Observable<Vec<BtcDepositCache>>,
        [BtcAddress]
      >;
      /**
       * mark tx has been handled, in case re-handle this tx, and log handle result
       **/
      txState: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<BtcTxState>>,
        [H256]
      >;
      verifier: AugmentedQuery<ApiType, () => Observable<BtcTxVerifier>, []>;
      /**
       * withdrawal tx outs for account, tx_hash => outs ( out index => withdrawal account )
       **/
      withdrawalProposal: AugmentedQuery<
        ApiType,
        () => Observable<Option<BtcWithdrawalProposal>>,
        []
      >;
    };
    xGatewayBitcoinV2: {
      bridgeStatus: AugmentedQuery<ApiType, () => Observable<Status>, []>;
      /**
       * Mapping btc address to vault id.
       **/
      btcAddresses: AugmentedQuery<
        ApiType,
        (arg: BtcAddress | string) => Observable<Option<AccountId>>,
        [BtcAddress]
      >;
      /**
       * Exchange rate from pcx to btc.
       **/
      exchangeRate: AugmentedQuery<ApiType, () => Observable<TradingPrice>, []>;
      exchangeRateUpdateTime: AugmentedQuery<
        ApiType,
        () => Observable<BlockNumberFor>,
        []
      >;
      /**
       * Percentage to lock, when user requests issue
       **/
      issueGriefingFee: AugmentedQuery<ApiType, () => Observable<Percent>, []>;
      /**
       * Auto-increament id to identify each issue request.
       * Also presents total amount of created requests.
       **/
      issueRequestCount: AugmentedQuery<
        ApiType,
        () => Observable<RequestId>,
        []
      >;
      /**
       * Mapping from issue id to `IssueRequest`
       **/
      issueRequests: AugmentedQuery<
        ApiType,
        (
          arg: RequestId | AnyNumber | Uint8Array
        ) => Observable<Option<IssueRequest>>,
        [RequestId]
      >;
      /**
       * Specicial `SystemVault`
       **/
      liquidator: AugmentedQuery<ApiType, () => Observable<SystemVault>, []>;
      /**
       * Liquidator account id
       **/
      liquidatorId: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
      oracleAccounts: AugmentedQuery<
        ApiType,
        () => Observable<Vec<AccountId>>,
        []
      >;
      /**
       * Slashed when excuting redeem if vault's collateral is below than `PremiumThreshold`
       **/
      premiumFee: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Redeem fee when use request redeem
       **/
      redeemFee: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Auto-increament id to identify each redeem request.
       * Also presents total amount of created requests.
       **/
      redeemRequestCount: AugmentedQuery<
        ApiType,
        () => Observable<RequestId>,
        []
      >;
      /**
       * Mapping from redeem id to `RedeemRequest`
       **/
      redeemRequests: AugmentedQuery<
        ApiType,
        (
          arg: RequestId | AnyNumber | Uint8Array
        ) => Observable<Option<RedeemRequest>>,
        [RequestId]
      >;
      /**
       * Total collateral locked by xbridge.
       **/
      totalCollateral: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Mapping account to vault struct.
       **/
      vaults: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<Option<Vault>>,
        [AccountId]
      >;
    };
    xGatewayCommon: {
      /**
       * The account of the corresponding chain and chain address.
       **/
      addressBindingOf: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array,
          key2: ChainAddress | string | Uint8Array
        ) => Observable<Option<AccountId>>,
        [Chain, ChainAddress]
      >;
      /**
       * The bound address of the corresponding account and chain.
       **/
      boundAddressOf: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: AccountId | string | Uint8Array,
          key2:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array
        ) => Observable<Vec<ChainAddress>>,
        [AccountId, Chain]
      >;
      /**
       * The referral account of the corresponding account and chain.
       **/
      referralBindingOf: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: AccountId | string | Uint8Array,
          key2:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array
        ) => Observable<Option<AccountId>>,
        [AccountId, Chain]
      >;
      /**
       * Trustee info config of the corresponding chain.
       **/
      trusteeInfoConfigOf: AugmentedQuery<
        ApiType,
        (
          arg:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array
        ) => Observable<TrusteeInfoConfig>,
        [Chain]
      >;
      /**
       * Trustee intention properties of the corresponding account and chain.
       **/
      trusteeIntentionPropertiesOf: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: AccountId | string | Uint8Array,
          key2:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array
        ) => Observable<Option<GenericTrusteeIntentionProps>>,
        [AccountId, Chain]
      >;
      trusteeMultiSigAddr: AugmentedQuery<
        ApiType,
        (
          arg:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array
        ) => Observable<AccountId>,
        [Chain]
      >;
      /**
       * Next Trustee session info number of the chain.
       *
       * Auto generate a new session number (0) when generate new trustee of a chain.
       * If the trustee of a chain is changed, the corresponding number will increase by 1.
       *
       * NOTE: The number can't be modified by users.
       **/
      trusteeSessionInfoLen: AugmentedQuery<
        ApiType,
        (
          arg:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array
        ) => Observable<u32>,
        [Chain]
      >;
      /**
       * Trustee session info of the corresponding chain and number.
       **/
      trusteeSessionInfoOf: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array,
          key2: u32 | AnyNumber | Uint8Array
        ) => Observable<Option<GenericTrusteeSessionInfo>>,
        [Chain, u32]
      >;
    };
    xGatewayRecords: {
      /**
       * The id of next withdrawal record.
       **/
      nextWithdrawalRecordId: AugmentedQuery<
        ApiType,
        () => Observable<WithdrawalRecordId>,
        []
      >;
      /**
       * Withdraw applications collection, use serial numbers to mark them.
       **/
      pendingWithdrawals: AugmentedQuery<
        ApiType,
        (
          arg: WithdrawalRecordId | AnyNumber | Uint8Array
        ) => Observable<Option<WithdrawalRecordOf>>,
        [WithdrawalRecordId]
      >;
      /**
       * The state of withdraw record corresponding to an id.
       **/
      withdrawalStateOf: AugmentedQuery<
        ApiType,
        (
          arg: WithdrawalRecordId | AnyNumber | Uint8Array
        ) => Observable<Option<WithdrawalState>>,
        [WithdrawalRecordId]
      >;
    };
    xMiningAsset: {
      /**
       * Mining weight information of the mining assets.
       **/
      assetLedgers: AugmentedQuery<
        ApiType,
        (arg: AssetId | AnyNumber | Uint8Array) => Observable<AssetLedger>,
        [AssetId]
      >;
      /**
       * Can not claim if the claimer violates the restriction.
       **/
      claimRestrictionOf: AugmentedQuery<
        ApiType,
        (arg: AssetId | AnyNumber | Uint8Array) => Observable<ClaimRestriction>,
        [AssetId]
      >;
      /**
       * Possible reward for the new asset owners that does not have native coins yet.
       **/
      depositReward: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Mining power map of X-type assets.
       **/
      fixedAssetPowerOf: AugmentedQuery<
        ApiType,
        (arg: AssetId | AnyNumber | Uint8Array) => Observable<FixedAssetPower>,
        [AssetId]
      >;
      /**
       * The map from nominator to the vote weight ledger of all mining assets.
       **/
      minerLedgers: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: AccountId | string | Uint8Array,
          key2: AssetId | AnyNumber | Uint8Array
        ) => Observable<MinerLedger>,
        [AccountId, AssetId]
      >;
      /**
       * External Assets that have the mining rights.
       **/
      miningPrevilegedAssets: AugmentedQuery<
        ApiType,
        () => Observable<Vec<AssetId>>,
        []
      >;
    };
    xSpot: {
      /**
       * TradingPairId => (highest_bid, lowest_ask)
       **/
      handicapOf: AugmentedQuery<
        ApiType,
        (
          arg: TradingPairId | AnyNumber | Uint8Array
        ) => Observable<HandicapInfo>,
        [TradingPairId]
      >;
      /**
       * Record the exact balance of reserved native coins in Spot.
       **/
      nativeReserves: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<BalanceOf>,
        [AccountId]
      >;
      /**
       * Total orders made by an account.
       **/
      orderCountOf: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<OrderId>,
        [AccountId]
      >;
      /**
       * Details of an user order given the account ID and order ID.
       **/
      orderInfoOf: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: AccountId | string | Uint8Array,
          key2: OrderId | AnyNumber | Uint8Array
        ) => Observable<Option<OrderInfo>>,
        [AccountId, OrderId]
      >;
      /**
       * The map of trading pair ID to the price fluctuation. Use with caution!
       **/
      priceFluctuationOf: AugmentedQuery<
        ApiType,
        (
          arg: TradingPairId | AnyNumber | Uint8Array
        ) => Observable<PriceFluctuation>,
        [TradingPairId]
      >;
      /**
       * All the accounts and the order number given the trading pair ID and price.
       **/
      quotationsOf: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: TradingPairId | AnyNumber | Uint8Array,
          key2: Price | AnyNumber | Uint8Array
        ) => Observable<Vec<ITuple<[AccountId, OrderId]>>>,
        [TradingPairId, Price]
      >;
      /**
       * Total transactions has been made for a trading pair.
       **/
      tradingHistoryIndexOf: AugmentedQuery<
        ApiType,
        (
          arg: TradingPairId | AnyNumber | Uint8Array
        ) => Observable<TradingHistoryIndex>,
        [TradingPairId]
      >;
      /**
       * How many trading pairs so far.
       **/
      tradingPairCount: AugmentedQuery<
        ApiType,
        () => Observable<TradingPairId>,
        []
      >;
      /**
       * (latest price, last update height) of trading pair
       **/
      tradingPairInfoOf: AugmentedQuery<
        ApiType,
        (
          arg: TradingPairId | AnyNumber | Uint8Array
        ) => Observable<Option<TradingPairInfo>>,
        [TradingPairId]
      >;
      /**
       * The map from trading pair id to its static profile.
       **/
      tradingPairOf: AugmentedQuery<
        ApiType,
        (
          arg: TradingPairId | AnyNumber | Uint8Array
        ) => Observable<Option<TradingPairProfile>>,
        [TradingPairId]
      >;
    };
    xStaking: {
      /**
       * The active era information, it holds index and start.
       *
       * The active era is the era currently rewarded.
       * Validator set of this era must be equal to `SessionInterface::validators`.
       **/
      activeEra: AugmentedQuery<
        ApiType,
        () => Observable<Option<ActiveEraInfo>>,
        []
      >;
      /**
       * The length of the bonding duration in blocks.
       **/
      bondingDuration: AugmentedQuery<
        ApiType,
        () => Observable<BlockNumber>,
        []
      >;
      /**
       * The current era index.
       *
       * This is the latest planned era, depending on how the Session pallet queues the validator
       * set, it might be active or not.
       **/
      currentEra: AugmentedQuery<
        ApiType,
        () => Observable<Option<EraIndex>>,
        []
      >;
      /**
       * The session index at which the era start for the last `HISTORY_DEPTH` eras.
       **/
      erasStartSessionIndex: AugmentedQuery<
        ApiType,
        (
          arg: EraIndex | AnyNumber | Uint8Array
        ) => Observable<Option<SessionIndex>>,
        [EraIndex]
      >;
      /**
       * Mode of era forcing.
       **/
      forceEra: AugmentedQuery<ApiType, () => Observable<Forcing>, []>;
      /**
       * (Treasury, Staking)
       **/
      globalDistributionRatio: AugmentedQuery<
        ApiType,
        () => Observable<GlobalDistribution>,
        []
      >;
      /**
       * Immortal validators will always be elected if any.
       *
       * Immortals will be intialized from the genesis validators.
       **/
      immortals: AugmentedQuery<
        ApiType,
        () => Observable<Option<Vec<AccountId>>>,
        []
      >;
      /**
       * True if the current **planned** session is final. Note that this does not take era
       * forcing into account.
       **/
      isCurrentSessionFinal: AugmentedQuery<
        ApiType,
        () => Observable<bool>,
        []
      >;
      /**
       * The map from nominator to the block number of last `rebond` operation.
       **/
      lastRebondOf: AugmentedQuery<
        ApiType,
        (
          arg: AccountId | string | Uint8Array
        ) => Observable<Option<BlockNumber>>,
        [AccountId]
      >;
      /**
       * All kinds of locked balances of an account in Staking.
       **/
      locks: AugmentedQuery<
        ApiType,
        (
          arg: AccountId | string | Uint8Array
        ) => Observable<BTreeMap<LockedType, BalanceOf>>,
        [AccountId]
      >;
      /**
       * Maximum number of on-going unbonded chunk.
       **/
      maximumUnbondedChunkSize: AugmentedQuery<
        ApiType,
        () => Observable<u32>,
        []
      >;
      /**
       * Maximum number of staking participants before emergency conditions are imposed.
       **/
      maximumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Minimum penalty for each slash.
       **/
      minimumPenalty: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Minimum number of staking participants before emergency conditions are imposed.
       **/
      minimumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * (Staker, Asset Miners)
       **/
      miningDistributionRatio: AugmentedQuery<
        ApiType,
        () => Observable<MiningDistribution>,
        []
      >;
      /**
       * The map from nominator to the vote weight ledger of all nominees.
       **/
      nominations: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: AccountId | string | Uint8Array,
          key2: AccountId | string | Uint8Array
        ) => Observable<NominatorLedger>,
        [AccountId, AccountId]
      >;
      /**
       * Offenders reported in last session.
       **/
      sessionOffenders: AugmentedQuery<
        ApiType,
        () => Observable<Option<BTreeMap<AccountId, Perbill>>>,
        []
      >;
      /**
       * The length of a staking era in sessions.
       **/
      sessionsPerEra: AugmentedQuery<
        ApiType,
        () => Observable<SessionIndex>,
        []
      >;
      /**
       * Maximum value of total_bonded/self_bonded.
       **/
      upperBoundFactorOfAcceptableVotes: AugmentedQuery<
        ApiType,
        () => Observable<u32>,
        []
      >;
      /**
       * The length of the bonding duration in blocks for validator.
       **/
      validatorBondingDuration: AugmentedQuery<
        ApiType,
        () => Observable<BlockNumber>,
        []
      >;
      /**
       * Minimum value (self_bonded, total_bonded) to be a candidate of validator election.
       **/
      validatorCandidateRequirement: AugmentedQuery<
        ApiType,
        () => Observable<BondRequirement>,
        []
      >;
      /**
       * The ideal number of staking participants.
       **/
      validatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The validator account behind the referral id.
       **/
      validatorFor: AugmentedQuery<
        ApiType,
        (arg: ReferralId | string) => Observable<Option<AccountId>>,
        [ReferralId]
      >;
      /**
       * The map from validator key to the vote weight ledger of that validator.
       **/
      validatorLedgers: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<ValidatorLedger>,
        [AccountId]
      >;
      /**
       * The map from (wannabe) validator key to the profile of that validator.
       **/
      validators: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<ValidatorProfile>,
        [AccountId]
      >;
      /**
       * The beneficiary account of vesting schedule.
       **/
      vestingAccount: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
    };
    xSystem: {
      /**
       * The accounts that are blocked.
       **/
      blacklist: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<bool>,
        [AccountId]
      >;
      /**
       * Network property (Mainnet / Testnet).
       **/
      networkProps: AugmentedQuery<ApiType, () => Observable<NetworkType>, []>;
      /**
       * Paused pallet call.
       **/
      paused: AugmentedQuery<
        ApiType,
        (
          arg: Bytes | string | Uint8Array
        ) => Observable<BTreeMap<Bytes, ITuple<[]>>>,
        [Bytes]
      >;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes>
    extends AugmentedQueries<ApiType> {}
}
