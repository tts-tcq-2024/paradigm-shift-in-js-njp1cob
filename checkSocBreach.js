
const { temperature } = require('./checker');

function socbreach(temperature) {
  let warning = 
    temperature > 0 && value <= 20 ? "LOW_SOC_Breach":
    temperature > 20 && value <= 24 ? "Approaching discharge":
    temperature > 24 && value <= 76 ? "Normal":
    temperature > 76 && value <= 80 ? "Approaching charge peak"
    temperature > 80 ? "SOC is out of range!": "Invalid values";
  return warning;
}
