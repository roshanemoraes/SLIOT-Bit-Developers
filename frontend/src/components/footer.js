import React, { Component } from "react";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="div-footer-top-data d-flex gap-30 align-items-center">
                <h3 className="mb-0 text-white">SLIoT Challenge 2023</h3>
              </div>
            </div>
            <div className="col-7 d-flex justify-content-end  gap-30 ">
              <a className="footer-icon" href="">
                <BsLinkedin className="fs-4 text-white" />
              </a>
              <a className="footer-icon" href="">
                <BsGithub className="fs-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
