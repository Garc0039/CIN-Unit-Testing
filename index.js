const express = require("express");
const routes = require('./routes/routes');

const app = express();
const PORT = 3000;

app.use('/', routes)
app.listen(PORT, () => {
    console.log("Running on Port 3000");
})