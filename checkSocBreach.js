
const { value } = require('./checker');

function socbreach(value) {
  let warning = 
    value > 0 && value <= 20 ? "LOW_SOC_Breach":
    value > 20 && value <= 24 ? "LOW_SOC_WARNING":
    value > 24 && value <= 75 ? "Normal":
    value > 75 && value <= 80 ? "HIGH_SOC_Warning":
    value > 80 && value <==100 ? "HIGH_SOC_Breach";
  return value;
}
