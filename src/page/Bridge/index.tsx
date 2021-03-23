import React from "react";
import {BridgeStyle,FunctionSwitchButton} from "./style";
import Issue from "./Issue";

function Index(){
    return (
        <BridgeStyle>
                <FunctionSwitchButton>
                    <ul>
                        <li className={"active"}>发行</li>
                        <li>赎回</li>
                    </ul>
                </FunctionSwitchButton>
                <Issue/>
        </BridgeStyle>
    )
}
export default Index;
