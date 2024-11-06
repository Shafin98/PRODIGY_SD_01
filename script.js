document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("convertButton").addEventListener("click", convertTemperature);
});

function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const type = document.getElementById('type').value;
    const resultElement = document.getElementById('convertedValues');


    if (isNaN(temperature)) {
        resultElement.innerText = "Please enter temperature.";
        resultElement.classList.add("error");
        return;
    }
    
    resultElement.classList.remove("error");

    let convertedValue1;
    let convertedValue2;
    
    if (type === "celsius") {
        convertedValue1 = (temperature * 9) / 5 + 32;
        convertedValue2 = temperature + 273.15;
        resultElement.innerText = `Fahrenheit: ${convertedValue1.toFixed(2)} °F \n Kelvin: ${convertedValue2.toFixed(2)} °k`;
    }else if (type === "fahrenheit"){
        convertedValue1 = ((temperature - 32) * 5) / 9;
        convertedValue2 = (((temperature - 32) * 5) / 9) + 273.15;
        resultElement.innerText = `Celsius: ${convertedValue1.toFixed(2)} °C \n Kelvin: ${convertedValue2.toFixed(2)} °k`;
    }else{
        convertedValue1 = temperature - 273.15;
        convertedValue2 = (((temperature - 273.15) * 9) / 5) + 32;
        resultElement.innerText = `Celsius: ${convertedValue1.toFixed(2)} °C \n Fahrenheit: ${convertedValue2.toFixed(2)} °F`;
    }
}