import React from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="px-4">
      <TopHeader />
      <MiddleHeader />
      <Menu />
    </header>
  );
};

export default Header;
