import React, { FC } from "react";

type LayoutProps = {
  children?: React.ReactNode;
};
const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
