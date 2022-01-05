const createArrayOfTemps = (data) => {
    let temperatureArray = [];
    data.forEach(element => {
        temperatureArray.push(element.main.temp);
    });    
    return temperatureArray;
}

const calculateTempMax = (temperatureArray) => Math.max(...temperatureArray);
const calculateTempMin = (temperatureArray) => Math.min(...temperatureArray);

const averageTemp = (temperatureArray) => temperatureArray.reduce((a,b) => a+b,0) /temperatureArray.length;


const calculateMode = (temperatureArray) => {
    const table = {};
    temperatureArray.forEach(value => (table[value] = table[value] + 1 || 1));

    let modes = [];
    let max = 0;
    for (let key in table) {
      const value = +key;
      const count = table[key];
      if (count > max) {
        modes = [value];
        max = count;
      } else if (count === max){
          modes.push(value)
      };
    }

    if (modes.length === Object.keys(table).length){
        modes = [];
    }

    return modes;
  }


module.exports = {createArrayOfTemps, calculateTempMax, calculateTempMin, averageTemp, calculateMode};