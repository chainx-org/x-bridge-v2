import React from "react";
import {BridgeStyle,FunctionSwitchButton} from "./style";
import Issue from "../../components/Issue";
import {useTranslation} from "react-i18next";
function Index(){
    const {t} = useTranslation()
    return (
        <BridgeStyle>
                <FunctionSwitchButton>
                    <ul>
                        <li  className={"active"}>{t('issue')}</li>
                        <li>{t('Redeem')}</li>
                    </ul>
                </FunctionSwitchButton>
                <Issue/>
        </BridgeStyle>
    )
}
export default Index;
