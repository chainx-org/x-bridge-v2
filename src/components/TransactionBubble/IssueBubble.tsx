import React, { FC, FunctionComponentElement } from "react";
import { IssueBubbleStyle } from "./style";
import enterLogo from "./icons/insert.svg";

interface IssueBubbleProps {
  onClick: () => void;
  BtcAmout: number
}

const IssueBubble: FC<IssueBubbleProps> = ({onClick,BtcAmout}) => {
  return (
    <li onClick={onClick}>
      <IssueBubbleStyle>
        <div className={"circle"}>发行</div>
        <div className={"btc-amount"}>{+BtcAmout.toString(10)} XBTC</div>
        <div className={"transaction-confirmation"}>
          交易确认
          <div className={"confirmation-num"}>0</div>
          <div className={"confirmation-sum"}>/6</div>
        </div>
        <div>
          <img src={enterLogo} alt="" />
        </div>
      </IssueBubbleStyle>
    </li>
  );
};

export default IssueBubble;
