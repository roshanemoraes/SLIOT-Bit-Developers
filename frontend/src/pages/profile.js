import React, { useState } from "react";
const Profile = () => {
  const [name, setName] = useState("Kevin");
  const [addr1, setAddr1] = useState("54, Station Road");
  const [addr2, setAddr2] = useState("Moratuwa");
  const [region, setRegion] = useState("Colombo");
  const [postalCode, setPostalCode] = useState("10400");
  const [country, setCountry] = useState("Sri Lanka");
  const [email, setEmail] = useState("kevin@cse.mrt.ac.lk");
  const [education, setEducation] = useState("Undergraduate");
  const [surname, setSurname] = useState("Fernando");
  const [mobNumber, setMobNumber] = useState("+94 77 062 4834");

  return (
    <>
      <div className="profile">
        <div className="container rounded mt-0 mb-3">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-4"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <span className="font-weight-bold">
                  {name} {surname}
                </span>
                <span className="text-black-50">{email}</span>
                <span className="text-black-50">Worker ID: 001</span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-6 border-right">
              <div className="p-3 pt-4 pb-0">
                <div className="d-flex justify-content-between align-items-center mb-0">
                  <h4 className="text-right" style={{ fontWeight: "bold" }}>
                    Profile Settings
                  </h4>
                </div>
                <div className="row mt-0">
                  <div className="col-md-6">
                    <label className="profile-labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="profile-labels">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      value={surname}
                      placeholder="Enter Surname"
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <label className="profile-labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      value={mobNumber}
                      onChange={(e) => setMobNumber(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
                    <label className="profile-labels">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address Line 1"
                      value={addr1}
                      onChange={(e) => setAddr1(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
                    <label className="profile-labels">Address Line 2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address Line 2"
                      value={addr2}
                      onChange={(e) => setAddr2(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <label className="profile-labels">State/Region</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter State/Region"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="profile-labels">Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="Enter Postal Code"
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <label className="profile-labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mt-2">
                  <label className="profile-labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-2 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
