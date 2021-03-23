import React from "react";
import {CurrentAccountStyle, IssueBtcInputStyle, IssueStyle} from "./style";
import btcLogo from './icons/btc.svg'
import {InputNumber} from "antd";
function Issue(){
    return (
        <IssueStyle>
            <CurrentAccountStyle>
                <div>当前账户</div>
                <div className={"current-account"}>5HpAy3ahw2S7LvXWphebx3K1Nh9qw8hjEGbUXhG6wWRg1WBb</div>
            </CurrentAccountStyle>
            <IssueBtcInputStyle>
                <img src={btcLogo} alt=""/>
                <InputNumber />
                <div className={"btc-title"}>BTC</div>
            </IssueBtcInputStyle>
        </IssueStyle>
    )
}
export default Issue;
