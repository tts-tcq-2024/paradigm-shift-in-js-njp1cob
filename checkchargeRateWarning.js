const { chargeRate } = require('./checker');
function chargerateWarning(chargeRate) {
  let warning = 
    chargeRate > 0 && value <= 0.04 ? "LOW_ChargeRate":
    chargeRate > 0.04 && value <= 0.76 ? "Normal":
    chargeRate > 0.76 && value <= 0.8 ? "Approaching High Charge Rate":
    chargeRate > 0.8 ? "Charge Rate is out of range!": "Invalid values";
  return warning;
}
