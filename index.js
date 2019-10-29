const express = require("express");
const app = express();
const data = require("./api.json");

const PORT = process.env.PORT || 3000;

app.get("/api/v1/", (req, res) => {
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
