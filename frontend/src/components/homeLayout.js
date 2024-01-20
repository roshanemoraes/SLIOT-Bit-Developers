import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import NavBar from "./navBar";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
