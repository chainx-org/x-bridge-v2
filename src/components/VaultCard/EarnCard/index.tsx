import React, { useEffect, useState } from "react";
import {
  AddCollateralInput,
  AddCollateralModalStyle,
  CollateralDisplayStyle,
  EarnCardStyle,
  EarnCardTopStyle,
} from "./style";
import { Button, Divider, InputNumber, Modal } from "antd";
import { useTranslation } from "react-i18next";
import arrowLogo from "./icons/arrow.svg";
import useAccountModel from "../../../hooks/useAccountModel";
import { AccountId, Balance } from "@polkadot/types/interfaces";
import { BtcAddress } from "../../../interfaces";
import { useApi } from "../../../hooks/useApi";
import { BalanceSpan } from "../../BalanceSpan";
import { useRatio } from "../../../hooks/useRatio";
import { useFeeContext } from "../../../hooks/useFeeContext";

interface VaultModel {
  address: string;
  btcAddress: BtcAddress;
  issuedToken: Balance;
  toBeIssuedToken: Balance;
  toBeRedeemToken: Balance;
  collateral: Balance;
}

function EarnCard() {
  const { t } = useTranslation();
  const [AddCollateralModal, SetAddCollateralModal] = useState(false);
  const [vault, setVault] = useState<VaultModel | null>(null);
  const [upperBound, setUpperBound] = useState("-");
  const { exchangeRate } = useFeeContext();

  const { currentAccount } = useAccountModel();
  const { api, isApiReady } = useApi();

  const ratio = useRatio(vault?.issuedToken, vault?.collateral);

  const AddCollateralHandle = () => {
    alert("添加了抵押品");
    SetAddCollateralModal(false);
  };

  useEffect(() => {
    if (isApiReady && currentAccount) {
      (async () => {
        const vault = await api.query.xGatewayBitcoinV2.vaults(
          currentAccount.address
        );
        if (vault.isSome) {
          let vaultInfo = vault.unwrap();
          let collateral = await api.query.system.account(
            currentAccount.address
          );
          setVault({
            address: currentAccount.address,
            btcAddress: vaultInfo.wallet,
            toBeRedeemToken: vaultInfo.toBeIssuedTokens,
            toBeIssuedToken: vaultInfo.toBeIssuedTokens,
            issuedToken: vaultInfo.toBeIssuedTokens,
            collateral: collateral.data.reserved,
          });
        }
      })();
    }
  }, [currentAccount, isApiReady]);

  useEffect(() => {
    if (vault) {
      const pcxInBtc = exchangeRate.price
        .mul(vault.collateral)
        .divn(Math.pow(10, exchangeRate.decimal.toNumber()));
      setUpperBound(pcxInBtc.toNumber().toFixed(2));
    } else {
      setUpperBound("-");
    }
  }, [vault, exchangeRate]);
  return (
    <EarnCardStyle>
      <EarnCardTopStyle>
        <ul>
          <li>
            <div className={"earn-card-title"}>累计收益</div>
            <div className={"earn-pcx-num"}>- PCX</div>
          </li>
          <li>
            <div className={"earn-card-title"}>累计发行</div>
            <div className={"issue-redeem-num"}>
              <BalanceSpan balance={vault?.issuedToken} />
              XBTC
            </div>
          </li>
          <li>
            <div className={"earn-card-title"}>Chainx 地址</div>
            <div className={"chainx-address"}>{currentAccount?.address}</div>
          </li>
        </ul>
        <ul className={"right-ul"}>
          <li>
            <div className={"earn-card-title"}>可发行量</div>
            <div className={"issuable-num"}>0.3523 BTC</div>
          </li>
          <li>
            <div className={"earn-card-title"}>抵押品 / 抵押率</div>
            <div className={"collateral-rate"}>
              <div>
                <BalanceSpan balance={vault?.collateral} /> PCX
              </div>
              <div className={"collateral-rate-num"}>/{ratio.toFixed(2)}%</div>
            </div>
          </li>
          <li>
            <div className={"earn-card-title"}>邮箱</div>
            <div className={"email-edit"}>编辑</div>
          </li>
        </ul>
      </EarnCardTopStyle>
      <Divider />
      <Button
        onClick={() => {
          SetAddCollateralModal(true);
        }}
      >
        {t("adding collateral")}
      </Button>
      <AddCollateralModalStyle>
        <Modal
          title={t("adding collateral")}
          visible={AddCollateralModal}
          onCancel={() => SetAddCollateralModal(false)}
          footer={[
            <Button onClick={() => SetAddCollateralModal(false)}>取消</Button>,
            <Button onClick={AddCollateralHandle}>确认</Button>,
          ]}
        >
          <AddCollateralInput>
            <div className={"addCollateral-info"}>
              <div className={"addCollateral-title"}>
                {t("adding collateral")}
              </div>
              <div className={"addCollateral-amount"}>余额：568054.95 PCX</div>
            </div>
            <InputNumber />
          </AddCollateralInput>
          <CollateralDisplayStyle>
            <ul>
              <li>
                <div>当前抵押率</div>
                <div className={"collateral-num"}>300%</div>
              </li>
              <li>
                <img src={arrowLogo} alt="" />
              </li>
              <li>
                <div>增加后抵押率</div>
                <div className={"collateral-num before"}>350%</div>
              </li>
            </ul>
          </CollateralDisplayStyle>
        </Modal>
      </AddCollateralModalStyle>
    </EarnCardStyle>
  );
}

export default EarnCard;
