
const { temperature } = require('./checker');

function temperatureWarning(temperature) {
  console.log(temperature)
  let warning = 
    temperature > 0 && temperature <= 2.5 ? "LOW_Temperature":
    temperature > 2.5 && temperature <= 42.75 ? "Normal":
    temperature > 42.75 && temperature <= 45 ? "High Temperature":
    temperature > 45 ? "Temperature is out of range": "Invalid values";
  return warning;
}
module.exports = temperatureWarning;
