import React, { Component, useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import LineChart from "../components/lineChart";

const PastRecords = () => {
  const [selectedSensor, setSelectedSensor] = useState("");

  const handleSelect = (sensor) => {
    setSelectedSensor(sensor);
  };

  const apiEndpoint = "http://localhost:8080/data/dashboard";
  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 18,
            weight: 550,
          },
        },
        display: false,
      },
    },
    scales: {
      y: {},
    },
  };

  return (
    <>
      <div className="records">
        <div className="container-xxl">
          <div className="row">
            <div className="col py-3">
              <div className="dropdown-center">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedSensor || "Select Sensor"}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("Body Temperature")}
                    >
                      Body Temperature
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("Environmental temperature")}
                    >
                      Environmental temperature
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("Humidity")}
                    >
                      Humidity
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("Heart Pulse Rate")}
                    >
                      Heart Pulse Rate
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("Explosive Gas Level")}
                    >
                      Explosive Gas Level
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("Noice Level")}
                    >
                      Noice Level
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("UV Radiation Level")}
                    >
                      UV Radiation Level
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("Toxic Gas Level")}
                    >
                      Toxic Gas Level
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("Blood Oxygen Level")}
                    >
                      Blood Oxygen Level
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col py-3">
                <BarChart selectedSensor={selectedSensor} />
              </div> */}
          </div>
        </div>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div
                className="dataCard revenueCard d-felx justify-content-between align-items-center"
                style={{
                  // width: "80%",
                  margin: "0 auto",
                  padding: "20px",
                }}
              >
                <LineChart
                  apiEndpoint={apiEndpoint}
                  chartOptions={chartOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastRecords;
