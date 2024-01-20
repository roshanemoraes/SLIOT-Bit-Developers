const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.js");
const dataRouter = require("./routes/data.js");

const app = express();
app.use(express.json());
app.use(cors());

// Add to models if necessary
const db = require("./config/db");

// Any URL with 'www.sitename.com/auth/*' will go through authRouter
app.use('/auth', authRouter);

// Any URL with 'www.sitename.com/data/*' will go through dataRouter
app.use('/data', dataRouter);




console.log("Everything seems ok, boss");

app.listen(8080, () => console.log("Server running on port 8080"));