import React, { FC, FunctionComponentElement } from "react";
import { IssueBubbleStyle } from "./style";
import enterLogo from "./icons/insert.svg";
import { useTranslation } from "react-i18next";
interface IssueBubbleProps {
  onClick: () => void;
  BtcAmout: number
}

const IssueBubble: FC<IssueBubbleProps> = ({onClick,BtcAmout}) => {
  const { t } = useTranslation();
  return (
    <li onClick={onClick}>
      <IssueBubbleStyle>
        <div className={"circle"}>{t('issue')}</div>
        <div className={"btc-amount"}>{(+(BtcAmout.toString(10))/100000000).toFixed(5)} XBTC</div>
        <div>
          <img src={enterLogo} alt="" />
        </div>
      </IssueBubbleStyle>
    </li>
  );
};

export default IssueBubble;
