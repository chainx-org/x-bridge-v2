export const types = {
  CurrencyIdOf: "u32",
  BtcAddress: "Text",

  PerDispatchClass: {
    normal: "WeightPerClass",
    operational: "WeightPerClass",
    mandatory: "WeightPerClass",
  },
  RequestId: "u128",
  BlockNumberFor: "BlockNumber",
  Vault: {
    id: "LookupSource",
    toBeIssuedTokens: "Balance",
    issuedTokens: "Balance",
    toBeRedeemedTokens: "Balance",
    wallet: "BtcAddress",
    bannedUntil: "BlockNumber",
    status: "VaultStatus",
  },
  VaultStatus: {
    _enum: ["Active", "Liquidated", "CommittedTheft"],
  },
  TradingPrice: {
    price: "u128",
    decimal: "u8",
  },

  IssueRequest: {
    vault: "LookupSource",
    openTime: "BlockNumber",
    requester: "LookupSource",
    btcAddress: "BtcAddress",
    btcAmount: "Balance",
    griefingCollateral: "Balance",
  },
  RpcVaultInfo: {
    account: "LookupSource",
    btcAddr: "BtcAddress",
  },
  RedeemRequest: {
    vault: "LookupSource",
    openTime: "BlockNumber",
    requester: "LookupSource",
    btcAddress: "BtcAddress",
    amount: "Balance",
    redeemFee: "Balance",
    reimburse: "bool",
  },
  Status: {
    _enum: {
      Running: null,
      Error: "ErrorCode",
      Shutdown: null,
    },
  },
  ErrorCode: {
    _enum: [
      "Liquidating",
      "Liquidating_ExchangeRateExpired",
      "ExchangeRateExpired",
    ],
  },
};
