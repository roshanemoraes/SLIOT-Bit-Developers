import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const defaultData = "N/A";

  const [sensorData, setSensorData] = useState({
    bodyTemperature: "",
    environmentTemperature: "",
    humidity: "",
    heartPulseRate: "",
    explosiveGasLevel: "",
    noiseLevel: "",
    uvRadiationLevel: "",
    toxicGasLevel: "",
    bloodOxygenLevel: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/data/dashboard"
        );
        const data = response.data;

        setSensorData({
          bodyTemperature: data.body_temperature || defaultData,
          environmentTemperature: data.ambient_temperature || defaultData,
          humidity: data.humidity || defaultData,
          heartPulseRate: data.heart_rate || defaultData,
          explosiveGasLevel: data.combustible_gases || defaultData,
          noiseLevel: data.noise_level || defaultData,
          uvRadiationLevel: defaultData,
          toxicGasLevel: defaultData,
          bloodOxygenLevel: data.blood_oxygen || defaultData,
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <section className="dashboard-wrapper-1 py-3">
          <div className="container-xxl">
            <div className="row">
              <div className="col-15">
                <div className="sensors d-flex flex-wrap align-items-center justify-content-between">
                  <div
                    className="sensor d-flex align-items-center gap-15"
                    style={{ backgroundColor: "#D1E9FC" }}
                  >
                    <img
                      className="rotate-image mx-3"
                      src="icons/temperature.svg"
                      alt="temperature"
                    />
                    <div className="home-services-content">
                      <h4>
                        Body <br />
                        Temperature
                      </h4>
                      <p className="mb-0">{sensorData.bodyTemperature}</p>
                    </div>
                  </div>
                  <div
                    className="sensor d-flex align-items-center gap-15"
                    style={{ backgroundColor: "#D0F2FE" }}
                  >
                    <img
                      className="rotate-image mx-3"
                      src="icons/temperature.svg"
                      alt="temperature"
                    />
                    <div className="home-services-content">
                      <h4>
                        Environment <br />
                        Temperature
                      </h4>
                      <p className="mb-0">
                        {sensorData.environmentTemperature}
                      </p>
                    </div>
                  </div>
                  <div
                    className="sensor d-flex align-items-center gap-15"
                    style={{ backgroundColor: "#FFF7CC" }}
                  >
                    <img
                      className="rotate-image mx-3"
                      src="icons/humidity.svg"
                      alt="temperature"
                    />
                    <div className="home-services-content">
                      <h4>Humidity</h4>
                      <p className="mb-0">{sensorData.humidity}</p>
                    </div>
                  </div>
                  <div
                    className="sensor d-flex align-items-center gap-15"
                    style={{ backgroundColor: "#FFE7D9" }}
                  >
                    <img
                      className="rotate-image mx-3"
                      src="icons/heart-rate.svg"
                      alt="temperature"
                    />
                    <div className="home-services-content">
                      <h4>
                        Heart Pulse <br />
                        Rate
                      </h4>
                      <p className="mb-0">{sensorData.heartPulseRate}</p>
                    </div>
                  </div>
                  <div
                    className="sensor d-flex align-items-center gap-15"
                    style={{ backgroundColor: "#E6FFE6" }}
                  >
                    <img
                      className="rotate-image mx-3"
                      src="icons/fire-bomb.svg"
                      alt="temperature"
                    />
                    <div className="home-services-content">
                      <h4>
                        Explosive Gas <br />
                        Level
                      </h4>
                      <p className="mb-0">{sensorData.explosiveGasLevel}</p>
                    </div>
                  </div>
                  <div
                    className="sensor d-flex align-items-center gap-15"
                    style={{ backgroundColor: "#FFE6E6" }}
                  >
                    <img
                      className="rotate-image mx-3"
                      src="icons/noice.svg"
                      alt="temperature"
                    />
                    <div className="home-services-content">
                      <h4>Noise Level</h4>
                      <p className="mb-0">{sensorData.noiseLevel}</p>
                    </div>
                  </div>
                  <div
                    className="sensor d-flex align-items-center gap-15"
                    style={{ backgroundColor: "#E6E6FF" }}
                  >
                    <img
                      className="rotate-image mx-3"
                      src="icons/uv-index.svg"
                      alt="temperature"
                    />
                    <div className="home-services-content">
                      <h4>
                        UV radiation
                        <br />
                        Level
                      </h4>
                      <p className="mb-0">{sensorData.uvRadiationLevel}</p>
                    </div>
                  </div>
                  <div
                    className="sensor d-flex align-items-center gap-15"
                    style={{ backgroundColor: "#FAE6FF" }}
                  >
                    <img
                      className="rotate-image mx-3"
                      src="icons/blood-oxygen.svg"
                      alt="temperature"
                    />
                    <div className="home-services-content">
                      <h4>Blood Oxygen Level</h4>
                      <p className="mb-0">{sensorData.bloodOxygenLevel}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
