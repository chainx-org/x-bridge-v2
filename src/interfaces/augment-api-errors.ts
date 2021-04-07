// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from "@polkadot/api/types";

declare module "@polkadot/api/types/errors" {
  export interface AugmentedErrors<ApiType> {
    xAssets: {
      /**
       * Action is not allowed.
       **/
      ActionNotAllowed: AugmentedError<ApiType>;
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Not Allow native asset,
       **/
      DenyNativeAsset: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       *
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Account still has active reserved
       **/
      StillHasActiveReserved: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      TotalAssetInsufficientBalance: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      TotalAssetOverflow: AugmentedError<ApiType>;
    };
    xAssetsRegistrar: {
      /**
       * The asset already exists.
       **/
      AssetAlreadyExists: AugmentedError<ApiType>;
      /**
       * The asset is already valid (online), no need to recover.
       **/
      AssetAlreadyValid: AugmentedError<ApiType>;
      /**
       * The asset does not exist.
       **/
      AssetDoesNotExist: AugmentedError<ApiType>;
      /**
       * The asset is invalid (not online).
       **/
      AssetIsInvalid: AugmentedError<ApiType>;
      /**
       * Text is invalid ASCII, only allow ASCII visible character [0x20, 0x7E]
       **/
      InvalidAscii: AugmentedError<ApiType>;
      /**
       * Desc length is zero or too long
       **/
      InvalidAssetDescLength: AugmentedError<ApiType>;
      /**
       * Token name length is zero or too long
       **/
      InvalidAssetTokenNameLength: AugmentedError<ApiType>;
      /**
       * Token symbol char is invalid, only allow ASCII alphanumeric character or '-', '.', '|', '~'
       **/
      InvalidAssetTokenSymbolChar: AugmentedError<ApiType>;
      /**
       * Token symbol length is zero or too long
       **/
      InvalidAssetTokenSymbolLength: AugmentedError<ApiType>;
    };
    xGatewayBitcoin: {
      /**
       * Fork is too long to proceed
       **/
      AncientFork: AugmentedError<ApiType>;
      /**
       *
       **/
      BadMerkleProof: AugmentedError<ApiType>;
      /**
       * Parse redeem script failed
       **/
      BadRedeemScript: AugmentedError<ApiType>;
      /**
       * Invalid signature
       **/
      BadSignature: AugmentedError<ApiType>;
      /**
       * construct bad signature
       **/
      ConstructBadSign: AugmentedError<ApiType>;
      /**
       * Cannot deserialize the header or tx vec
       **/
      DeserializeErr: AugmentedError<ApiType>;
      /**
       * duplicated pubkey for trustees
       **/
      DuplicatedKeys: AugmentedError<ApiType>;
      /**
       * already vote for this withdrawal proposal
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Header already exists
       **/
      ExistingHeader: AugmentedError<ApiType>;
      /**
       * can't generate multisig address
       **/
      GenerateMultisigFailed: AugmentedError<ApiType>;
      /**
       * Ancient fork
       **/
      HeaderAncientFork: AugmentedError<ApiType>;
      /**
       * Futuristic timestamp
       **/
      HeaderFuturisticTimestamp: AugmentedError<ApiType>;
      /**
       * nBits do not match difficulty rules
       **/
      HeaderNBitsNotMatch: AugmentedError<ApiType>;
      /**
       * Not Found
       **/
      HeaderNotFound: AugmentedError<ApiType>;
      /**
       * Unknown parent
       **/
      HeaderUnknownParent: AugmentedError<ApiType>;
      /**
       * load addr from bytes error
       **/
      InvalidAddr: AugmentedError<ApiType>;
      /**
       * invalid bitcoin address
       **/
      InvalidAddress: AugmentedError<ApiType>;
      /**
       * parse base58 addr error
       **/
      InvalidBase58: AugmentedError<ApiType>;
      /**
       * can't find the best header in chain or it's invalid
       **/
      InvalidBestIndex: AugmentedError<ApiType>;
      /**
       * Invalid proof-of-work (Block hash does not satisfy nBits)
       **/
      InvalidPoW: AugmentedError<ApiType>;
      /**
       * Previous tx id not equal input point hash
       **/
      InvalidPrevTx: AugmentedError<ApiType>;
      /**
       * invalid proposal
       **/
      InvalidProposal: AugmentedError<ApiType>;
      /**
       * invalid bitcoin public key
       **/
      InvalidPublicKey: AugmentedError<ApiType>;
      /**
       * invalid sign count in trustee withdrawal tx proposal
       **/
      InvalidSignCount: AugmentedError<ApiType>;
      /**
       * invalid trustee count
       **/
      InvalidTrusteeCount: AugmentedError<ApiType>;
      /**
       * withdraw tx not match expected tx
       **/
      MismatchedTx: AugmentedError<ApiType>;
      /**
       * no proposal for current withdrawal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * last proposal not finished yet
       **/
      NotFinishProposal: AugmentedError<ApiType>;
      /**
       * not set trustee yet
       **/
      NotTrustee: AugmentedError<ApiType>;
      /**
       * no withdrawal record for this id
       **/
      NoWithdrawalRecord: AugmentedError<ApiType>;
      /**
       * Can't find previous header
       **/
      PrevHeaderNotExisted: AugmentedError<ApiType>;
      /**
       * process tx failed
       **/
      ProcessTxFailed: AugmentedError<ApiType>;
      /**
       * reject sig for current proposal
       **/
      RejectSig: AugmentedError<ApiType>;
      /**
       * reject replay proccessed tx
       **/
      ReplayedTx: AugmentedError<ApiType>;
      /**
       * The tx is not yet confirmed, i.e, the block of which is not confirmed.
       **/
      UnconfirmedTx: AugmentedError<ApiType>;
      /**
       * verify tx signature failed
       **/
      VerifySignFailed: AugmentedError<ApiType>;
      /**
       * unexpected withdraw records count
       **/
      WroungWithdrawalCount: AugmentedError<ApiType>;
    };
    xGatewayBitcoinV2: {
      /**
       * Redeem amount is to low
       **/
      AmountBelowDustAmount: AugmentedError<ApiType>;
      /**
       * Arithmetic underflow/overflow.
       **/
      ArithmeticError: AugmentedError<ApiType>;
      /**
       * Error propagated from xpallet_assets.
       **/
      AssetError: AugmentedError<ApiType>;
      /**
       * Bridge was shutdown or in error.
       **/
      BridgeNotRunning: AugmentedError<ApiType>;
      /**
       * Bridge status is not correct
       **/
      BridgeStatusError: AugmentedError<ApiType>;
      /**
       * Btc address in request was occupied by another vault.
       **/
      BtcAddressOccupied: AugmentedError<ApiType>;
      /**
       * The amount in request is less than lower bound.
       **/
      CollateralAmountTooSmall: AugmentedError<ApiType>;
      /**
       * Vault colateral ratio was below than `SecureThreshold`
       **/
      InsecureVault: AugmentedError<ApiType>;
      /**
       * Redeem amount is not correct
       **/
      InsufficiantAssetsFunds: AugmentedError<ApiType>;
      /**
       * Account doesn't have enough collateral to be slashed.
       **/
      InsufficientCollateral: AugmentedError<ApiType>;
      /**
       * Requester doesn't have enough pcx for collateral.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Collateral in request is less than griefing collateral
       **/
      InsufficientGriefingCollateral: AugmentedError<ApiType>;
      /**
       * Collateral is less than lower bound after extrinsic.
       **/
      InsufficientVaultCollateral: AugmentedError<ApiType>;
      /**
       * BtcAddress invalid
       **/
      InvalidAddress: AugmentedError<ApiType>;
      /**
       * Invalid btc address
       **/
      InvalidBtcAddress: AugmentedError<ApiType>;
      /**
       * Value to be set is invalid
       **/
      InvalidConfigValue: AugmentedError<ApiType>;
      /**
       * Actioner is not the request's owner
       **/
      InvalidRequester: AugmentedError<ApiType>;
      /**
       * Tried to execute `IssueRequest` while  it's expired
       **/
      IssueRequestExpired: AugmentedError<ApiType>;
      /**
       * `IssueRequest` cancelled when it's not expired
       **/
      IssueRequestNotExpired: AugmentedError<ApiType>;
      /**
       * No such `IssueRequest`
       **/
      IssueRequestNotFound: AugmentedError<ApiType>;
      /**
       * Try to calculate collateral ratio while has no issued_tokens
       **/
      NoIssuedTokens: AugmentedError<ApiType>;
      /**
       * Permission denied.
       **/
      NotOracle: AugmentedError<ApiType>;
      /**
       * Vault issue token insufficient
       **/
      RedeemAmountTooLarge: AugmentedError<ApiType>;
      /**
       * Redeem is cancled
       **/
      RedeemRequestAlreadyCancled: AugmentedError<ApiType>;
      /**
       * Redeem is completed
       **/
      RedeemRequestAlreadyCompleted: AugmentedError<ApiType>;
      /**
       * Redeem request is expierd
       **/
      RedeemRequestExpired: AugmentedError<ApiType>;
      /**
       * Redeem request cancelled for forced redeem when it's not expired.
       **/
      RedeemRequestNotExpired: AugmentedError<ApiType>;
      /**
       * Redeem request id is not exsit
       **/
      RedeemRequestNotFound: AugmentedError<ApiType>;
      /**
       * Redeem in Processing
       **/
      RedeemRequestProcessing: AugmentedError<ApiType>;
      /**
       * `IssueRequest` or `RedeemRequest` has been executed or cancelled
       **/
      RequestDealt: AugmentedError<ApiType>;
      /**
       * Requester has been vault.
       **/
      VaultAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Vault was inactive
       **/
      VaultInactive: AugmentedError<ApiType>;
      /**
       * Vault is under Liquidation
       **/
      VaultLiquidated: AugmentedError<ApiType>;
      /**
       * Vault does not exist.
       **/
      VaultNotFound: AugmentedError<ApiType>;
    };
    xGatewayCommon: {
      /**
       * existing duplicate account
       **/
      DuplicatedAccountId: AugmentedError<ApiType>;
      /**
       * exceed the maximum length of the about field of trustess session info
       **/
      InvalidAboutLen: AugmentedError<ApiType>;
      /**
       * convert generic data into trustee session info error
       **/
      InvalidGenericData: AugmentedError<ApiType>;
      /**
       * invalid multisig
       **/
      InvalidMultisig: AugmentedError<ApiType>;
      /**
       * trustee session info not found
       **/
      InvalidTrusteeSession: AugmentedError<ApiType>;
      /**
       * the value of withdrawal less than than the minimum value
       **/
      InvalidWithdrawal: AugmentedError<ApiType>;
      /**
       * not registered as trustee
       **/
      NotRegistered: AugmentedError<ApiType>;
      /**
       * Unsupported chain
       **/
      NotSupportedChain: AugmentedError<ApiType>;
      /**
       * just allow validator to register trustee
       **/
      NotValidator: AugmentedError<ApiType>;
    };
    xGatewayRecords: {
      /**
       * The applicant is not this account
       **/
      InvalidAccount: AugmentedError<ApiType>;
      /**
       * State only allow `RootFinish` and `RootCancel`
       **/
      InvalidState: AugmentedError<ApiType>;
      /**
       * WithdrawalRecord state not `Applying`
       **/
      NotApplyingState: AugmentedError<ApiType>;
      /**
       * Id not in withdrawal records
       **/
      NotExisted: AugmentedError<ApiType>;
      /**
       * WithdrawalRecord state not `Processing`
       **/
      NotProcessingState: AugmentedError<ApiType>;
      /**
       * Meet unexpected chain
       **/
      UnexpectedChain: AugmentedError<ApiType>;
    };
    xMiningAsset: {
      /**
       * Balances error.
       **/
      DispatchError: AugmentedError<ApiType>;
      /**
       * Claimer does not have enough Staking locked balance.
       **/
      InsufficientStaking: AugmentedError<ApiType>;
      /**
       * The asset does not have the mining rights.
       **/
      NotPrevilegedAsset: AugmentedError<ApiType>;
      /**
       * Claimer just did a claim recently, the next frequency limit is not expired.
       **/
      UnexpiredFrequencyLimit: AugmentedError<ApiType>;
      /**
       * Zero mining weight.
       **/
      ZeroMiningWeight: AugmentedError<ApiType>;
    };
    xSpot: {
      /**
       * Error from assets module.
       **/
      AssetError: AugmentedError<ApiType>;
      /**
       * Only the orders with ZeroFill or PartialFill can be canceled.
       **/
      CancelOrderNotAllowed: AugmentedError<ApiType>;
      /**
       * Can not put order if transactor's free token too low.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Can not find the order given the order index.
       **/
      InvalidOrderId: AugmentedError<ApiType>;
      /**
       * Invalid validator target.
       **/
      InvalidOrderType: AugmentedError<ApiType>;
      /**
       * Price can not be zero, and must be an integer multiple of the tick decimals.
       **/
      InvalidPrice: AugmentedError<ApiType>;
      /**
       * Price volatility must be less 100.
       **/
      InvalidPriceVolatility: AugmentedError<ApiType>;
      /**
       * tick_decimals can not less than the one of pair.
       **/
      InvalidTickdecimals: AugmentedError<ApiType>;
      /**
       * The trading pair doesn't exist.
       **/
      InvalidTradingPair: AugmentedError<ApiType>;
      /**
       * Can not retrieve the asset info given the trading pair.
       **/
      InvalidTradingPairAsset: AugmentedError<ApiType>;
      /**
       * The trading pair does not exist.
       **/
      NonexistentTradingPair: AugmentedError<ApiType>;
      /**
       * The bid price can not higher than the PriceVolatility of current lowest ask.
       **/
      TooHighBidPrice: AugmentedError<ApiType>;
      /**
       * The ask price can not lower than the PriceVolatility of current highest bid.
       **/
      TooLowAskPrice: AugmentedError<ApiType>;
      /**
       * Too many orders for the same price.
       **/
      TooManyBacklogOrders: AugmentedError<ApiType>;
      /**
       * The trading pair already exists.
       **/
      TradingPairAlreadyExists: AugmentedError<ApiType>;
      /**
       * The trading pair is untradable.
       **/
      TradingPairUntradable: AugmentedError<ApiType>;
      /**
       * Failed to convert_base_to_quote since amount*price too small.
       **/
      VolumeTooSmall: AugmentedError<ApiType>;
      /**
       * Amount can not be zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
    };
    xStaking: {
      /**
       * Failed to allocate the dividend.
       **/
      AllocateDividendFailed: AugmentedError<ApiType>;
      /**
       * The account is already registered as a validator.
       **/
      AlreadyValidator: AugmentedError<ApiType>;
      /**
       * The account has no unbonded entries.
       **/
      EmptyUnbondedChunks: AugmentedError<ApiType>;
      /**
       * Free balance can not cover this bond operation.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * An account can only rebond the balance that is no more than what it has bonded to the validator.
       **/
      InvalidRebondBalance: AugmentedError<ApiType>;
      /**
       * The length of referral identity is either too long or too short.
       **/
      InvalidReferralIdentityLength: AugmentedError<ApiType>;
      /**
       * An account can only unbond the balance that is no more than what it has bonded to the validator.
       **/
      InvalidUnbondBalance: AugmentedError<ApiType>;
      /**
       * Can not find the unbonded entry given the index.
       **/
      InvalidUnbondedIndex: AugmentedError<ApiType>;
      /**
       * The validator can accept no more votes from other voters.
       **/
      NoMoreAcceptableVotes: AugmentedError<ApiType>;
      /**
       * Can not rebond due to the restriction of rebond frequency limit.
       **/
      NoMoreRebond: AugmentedError<ApiType>;
      /**
       * An account can have only `MaximumUnbondedChunkSize` unbonded entries in parallel.
       **/
      NoMoreUnbondChunks: AugmentedError<ApiType>;
      /**
       * Invalid validator target.
       **/
      NotValidator: AugmentedError<ApiType>;
      /**
       * The referral identity has been claimed by someone else.
       **/
      OccupiedReferralIdentity: AugmentedError<ApiType>;
      /**
       * Can not rebond the validator self-bonded votes as it has a much longer bonding duration.
       **/
      RebondSelfBondedNotAllowed: AugmentedError<ApiType>;
      /**
       * The validator can not (forcedly) be chilled due to the limit of minimal validators count.
       **/
      TooFewActiveValidators: AugmentedError<ApiType>;
      /**
       * The validators count already reaches `MaximumValidatorCount`.
       **/
      TooManyValidators: AugmentedError<ApiType>;
      /**
       * The unbonded balances are still in the locked state.
       **/
      UnbondedWithdrawalNotYetDue: AugmentedError<ApiType>;
      /**
       * Failed to pass the xss check.
       **/
      XssCheckFailed: AugmentedError<ApiType>;
      /**
       * The operation of zero balance in Staking makes no sense.
       **/
      ZeroBalance: AugmentedError<ApiType>;
      /**
       * No rewards when the vote weight is zero.
       **/
      ZeroVoteWeight: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes>
    extends AugmentedErrors<ApiType> {}
}
