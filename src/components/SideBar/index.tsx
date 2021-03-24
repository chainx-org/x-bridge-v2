import React, {useState} from "react";
import {LinkStyle, SideBarFooter, SideBarHeader, SideBarLogo, SideBarStatus, SideBarStyle} from './style'
import logo from './icons/ChainX_logo.svg'
import bridgeLogo from './icons/bridge.svg'
import historyLogo from './icons/history.svg'
import vaultLogo from './icons/asset.svg'
import githubLogo from './icons/github.svg'
import twitterLogo from './icons/twitter.svg'
import telegramLogo from './icons/telegram.svg'
import {useTranslation} from "react-i18next";

function SideBar() {
    const {t, i18n} = useTranslation()
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
                    <div className={"status-info"}>{t('Running')}</div>
                </SideBarStatus>
            </SideBarHeader>
            <main>
                <nav>
                    <LinkStyle to={"/"} exact activeClassName={"active"}>
                        <img src={bridgeLogo} alt=""/>
                        <div>{t('Bridge')}</div>
                    </LinkStyle>
                    <LinkStyle to={"/history"} activeClassName={"active"}>
                        <img src={historyLogo} alt=""/>
                        <div>{t('History')}</div>
                    </LinkStyle>
                    <LinkStyle to={"/vault"} activeClassName={"active"}>
                        <img src={vaultLogo} alt=""/>
                        <div>{t('Vault')}</div>
                    </LinkStyle>
                </nav>
            </main>
            <SideBarFooter>
                <ul className={"bridge-doc"}>
                    <li>{t('Documentation')}</li>
                    <li className={"point"}>·</li>
                    <li>FAQ</li>
                    <li className={"point"}>·</li>
                    <li>Wiki</li>
                </ul>
                <ul className={"social-media"}>
                    <li><img src={githubLogo} alt=""/></li>
                    <li><img src={twitterLogo} alt=""/></li>
                    <li><img src={telegramLogo} alt=""/></li>
                </ul>
                <ul className={"language-select"}>
                    <li className={i18n.language == 'zh' ? 'active' : ''} onClick={() => i18n.changeLanguage(i18n.language = 'zh')}>中文</li>
                    <li>/</li>
                    <li className={i18n.language == 'en' ? 'active' : ''} onClick={() => i18n.changeLanguage(i18n.language = 'en')}>English</li>
                </ul>
            </SideBarFooter>
        </SideBarStyle>
    )
}

export default SideBar;
