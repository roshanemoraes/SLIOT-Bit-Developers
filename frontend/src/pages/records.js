import React, { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  // Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

// import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

// import revenueData from "./revenueData.json";
// import sourceData from "./sourceData.json";
import temperatureData from "./temperatureData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const data = {
  labels: temperatureData.map((data) => data.reading_time),
  datasets: [
    // {
    //   label: "Revenue",
    //   data: revenueData.map((data) => data.revenue),
    //   backgroundColor: "rgba(75,192,192,0.6)",
    //   borderColor: "rgba(75,192,192,1)",
    //   pointradius: 4,
    //   // fill: true,
    //   // borderWidth: 1,
    //   // tension: 0.3,
    // },
    // {
    //   label: "Cost",
    //   data: revenueData.map((data) => data.cost),
    //   backgroundColor: "rgba(255, 99, 132, 0.6)",
    //   borderColor: "rgba(255, 99, 132, 1)",
    //   // fill: true,
    //   // borderWidth: 1,
    // },
    {
      label: "value",
      data: temperatureData.map((data) => data.value),
      backgroundColor: "rgba(75,192,192,0.6)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      labels: {
        // This more specific font property overrides the global property
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

const Records = () => {
  const [selectedSensor, setSelectedSensor] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      if (selectedDate) {
        const dateObj = new Date(selectedDate);
        const date = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        console.log(date, month, year);
      }
      if (selectedHour) {
        const hourObj = new Date(selectedHour);
        const hour = hourObj.getHours();
        console.log(hour);
      }
      setRefresh(false);
    }
  }, [refresh]);
  const handleRefresh = () => {
    setRefresh(true);
  };

  const handleSelect = (sensor) => {
    setSelectedSensor(sensor);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };
  const handleHourChange = (date) => {
    setSelectedHour(date);
    console.log(date);
  };

  return (
    <>
      <div className="records">
        <div className="container-xxl">
          <div className="row">
            <div className="select-sensor col-2 py-4 align-items-center justify-content-between">
              <div className="dropdown-center">
                <button
                  className="btn btn-secondary dropdown-toggle py-2"
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
            <div className="date-picker col-3 py-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="hour-picker col-3 py-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["MobileTimePicker"]}>
                  <DemoItem label={""}>
                    <TimePicker
                      views={["hours"]}
                      value={selectedHour}
                      onChange={handleHourChange}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="refreshbtn col-3 py-2">
              <button
                onClick={handleRefresh}
                className="py-2 mt-3 px-2 justify-content-between align-items-center bg-white"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div
                className="dataCard revenueCard d-felx justify-content-between align-items-center"
                style={{
                  width: "100%",
                  // height: "100%",
                  height: "500px",
                  margin: "0 auto",
                  padding: "20px",
                }}
              >
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Records;
