
const { value } = require('./checker');

function socbreach(value) {
  let warning = 
    value > 0 && value <= 20 ? "LOW_SOC_Breach":
    value > 20 && value <= 24 ? "Approaching discharge":
    value > 24 && value <= 76 ? "Normal":
    value > 76 && value <= 80 ? "Approaching charge peak"
    value > 80 ? "SOC is out of range!": "Invalid values";
  return warning;
}
