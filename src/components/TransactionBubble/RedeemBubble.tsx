import React from "react";
import enterLogo from "./icons/insert.svg";
import {RedeemBubbleStyle} from "./style";

function RedeemBubble() {
    return (
        <RedeemBubbleStyle>
            <div className={"circle"}>赎回</div>
            <div className={"btc-amount"}>16.7294 BTC</div>
            <div className={"remaining-time-title"}>
                剩余时间
                <div className={"remaining-time"}>
                    47:56:10
                </div>
            </div>
            <div>
                <img src={enterLogo} alt=""/>
            </div>
        </RedeemBubbleStyle>
    )
}

export default RedeemBubble;
