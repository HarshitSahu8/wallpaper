import React, { FC } from "react";
import Router from "../router";

type LayoutProps = {
  children?: React.ReactNode;
};
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Router />
      {children}
    </div>
  );
};

export default Layout;
