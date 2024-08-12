
function chargerateWarning(value) {
  let warning = 
    value > 0 && value <= 0.04 ? "LOW_ChargeRate":
    value > 0.04 && value <= 0.76 ? "Normal":
    value > 0.76 && value <= 0.8 ? "Approaching High Charge Rate":
    value > 0.8 ? "Charge Rate is out of range!"
  return value;
}
