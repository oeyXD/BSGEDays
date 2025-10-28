// document
//   .querySelector("body > button:nth-child(7)")
//   .addEventListener("click", definedFunction);

// function definedFunction() {
//   document.querySelector("body > h1").innerHTML = "Really?!!";
// }

let totalDistance = Number(),
  paces = [],
  meanPace = Number(),
  meanPF = Number(),
  meanPD = Number(),
  meanRP = Number();

// calculate mean No. of Paces
document
  .querySelector("body > button:nth-child(3)")
  .addEventListener("click", calcMNPace);
function calcMNPace() {
  let total = 0;
  for (let i = 0; i < 10; i++) {
    total += Number(
      document.querySelectorAll(
        "body > form > table > tbody > tr > td:nth-child(2) > input[type=number]"
      )[i].value
    );
    paces.push(
      document.querySelectorAll(
        "body > form > table > tbody > tr > td:nth-child(2) > input[type=number]"
      )[i].value
    );
  }
  meanPace = (total / 10).toFixed(7);
  paces = [];
  return (document.querySelector("body > p:nth-child(4) > span").innerHTML =
    meanPace);
}

// calculate mean Pace Factor
document
  .querySelector("body > button:nth-child(5)")
  .addEventListener("click", calcMPF);
function calcMPF() {
  totalDistance = Number(
    document.querySelector("body > form > p > input[type=number]").value
  );
  meanPF = (totalDistance / meanPace).toFixed(7);
  return (document.querySelector("body > p:nth-child(6) > span").innerHTML =
    meanPF);
}

// calculate mean Pace Distance
document
  .querySelector("body > button:nth-child(7)")
  .addEventListener("click", calcMPD);
function calcMPD() {
  meanPD = (meanPF * meanPace).toFixed(7);
  return (document.querySelector("body > p:nth-child(8) > span").innerHTML =
    meanPD);
}

// calculate mean Relative Precision
document
  .querySelector("body > button:nth-child(9)")
  .addEventListener("click", calcMRP);
function calcMRP() {
  meanRP = ((totalDistance - meanPD) / totalDistance).toFixed(10);
  return (document.querySelector("body > p:nth-child(10) > span").innerHTML =
    meanRP);
}
