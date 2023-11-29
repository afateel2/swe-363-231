const express = require("express");
const path = require("path");
const router = express.Router();
// const mainDir = "D:/SWE206/NEWREP/swe-363-231/html_2-exercise_2"
const correntDir = process.cwd();
const mainDir =  process.cwd();
router.get('/', (request,response) =>{
    const fileP = path.join(mainDir,"Home.html")
    response.status(200).sendFile(fileP)
})

router.get('/home', (request,response) =>{
    const fileP = path.join(mainDir,"Home.html")
    response.status(200).sendFile(fileP)
})

router.get('/home-ar', (request,response) =>{
    const fileP = path.join(mainDir,"Home-ar.html")
    response.status(200).sendFile(fileP)
})

router.get('/proposal', (request,response) =>{
    const fileP = path.join(mainDir,"prop.html")
    response.status(200).sendFile(fileP)
})

router.get('/proposal-ar', (request,response) =>{
    const fileP = path.join(mainDir,"prop.html")
    response.status(200).sendFile(fileP)
})

router.all('*', (request,response) =>{
    response.status(404).send("<h1>404 <br> <br>The page you are looking for does not exist!</h1>")
})

module.exports = router