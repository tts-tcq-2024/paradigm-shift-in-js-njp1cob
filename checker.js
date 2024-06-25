function batteryIsOk(temperature,  soc,  chargeRate) {
    if(temperature < 0 || temperature > 45) {
        console.log("Temperature is out of range!");
        return false;
    } else if(soc < 20 || soc > 80) {
        console.log("State of Charge is out of range!");
        return false;
    } else if(chargeRate > 0.8) {
        console.log("Charge Rate is out of range!");
        return false;
    }
    return true;
}

function ExpectTrueOrFalse(expression) {
    if(!expression) {
        console.log("Expected true, but got false");
        
    } else {
        console.log("Expected false, but got true");
        Environment.Exit(1);  
    }
}
function main() {
    ExpectTrueOrFalse(batteryIsOk(25, 70, 0.7));
    ExpectTrueOrFalse(batteryIsOk(50, 85, 0.0));
    console.log("All ok");
    return 0;
}

main();
