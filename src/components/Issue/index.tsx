import React, {useState} from "react";
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
function Issue(){
    const {t} = useTranslation()
    const [confirmationIssue,setConfirmationIssue] = useState(false)
    const matchVault = ():void => {
        setConfirmationIssue(true)
    }
    const ConfirmationIssueTrade = ():void =>{
        alert('发了交易')
        setConfirmationIssue(false)
    }

    return (
        <IssueStyle>
            <CurrentAccountStyle>
                <div>{t('Current Account')}</div>
                <div className={"current-account"}>5HpAy3ahw2S7LvXWphebx3K1Nh9qw8hjEGbUXhG6wWRg1WBb</div>
            </CurrentAccountStyle>
            <IssueBtcInputStyle>
                <img src={btcLogo} alt=""/>
                <InputNumber />
                <div className={"btc-title"}>BTC</div>
            </IssueBtcInputStyle>
            <LockingCollateralStyle>
                <div className={"locking-title"}>{t('Locking collateral')}</div>
                <div className={"locking-num"}>0 PCX</div>
                <div className={"locking-tip"}>{t('Unlock after completion')}</div>
            </LockingCollateralStyle>
            <Divider/>
            <IssueFooterStyle>
                <div className={"issue-footer-title"}>
                    {t('You will receive')}
                </div>
                <div className={"issue-footer-num"}>
                    0 XBTC
                </div>
                <Button onClick={matchVault}>
                    {t('next')}
                </Button>
            </IssueFooterStyle>

            <ConfirmationIssueModalStyle>
                <Modal title={t('Confirmation of issuance')}
                       getContainer={false}
                       visible={confirmationIssue}
                       onCancel={()=> setConfirmationIssue(false)}
                       footer={[
                           <Button key="back" onClick={ConfirmationIssueTrade}>
                               {t('next')}
                           </Button>]}>
                    <CurrentAccountStyle>
                        <div>{t('Current Account')}</div>
                        <div className={"current-account"}>5HpAy3ahw2S7LvXWphebx3K1Nh9qw8hjEGbUXhG6wWRg1WBb</div>
                    </CurrentAccountStyle>
                    <LockingCollateralStyle>
                        <div className={"locking-title"}>{t('Locking collateral')}</div>
                        <div className={"locking-num"}>0 PCX</div>
                        <div className={"locking-tip"}>{t('Unlock after completion')}</div>
                    </LockingCollateralStyle>
                    <ConfirmationIssueModalFooter>
                        <div className={"issue-footer-title"}>
                            {t('You will receive')}
                        </div>
                        <div className={"issue-footer-num"}>
                            0 XBTC
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
