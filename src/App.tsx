import React, {lazy, Suspense, useEffect} from "react";
import {useTranslation} from "react-i18next";
import "./APP.css"
import {Route, Switch} from 'react-router-dom';
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Loading from "./components/Loading";
import styled from "styled-components";
import {web3Enable} from "@polkadot/extension-dapp";

const Bridge = lazy(() => import('./page/Bridge'))
const History = lazy(() => import('./page/History/History'))
const Vault = lazy(() => import('./page/Vault'))

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const App: React.FC = () => {
    const {t} = useTranslation();
    useEffect(() => {
        // web3Enable("x-bridge").then(data => {
        //     console.dir(data)
        // })
    }, [])
    return (
        <>

            <SideBar />
            <LayoutWrapper id={"LayoutWrapper"}>
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
            </LayoutWrapper>
        </>
    );
};
