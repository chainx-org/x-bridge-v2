import React from "react";
import {BtcAddressStyle, RedeemBtcInputStyle, RedeemFooterStyle, RedeemStyle, XBtcBalanceStyle} from "./style";
import btcLogo from '../Issue/icons/btc.svg'
import {Button, Divider, Input, InputNumber} from "antd";
import {useTranslation} from "react-i18next";
function Redeem() {
    const {t} = useTranslation()
    return (
        <RedeemStyle>
            <RedeemBtcInputStyle>
                <img src={btcLogo} alt=""/>
                <InputNumber/>
                <div className={"btc-title"}>BTC</div>
            </RedeemBtcInputStyle>
            <XBtcBalanceStyle>
                {t('X-BTC balances')} 1.00
            </XBtcBalanceStyle>
            <BtcAddressStyle>
                <div className={"btc-address-info"}>
                    <div className={"btc-address-title"}>{t('BTC address')}</div>
                    <div className={"btc-fee"}>{t('Bitcoin Network Transaction Fees')} 0.0001 BTC</div>
                </div>
                <Input/>
            </BtcAddressStyle>
            <Divider/>
            <RedeemFooterStyle>
                <div className={"redeem-footer-title"}>
                    {t('You will receive')}
                </div>
                <div className={"redeem-footer-num"}>
                    0 XBTC
                </div>
                <Button>
                    {t('next')}
                </Button>
            </RedeemFooterStyle>
        </RedeemStyle>
    )
}

export default Redeem;
