const db = require("../config/db");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// If using JWT, add secrets and uncomment following file:
// dotenv.config({ path: "../config/jwt_secret.env" });


// Registering a new user and inserting into the database
exports.register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
        "INSERT INTO user (username, password) VALUES (?, ?)",
        [username, hashedPassword],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send("User Registered");
            }
        }
    );
}

// Logging-in a user
exports.login = async (req, res) => {
    const { username, password } = req.body;

    db.query(
        "SELECT * FROM user WHERE username = ?",
        [username],
        async (err, result) => {
            if (err) {
                res.status(500).send({ err: err });
            }

            if (result.length > 0) {
                const match = await bcrypt.compare(password, result[0].password);

                if (match) {
                    res.status(200).send("Login Successful");
                    // If setting JWT, set it here
                } else {
                    res.status(401).send("Wrong username/password combination");
                }
            } else {
                res.status(401).send("Your username might be wrong :(");
            }
        }
    );
}

// If required to verify whether a sent JWT is valid and not expired
// const verify = (req, res) => {}

exports.logout = (req, res) => {
    // If required, verify JWT here using `verify()` function
    console.log("Api giyoo!");
    res.status(200).json({message: "Logged Out"});
}