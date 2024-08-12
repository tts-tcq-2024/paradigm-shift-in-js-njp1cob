
const { value } = require('./checker');

function temperatureWarning(value) {
  let warning = 
    value > 0 && value <= 2.5 ? "LOW_Temperature":
    value > 2.5 && value <= 42.75 ? "Normal":
    value > 42.75 && value <= 45 ? "High Temperature":
    value > 45 ? "Temperature is out of range": "Invalid values";
  return warning;
}
