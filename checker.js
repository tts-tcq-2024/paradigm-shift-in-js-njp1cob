const { temperatureWarning } = require('./checkTemperatureWarning');
const { socbreach } = require('./checkSocBreach');
const { chargerateWarning } = require('./checkchargeRateWarning');


const temperature;
const soc;
const chargeRate;

function batteryIsOk(temperature,  soc,  chargeRate) {
    temperature =  temperature;
    soc = soc;
    chargeRate = chargeRate
    let value = ((temperature < 0 || temperature > 45) || (soc < 20 || soc > 80) || (chargeRate > 0.8)) ? false: true;
    return value;

}

function ExpectTrueOrFalse(expression) {
    if(!expression) {
        console.log("Expected true, but got false");
        
    } else {
        console.log("Expected false, but got true"); 
    }
}
function main() {
    ExpectTrueOrFalse(batteryIsOk(25, 70, 0.7));
    ExpectTrueOrFalse(batteryIsOk(50, 85, 0.0));
    temperatureWarning(value);
    socbreach(value);
    chargerateWarning(value);  
}

main();
module.exports = {
    temperature,
    soc, chargeRate
};
