import React, {useState} from "react";
import {BridgeCardStyle, BridgeStyle, FunctionSwitchButton} from "./style";
import Issue from "../../components/Issue";
import {useTranslation} from "react-i18next";
import Redeem from "../../components/Redeem";
import TransactionBubble from "../../components/TransactionBubble";

function Index() {
    const [BridgeStatus, SetBridgeStatus] = useState('issue')
    const {t} = useTranslation()
    return (
        <BridgeStyle>
            <BridgeCardStyle>
                <FunctionSwitchButton>
                    <ul>
                        <li onClick={() => {
                            SetBridgeStatus('issue')
                        }} className={BridgeStatus === 'issue' ? "active" : ""}>{t('issue')}</li>
                        <li onClick={() => {
                            SetBridgeStatus('Redeem')
                        }} className={BridgeStatus === 'Redeem' ? "active" : ""}>{t('Redeem')}</li>
                    </ul>
                </FunctionSwitchButton>
                {BridgeStatus === 'issue' ? <Issue/> : <Redeem/>}
            </BridgeCardStyle>
            <TransactionBubble/>
        </BridgeStyle>

    )
}

export default Index;
