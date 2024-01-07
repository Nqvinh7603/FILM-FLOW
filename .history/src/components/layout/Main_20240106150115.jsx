import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header1 from "./Header1";
const Main = () => {
  return (
    <Fragment>
      <Header1></Header1>
      <Outlet></Outlet>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Main;
