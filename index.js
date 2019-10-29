const express = require("express");
const app = express();
const data = require("./api.json");

app.get("/api/v1/", (req, res) => {
    res.send(data);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
