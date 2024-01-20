const express = require("express");
const dataController = require("../controllers/data");

const router = express.Router();

router.post('/dashboard', dataController.populateDashboard);

// router.get('/dashboard', dataController.populateDashboard);


router.post('/blood-oxygen', dataController.bloodOxygenSensor);

// TODO: Ask others and add other routes if required

module.exports = router;