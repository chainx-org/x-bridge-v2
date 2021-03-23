import React from "react";
import {SideBarStyle, SideBarHeader, SideBarLogo, SideBarStatus, SideBarFooter, LinkStyle} from './style'
import logo from './icons/ChainX_logo.svg'
import bridgeLogo from './icons/bridge.svg'
import historyLogo from './icons/history.svg'
import vaultLogo from './icons/asset.svg'
import githubLogo from './icons/github.svg'
import twitterLogo from './icons/twitter.svg'
import telegramLogo from './icons/telegram.svg'
function SideBar(){
  return (
      <SideBarStyle>
        <SideBarHeader>
            <SideBarLogo>
                <img src={logo} alt=""/>
                <div className={"project-name"}>
                    <div className={"x-name"}>X</div>
                    <div className={"bridge-name"}>Bridge</div>
                </div>
            </SideBarLogo>
            <SideBarStatus>
                <div className={"status running"}/>
                <div className={"status-info"}>正常运行</div>
            </SideBarStatus>
        </SideBarHeader>
        <main>
            <nav>
                <LinkStyle to={"/"} exact activeClassName={"active"}>
                    <img src={bridgeLogo} alt=""/>
                    <div>跨链桥</div>
                </LinkStyle>
                <LinkStyle to={"/history"} activeClassName={"active"}>
                    <img src={historyLogo} alt=""/>
                    <div>历史记录</div>
                </LinkStyle>
                <LinkStyle to={"/vault"} activeClassName={"active"}>
                    <img src={vaultLogo} alt=""/>
                    <div>资产保险库</div>
                </LinkStyle>
            </nav>
        </main>
        <SideBarFooter>
            <ul className={"bridge-doc"}>
                <li>文档</li>
                <li>·</li>
                <li>FAQ</li>
                <li>·</li>
                <li>Wiki</li>
            </ul>
            <ul className={"social-media"}>
                <li><img src={githubLogo} alt=""/></li>
                <li><img src={twitterLogo} alt=""/></li>
                <li><img src={telegramLogo} alt=""/></li>
            </ul>
            <ul className={"language-select"}>
                <li>中文</li>
                <li>/</li>
                <li>English</li>
            </ul>
        </SideBarFooter>
      </SideBarStyle>
  )
}

export default SideBar;
