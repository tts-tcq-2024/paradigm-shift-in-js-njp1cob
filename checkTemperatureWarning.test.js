
const { expect } = require('chai');
const { temperatureWarning } = require('./checkTemperatureWarning');

describe('check temperature warnings', () => {
    it('should display warning for extreme high temperature', () => {
        expect(temperatureWarning("0")).to.equal("Invalid values");
    });

     it('should display warning for extreme high temperature', () => {
        expect(temperatureWarning("2")).to.equal("Approaching LOW_Temperature");
    });
  it('should display warning for extreme high temperature', () => {
        expect(temperatureWarning(3")).to.equal("Normal");
    });
  it('should display warning for extreme high temperature', () => {
        expect(temperatureWarning("45")).to.equal("Approaching High Temperature");
    });
  it('should display warning for extreme high temperature', () => {
        expect(temperatureWarning("47")).to.equal("Temperature is out of range");
    });
  

    
});
