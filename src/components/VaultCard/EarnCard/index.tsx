import React from "react";
import {EarnCardStyle, EarnCardTopStyle} from "./style";
import {Button, Divider} from "antd";

function EarnCard() {
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
            <Button>
                增加抵押品
            </Button>
        </EarnCardStyle>
    )
}

export default EarnCard
