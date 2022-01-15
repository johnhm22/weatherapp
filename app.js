const express = require("express");
const nunjucks = require("nunjucks");
const axios = require("axios");
const {createArrayOfTemps, calculateTempMax, calculateTempMin, averageTemp, calculateMode} = require('./helperFunctions');


const {   
    API_KEY,
    BASE_URL,  
} = require('./config');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.status(200).render('home.html');
});


app.get('/today', async (req, res) => {
    
    try{
    const {city} = req.query;
    const result = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const weather = result.data;    
    res.render("today.html", {weather: weather});
    }
    catch(e){
        console.log("Error in providing today's weather", e);
        res.render("home.html");
    }
});


app.get('/forecast', async (req, res) => {
    try{
    const {city} = req.query;
    const result = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const forecast = result.data;

    let tempArray = createArrayOfTemps(forecast.list);    
    let tempMax = calculateTempMax(tempArray);
    let tempMin = calculateTempMin(tempArray);
    let tempAverage = averageTemp(tempArray);
    let averageTempRounded = tempAverage.toFixed(2);
    let mode = calculateMode(tempArray);
    
    res.render("forecast.html", {forecast: forecast, tempMax: tempMax, tempMin: tempMin, averageTempRounded: averageTempRounded, mode: mode});
    }
    catch(e){
        console.log("Error in providing today's weather");
        res.render("home.html");
    }
});

app.get('/forecast/:city', async (req, res) => {    
    try{
    const {city} = req.params;
    const result = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const forecast = result.data;
    let tempArray = createArrayOfTemps(forecast.list);
    let tempMax = calculateTempMax(tempArray);
    let tempMin = calculateTempMin(tempArray);
    let tempAverage = averageTemp(tempArray);
    let averageTempRounded = +tempAverage.toFixed(2);
    
    res.render("forecast.html", {forecast: forecast, tempMax: tempMax, tempMin: tempMin, averageTempRounded: averageTempRounded});
    }
    catch(e){
        console.log("Error in providing today's weather");
        res.render("home.html");
    }
});


module.exports = app;