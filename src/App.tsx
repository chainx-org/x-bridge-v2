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
import definitions from "./interfaces";
import { notification } from "antd";
import useAccountModel from "./hooks/useAccountModel";
import {
  web3Accounts,
  web3AccountsSubscribe,
  web3Enable,
  web3FromAddress,
} from "@polkadot/extension-dapp";

const Bridge = lazy(() => import("./page/Bridge"));
const History = lazy(() => import("./page/History/History"));
const Vault = lazy(() => import("./page/Vault"));

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App: React.FC = () => {
  const { t } = useTranslation();

  // Api Context
  const [api, setApi] = useState<ApiPromise | null>(null);
  const [isApiReady, setApiReady] = useState(false);

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
      setApiReady(true);
      setApi(api);
      notification.info({ message: "Endpoint connected." });
    });
  }, []);

  // Init accounts
  useEffect(() => {
    web3Enable("X bridge").then(async () => {
      const allAccount = await web3Accounts();
      accountModel.setAccounts(allAccount.map(({ address }) => address));
      web3AccountsSubscribe((accounts) => {
        accountModel.setAccounts(accounts.map(({ address }) => address));
      });
    });
  }, []);

  return (
    <>
      <SideBar />
      <LayoutWrapper id={"LayoutWrapper"}>
        <ApiContext.Provider
          value={{
            api: api!!,
            isApiReady,
          }}
        >
          <Header />
          <main>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path="/" exact component={Bridge} />
                <Route path="/history" component={History} />
                <Route path="/vault" component={Vault} />
              </Switch>
            </Suspense>
          </main>
        </ApiContext.Provider>
      </LayoutWrapper>
    </>
  );
};
