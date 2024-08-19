const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

const regex = /^1? ?(\(\d{3}\)\s?\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{10})$/;
const outputArr = [];

const checkInput = (str) => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } else if (regex.test(str)) {
    outputArr.push(`Valid US number: ${str}`);
    updateOutput(outputArr);
  } else {
    outputArr.push(`Invalid US number: ${str}`);
    updateOutput(outputArr);
  }
};
const updateOutput = (array) => {
  output.innerHTML = "";
  array.forEach((el) => {
    output.innerHTML += `<h2 class="output-text">${el}</h2>`;
  });
};

const clearOutput = () => {
  outputArr.length = 0;
  output.innerHTML = "";
};

checkBtn.addEventListener("click", () => {
  checkInput(userInput.value);
  userInput.value = "";
});
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput(userInput.value);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", clearOutput);
