import React, { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { format } from "date-fns";
import "chartjs-adapter-date-fns";
import {
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

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

const options = {
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      cornerRadius: 1, // Adjust this value to change the tooltip radius
    },
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
    x: {
      type: "time",
      time: {
        unit: "second",
        displayFormats: {
          second: "mm:ss",
        },
      },
      ticks: {
        callback: function (value, index, values) {
          // This function is called for each tick on the x-axis.
          // `value` is the original value for the tick.
          // You can return the value you want to display for each tick.
          const date = new Date(value);
          const minutes = date.getMinutes().toString().padStart(2, "0");
          const seconds = date.getSeconds().toString().padStart(2, "0");
          return `${minutes}:${seconds}`;
        },
      },
    },
    y: {
      // min: 22.5,
      // max: 26,
      ticks: {
        source: "auto",
      },
    },
  },
};

// function createChartData(temperatureData) {
//   return {
//     labels: temperatureData.map((data) => data.reading_time),
//     datasets: [
//       {
//         label: "value",
//         data: temperatureData.map((data) => data.value),
//         backgroundColor: "rgba(75,192,192,0.6)",
//         borderColor: "rgba(75,192,192,1)",
//       },
//     ],
//   };
// }

// const myTemperatureData = [...]; // Your temperature data
// const myChartData = createChartData(myTemperatureData);

const Records = () => {
  const [selectedSensor, setSelectedSensor] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [chartData, setChartData] = useState(createChartData([]));

  function createChartData(temperatureData) {
    return {
      labels: temperatureData.map((data) => new Date(data.Date_Time)),
      datasets: [
        {
          label: "value",
          data: temperatureData.map((data) => data.SensorReading),
          backgroundColor: "rgba(75,192,192,0.6)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };
  }

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
      sendDataToBackend();
      // fetchData();
    }
  }, [refresh]);

  const sendDataToBackend = async () => {
    let date, month, year;
    if (selectedDate) {
      const dateObj = new Date(selectedDate);
      date = dateObj.getDate();
      month = dateObj.getMonth() + 1;
      year = dateObj.getFullYear();
      console.log(date, month, year, selectedSensor);
    }
    let hour;
    if (selectedHour) {
      const hourObj = new Date(selectedHour);
      hour = hourObj.getHours();
      console.log(hour);
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/data/sensor-reports",
        {
          sensor: selectedSensor,
          date: date,
          month: month,
          year: year,
          hour: hour,
        }
      );
      console.log("hehe", response.data);

      console.log("right after sending data");
      setChartData(createChartData(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      console.log("hellp1");
      const response = await axios.post(
        "http://localhost:8080/data/sensor-reports"
      );
      console.log("hellp2");
      const data = response.data;
      console.log("hellp3");
      console.log(data);
      setChartData(createChartData(data));

      // setChartData((prevData) => {
      //   const labels = temperatureData.map((item) => item.reading_time);
      //   const data = temperatureData.map((item) => item.value);

      //   console.log(labels, data); // Check labels and data arrays

      //   return {
      //     ...prevData,
      //     labels,
      //     datasets: [
      //       {
      //         ...prevData.datasets[0],
      //         data,
      //       },
      //     ],
      //   };
      // });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleRefresh = () => {
    setRefresh(true);
  };

  const handleSelect = (sensor) => {
    setSelectedSensor(sensor);
    console.log(sensor);
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
            <div className="select-sensor col-3 py-4 align-items-center justify-content-between">
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
                      onClick={() => handleSelect("body_temperature")}
                    >
                      Body Temperature
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("environmental_temperature")}
                    >
                      Environmental temperature
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("humidity")}
                    >
                      Humidity
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("heart_pulse_rate")}
                    >
                      Heart Pulse Rate
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("explosive_gas_level")}
                    >
                      Explosive Gas Level
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("blood_oxygen_level")}
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
            <div className="refresh-btn col-3 py-2">
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
                  width: "1400px",
                  // height: "100%",
                  height: "700px",
                  margin: "0 auto",
                  padding: "20px",
                }}
              >
                <Line data={chartData} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Records;
