import React, {useState} from "react";
import {SelectAccountStyle} from "./style";
import buttonLogo from './icons/Account Settings.svg'
import {Modal, Radio} from "antd";
function SelectAccount() {
    const [AccountListModal, SetAccountListModal] = useState(false)
    const [value, setValue] = React.useState(1);

    return (
        <SelectAccountStyle>
            <div className={"current-account"}>5RkTK…c31Cr</div>
            <img src={buttonLogo} alt="" onClick={() => SetAccountListModal(true)} />
            <Modal title={"请选择账号"} visible={AccountListModal} onCancel={() => SetAccountListModal(false)} getContainer={false}>
                <Radio.Group onChange={e => {
                    setValue(e.target.value);
                }} value={value}>
                    <Radio value={1}>
                        <div className={"account-info"}>
                            <div className={"account"}>BBB</div>
                            <div className={"balance"}>余额 500 PCX</div>
                        </div>
                    </Radio>
                </Radio.Group>
            </Modal>
        </SelectAccountStyle>
    )
}

export default SelectAccount;
