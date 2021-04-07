import React from "react";
import {BtcInfoCardStyle, TradeInfoStyle} from "./style";

function BtcInfoCard() {
    return (
        <BtcInfoCardStyle>
            <div className={"card-item"}>
                <div className={"card-title"}>BTC 地址</div>
                <div className={"card-address"}>TODO</div>
            </div>
            <div className={"card-item"}>
                <div className={"card-title"}>BTC 余额</div>
                <div className={"card-balance"}>-</div>
            </div>
            <TradeInfoStyle>
                <div className={"trade-info-header"}>
                    <div className={"header-title"}>最新交易哈希</div>
                    <div className={"trade-hash"}>-</div>
                </div>
                <ul>
                    <li>
                        <div className={"trade-title"}>确认数</div>
                        <div className={"trade-data"}>-</div>
                    </li>
                    <li>
                        <div className={"trade-title"}>出块时间</div>
                        <div className={"trade-data"}>-</div>
                    </li>
                    <li>
                        <div className={"trade-title"}>金额</div>
                        <div className={"trade-data"}>-</div>
                    </li>
                </ul>
            </TradeInfoStyle>
        </BtcInfoCardStyle>
    )
}

export default BtcInfoCard
