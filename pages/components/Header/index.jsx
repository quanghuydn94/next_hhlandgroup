import React from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";
import styles from "./Header.module.scss";

function Header({isHideContact}) {
  return (
    <>
      <Contact isHideContact={isHideContact}/>
      <Navbar isHideContact={isHideContact}/>
    </>
  );
}

export default Header;
