import React from "react";
import {CurrentAccountStyle, IssueBtcInputStyle, IssueFooterStyle, IssueStyle, LockingCollateralStyle} from "./style";
import btcLogo from './icons/btc.svg'
import {InputNumber, Divider,Button} from "antd";
import {useTranslation} from "react-i18next";
function Issue(){
    const {t} = useTranslation()
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
                <Button>
                    {t('next')}
                </Button>
            </IssueFooterStyle>
        </IssueStyle>
    )
}
export default Issue;
