const express = require("express");
const app = express();
const path = require("path")
const port = 3030;

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")))
app.get("/babbage", (req, res) => res.sendFile(path.join(__dirname, "views", "babbage")))
app.get("/berners-lee", (req, res) => res.sendFile(path.join(__dirname, "views", "berners-lee")))
app.get("/clarke", (req, res) => res.sendFile(path.join(__dirname, "views", "clarke")))
app.get("/hamilton", (req, res) => res.sendFile(path.join(__dirname, "views", "hamilton")))
app.get("/hopper", (req, res) => res.sendFile(path.join(__dirname, "views", "hopper")))
app.get("/lovelace", (req, res) => res.sendFile(path.join(__dirname, "views", "lovelace")))
app.get("/turing", (req, res) => res.sendFile(path.join(__dirname, "views", "turing")))

app.listen(port , () => console.log("Server running in htpp://localhost:" + port));