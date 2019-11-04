const express = require("express");
const cors = require('cors')
const app = express();
const data = require("./api.json");

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/v1/", (req, res) => {
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
