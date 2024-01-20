import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const LoginLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LoginLayout;
