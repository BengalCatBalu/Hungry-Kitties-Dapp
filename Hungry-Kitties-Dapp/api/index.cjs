const fs = require("fs");
const express = require("express");

const app = express();

const port = 3000;

const events = JSON.parse(fs.readFileSync(`${__dirname}/examples/events.json`))
app.get('/api/v1/events', (req, resp) => {
    resp.status(200).json({
        status: "succes",
        length: events.length,
        data: {
            events,
        }
    })
});

app.listen(port , () => {
    console.log(`App running on port ${port}`)
});