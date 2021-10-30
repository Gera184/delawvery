import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export default () => {
  return (
    <div
      style={{
        overflowY: "hidden",
        fontFamily: "Spartan sans-serif",
      }}
    >
      <Header />
      <Main />
    </div>
  );
};
