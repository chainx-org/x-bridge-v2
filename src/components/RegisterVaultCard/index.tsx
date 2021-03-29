import React from "react";
import {AgreementStyle, CollateralStyle, RegisterAccountStyle, RegisterVaultCardStyle} from "./style";
import {useTranslation} from "react-i18next";
import {Button, Checkbox, Form, Input, InputNumber} from "antd";
import {BtcAddressStyle} from "../Redeem/style";

function RegisterVaultCard() {
    const {t} = useTranslation()
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <RegisterVaultCardStyle>
            <div className={"card-title"}>注册保险库</div>
            <Form name={"register"} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
                        <Form.Item name={"collateral"}
                                   rules={[{required: true, message: t('Please enter the number of collateral')}]}>
                            <InputNumber min={1000} placeholder={t('Please enter the number of collateral')}/>
                        </Form.Item>
                        <div className={"pcx-balance"}>
                            PCX余额：99999.8432
                        </div>
                    </div>
                </CollateralStyle>
                <BtcAddressStyle>
                    <div className={"btc-address-info"}>
                        <div className={"btc-address-title"}>{t('BTC address')}</div>
                    </div>
                    <Form.Item name={"address"} rules={[{required: true, message: t('Please enter BTC address')}]}>
                        <Input placeholder={t('Please enter BTC address')}/>
                    </Form.Item>
                </BtcAddressStyle>
                <AgreementStyle>
                    <Form.Item name={"checked"} valuePropName="checked" rules={[
                        {validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error(t('Should accept agreement'))),},]}>
                        <Checkbox onChange={() => console.log('checked')}>
                            <span>确认是否同意 </span>
                            <a href={"/"}>资产保险库协议</a>
                        </Checkbox>
                    </Form.Item>
                </AgreementStyle>
                <Form.Item>
                    <Button htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </RegisterVaultCardStyle>
    )
}
export default RegisterVaultCard;
