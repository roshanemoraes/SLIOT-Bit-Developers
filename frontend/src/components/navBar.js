import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <section className="home-navbar">
        <div>
          <div className="container-xxl">
            <div className="row">
              <div className="col-3 py-0 ">
                <div className="navbar-user">
                  <div className="navbar-user-icon">
                    <img
                      className="align-items-center justify-content-between"
                      alt="user"
                      src="../icons/user-solid.svg"
                    />
                  </div>
                  <div className="navbar-user-name d-flex align-items-center">
                    <p className="my-0">Kevin Fernando</p>
                  </div>
                </div>
              </div>
              <div className="col-2 navlinks">
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div className="col-2 navlinks">
                <Link to="/records">Past Records</Link>
              </div>
              <div className="col-2 navlinks">
                <Link to="/profile">Profile</Link>
              </div>
              <div className="col-2 navlinks">
                <Link to="/login">Sign Out</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
