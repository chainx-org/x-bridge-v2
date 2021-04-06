import {useContext, useState} from "react";
import {
    ConfirmationIssueModalFooter,
    ConfirmationIssueModalStyle,
    CurrentAccountStyle,
    IssueBtcInputStyle,
    IssueFooterStyle,
    IssueStyle,
    LockingCollateralStyle, VaultAccountStyle
} from "./style";
import btcLogo from './icons/btc.svg'
import {InputNumber, Divider, Button, Modal, notification} from "antd";
import {useTranslation} from "react-i18next";
import useAccountModel from "../../hooks/useAccountModel"
import {useApi} from "../../hooks/useApi"
import {RpcVaultInfo} from "../../interfaces";
import {FeeContext} from "../../hooks/useFeeContext";
import {decodeAddress, encodeAddress} from "@polkadot/keyring";
import ChangeChainXAddress from "../../util";
import {web3FromAddress} from "@polkadot/extension-dapp";

function Issue() {
    const value = useContext(FeeContext)
    const pcxPrice = value.pcxPrice
    const {currentAccount} = useAccountModel();
    const {t} = useTranslation()
    const [confirmationIssue, setConfirmationIssue] = useState(false)
    const [rpcVaultInfo, setRpcVaultInfo] = useState<RpcVaultInfo | null>(null);
    const [IssueAmount, setIssueAmount] = useState(0)
    const [vaultAddress, setVaultAddress] = useState("")
    const [vaultBtcAddress, setVaultBtcAddress] = useState("")
    const [vaultButtonLoading, SetVaultButtonLoading] = useState(false)
    const {api, isApiReady} = useApi();

    async function ConfirmationIssueTrade () {
        try{
            const injector = await web3FromAddress(currentAccount!!.address)
            api.tx.xGatewayBitcoinV2.requestIssue(vaultAddress,IssueAmount)
                .signAndSend(currentAccount!!.address,{signer:injector.signer},({status}) => {
                    if(status.isInBlock){
                        notification['success']({
                            message: `Completed at block hash ${ status.asInBlock.toString()}`,
                            duration: 0
                        })
                    }else {
                        console.log(status.type)
                        notification['success']({
                            message: `Current status: ${status.type}`,
                            duration: 0
                        })
                        if(status.type === "Finalized"){
                            setConfirmationIssue(false)
                        }
                    }
                }).catch((error) => {
                notification['error']({
                    message: `:( transaction failed', ${error}`,
                    duration: 0
                })
            })
        }catch (error){
            notification['error']({
                message: `:( transaction failed', ${error}`,
                duration: 0
            }) 
        }
    }
    const handleMatchVault = async () => {
        if (IssueAmount <= 0) {
            notification.warn({message: "发行的值必须大于0"});
            return
        }
        SetVaultButtonLoading(true)
        const vaults = await api.query.xGatewayBitcoinV2.vaults.entries();
        const result = vaults.find(
            ([, vault]) =>
                vault.unwrap().issuedTokens.toNumber() - vault.unwrap().toBeRedeemedTokens.toNumber() >=
                IssueAmount * 100000000
        );
        setVaultAddress(result ? ChangeChainXAddress(result[1].unwrap().id.toString()) : "")
        setVaultBtcAddress(result ? result[1].unwrap().wallet.toString() : "")
        setConfirmationIssue(true)
        SetVaultButtonLoading(false)
    }
    return (
        <IssueStyle>
            <CurrentAccountStyle>
                <div>{t('Current Account')}</div>
                <div className={"current-account"}>{currentAccount?.address}</div>
            </CurrentAccountStyle>
            <IssueBtcInputStyle>
                <img src={btcLogo} alt=""/>
                <InputNumber value={IssueAmount} onChange={
                    e => {
                        if (e) {
                            setIssueAmount(e);
                        } else {
                            setIssueAmount(0);
                        }
                    }
                }/>
                <div className={"btc-title"}>BTC</div>
            </IssueBtcInputStyle>
            <LockingCollateralStyle>
                <div className={"locking-title"}>{t('Locking collateral')}</div>
                <div className={"locking-num"}>{IssueAmount / pcxPrice / 10 || 0} PCX</div>
                <div className={"locking-tip"}>{t('Unlock after completion')}</div>
            </LockingCollateralStyle>
            <Divider/>
            <IssueFooterStyle>
                <div className={"issue-footer-title"}>
                    {t('You will receive')}
                </div>
                <div className={"issue-footer-num"}>
                    {IssueAmount} XBTC
                </div>
                <Button loading={vaultButtonLoading} onClick={handleMatchVault}>
                    {t('next')}
                </Button>
            </IssueFooterStyle>

            <ConfirmationIssueModalStyle>
                <Modal title={t('Confirmation of issuance')}
                       getContainer={false}
                       visible={confirmationIssue}
                       onCancel={() => setConfirmationIssue(false)}
                       footer={[
                           <Button key="back" onClick={ConfirmationIssueTrade}>
                               {t('next')}
                           </Button>]}>
                    <CurrentAccountStyle>
                        <div>{t('Current Account')}</div>
                        <div className={"current-account"}>{currentAccount?.address}</div>
                    </CurrentAccountStyle>
                    <LockingCollateralStyle>
                        <div className={"locking-title"}>{t('Locking collateral')}</div>
                        <div className={"locking-num"}>{IssueAmount / pcxPrice / 10 || 0} PCX</div>
                        <div className={"locking-tip"}>{t('Unlock after completion')}</div>
                    </LockingCollateralStyle>
                    <ConfirmationIssueModalFooter>
                        <div className={"issue-footer-title"}>
                            {t('You will receive')}
                        </div>
                        <div className={"issue-footer-num"}>
                            {IssueAmount} XBTC
                        </div>
                    </ConfirmationIssueModalFooter>
                    <VaultAccountStyle>
                        <div>{t('Vault')}</div>
                        <div
                            className={"current-account"}>{vaultAddress ? encodeAddress(decodeAddress(vaultAddress), 44) : ""}</div>
                    </VaultAccountStyle>
                    <VaultAccountStyle>
                        <div>{t('BTC address of Vault')}</div>
                        <div className={"current-account"}>{vaultBtcAddress}</div>
                    </VaultAccountStyle>
                </Modal>
            </ConfirmationIssueModalStyle>
        </IssueStyle>
    )
}

export default Issue;
