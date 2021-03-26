import React, {useState} from "react";
import {
    AddCollateralInput,
    AddCollateralModalStyle,
    CollateralDisplayStyle,
    EarnCardStyle,
    EarnCardTopStyle
} from "./style";
import {Button, Divider, InputNumber, Modal} from "antd";
import {useTranslation} from "react-i18next";
import arrowLogo from './icons/arrow.svg'

function EarnCard() {
    const {t} = useTranslation()
    const [AddCollateralModal,SetAddCollateralModal] = useState(false)
    const AddCollateralHandle = ()=> {
        alert('添加了抵押品')
        SetAddCollateralModal(false)
    }
    return (
        <EarnCardStyle>
            <EarnCardTopStyle>
                <ul>
                    <li>
                        <div className={"earn-card-title"}>累计收益</div>
                        <div className={"earn-pcx-num"}>100 PCX</div>
                    </li>
                    <li>
                        <div className={"earn-card-title"}>累计发行 / 赎回</div>
                        <div className={"issue-redeem-num"}>0.01 XBTC / 0 BTC</div>
                    </li>
                    <li>
                        <div className={"earn-card-title"}>Chainx 地址</div>
                        <div className={"chainx-address"}>5HpAy3ahw2S7bUXhG6wWRS7bUXhG6wWRg1WBb</div>
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
                                100000 PCX
                            </div>
                            <div className={"collateral-rate-num"}>
                                /300%
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={"earn-card-title"}>邮箱</div>
                        <div className={"email-edit"}>编辑</div>
                    </li>
                </ul>
            </EarnCardTopStyle>
            <Divider/>
            <Button onClick={()=> {SetAddCollateralModal(true)}}>
                {t('adding collateral')}
            </Button>
            <AddCollateralModalStyle>
                <Modal title={t('adding collateral')} visible={AddCollateralModal} onCancel={()=> SetAddCollateralModal(false)}
                       footer={[
                           <Button onClick={()=>SetAddCollateralModal(false)}>
                               取消
                           </Button>,
                           <Button onClick={AddCollateralHandle}>
                              确认
                           </Button>,
                       ]}
                >
                    <AddCollateralInput>
                        <div className={"addCollateral-info"}>
                            <div className={"addCollateral-title"}>{t('adding collateral')}</div>
                            <div className={"addCollateral-amount"}>余额：568054.95 PCX</div>
                        </div>
                        <InputNumber/>
                    </AddCollateralInput>
                    <CollateralDisplayStyle>
                        <ul>
                            <li>
                                <div>当前抵押率</div>
                                <div className={"collateral-num"}>300%</div>
                            </li>
                            <li>
                                <img src={arrowLogo} alt=""/>
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
    )
}

export default EarnCard
