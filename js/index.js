var arr = [-32, 10, 7, 974, -98, 1, 0, -9999, 1031892, 10.323, -67];

document.getElementById("alert-in-mang").innerHTML =
  "Mảng số: " + printArr(arr);

document.getElementById("btn-them-so").onclick = function () {
  var num = document.getElementById("input-so-n").value;

  var idAlert = "alert-in-mang";
  handleAddNumber(num, arr, idAlert);
};

document.getElementById("b1-btn").onclick = function () {
  var positiveSum = calculatingPositiveTotals(arr);
  handle1(positiveSum);
};

document.getElementById("b2-btn").onclick = function () {
  var countPositiveNumbers = countPositiveNum(arr);
  handle2(countPositiveNumbers);
};

document.getElementById("b3-btn").onclick = function () {
  var minNum = minNumber(arr);
  handle3(minNum);
};

document.getElementById("b4-btn").onclick = function () {
  var minPositiveNum = minPositiveNumber(arr);
  handle4(minPositiveNum);
};

document.getElementById("b5-btn").onclick = function () {
  var lastEvenNumber = findLastEvenNumber(arr);
  handle5(lastEvenNumber);
};

document.getElementById("b6-btn").onclick = function () {
  var index1 = +document.getElementById("b6-input-1").value;
  var index2 = +document.getElementById("b6-input-2").value;

  var check = checkTwoIndexValid(index1, index2, arr);
  var newArr = swapTwoElementByIndex(index1, index2, arr);

  handle6(check, newArr);
};

document.getElementById("b7-btn").onclick = function () {
  var arrSorted = bubbleSort(arr);
  handle7(arrSorted);
};

document.getElementById("b8-btn").onclick = function () {
  var indexFirstPrimeNum = findFirstIndexPrimeNum(arr);
  handle8(indexFirstPrimeNum);
};

var newArrB9 = [];
document.getElementById("b9-btn-add-num").onclick = function () {
  var num = document.getElementById("b9-input-new-num").value;

  var idAlertAddNumForNewArr = "b9-alert-print-new-arr";
  handleAddNumber(num, newArrB9, idAlertAddNumForNewArr);
};

document.getElementById("b9-btn-count-int").onclick = function () {
  var count = countInterger(newArrB9);
  handle9(count);
};

document.getElementById("b10-btn").onclick = function () {
  var count = countNegativeZeroPositive(arr);
  handle10(count);
};
