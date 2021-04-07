import React, { useContext, useState } from "react";
import {
  BridgeCardStyle,
  BridgeStyle,
  CancelRedeemStyle,
  FunctionSwitchButton,
  IssueModalFooter,
  IssueModalStyle,
  IssueModalTip,
  IssueTransferInfoStyle,
  RedeemModalFooterStyle,
  RedeemModalStyle,
  RedeemModalTip,
  RedeemTimeStyle,
  VaultBtcAddressStyle,
  VaultOpReturnStyle,
} from "./style";
import Issue from "../../components/Issue";
import { useTranslation } from "react-i18next";
import Redeem from "../../components/Redeem";
import IssueBubble from "../../components/TransactionBubble/IssueBubble";
import RedeemBubble from "../../components/TransactionBubble/RedeemBubble";
import { TransactionBubbleStyle } from "../../components/TransactionBubble/style";
import { Button, Modal, notification } from "antd";
import warningLogo from "./icons/redWarning.svg";
import warningLogo2 from "./icons/warning2.svg";
import { useTab } from "../../hooks/useTab";
import { FeeContext } from "../../hooks/useFeeContext";
import useAccountModel from "../../hooks/useAccountModel";
import { IssueRequestsContext } from "../../hooks/useIssueRequests";
import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import { useApi } from "../../hooks/useApi";
import { RedeemRequestsContext } from "../../hooks/useRedeemRequest";
import { stringToHex } from "@polkadot/util";
import { web3FromAddress } from "@polkadot/extension-dapp";
enum Tab {
  Issue,
  Redeem,
}

function Bridge() {
  const value = useContext(IssueRequestsContext);
  const RedeemData = useContext(RedeemRequestsContext);
  const { currentAccount } = useAccountModel();
  const { api, isApiReady } = useApi();
  let IssueRequestList = [];
  let RedeemRequestList = [];
  if (isApiReady) {
    let polkaAccount = encodeAddress(
      decodeAddress(currentAccount ? currentAccount.address : ""),
      0
    );
    let AllIssueRequestList: Array<any> = JSON.parse(JSON.stringify(value))
      .requests;
    let AllRedeemRequestList: Array<any> = JSON.parse(
      JSON.stringify(RedeemData)
    ).requests;
    IssueRequestList = AllIssueRequestList.filter(
      (item) => item.requester === polkaAccount
    );
    RedeemRequestList = AllRedeemRequestList.filter(
      (item) => item.requester === polkaAccount
    );
  }
  const [issueModalVisible, SetIssueModalVisible] = useState(false);
  const [RedeemModalVisible, SetRedeemModalVisible] = useState(false);
  const [issueClickId, SetissueClickId] = useState("");
  const { t } = useTranslation();
  const { setActiveTab, isActive } = useTab(Tab.Issue);
  const issueModalData = IssueRequestList.filter(
    (item) => item.id === issueClickId
  );
  async function ConfirmationIssue () {
        const injector = await web3FromAddress(currentAccount!!.address)
        api.tx.xGatewayBitcoinV2.executeIssue(parseInt(issueClickId),"","","")
            .signAndSend(currentAccount!!.address,{signer:injector.signer},({status,dispatchError}) => {
                if(status.isInBlock){
                  notification['success']({
                        message: `Completed at block hash ${ status.asInBlock.toString()}`,
                        duration: 0
                    })
                }else if(dispatchError){
                  if(dispatchError.isModule){
                    const decode = api.registry.findMetaError(dispatchError.asModule);
                    const {documentation, name, section} = decode;
                    notification['error']({
                      message: `${section}.${name}: ${documentation.join(' ')}`,
                      duration: 0
                  })
                  }
                }else{
                    notification['success']({
                        message: `Current status: ${status.type}`,
                        duration: 0
                    })
                    if(status.type === "Finalized"){
                        SetIssueModalVisible(false)
                    }
                }
            })
    }
  return (
    <BridgeStyle>
      <BridgeCardStyle>
        <FunctionSwitchButton>
          <ul>
            <li
              onClick={() => {
                setActiveTab(Tab.Issue);
              }}
              className={isActive(Tab.Issue) ? "active" : ""}
            >
              {t("issue")}
            </li>
            <li
              onClick={() => {
                setActiveTab(Tab.Redeem);
              }}
              className={isActive(Tab.Redeem) ? "active" : ""}
            >
              {t("Redeem")}
            </li>
          </ul>
        </FunctionSwitchButton>
        {isActive(Tab.Issue) ? <Issue /> : <Redeem />}
      </BridgeCardStyle>

      <TransactionBubbleStyle>
        <ul>
          {IssueRequestList.map((item) => (
            <IssueBubble
              key={item.id}
              BtcAmout={item.btcAmount}
              onClick={() => {
                SetIssueModalVisible(true);
                SetissueClickId(item.id);
              }}
            />
          ))}
          {RedeemRequestList.map((item) => (
            <RedeemBubble
              key={item.id}
              amount={item.amount}
              onClick={() => SetRedeemModalVisible(true)}
            />
          ))}
        </ul>
      </TransactionBubbleStyle>

      <IssueModalStyle>
        <Modal
          visible={issueModalVisible}
          onCancel={() => SetIssueModalVisible(false)}
          footer={null}
          getContainer={false}
          title={"请尽快完成转账"}
        >
          <IssueModalTip>
            <img src={warningLogo} alt="" />
            <div>若未在3天内完成，您将失去锁定的抵押品</div>
          </IssueModalTip>
          <IssueTransferInfoStyle>
            <div className={"info-title"}>转账金额</div>
            <div className={"transfer-amount"}>
              {issueModalData.length > 0
                ? +issueModalData[0].btcAmount.toString(10)
                : 0}{" "}
              BTC
            </div>
            <div className={"transfer-tip"}>
              <img src={warningLogo2} alt="" />
              <div>请在单笔交易中转账,否则会造成资产损失</div>
            </div>
          </IssueTransferInfoStyle>
          <VaultBtcAddressStyle>
            <div className={"title"}>资产保险库的比特币地址</div>
            <div className={"address"}>
              {issueModalData.length > 0 ? issueModalData[0].btcAddress : ""}
            </div>
          </VaultBtcAddressStyle>
          <VaultOpReturnStyle>
            <div className={"title"}>OP_RETURN</div>
            <div className={"address"}>
              {stringToHex(
                issueModalData.length > 0 ? issueModalData[0].btcAddress : ""
              )}
            </div>
          </VaultOpReturnStyle>
          <IssueModalFooter>
            <ul>
              <li>
                <div className={"title"}>发送请求标识</div>
                <div className={"content"}>
                  {issueModalData.length > 0
                    ? +issueModalData[0].id.toString(10)
                    : ""}
                </div>
              </li>
              <li>
                <div className={"title"}>发行数量</div>
                <div className={"content"}>
                  {issueModalData.length > 0
                    ? parseInt(issueModalData[0].btcAmount)
                    : 0}{" "}
                  XBTC
                </div>
              </li>
              <li>
                <div className={"title"}>交易确认数量</div>
                <div className={"content"}>-</div>
                {/* TODO 交易确认数量 */}
              </li>
            </ul>
          </IssueModalFooter>
          <Button onClick={ConfirmationIssue}>
            确认交易
            </Button>
        </Modal>
      </IssueModalStyle>

      <RedeemModalStyle>
        <Modal
          visible={RedeemModalVisible}
          onCancel={() => SetRedeemModalVisible(false)}
          footer={null}
          getContainer={false}
          title={t("Redeem")}
        >
          <RedeemModalTip>
            <img src={warningLogo} alt="" />
            <div>
              {t(
                "If you do not receive the redeemed BTC within 48 hours, you can make a redemption request again after the cancellation of redemption or forced redemption. If you choose forced redemption, you will receive the equivalent PCX immediately"
              )}
            </div>
          </RedeemModalTip>
          <RedeemTimeStyle>
            <div className={"title"}>{t("Remaining time")}</div>
            <div className={"time"}>00:06</div>
          </RedeemTimeStyle>
          <CancelRedeemStyle>
            <Button>{t("Cancel redemption")}</Button>
            <div className={"force-redeem"}>{t("Forcible redemption")}</div>
          </CancelRedeemStyle>
          <RedeemModalFooterStyle>
            <ul>
              <li>
                <div className={"title"}>{t("Request ID")}</div>
                <div className={"content"}>1</div>
              </li>
              <li>
                <div className={"title"}>{t("Amount")}</div>
                <div className={"content"}>1 XBTC</div>
              </li>
              <li>
                <div className={"title"}>{t("Confirmation")}</div>
                <div className={"content"}>10</div>
              </li>
            </ul>
          </RedeemModalFooterStyle>
        </Modal>
      </RedeemModalStyle>
    </BridgeStyle>
  );
}

export default Bridge;
