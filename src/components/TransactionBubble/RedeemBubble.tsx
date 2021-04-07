import React, { FC } from "react";
import enterLogo from "./icons/insert.svg";
import { RedeemBubbleStyle } from "./style";
import {useLeftBlock} from "../../hooks/useLeftBlock"
import { useTranslation } from "react-i18next";

interface RedeemBubbleProps {
  onClick: () => void;
  amount:number;
  openTime:number;
}

const RedeemBubble: FC<RedeemBubbleProps> = ({amount,onClick,openTime }) => {
  const leftBlock = useLeftBlock(+openTime);
  const { t } = useTranslation();
  return (
    <li onClick={onClick}>
      <RedeemBubbleStyle>
        <div className={"circle"}>{t('Redeem')}</div>
        <div className={"btc-amount"}>{+amount.toString(10)} BTC</div>
        <div className={"remaining-time-title"}>
        {t<string>('Remaining time')}
          <div className={"remaining-time"}>
            {new Date(leftBlock * 6 * 1000).toISOString().substr(11, 5)}
            </div>
        </div>
        <div>
          <img src={enterLogo} alt="" />
        </div>
      </RedeemBubbleStyle>
    </li>
  );
};

export default RedeemBubble;
