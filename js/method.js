function printArr(arr) {
  var htmlString = "";

  var br = `<br>`;

  for (var i = 0; i < arr.length; i++) {
    if (i % 10 == 0) {
      htmlString += br + arr[i] + ", ";
    } else {
      htmlString += arr[i] + ", ";
    }
  }

  return htmlString;
}

function calculatingPositiveTotals(arr) {
  var positiveSum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveSum += arr[i];
    }
  }

  return positiveSum;
}

function countPositiveNum(arr) {
  var countPositiveNumbers = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositiveNumbers++;
    }
  }

  return countPositiveNumbers;
}

function miniMaxSum(arr) {
  let sum_min = 0;
  let sum_max = 0;
  let min_val = arr[0];
  let max_val = arr[0];
  let sum = 0;

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > max_val) {
      max_val = arr[index];
    }
    if (arr[index] < min_val) {
      min_val = arr[index];
    }
    sum = sum + arr[index];
  }
  sum_min = sum - max_val;
  sum_max = sum - min_val;

  console.log(sum_min, sum_max);
}

function minNumber(arr) {
  var minNum = Number.MAX_VALUE;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }

  return minNum;
}

function minPositiveNumber(arr) {
  var minPositiveNum = Number.MAX_VALUE;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minPositiveNum && arr[i] > 0) {
      minPositiveNum = arr[i];
    }
  }

  return minPositiveNum;
}
