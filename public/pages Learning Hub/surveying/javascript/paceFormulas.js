export let totalDistance = Number(), paces = [], meanPace = Number(), meanPD = Number(), meanRP = Number(), meanPF = Number();

// calculate mean No. of Paces
// document.querySelector("#button1").addEventListener("click", calcMNPace); // adds listener to button 1
export function calcMNPace() {
    let total = 0, numOfPaces = 0;
    for (let i = 1; i <= 10; i++) {
        if (document.querySelector(`body > div:nth-child(3) > table > tbody > tr:nth-child(${i}) > td:nth-child(2) > input`).value != "") {
            total += Number(document.querySelector(`body > div:nth-child(3) > table > tbody > tr:nth-child(${i}) > td:nth-child(2) > input`).value);
            numOfPaces++;
            paces.push(document.querySelector(`body > div:nth-child(3) > table > tbody > tr:nth-child(${i}) > td:nth-child(2) > input`).value);
        }
    }
    meanPace = (total / numOfPaces).toFixed(7);
    paces = [];
    console.log(numOfPaces);
    numOfPaces = 0, total = 0;
    return (document.querySelector("#mnp").innerHTML = meanPace);
}

// calculate mean Pace Factor
// document.querySelector("#button2").addEventListener("click", calcMPF); // adds listener to button 2
export function calcMPF() {
    totalDistance = Number(document.querySelector("body > div:nth-child(3) > p > input[type=number]").value);
    meanPF = (totalDistance / meanPace).toFixed(7);
    return (document.querySelector("#pf").innerHTML = meanPF);
}

// calculate mean Pace Distance
// document.querySelector("#button3").addEventListener("click", calcMPD); // adds listener to button 3
export function calcMPD() {
    meanPD = (meanPF * meanPace).toFixed(7);
    return (document.querySelector("#pd").innerHTML = meanPD);
}

// calculate mean Relative Precision
// document.querySelector("#button4").addEventListener("click", calcMRP); // adds listener to button 4
export function calcMRP() {
    meanRP = ((totalDistance - meanPD) / totalDistance).toFixed(10);
    return (document.querySelector("#rp").innerHTML = meanRP);
}