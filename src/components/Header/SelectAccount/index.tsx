import React, {useState} from "react";
import {SelectAccountStyle} from "./style";
import buttonLogo from "./icons/Account Settings.svg";
import {Modal, Radio} from "antd";
import useAccountModel from "../../../hooks/useAccountModel";

function SelectAccount() {
    const accountModel = useAccountModel();
    const [AccountListModal, SetAccountListModal] = useState(false);
    const {currentAccount} = useAccountModel();
    const {accounts} = useAccountModel();
    const [value, setValue] = useState(currentAccount);
    const currentAddress = currentAccount?.address
    return (
        <SelectAccountStyle>
            <div className={"current-account"}>{currentAccount?.name}</div>
            <img src={buttonLogo} alt="" onClick={() => SetAccountListModal(true)}/>
            <Modal
                title={"请选择账号"}
                visible={AccountListModal}
                onCancel={() => SetAccountListModal(false)}
                getContainer={false}
                footer={null}
            >
                <Radio.Group
                    onChange={(e) => {
                        setValue(e.target.value);
                        const changeAccount = accounts.filter((item) => item.address === e.target.value?.toString())
                        accountModel.setCurrentAccount({name:changeAccount[0].name,address:changeAccount[0].address})
                    }}
                    value={value}
                    defaultValue={currentAddress}
                >
                    {
                        accounts.map((account)=>
                            <Radio value={account.address} key={account.address}>
                                <div>{account.name}</div>
                            </Radio>
                        )
                    }
                </Radio.Group>
            </Modal>
        </SelectAccountStyle>
    );
}

export default SelectAccount;
