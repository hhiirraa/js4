function checkCharacter(input) {
    let asciiCode = input.charCodeAt(0);
  
    if (!isNaN(input)) {
      console.log("The given input is a number.");
    } else if (asciiCode >= 65 && asciiCode <= 90) {
      console.log("The given input is an uppercase letter.");
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      console.log("The given input is a lowercase letter.");
    } else {
      console.log("The given input is a special character.");
    }
  }
  function compareNumbers() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultElement = document.getElementById("result");
    
    if (num1 === num2) {
      resultElement.innerHTML = "The two integers are equal.";
    } else if (num1 > num2) {
      resultElement.innerHTML = "The larger integer is: " + num1;
    } else {
      resultElement.innerHTML = "The larger integer is: " + num2;
    }
  }
  function checkNumber() {
    let number = document.getElementById("number").value;
    let resultElement = document.getElementById("result");
    
    if (number > 0) {
      resultElement.innerHTML = "The number is positive.";
    } else if (number < 0) {
      resultElement.innerHTML = "The number is negative.";
    } else {
      resultElement.innerHTML = "The number is zero.";
    }
  }
  function isVowel(char) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vowels.includes(char);
  }
  console.log(isVowel('a'));  // Output: true
console.log(isVowel('b'));  // Output: false
console.log(isVowel('E'));  // Output: true


let correctPassword = "secret"; // Store the correct password

function validatePassword() {
  let userPassword = document.getElementById("password").value;
  let resultElement = document.getElementById("result");
  
  if (userPassword === "") {
    resultElement.innerHTML = "Please enter your password.";
  } else if (userPassword === correctPassword) {
    resultElement.innerHTML = "Correct! The password you entered matches the original password.";
  } else {
    resultElement.innerHTML = "Incorrect password.";
  }
}


var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}




function getGreeting() {
    let time = document.getElementById("time").value;
    let resultElement = document.getElementById("result");
    
    if (time >= 600 && time < 1200) {
      resultElement.innerHTML = "Good morning!";
    } else if (time >= 1200 && time < 1800) {
      resultElement.innerHTML = "Good afternoon!";
    } else if (time >= 1800 && time < 2400) {
      resultElement.innerHTML = "Good evening!";
    } else {
      resultElement.innerHTML = "Invalid time!";
    }
  }