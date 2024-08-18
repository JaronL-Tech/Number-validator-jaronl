const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

const regex = /^1? ?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;
const outputArr = [];
