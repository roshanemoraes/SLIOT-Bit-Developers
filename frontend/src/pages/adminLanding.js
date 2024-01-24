import * as React from "react";
import { Link } from 'react-router-dom';

const  AdminLanding = (props) => {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <span className="span">
            <div className="div-3">Administrator Dashboard</div>
            <div className="div-4">Summery of metrics for Sectors. Press 'Detailed View' for further analysis.</div>
          </span>
          {/* <span className="span-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/81a93e587ed429cf259b108714e158e446413fc36bc8019d880dc1a4b0c628d8?apiKey=9fb9e78eb1c1477aae06156032301666&"
              className="img"
            />
            <div className="div-5">Export</div>
          </span> */}
        </div>
        <div className="div-6">
          <div className="div-7">
            <div className="column">
              <span className="span-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c77f9e776b076fced5e3c695d978bc1593bb092065bd9cd60fa1557ad424ffe?apiKey=9fb9e78eb1c1477aae06156032301666&"
                  className="img-2"
                />
                <div className="div-8">Sector 01</div>
                <Link to="/AdminDetailed?id=01">
                    <button className="button">Detailed View</button>
                </Link>
                <div className="div-9">No. of Workers : 15</div>
                <div className="div-10">Summary of conditions in the sector</div>
                <div className="main-container">
                    <header className="header">Body</header>
                    <header className="header">Temperature</header>
                    <div className="number1">37 </div>
                </div>
                <div className="main-container1">
                    <header className="header">Heart Rate</header>
                    <div className="number">72 </div>
                </div>
                <div className="main-container2">
                    <header className="header">Blood Oxygen</header>
                    <div className="number">96 </div>
                </div>
                <div className="main-container3">
                    <header className="header">Ambient</header>
                    <header className="header">Temperature</header>
                    <div className="number1">32 </div>
                </div>
                <div className="main-container4">
                    <header className="header">Humidity</header>
                    <div className="number">47 </div>
                </div>
                <div className="main-container5">
                    <header className="header">Combustible</header>
                    <header className="header">Gases</header>
                    <div className="number1">0.9 </div>
                </div>
                <div className="main-container6">
                    <header className="header">Noise Level</header>
                    <div className="number">-- </div>
                </div>
                <div className="main-container7">
                    <header className="header">UV Radiation</header>
                    <header className="header">Level</header>
                    <div className="number1">-- </div>
                </div>
              </span>
            </div>
            <div className="column-2">
              <span className="span-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ee26bce610a00af2a0f87815a0d6cf8c35397eec44b2e685cfeb4e0b8773dca?apiKey=9fb9e78eb1c1477aae06156032301666&"
                  className="img-3"
                />
                <div className="div-11">Sector 02</div>
                <Link to="/AdminDetailed?id=02">
                    <button className="button1">Detailed View</button>
                </Link>
                <div className="div-12">No. of Workers : 8</div>
                <div className="div-13">Summary of conditions in the sector</div>
                <div className="main-container">
                    <header className="header">Body</header>
                    <header className="header">Temperature</header>
                    <div className="number1">37 </div>
                </div>
                <div className="main-container1">
                    <header className="header">Heart Rate</header>
                    <div className="number">72 </div>
                </div>
                <div className="main-container2">
                    <header className="header">Blood Oxygen</header>
                    <div className="number">96 </div>
                </div>
                <div className="main-container3">
                    <header className="header">Ambient</header>
                    <header className="header">Temperature</header>
                    <div className="number1">32 </div>
                </div>
                <div className="main-container4">
                    <header className="header">Humidity</header>
                    <div className="number">47 </div>
                </div>
                <div className="main-container5">
                    <header className="header">Combustible</header>
                    <header className="header">Gases</header>
                    <div className="number1">0.9 </div>
                </div>
                <div className="main-container6">
                    <header className="header">Noise Level</header>
                    <div className="number">-- </div>
                </div>
                <div className="main-container7">
                    <header className="header">UV Radiation</header>
                    <header className="header">Level</header>
                    <div className="number1">-- </div>
                </div>
              </span>
            </div>
          </div>
          <div className="div-7">
            <div className="column-3">
              <span className="span-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a408a72f830e47f0deef7884d8389fd2313cec130e3a9d0d03defdc42a61f4eb?apiKey=9fb9e78eb1c1477aae06156032301666&"
                  className="img-4"
                />
                <div className="div-14">Sector 03</div>
                <Link to="/AdminDetailed?id=03">
                    <button className="button2">Detailed View</button>
                </Link>
                <div className="div-15">No. of Workers : 15</div>
                <div className="div-16">Summary of conditions in the sector</div>
                <div className="main-container">
                    <header className="header">Body</header>
                    <header className="header">Temperature</header>
                    <div className="number1">37 </div>
                </div>
                <div className="main-container1">
                    <header className="header">Heart Rate</header>
                    <div className="number">72 </div>
                </div>
                <div className="main-container2">
                    <header className="header">Blood Oxygen</header>
                    <div className="number">96 </div>
                </div>
                <div className="main-container3">
                    <header className="header">Ambient</header>
                    <header className="header">Temperature</header>
                    <div className="number1">32 </div>
                </div>
                <div className="main-container4">
                    <header className="header">Humidity</header>
                    <div className="number">47 </div>
                </div>
                <div className="main-container5">
                    <header className="header">Combustible</header>
                    <header className="header">Gases</header>
                    <div className="number1">0.9 </div>
                </div>
                <div className="main-container6">
                    <header className="header">Noise Level</header>
                    <div className="number">-- </div>
                </div>
                <div className="main-container7">
                    <header className="header">UV Radiation</header>
                    <header className="header">Level</header>
                    <div className="number1">-- </div>
                </div>
              </span>
            </div>
            <div className="column-4">
              <span className="span-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/93f7484b65833a63dc591245044eacd1b9695734977e5c4173ca9ed184322190?apiKey=9fb9e78eb1c1477aae06156032301666&"
                  className="img-5"
                />
                <div className="div-17">Sector 04</div>
                <Link to="/AdminDetailed?id=04">
                    <button className="button3">Detailed View</button>
                </Link>
                <div className="div-18">No. of Workers : 15</div>
                <div className="div-19">Summary of conditions in the sector</div>
                <div className="main-container">
                    <header className="header">Body</header>
                    <header className="header">Temperature</header>
                    <div className="number1">37 </div>
                </div>
                <div className="main-container1">
                    <header className="header">Heart Rate</header>
                    <div className="number">72 </div>
                </div>
                <div className="main-container2">
                    <header className="header">Blood Oxygen</header>
                    <div className="number">96 </div>
                </div>
                <div className="main-container3">
                    <header className="header">Ambient</header>
                    <header className="header">Temperature</header>
                    <div className="number1">32 </div>
                </div>
                <div className="main-container4">
                    <header className="header">Humidity</header>
                    <div className="number">47 </div>
                </div>
                <div className="main-container5">
                    <header className="header">Combustible</header>
                    <header className="header">Gases</header>
                    <div className="number1">0.9 </div>
                </div>
                <div className="main-container6">
                    <header className="header">Noise Level</header>
                    <div className="number">-- </div>
                </div>
                <div className="main-container7">
                    <header className="header">UV Radiation</header>
                    <header className="header">Level</header>
                    <div className="number1">-- </div>
                </div>
              </span>
            </div>
            
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          border-radius: 20px;
          border: 1px solid #f8f9fa;
          box-shadow: 0px 4px 20px 0px rgba(238, 238, 238, 0.5);
          background-color: #fff;
          display: flex;
          max-width: 877px;
          flex-direction: column;
          padding: 32px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .span {
          display: flex;
          flex-direction: column;
        }
        .div-3 {
          color: var(--Primary-Dark-Shade, #05004e);
          white-space: nowrap;
          font: 600 40px/160% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-3 {
            white-space: initial;
          }
        }
        .div-4 {
          color: var(--Greys-Blue-Grey-700, #737791);
          margin-top: 7px;
          margin-bottom: -20px;
          white-space: nowrap;
          font: 400 16px/187.5% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            white-space: initial;
          }
        }
        .span-2 {
          border-radius: 8px;
          border: 1px solid #c3d3e2;
          align-self: start;
          display: flex;
          align-items: start;
          gap: 8px;
          padding: 12px 17px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 16px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-5 {
          color: #0f3659;
          font: 500 14px/143% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-6 {
          margin-top: 48px;
          padding: 0 1px;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-7 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-7 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 100%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .span-3 {
          border-radius: 16px;
          background-color: #ffe2e5;
          display: flex;
          flex-direction: column;
          width: 840px;
          height: 550px;
          margin: 0 auto;
          padding: 21px 40px 21px 20px;
        }
        @media (max-width: 991px) {
          .span-3 {
            margin-top: 31px;
            padding-right: 20px;
          }
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: start;
          margin-left: 20px;
          max-width: 100%;
        }
        .div-8 {
          color: var(--Greys-Blue-Grey-900, #151d48);
          align-self: stretch;
          width: 200px;
          margin-top: -40px;
          margin-left: 100px;
          font: 600 35px/133% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-9 {
          color: #425166;
          align-self: stretch;
          margin-top: -20px;
          margin-left: 20px;
          font: 500 36px/150% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-10 {
          color: var(--Primary-800, #e4749c);
          align-self: stretch;
          margin-top: 17px;
          margin-left: 20px;
          margin-bottom: 20px;
          white-space: nowrap;
          font: 500 20px/133% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            white-space: initial;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 50px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .span-4 {
          border-radius: 16px;
          background-color: #fff4de;
          display: flex;
          flex-direction: column;
          width: 840px;
          height: 550px;
          margin: 0 auto;
          padding: 21px 40px 21px 20px;
        }
        @media (max-width: 991px) {
          .span-4 {
            margin-top: 31px;
            padding-right: 20px;
          }
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: start;
          margin-left: 20px;
          max-width: 100%;
        }
        .div-11 {
          color: var(--Greys-Blue-Grey-900, #151d48);
          align-self: stretch;
          width: 200px;
          margin-top: -40px;
          margin-left: 100px;
          font: 600 35px/133% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-12 {
          color: #425166;
          align-self: stretch;
          margin-top: -20px;
          margin-left: 20px;
          font: 500 36px/150% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-13 {
          color: var(--Primary-800, #d4a547);
          align-self: stretch;
          margin-top: 17px;
          margin-left: 20px;
          margin-bottom: 20px;
          white-space: nowrap;
          font: 500 20px/133% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            white-space: initial;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 100%;
          margin-top: 40px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .span-5 {
          border-radius: 16px;
          background-color: var(--Colors-Green-100, #dcfce7);
          display: flex;
          flex-direction: column;
          width: 840px;
          height: 550px;
          margin: 0 auto;
          padding: 21px 34px 21px 20px;
        }
        @media (max-width: 991px) {
          .span-5 {
            margin-top: 31px;
            padding-right: 20px;
          }
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: start;
          margin-left: 20px;
          max-width: 100%;
        }
        .div-14 {
          color: var(--Greys-Blue-Grey-900, #151d48);
          align-self: stretch;
          width: 200px;
          margin-top: -40px;
          margin-left: 100px;
          font: 600 35px/133% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-15 {
          color: #425166;
          align-self: stretch;
          margin-top: -20px;
          margin-left: 20px;
          font: 500 36px/150% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
          }
        }
        .div-16 {
          color: var(--Primary-800, #5fc783);
          align-self: stretch;
          margin-top: 17px;
          margin-left: 20px;
          margin-bottom: 20px;
          white-space: nowrap;
          font: 500 20px/133% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-16 {
            white-space: initial;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-top: 40px;
          margin-left: 50px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .span-6 {
          border-radius: 16px;
          background-color: var(--Colors-Purple-100, #f3e8ff);
          display: flex;
          flex-direction: column;
          width: 840px;
          height: 550px;
          margin: 0 auto;
          padding: 21px 35px 21px 20px;
        }
        @media (max-width: 991px) {
          .span-6 {
            margin-top: 31px;
            padding-right: 20px;
          }
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: start;
          margin-left: 20px;
          max-width: 100%;
        }
        .div-17 {
          color: var(--Greys-Blue-Grey-900, #151d48);
          align-self: stretch;
          width: 200px;
          margin-top: -40px;
          margin-left: 100px;
          font: 600 35px/133% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-18 {
          color: #425166;
          align-self: stretch;
          margin-top: -20px;
          margin-left: 20px;
          font: 500 36px/150% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-18 {
            white-space: initial;
          }
        }
        .div-19 {
          color: var(--Primary-800, #a964f4);
          align-self: stretch;
          margin-top: 17px;
          margin-left: 20px;
          margin-bottom: 20px;
          white-space: nowrap;
          font: 500 20px/133% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-19 {
            white-space: initial;
          }
        }
        .main-container {
            border-radius: 18.472px;
            border: 0.924px solid var(--Stroke-Color, #eff0f6);
            background-color: #fff;
            display: flex;
            width: 170px;
            height: 150px;
            margin-left: 15px;           
            flex-direction: column;
            padding: 13px 16px 50px;
            transition: background-color 0.3s ease, transform 0.4s ease;
          }
          .main-container:hover {
            background-color: #fff8e9; 
            transform: scale(1.05); 
          }
          .main-container1 {
            border-radius: 18.472px;
            border: 0.924px solid var(--Stroke-Color, #eff0f6);
            background-color: #fff;
            display: flex;
            width: 170px;
            height: 150px; 
            margin-left: 215px;  
            margin-top: -150px;        
            flex-direction: column;
            padding: 13px 16px 50px;
            transition: background-color 0.3s ease, transform 0.4s ease;
          }
          .main-container1:hover {
            background-color: #fff8e9; 
            transform: scale(1.05); 
          }
          .main-container2 {
            border-radius: 18.472px;
            border: 0.924px solid var(--Stroke-Color, #eff0f6);
            background-color: #fff;
            display: flex;
            width: 170px;
            height: 150px; 
            margin-left: 415px;  
            margin-top: -150px;        
            flex-direction: column;
            padding: 13px 16px 50px;
            transition: background-color 0.3s ease, transform 0.4s ease;
          }
          .main-container2:hover {
            background-color: #fff8e9; 
            transform: scale(1.05); 
          }
          .main-container3 {
            border-radius: 18.472px;
            border: 0.924px solid var(--Stroke-Color, #eff0f6);
            background-color: #fff;
            display: flex;
            width: 170px;
            height: 150px; 
            margin-left: 615px;  
            margin-top: -150px;        
            flex-direction: column;
            padding: 13px 16px 50px;
            transition: background-color 0.3s ease, transform 0.4s ease;
          }
          .main-container3:hover {
            background-color: #fff8e9; 
            transform: scale(1.05); 
          }
          .main-container4 {
            border-radius: 18.472px;
            border: 0.924px solid var(--Stroke-Color, #eff0f6);
            background-color: #fff;
            display: flex;
            width: 170px;
            height: 150px; 
            margin-left: 15px;  
            margin-top: 30px;        
            flex-direction: column;
            padding: 13px 16px 50px;
            transition: background-color 0.3s ease, transform 0.4s ease;
          }
          .main-container4:hover {
            background-color: #fff8e9; 
            transform: scale(1.05); 
          }
          .main-container5 {
            border-radius: 18.472px;
            border: 0.924px solid var(--Stroke-Color, #eff0f6);
            background-color: #fff;
            display: flex;
            width: 170px;
            height: 150px; 
            margin-left: 215px;  
            margin-top: -150px;        
            flex-direction: column;
            padding: 13px 16px 50px;
            transition: background-color 0.3s ease, transform 0.4s ease;
          }
          .main-container5:hover {
            background-color: #fff8e9; 
            transform: scale(1.05); 
          }
          .main-container6 {
            border-radius: 18.472px;
            border: 0.924px solid var(--Stroke-Color, #eff0f6);
            background-color: #fff;
            display: flex;
            width: 170px;
            height: 150px; 
            margin-left: 415px;  
            margin-top: -150px;        
            flex-direction: column;
            padding: 13px 16px 50px;
            transition: background-color 0.3s ease, transform 0.4s ease;
          }
          .main-container6:hover {
            background-color: #fff8e9; 
            transform: scale(1.05); 
          }
          .main-container7 {
            border-radius: 18.472px;
            border: 0.924px solid var(--Stroke-Color, #eff0f6);
            background-color: #fff;
            display: flex;
            width: 170px;
            height: 150px; 
            margin-left: 615px;  
            margin-top: -150px;        
            flex-direction: column;
            padding: 13px 16px 50px;
            transition: background-color 0.3s ease, transform 0.4s ease;
          }
          .main-container7:hover {
            background-color: #fff8e9; 
            transform: scale(1.05); 
          }
  
          .header {
            color: var(--Base-Shade-70, rgba(104, 104, 104, 0.7));
            font-feature-settings: "clig" off, "liga" off;
            letter-spacing: -0.14px;
            white-space: nowrap;
            font: 500 23px Inter, sans-serif;
          }
  
          @media (max-width: 991px) {
            .header {
              white-space: initial;
            }
          }
  
          .number {
            justify-content: left;
            color: var(--Base-Shade-100, #65b4dfba);
            margin: 51px 0 10px;
            margin-left: 80px;
            font: 700 42px Inter, sans-serif;
          }
          .number1 {
            justify-content: left;
            color: var(--Base-Shade-100, #65b4dfba);
            margin: 23px 0 10px;
            margin-left: 80px;
            font: 700 42px Inter, sans-serif;
          }
          .button {
            /* Add your desired styles for the button here */
            padding: 10px 20px;
            background-color: #e4749c;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            margin-left: 600px;
            margin-top: -150px;
            font: 700 20px Inter, sans-serif;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          
          .button:hover {
            background-color: #ce0f53;
            transform: scale(1.1);
          }
          .button1 {
            /* Add your desired styles for the button here */
            padding: 10px 20px;
            background-color: #ebc780;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            margin-left: 600px;
            margin-top: -150px;
            font: 700 20px Inter, sans-serif;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          
          .button1:hover {
            background-color: #b1462ca8;
            transform: scale(1.1);
          }
          
          .button2 {
            /* Add your desired styles for the button here */
            padding: 10px 20px;
            background-color: #5fc783;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            margin-left: 600px;
            margin-top: -150px;
            font: 700 20px Inter, sans-serif;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          
          .button2:hover {
            background-color: #127434d6;
            transform: scale(1.1);
          }
          .button3 {
            /* Add your desired styles for the button here */
            padding: 10px 20px;
            background-color: #a96ef5d1;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            margin-left: 600px;
            margin-top: -150px;
            font: 700 20px Inter, sans-serif;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          
          .button3:hover {
            background-color: #6128aad1;
            transform: scale(1.1);
          }
      `}</style>
    </>
  );
}


export default AdminLanding;