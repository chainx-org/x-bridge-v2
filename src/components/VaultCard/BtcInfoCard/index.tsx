import React from "react";
import {BtcInfoCardStyle, TradeInfoStyle} from "./style";

function BtcInfoCard() {
    return (
        <BtcInfoCardStyle>
            <div className={"card-item"}>
                <div className={"card-title"}>BTC 地址</div>
                <div className={"card-address"}>1E9vabBWHPYJx6oHCpnqpxPufeS9xFTao3</div>
            </div>
            <div className={"card-item"}>
                <div className={"card-title"}>BTC 余额</div>
                <div className={"card-balance"}>0.01</div>
            </div>
            <TradeInfoStyle>
                <div className={"trade-info-header"}>
                    <div className={"header-title"}>最新交易哈希</div>
                    <div className={"trade-hash"}>bcbc006d…aecd0b72</div>
                </div>
                <ul>
                    <li>
                        <div className={"trade-title"}>确认数</div>
                        <div className={"trade-data"}>1</div>
                    </li>
                    <li>
                        <div className={"trade-title"}>出块时间</div>
                        <div className={"trade-data"}>2021/01/21 16:34:46</div>
                    </li>
                    <li>
                        <div className={"trade-title"}>金额</div>
                        <div className={"trade-data"}>+0.01</div>
                    </li>
                </ul>
            </TradeInfoStyle>
        </BtcInfoCardStyle>
    )
}

export default BtcInfoCard
