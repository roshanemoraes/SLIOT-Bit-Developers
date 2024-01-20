import React, { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

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

const LineChart = ({ apiEndpoint, chartOptions }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response has a structure like { labels: [...], datasets: [...] }
        setChartData(data);
      })
      .catch((error) => {
        console.error("Error fetching chart data:", error);
      });
  }, [apiEndpoint]);

  return (
    <div>
      {chartData ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default LineChart;
