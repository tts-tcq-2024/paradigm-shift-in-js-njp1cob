
const { temperature } = require('./checker');

function temperatureWarning(temperature) {
  let warning = 
    temperature > 0 && value <= 2.5 ? "LOW_Temperature":
    temperature > 2.5 && value <= 42.75 ? "Normal":
    temperature > 42.75 && value <= 45 ? "High Temperature":
    temperature > 45 ? "Temperature is out of range": "Invalid values";
  return warning;
}
