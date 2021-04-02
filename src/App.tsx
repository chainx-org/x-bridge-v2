import React, { lazy, Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Loading from "./components/Loading";
import styled from "styled-components";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { ApiContext, ApiInfo, useApi } from "./hooks/useApi";
import * as definitions from "./interfaces/definitions";
import { notification } from "antd";
import useAccountModel from "./hooks/useAccountModel";
import ChangeChainXAddress from "./util";
import { Keyring } from "@polkadot/ui-keyring";
import { hexToU8a, isHex } from "@polkadot/util";
import {
  web3Accounts,
  web3AccountsSubscribe,
  web3Enable,
} from "@polkadot/extension-dapp";
import {
  IssueRequestsContext,
  IssueRequestRow,
} from "./hooks/useIssueRequests";
import { IssueRequest, RequestId, TradingPrice } from "./interfaces";
import { FeeContext } from "./hooks/useFeeContext";
import type {Percent} from "@polkadot/types/interfaces/runtime";
import {decodeAddress, encodeAddress} from "@polkadot/keyring";

const Bridge = lazy(() => import("./page/Bridge"));
const History = lazy(() => import("./page/History/History"));
const Vault = lazy(() => import("./page/Vault"));

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MaskStyle = styled.div`
  background: rgba(0,0,0,0.4);
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
`

export const App: React.FC = () => {
  const { t } = useTranslation();

  // Api Context
  const [api, setApi] = useState<ApiPromise | null>(null);
  const [isApiReady, setApiReady] = useState(false);

  // Issue requests context
  const [issueRequests, setIssueRequests] = useState<IssueRequestRow[]>([]);
  // Redeem requests context
  // const [issueRequests, setIssueRequests] = useState<IssueRequest[]>([]);

  const [exchangeRate, setExchangeRate] = useState<TradingPrice | null>(null);
  const [percent, setPercent] =useState<Percent | null>(null)
  const [pcxPrice,setPcxPrice] = useState<number | null>(null)

  // Accounts Context
  const accountModel = useAccountModel();

  // Init Api
  useEffect(() => {
    const types = Object.values(definitions).reduce(
        (res, { types }) => ({ ...res, ...types }),
        {}
    );
    notification.warn({ message: "Wait ws connecting..." });
    const provider = new WsProvider("wss://xbridge.spiderx.pro/ws");
    const api = new ApiPromise({ provider, types });
    api.on("error", (err) =>
        notification.error({
          message: `Cannot connect to ws endpoint. Error: ${err}`,
        })
    );
    api.on("disconnected", () => setApiReady(false));
    api.on("ready", () => {
      setApi(api);
      setApiReady(true);
      notification.info({ message: "Endpoint connected." });
    });
  }, []);

  useEffect(() => {
    if (isApiReady) {
      api!!.query.xGatewayBitcoinV2.issueRequests.entries().then((data) => {
        setIssueRequests(
            data.map(([requestId, value]) => ({
              id: requestId.args[0],
              ...value.unwrap(),
            }))
        );
      });

      api!!.rpc.chain.subscribeNewHeads(async () => {
        api!!.query.xGatewayBitcoinV2.issueRequests.entries().then((data) => {
          setIssueRequests(
              data.map(([requestId, value]) => ({
                id: requestId.args[0],
                ...value.unwrap(),
              }))
          );
        });
      });
    }
  }, [isApiReady]);

  // Init accounts
  useEffect(() => {
    web3Enable("X bridge").then(async () => {
      const accounts = await web3Accounts();

      if (accounts.length > 0) {
        accountModel.setCurrentAccount({
          name: accounts[0].meta.name,
          address: ChangeChainXAddress(accounts[0].address),
        });
      }

      accountModel.setAccounts(
          accounts.map(({ address, meta: { name } }) => ({
            name,
            address : encodeAddress(decodeAddress(address),44),
          }))
      );

      web3AccountsSubscribe((accounts) => {
        accountModel.setAccounts(
            accounts.map(({ address, meta: { name } }) => ({
              name,
              address: encodeAddress(decodeAddress(address),44),
            }))
        );
      });


    });
  }, []);

  // Init fee
  useEffect(() => {
    if (isApiReady) {
      (async () => {
        const tradingPrice = await api!!.query.xGatewayBitcoinV2.exchangeRate();
        const percent = await api!!.query.xGatewayBitcoinV2.issueGriefingFee();
        const price = +JSON.stringify(tradingPrice.price)
        const decimal = +JSON.stringify(tradingPrice.decimal)
        const mult = Math.pow(10,decimal)
        setPercent(percent)
        setExchangeRate(tradingPrice);
        setPcxPrice(price / mult)
        await api!!.rpc.chain.subscribeNewHeads(async () => {
          const tradingPrice = await api!!.query.xGatewayBitcoinV2.exchangeRate();
          const percent = await api!!.query.xGatewayBitcoinV2.issueGriefingFee();
          const price = +JSON.stringify(tradingPrice.price)
          const decimal = +JSON.stringify(tradingPrice.decimal)
          const mult = Math.pow(10,decimal)
          if (
              tradingPrice.price !== exchangeRate?.price ||
              tradingPrice.decimal !== exchangeRate?.decimal || percent !== percent
          ) {
            setExchangeRate(tradingPrice);
            setPercent(percent);
            setPcxPrice(price / mult);
          }
        });
      })();
    }
  }, [isApiReady]);

  return (
      <>
        {!isApiReady ? <MaskStyle><Loading /></MaskStyle> : null}
          <SideBar />
            <LayoutWrapper id={"LayoutWrapper"}>
              <ApiContext.Provider
                  value={{
                    api: api!!,
                    isApiReady,
                  }}
              >
                <IssueRequestsContext.Provider
                    value={{
                      requests: issueRequests,
                    }}
                >
                  <FeeContext.Provider
                      value={{
                        exchangeRate: exchangeRate!!,
                        percent : percent!!,
                        pcxPrice: pcxPrice!!
                      }}
                  >
                    <Header/>
                    <main>
                      <Suspense fallback={<Loading />}>
                        <Switch>
                          <Route path="/" exact component={Bridge} />
                          <Route path="/history" component={History} />
                          <Route path="/vault" component={Vault} />
                        </Switch>
                      </Suspense>
                    </main>
                  </FeeContext.Provider>
                </IssueRequestsContext.Provider>
              </ApiContext.Provider>
            </LayoutWrapper>
      </>
  );
}

