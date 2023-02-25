var arr = [1, 2, 3, 4, 5, 6, 7, 8, -1, -2, -3];
document.getElementById("alert-in-mang").innerHTML =
  "Mảng số: " + printArr(arr);

document.getElementById("btn-them-so").onclick = function () {
  var num = +document.getElementById("input-so-n").value;
  console.log("🚀 ~ file: index.js:6 ~ num:", num);

  arr.push(num);

  document.getElementById("alert-in-mang").innerHTML =
    "Mảng số: " + printArr(arr);
};

document.getElementById("b1-btn").onclick = function () {
  var positiveSum = calculatingPositiveTotals(arr);
  document.getElementById("b1-alert").innerHTML =
    "Tổng số dương là: " + positiveSum;
};

document.getElementById("b2-btn").onclick = function () {
  var countPositiveNumbers = countPositiveNum(arr);
  document.getElementById("b2-alert").innerHTML =
    "Số lượng số dương là: " + countPositiveNumbers;
};

document.getElementById("b3-btn").onclick = function () {
  var minNum = minNumber(arr);
  document.getElementById("b3-alert").innerHTML = "Số nhỏ nhất là: " + minNum;
};

document.getElementById("b4-btn").onclick = function () {
  var minPositiveNum = minPositiveNumber(arr);
  document.getElementById("b4-alert").innerHTML =
    "Số dương nhỏ nhất là: " + minPositiveNum;
};
