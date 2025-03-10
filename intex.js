js
CopyEdit
const currentYear = new Date().getFullYear();
const startYear = 2000;  // Change this based on your preference
const yearsPassed = currentYear - startYear;
const totalYears = 100;

document.getElementById("current-year").textContent = yearsPassed;
const progressPercentage = (yearsPassed / totalYears) * 100;

document.getElementById("progress").style.width = progressPercentage + "%";