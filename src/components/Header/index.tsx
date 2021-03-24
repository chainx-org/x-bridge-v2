import React from "react";
import {HeaderStyle} from "./style";
import SelectAccount from "./SelectAccount";
function Header(){
    return (
        <HeaderStyle>
            <SelectAccount/>
        </HeaderStyle>
    )
}
export default Header;
