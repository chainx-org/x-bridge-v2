import React, { useContext, useEffect, useState } from "react";
import {
  LinkStyle,
  SideBarFooter,
  SideBarHeader,
  SideBarLogo,
  SideBarStatus,
  SideBarStyle,
} from "./style";
import logo from "./icons/ChainX_logo.svg";
import bridgeLogo from "./icons/bridge.svg";
import historyLogo from "./icons/history.svg";
import vaultLogo from "./icons/asset.svg";
import githubLogo from "./icons/github.svg";
import twitterLogo from "./icons/twitter.svg";
import telegramLogo from "./icons/telegram.svg";
import { useTranslation } from "react-i18next";
import { useApi } from "../../hooks/useApi";
import { Tooltip } from "antd";
import { Status } from "../../interfaces";
import { bridgeStatusContext } from "../../App";
function SideBar() {
  let [systemStatus, setSystemStatus] = useState("");
  let [statusInfo, setStatusInfo] = useState("");
  const { api, isApiReady } = useApi();
  const { t, i18n } = useTranslation();
  const value = useContext(bridgeStatusContext)
  return (
    <SideBarStyle>
      <SideBarHeader>
        <SideBarLogo>
          <img src={logo} alt="" />
          <div className={"project-name"}>
            <div className={"x-name"}>X</div>
            <div className={"bridge-name"}>Bridge</div>
          </div>
        </SideBarLogo>
        <SideBarStatus>
          <div
            className={
              value === "Running" ? "status running" : "status error"
            }
          />
          <Tooltip title={value} placement="right">
            <div className={"status-info"}>
              {value === "Running" ? t(`${value}`) : t("Error")}
            </div>
          </Tooltip>
        </SideBarStatus>
      </SideBarHeader>
      <main>
        <nav>
          <LinkStyle to={"/"} exact activeClassName={"active"}>
            <img src={bridgeLogo} alt="" />
            <div>{t("Bridge")}</div>
          </LinkStyle>
          <LinkStyle to={"/history"} activeClassName={"active"}>
            <img src={historyLogo} alt="" />
            <div>{t("History")}</div>
          </LinkStyle>
          <LinkStyle to={"/vault"} activeClassName={"active"}>
            <img src={vaultLogo} alt="" />
            <div>{t("Vault")}</div>
          </LinkStyle>
        </nav>
      </main>
      <SideBarFooter>
        <ul className={"bridge-doc"}>
          <li>{t("Documentation")}</li>
          <li className={"point"}>·</li>
          <li>FAQ</li>
          <li className={"point"}>·</li>
          <li>Wiki</li>
        </ul>
        <ul className={"social-media"}>
          <li>
            <img src={githubLogo} alt="" />
          </li>
          <li>
            <img src={twitterLogo} alt="" />
          </li>
          <li>
            <img src={telegramLogo} alt="" />
          </li>
        </ul>
        <ul className={"language-select"}>
          <li
            className={i18n.language == "zh" ? "active" : ""}
            onClick={() => i18n.changeLanguage((i18n.language = "zh"))}
          >
            中文
          </li>
          <li>/</li>
          <li
            className={i18n.language == "en" ? "active" : ""}
            onClick={() => i18n.changeLanguage((i18n.language = "en"))}
          >
            English
          </li>
        </ul>
      </SideBarFooter>
    </SideBarStyle>
  );
}

export default SideBar;
