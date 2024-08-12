
const { soc } = require('./checker');

function socbreach(soc) {
  let warning = 
    soc > 0 && soc <= 20 ? "LOW_SOC_Breach":
    soc > 20 && soc <= 24 ? "Approaching discharge":
    soc > 24 && soc <= 76 ? "Normal":
    soc > 76 && soc <= 80 ? "Approaching charge peak":
    soc > 80 ? "soc is out of range!": "Invalid values";
  return warning;
}
module.exports = socbreach;
