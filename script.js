// const celsiusInput = document.getElementById('celsius')
// const fahrenheitInput = document.getElementById('fahrenheit')
// const temperatureInput = document.getElementById('temperature')
// const resultLog = document.getElementById('result')

// function temperatureConvert() {
//     if(temperatureInput.value === ""){
//         resultLog.textContent = 'Please enter a valid temperature'
//         resultLog.style.color = 'red'
//     }else if(temperatureInput.value === "celsius"){
//         const result = (celsiusInput.value * 9/5 ) + 32
//         resultLog.textContent = `${celsiusInput} is  equal to ${result.toFixed(2)}F`
//         resultLog.style.color = 'green'
//     }else{
//         const result = (fahrenheitInput.value - 32) * 5/9
//         resultLog.textContent = `${fahrenheitInput} is  equal to ${result.toFixed(2)}C`
//         resultLog.style.color = 'green'
//     }

// }

const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const temperatureInput = document.getElementById('temperature');
const resultLog = document.getElementById('result');

function temperatureConvert() {
    // event.preventDefault()
    if (celsiusInput.value === "" && fahrenheitInput.value === "") {
        resultLog.textContent = 'Please enter a valid temperature';
        resultLog.style.color = 'red';
    } else if (temperatureInput.value === "celsius" && celsiusInput.value !== "") {
        const result = (parseFloat(celsiusInput.value) * 9/5) + 32;
        resultLog.textContent = `${celsiusInput.value}°C is equal to ${result.toFixed(2)}°F`;
        resultLog.style.color = 'green';
    } else if (temperatureInput.value === "fahrenheit" && fahrenheitInput.value !== "") {
        const result = (parseFloat(fahrenheitInput.value) - 32) * 5/9;
        resultLog.textContent = `${fahrenheitInput.value}°F is equal to ${result.toFixed(2)}°C`;
        resultLog.style.color = 'green';
    } else {
        resultLog.textContent = 'Please enter a valid temperature t';
        resultLog.style.color = 'red';
    }
}
















// if (temperatureInput.value === "celsius") {
//     const result = (parseFloat(celsiusInput.value) * 9/5 ) + 32
//     fahrenheitInput.value = String(result)
//     resultLog.innerText = 

// }