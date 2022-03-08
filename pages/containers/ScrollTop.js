import React from "react";
import { useScrollTrigger } from "@material-ui/core";
import ButtonToTop from "../components/ScrollButton/ScrollButton";

export default function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <ButtonToTop trigger={trigger} handleClick={handleClick}>
      {children}
    </ButtonToTop>
  );
}
