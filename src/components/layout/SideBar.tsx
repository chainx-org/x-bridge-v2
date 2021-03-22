import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    div: {
      display: "flex",
    },
  },
  sideBar: {
    maxWidth: 210,
    minWidth: 210,
    background: "white",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  topSection: {
    "@global": {
      ul: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      },
      "ul li": {
        height: 48,
        maxWidth: 194,
        minWidth: 194,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        fontWeight: "bold",
        color: "#8e8e8e",
        marginBottom: 36,
      },
    },
  },
  bottomSection: {},
});

export const SideBar: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.sideBar}>{children}</div>;
};
