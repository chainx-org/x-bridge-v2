import React, { FC } from "react";
import enterLogo from "./icons/insert.svg";
import { RedeemBubbleStyle } from "./style";

interface RedeemBubbleProps {
  onClick: () => void;
  amount:number;
}

const RedeemBubble: FC<RedeemBubbleProps> = ({amount,onClick }) => {
  return (
    <li onClick={onClick}>
      <RedeemBubbleStyle>
        <div className={"circle"}>赎回</div>
        <div className={"btc-amount"}>{+amount.toString(10)} BTC</div>
        <div className={"remaining-time-title"}>
          剩余时间
          <div className={"remaining-time"}>47:56:10</div>
        </div>
        <div>
          <img src={enterLogo} alt="" />
        </div>
      </RedeemBubbleStyle>
    </li>
  );
};

export default RedeemBubble;
