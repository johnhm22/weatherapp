const createArrayOfTemps = (data) => {
    let temperatureArray = [];
    data.forEach(element => {
        temperatureArray.push(element.main.temp)
    });    
    return temperatureArray;
}

const calculateTempMax = (temperatureArray) => Math.max(...temperatureArray);
const calculateTempMin = (temperatureArray) => Math.min(...temperatureArray);

const averageTemp = (temperatureArray) => temperatureArray.reduce((a,b) => a+b,0) /temperatureArray.length;

module.exports = {createArrayOfTemps, calculateTempMax, calculateTempMin, averageTemp};