let getValue = document.getElementById("input-number");
let oddBtn = document.getElementById("btn-odd");
let evenBtn = document.getElementById("btn-even");
let primeBtn = document.getElementById("btn-prime");
let resultOutput = document.getElementById("show-result");
let showDesc = document.getElementById("show-desc");

// odd
oddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
  countResult("odd", getValue.value);
});

// even
evenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
  countResult("even", getValue.value);
});

// prime
primeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
  countResult("prime", getValue.value);
});

// fungsi untuk menampilkan deret
function countResult(btn, input) {
  let showSeries = "";
  let oddDesc = "Odd numbers are all numbers that are not multiples of 2 or are not divisible by 2.";
  let evenDesc = "Even numbers are numbers that are multiples of 2 or are divisible by 2.";
  let primeDesc = "Prime number is a number greater than 1 with only two factors, themselves and 1. A prime number cannot be divided by any other numbers without leaving a remainder.";
  // kondisi untuk odd
  if (btn === "odd") {
    for (let i = 1; i <= input; i++) {
      if (i % 2 === 1) {
        showSeries += i + " ";
      }
    }
    resultOutput.innerHTML = showSeries;
    showDesc.innerHTML = oddDesc;
    // kondisi untuk even
  } else if (btn === "even") {
    for (let i = 1; i <= input; i++) {
      if (i % 2 === 0) {
        showSeries += i + " ";
      }
    }
    resultOutput.innerHTML = showSeries;
    showDesc.innerHTML = evenDesc;
    // kondisi untuk prime
  } else {
    for (let i = 1; i <= input; i++) {
      let faktor = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
          faktor++;
        }
      }
      if (faktor === 2) {
        // showSeries = showSeries + i + " ";
        showSeries += i + " ";
      }
    }
    resultOutput.innerHTML = showSeries;
    showDesc.innerHTML = primeDesc;
  }
}
// fungsi untuk validasi
function validateForm() {
  if (getValue.value < 1 || getValue.value > 500) {
    alert("Enter number from 1 to 500");
    showSeries.validateForm;
  }
}
