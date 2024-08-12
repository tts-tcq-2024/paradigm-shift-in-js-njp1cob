
const { soc } = require('./checker');

function socbreach(soc) {
  let warning = 
    soc > 0 && value <= 20 ? "LOW_SOC_Breach":
    soc > 20 && value <= 24 ? "Approaching discharge":
    soc > 24 && value <= 76 ? "Normal":
    soc > 76 && value <= 80 ? "Approaching charge peak":
    soc > 80 ? "SOC is out of range!": "Invalid values";
  return warning;
}
