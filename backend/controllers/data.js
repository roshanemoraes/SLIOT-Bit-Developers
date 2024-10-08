const db = require("../config/db");

/**
 * One function to get them all
 * Returns a JSON object containing all the latest data for the givne employee
 */
exports.populateDashboard = async (req, res) => {
  // const employeeId = req.body.employeeId;
  const employeeId = "W001";
  const stored_procedure = "CALL GetDashboardData(?, @result);";

  // The `@result` variable from the inner `SELECT` query will be stored in `dashboard_data`
  const dashboard_data = await new Promise((resolve, reject) => {
    db.query(stored_procedure, [employeeId], (error, results, fields) => {
      if (error) {
        console.log(error.message);
        reject(error);
      } else {
        // Means initial call to `GetDashboardData()` was successful
        db.query("SELECT @result;", (error, innerResults, fields) => {
          if (error) {
            console.log(error);
            reject(error);
            return;
          } else {
            const dashboard_data = innerResults[0]["@result"];
            resolve(dashboard_data);
          }
        });
      }
    });
  });

  if (dashboard_data) {
    // res.status(200).json({data: dashboard_data});
    console.log(dashboard_data);
    res.status(200).send(dashboard_data);
  } else {
    res.status(404).json({ message: "ERROR: Couldn't find data :(" });
  }
};

/**
 * Function to add `hours` number of hours to a given `Date()` object
 * Not exported
 */
function addHours(date, hours) {
  let newDate = new Date(date.getTime());
  newDate.setHours(newDate.getTime() + hours * 60 * 60 * 1000);
  return newDate;
}

exports.bloodOxygenSensor = async (req, res) => {
  const employeeId = req.body.employeeId;
  const now = new Date();
  // `prevNow` will be 24 hours before `now`.
  const prevNow = addHours(now, -24);

  const noiseLevelQuery =
    "SELECT SensorData FROM blood_oxygen_sensor WHERE (employee_id = ?) AND (Date_Time BETWEEN ? AND ?);";
  // const noiseLevelQuery = 'SELECT SensorData FROM blood_oxygen_sensor WHERE (employee_id = ?) AND (Date_Time BETWEEN ? AND ?);';

  db.query(
    noiseLevelQuery,
    [
      employeeId,
      now.toISOString().slice(0, 19).replace("T", " "),
      prevNow.toISOString().slice(0, 19).replace("T", " "),
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ err: err });
      } else {
        res.status(200).send(result);
      }
    }
  );
};

///////////// TO BE CHANGED /////////////
const heartRate = async (req, res) => {
  const employeeId = req.params.employeeId;

  const heartRateQuery =
    "SELECT * FROM heart_pulse_sensor WHERE employee_id = ? ORDER BY Date_Time DESC LIMIT 1;";

  db.query(heartRateQuery, [employeeId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ err: err });
    } else {
      res.status(200).send(result);
    }
  });
};

const noiseLevel = async (req, res) => {
  const employeeId = req.params.employeeId;

  const noiseLevelQuery =
    "SELECT * FROM noise_level WHERE employee_id = ? ORDER BY Date_Time DESC LIMIT 1;";

  db.query(noiseLevelQuery, [employeeId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ err: err });
    } else {
      res.status(200).send(result);
    }
  });
};

const ambientTemperature = async (req, res) => {
  const employeeId = req.params.employeeId;

  const noiseLevelQuery =
    "SELECT * FROM ambient_temperature WHERE employee_id = ? ORDER BY Date_Time DESC LIMIT 1;";

  db.query(noiseLevelQuery, [employeeId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ err: err });
    } else {
      res.status(200).send(result);
    }
  });
};

const body_temperature = async (req, res) => {
  const employeeId = req.params.employeeId;

  const noiseLevelQuery =
    "SELECT * FROM noise_level WHERE employee_id = ? ORDER BY Date_Time DESC LIMIT 1;";

  db.query(noiseLevelQuery, [employeeId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ err: err });
    } else {
      res.status(200).send(result);
    }
  });
};

const gps_location = async (req, res) => {
  const employeeId = req.params.employeeId;

  const gpsLocation =
    "SELECT * FROM gps_location WHERE employee_id = ? ORDER BY Date_Time DESC LIMIT 1;";

  db.query(gpsLocation, [employeeId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ err: err });
    } else {
      res.status(200).send(result);
    }
  });
};

const fall_sensor = async (req, res) => {
  const employeeId = req.params.employeeId;
  const fallSensorQuery =
    "SELECT * FROM fall_sensor WHERE employee_id = ? ORDER BY Date_Time DESC LIMIT 1;";

  db.query(fallSensorQuery, [employeeId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ err: err });
    } else {
      res.status(200).send(result);
    }
  });
};
exports.individualSensorData = async (req, res) => {
  // const employeeId = req.body.employeeId;
  const deviceID = "W001";
  const sensorType = req.body.sensor;
  const year = req.body.year;
  const month = req.body.month;
  const day = req.body.date;
  const hour = req.body.hour;

  console.log(sensorType);
  console.log(year + " " + month + " " + day + " " + hour);

  const date_begin_js = new Date(Date.UTC(year, month - 1, day, hour, 0, 0));
  if (isNaN(date_begin_js)) {
    console.error("Invalid date_begin_js:", date_begin_js);
    return;
  }

  const date_end_js = new Date(date_begin_js.getTime() + 60 * 60 * 1000);
  console.log("begin", date_begin_js);
  console.log("end", date_end_js);

  if (isNaN(date_end_js)) {
    console.error("Invalid date_end_js:", date_end_js);
    return;
  }
  // const date_end_js = new Date(date_begin_js).addHours(1);
  // const date_end_js = new Date(year, month, day, 23, 59, 59);

  const date_begin = date_begin_js.toISOString().slice(0, 19).replace("T", " ");
  const date_end = date_end_js.toISOString().slice(0, 19).replace("T", " ");

  let query = "";
  let inserts = [];

  switch (sensorType) {
    case "heart_pulse_rate":
      query =
        "SELECT Date_Time, SensorReading FROM heart_pulse_sensor WHERE (DeviceID = ?) AND (Date_Time BETWEEN ? AND ?)";
      inserts = [deviceID, date_begin, date_end];
      break;
    case "explosive_gas_level":
      query =
        "SELECT Date_Time, SensorReading FROM exgas_sensor WHERE (DeviceID = ?) AND (Date_Time BETWEEN ? AND ?)";
      inserts = [deviceID, date_begin, date_end];
      break;
    case "environmental_temperature":
      query =
        "SELECT Date_Time, SensorReading FROM temperature_sensor WHERE (DeviceID = ?) AND (Date_Time BETWEEN ? AND ?)";
      inserts = [deviceID, date_begin, date_end];
      break;

    case "body_temperature":
      query =
        "SELECT Date_Time, SensorReading FROM bodytemp_sensor WHERE (DeviceID = ?) AND (Date_Time BETWEEN ? AND ?)";
      inserts = [deviceID, date_begin, date_end];
      break;
    // case "gps_location":
    //   query =
    //     "SELECT Date_Time, SensorReading FROM gps_sensor WHERE (DeviceID = ?) AND (Date_Time BETWEEN ? AND ?)";
    //   inserts = [deviceID, date_begin, date_end];
    //   break;
    // case "fall_sensor":
    //   query =
    //     "SELECT Date_Time, SensorReading FROM gyrascope_sensor WHERE (DeviceID = ?) AND (Date_Time BETWEEN ? AND ?)";
    //   inserts = [deviceID, date_begin, date_end];
    //   // query = "SELECT SensorReading FROM gyrascope_sensor WHERE (DeviceID = " + deviceID + ") AND (Date_Time BETWEEN " + date_begin + " AND " + date_end + ");";
    //   break;

    case "humidity":
      query =
        "SELECT Date_Time, SensorReading FROM humidity_sensor WHERE (DeviceID = ?) AND (Date_Time BETWEEN ? AND ?)";
      inserts = [deviceID, date_begin, date_end];
      break;
    case "blood_oxygen_level":
      query =
        "SELECT Date_Time, SensorReading FROM blood_oxygen_sensor WHERE (DeviceID = ?) AND (Date_Time BETWEEN ? AND ?)";
      inserts = [deviceID, date_begin, date_end];
      break;
    default:
      res.status(404).json({ message: "ERROR: Wrong sensor chosen :(" });
      break;
  }

  db.query(query, inserts, (error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(500).send({ err: error });
    } else {
      console.log(results);
      res.status(200).send(results);
    }
  });
};
const humidity = async (req, res) => {
  const employeeId = req.params.employeeId;
  const humidityQuery =
    "SELECT * FROM humidity WHERE employee_id = ? ORDER BY Date_Time DESC LIMIT 1;";

  db.query(humidityQuery, [employeeId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ err: err });
    } else {
      res.status(200).send(result);
    }
  });
};
