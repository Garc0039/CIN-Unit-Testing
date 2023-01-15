const express = require('express');
const axios = require('axios')
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hi")
})

router.get("/getRandomNumber", async(req, res) => {
    let randomNumber = Math.random() * (10 - 1) + 1;
    randomNumber = Math.round(randomNumber)
    res.json(randomNumber)
})

router.get("/getRandomColor", async(req, res) => {
    const array = ['blue', 'yellow', 'green', 'red', 'purple', 'black', 'white', 'orange', 'pink', 'rose']
    let randomColorNumber = Math.random() * (9 - 0) + 0;
    randomColorNumber = Math.round(randomColorNumber)

    res.json(array[randomColorNumber])
})
module.exports = router;