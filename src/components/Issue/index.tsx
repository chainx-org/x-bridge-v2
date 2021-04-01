import React, {useContext, useState} from "react";
import {
    ConfirmationIssueModalFooter,
    ConfirmationIssueModalStyle,
    CurrentAccountStyle,
    IssueBtcInputStyle,
    IssueFooterStyle,
    IssueStyle,
    LockingCollateralStyle, VaultAccountStyle
} from "./style";
import btcLogo from './icons/btc.svg'
import {InputNumber, Divider, Button, Modal} from "antd";
import {useTranslation} from "react-i18next";
import useAccountModel from "../../hooks/useAccountModel"
import {useApi} from "../../hooks/useApi"
import { IssueRequest, RequestId, TradingPrice, RpcVaultInfo} from "../../interfaces";
import {FeeContext} from "../../hooks/useFeeContext";

function Issue() {
    const value = useContext(FeeContext)
    const pcxPrice = value.pcxPrice
    const {currentAccount} = useAccountModel();
    const {t} = useTranslation()
    const [confirmationIssue, setConfirmationIssue] = useState(false)
    const [rpcVaultInfo, setRpcVaultInfo] = useState<RpcVaultInfo | null>(null);
    const [IssueAmount, setIssueAmount] = useState(0)
    const { api, isApiReady } = useApi();
    const ConfirmationIssueTrade = (): void => {
        alert('发了交易')
        setConfirmationIssue(false)
    }
    return (
        <IssueStyle>
            <CurrentAccountStyle>
                <div>{t('Current Account')}</div>
                <div className={"current-account"}>{currentAccount?.address}</div>
            </CurrentAccountStyle>
            <IssueBtcInputStyle>
                <img src={btcLogo} alt=""/>
                <InputNumber value={IssueAmount} onChange={
                    e => {
                        if (e) {
                            setIssueAmount(e);
                        } else {
                            setIssueAmount(0);
                        }
                    }
                }/>
                <div className={"btc-title"}>BTC</div>
            </IssueBtcInputStyle>
            <LockingCollateralStyle>
                <div className={"locking-title"}>{t('Locking collateral')}</div>
                <div className={"locking-num"}>{IssueAmount / pcxPrice / 10 || 0} PCX</div>
                <div className={"locking-tip"}>{t('Unlock after completion')}</div>
            </LockingCollateralStyle>
            <Divider/>
            <IssueFooterStyle>
                <div className={"issue-footer-title"}>
                    {t('You will receive')}
                </div>
                <div className={"issue-footer-num"}>
                    {IssueAmount} XBTC
                </div>
                <Button onClick={async ()=> {
                    await api.query.xGatewayBitcoinV2.vaults.entries().then(data => data.forEach(([key, value]) => {

                    }))
                }}>
                    {t('next')}
                </Button>
            </IssueFooterStyle>

            <ConfirmationIssueModalStyle>
                <Modal title={t('Confirmation of issuance')}
                       getContainer={false}
                       visible={confirmationIssue}
                       onCancel={() => setConfirmationIssue(false)}
                       footer={[
                           <Button key="back" onClick={ConfirmationIssueTrade}>
                               {t('next')}
                           </Button>]}>
                    <CurrentAccountStyle>
                        <div>{t('Current Account')}</div>
                        <div className={"current-account"}>{currentAccount?.address}</div>
                    </CurrentAccountStyle>
                    <LockingCollateralStyle>
                        <div className={"locking-title"}>{t('Locking collateral')}</div>
                        <div className={"locking-num"}>{IssueAmount / pcxPrice / 10 || 0} PCX</div>
                        <div className={"locking-tip"}>{t('Unlock after completion')}</div>
                    </LockingCollateralStyle>
                    <ConfirmationIssueModalFooter>
                        <div className={"issue-footer-title"}>
                            {t('You will receive')}
                        </div>
                        <div className={"issue-footer-num"}>
                            {IssueAmount} XBTC
                        </div>
                    </ConfirmationIssueModalFooter>
                    <VaultAccountStyle>
                        <div>{t('Vault')}</div>
                        <div className={"current-account"}>5HpAy3ahw2S7LvXWphebx3K1Nh9qw8hjEGbUXhG6wWRg1WBb</div>
                    </VaultAccountStyle>
                    <VaultAccountStyle>
                        <div>{t('BTC address of Vault')}</div>
                        <div className={"current-account"}>5HpAy3ahw2S7LvXWphebx3K1Nh9qw8hjEGbUXhG6wWRg1WBb</div>
                    </VaultAccountStyle>
                </Modal>
            </ConfirmationIssueModalStyle>
        </IssueStyle>
    )
}

export default Issue;
