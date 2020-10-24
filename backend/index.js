const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

const Engine = require("./models/Engine");
const Model = require("./models/Model");
const Gearbox = require("./models/Gearbox");
const Color = require("./models/Color");

// database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("Connected to MongoDB!")
    } catch(e) {
        console.error("Could not connect to MongoDB...", e)
    }
};

connect();

// get data
app.get("/api/engines", async (req, res) => {
    const engines = await Engine.find()
    res.status(200).json(engines);
});

app.get("/api/models", async (req, res) => {
    const models = await Model.find()
    res.status(200).json(models);
});

app.get("/api/gearboxes", async (req, res) => {
    const gearboxes = await Gearbox.find()
    res.status(200).json(gearboxes);
});

app.get("/api/colors", async (req, res) => {
    const colors = await Color.find()
    res.status(200).json(colors);
});

//PORT listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app listening on port ${PORT}...`));