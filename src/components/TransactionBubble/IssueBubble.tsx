import React from "react";
import {IssueBubbleStyle} from "./style";
import enterLogo from './icons/insert.svg'

function IssueBubble() {
    return (
        <IssueBubbleStyle>
            <div className={"circle"}>发行</div>
            <div className={"btc-amount"}>15.4528 XBTC</div>
            <div className={"transaction-confirmation"}>
                交易确认
                <div className={"confirmation-num"}>
                    0
                </div>
                <div className={"confirmation-sum"}>
                    /6
                </div>
            </div>
            <div>
                <img src={enterLogo} alt=""/>
            </div>
        </IssueBubbleStyle>
    )
}

export default IssueBubble;
