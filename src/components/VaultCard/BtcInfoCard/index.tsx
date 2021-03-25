import React from "react";
import {BtcInfoCardStyle} from "./style";
function BtcInfoCard(){
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
        </BtcInfoCardStyle>
    )
}
export default BtcInfoCard
