let projectName1 = prompt("Enter the name of the project #1");
let projectName2 = prompt("Enter the name of the project #2");
let projectName3 = prompt("Enter the name of the project #3");
let projectName4 = prompt("Enter the name of the project #4");
let projectName5 = prompt("Enter the name of the project #5");

let answerq1 = "The Let keyword is used to declare a new variable";
let answerq2 =
  "A function can be defined using the function keyword, followed by the name, a list of parameters inside parentheses, and the code enclosed in curly braces.";

document.getElementById("idProj1").textContent = projectName1;
document.getElementById("idProj2").textContent = projectName2;
document.getElementById("idProj3").textContent = projectName3;
document.getElementById("idProj4").textContent = projectName4;
document.getElementById("idProj5").textContent = projectName5;

document.getElementById("panswer1").textContent = answerq1;
document.getElementById("panswer2").textContent = answerq2;
