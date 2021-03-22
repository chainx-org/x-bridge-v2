import { Layout, Menu } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";

const { Header, Content, Footer, Sider } = Layout;
const useStyles = createUseStyles({
  layout: {
    display: "flex",
  },
  logo: {
    float: "left",
    width: 120,
    height: 31,
    margin: [16, 24, 16, 0],
    background: [255, 255, 255, 0.3],
  },
  siteLayoutBackground: {
    background: "#fff",
  },
  Menu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#8e8e8e",
    marginBottom: 36,
  },
});

export const App: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Layout className={classes.layout}>
      <Header>
        <div className={classes.logo} />
      </Header>
      <Layout>
        <Sider width={200} className={classes.siteLayoutBackground}>
          <Menu
            className={classes.Menu}
            mode="inline"
            defaultSelectedKeys={["bridge"]}
            style={{ height: "100vh", borderRight: 0 }}
          >
            <Menu.Item key="bridge">{t("bridge")}</Menu.Item>
            <Menu.Item key="history">{t("histroy")}</Menu.Item>
            <Menu.Item key="vault">{t("vault")}</Menu.Item>
          </Menu>
        </Sider>
      </Layout>
      <Content
        className="site-layout-background"
        style={{ padding: 24, margin: 0, minHeight: 280 }}
      ></Content>
    </Layout>
  );
};
