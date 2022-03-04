import React, { useRef } from "react";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import ScrollTop from "./ScrollTop";
import { Fab } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import CallButton from "../components/CallButton";

const Layout = ({ children, props }) => {
  const refDom = useRef(null);
  return (
    <>
      <Header />
      <div id="back-to-top-anchor" ref={refDom}></div>
      {children}
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
      <CallButton />
      <Footer />
    </>
  );
};

export default Layout;
