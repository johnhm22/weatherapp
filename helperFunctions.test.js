const {createArrayOfTemps, calculateTempMax, calculateTempMin, averageTemp, calculateMode} = require('./helperFunctions');


describe('createArrayOfTemps', () => {
    const data = [{main: {temp: 12}},{main: {temp:23}},{main: {temp:7}}];
    const expected = [12,23,7];

    test("createArrayOfTemps should create an array of temperatures", () => {
        const result = createArrayOfTemps(data);
        expect(result).toEqual([12, 23, 7]);
    });

    test("createArrayOfTemps creates an array containing 12, 23, and 7", () => {
        expect([12,23,7]).toEqual(expect.arrayContaining(expected));
    })
});


describe('calculate min, max, average', () => {
    const temperatureArray = [12, 23, 7];
    const temperatureArray2 = [11, 23, 7, 17, 21, 99];
    
    test("calculateTempMax should return the max temp", () => {
        const result = calculateTempMax(temperatureArray2);
        expect(result).toEqual(99);
    });

    test("calculateTempMin should return the min temp", () => {
        const result = calculateTempMin(temperatureArray2);
        expect(result).toEqual(7);
    });
 
    test("averageTemp should return the average temp", () => {
        const result = averageTemp(temperatureArray);
        expect(result).toEqual(14.00);
    });
 
    test("averageTemp should return the average temp to 2dps", () => {
        const result = +averageTemp(temperatureArray2).toFixed(2);        
        expect(result).toEqual(29.67);
    });
})


describe("calculate the mode", () => {

    const temperatureArray = [11, 23, 7, 17, 21, 99, 7];
    const temperatureArray_noMode = [11, 23, 7, 17, 21, 99];
    const temperatureArray_twoModes = [11, 23, 7, 17, 21, 99, 7, 11];

    test("calculateMode should return the mode value", () => {
        const result = calculateMode(temperatureArray);
        expect(result).toEqual([7]);
    });
 
    test("calculateMode should return empty array", () => {
        const result = calculateMode(temperatureArray_noMode);
        expect(result).toEqual([]);
    });

    test("calculateMode should return all modes", () => {
        const result = calculateMode(temperatureArray_twoModes);
        expect(result).toEqual([7, 11]);
    });
});




