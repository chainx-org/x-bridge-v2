import React from "react";
import IssueBubble from "./IssueBubble";
import RedeemBubble from "./RedeemBubble";
import {TransactionBubbleStyle} from "./style";
function TransactionBubble (){
    return (
        <TransactionBubbleStyle>
            <IssueBubble/>
            <RedeemBubble/>
        </TransactionBubbleStyle>
    )
}
export default TransactionBubble;
