import React from "react";
import {AgreementStyle, CollateralStyle, RegisterAccountStyle, RegisterVaultCardStyle} from "./style";
import {useTranslation} from "react-i18next";
import {Button, Checkbox, Input, InputNumber} from "antd";
import {BtcAddressStyle} from "../Redeem/style";
function RegisterVaultCard(){
    const {t} = useTranslation()
    return (
        <RegisterVaultCardStyle>
            <div className={"card-title"}>注册保险库</div>
            <RegisterAccountStyle>
                <div>{t('Register Account')}</div>
                <div className={"current-account"}>5HpAy3ahw2S7LvXWphebx3K1Nh9qw8hjEGbUXhG6wWRg1WBb</div>
            </RegisterAccountStyle>
            <CollateralStyle>
                <div className={"collateral-info"}>
                    <div className={"collateral-title"}>
                        {t('Collateral')}
                    </div>
                    <div className={"collateral-minimum"}>
                        ({t('Minimum value')} 1000)
                    </div>
                </div>
                <div className={"input-collateral"}>
                    <InputNumber min={1000} placeholder={t('Please enter the number of collateral')}/>
                    <div className={"pcx-balance"}>
                        PCX余额：99999.8432
                    </div>
                </div>
            </CollateralStyle>
            <BtcAddressStyle>
                <div className={"btc-address-info"}>
                    <div className={"btc-address-title"}>{t('BTC address')}</div>
                </div>
                <Input placeholder={t('Please enter BTC address')}/>
            </BtcAddressStyle>
            <AgreementStyle>
                <Checkbox onChange={()=> console.log('checked')}>
                    <span>确认是否同意 </span>
                    <a href={"/"}>资产保险库协议</a>
                </Checkbox>
            </AgreementStyle>
            <Button>
                注册
            </Button>
        </RegisterVaultCardStyle>
    )
}
export default RegisterVaultCard;
