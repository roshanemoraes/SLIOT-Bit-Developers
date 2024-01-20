import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

// const sampleData = [
//   { title: "Item 1", value: 7 },
//   { title: "Item 2", value: 5 },
//   { title: "Item 3", value: 3 },
// ];

function BarChart({ selectedSensor }) {
  // const [chartData, setChartData] = useState({});
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  });

  const loadData = (sensor) => {
    // Fetch or determine data based on sensor
    // For example, if you have a function that fetches data based on sensor:
    // const fetchedData = fetchDataBasedOnSensor(sensor);
    const fetchedData = [
      { title: "Item 1", value: 7 },
      { title: "Item 2", value: 5 },
      { title: "Item 3", value: 3 },
    ];
    console.log("fetchedData:", fetchedData);

    if (Array.isArray(fetchedData) && fetchedData.length > 0) {
      const labels = fetchedData.map((item) => item.title);
      const data = fetchedData.map((item) => item.value);

      setChartData({
        labels: labels,
        datasets: [
          {
            data: data || [],
            backgroundColor: "rgba(75,192,192,0.6)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
        ],
      });
    } else {
      // Handle the case where fetchedData is not valid
      console.error("Invalid data fetched:", fetchedData);
      // You might want to set a default or handle this case appropriately
    }
  };

  useEffect(() => {
    if (selectedSensor) {
      loadData(selectedSensor);
    }
  }, [selectedSensor]);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Bar Chart",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      {console.log("chartData:", chartData)}
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default BarChart;
