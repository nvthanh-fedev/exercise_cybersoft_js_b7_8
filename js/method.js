/**
 * kiểm tra giá trị index có hợp lệ hay không
 * @param {*} index giá trị index
 * @param {*} arr mảng
 * @returns true nếu hợp lệ và ngược lại
 */
function checkIndexValid(index, arr) {
  if (typeof arr[index] === "undefined") {
    return false;
  }
  return true;
}

/**
 * in mảng ra chuỗi string
 * @param {*} arr mảng
 * @returns chuỗi html string chứa mảng
 */
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

/**
 * tính tổng số dương trong mảng
 * @param {*} arr mảng
 * @returns tổng số dương
 */
function calculatingPositiveTotals(arr) {
  var positiveSum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveSum += arr[i];
    }
  }

  return positiveSum;
}
/**
 *
 * @param {*} arr
 * @returns
 */
function countPositiveNum(arr) {
  var countPositiveNumbers = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositiveNumbers++;
    }
  }

  return countPositiveNumbers;
}

/**
 * tìm số bé nhất trong mảng
 * @param {*} arr mảng
 * @returns số bé nhất trong mảng
 */
function minNumber(arr) {
  var minNum = Number.MAX_VALUE;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }

  return minNum;
}

/**
 * tìm số nguyên bé nhất trong mảng
 * @param {*} arr mảng
 * @returns số nguyên bé nhất
 */
function minPositiveNumber(arr) {
  var minPositiveNum = Number.MAX_VALUE;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minPositiveNum && arr[i] > 0) {
      minPositiveNum = arr[i];
    }
  }

  return minPositiveNum;
}

/**
 * tìm số chẵn cuối cùng trong mảng
 * @param {*} arr mảng
 * @returns số chẵn cuối cùng trong mảng
 */
function findLastEvenNumber(arr) {
  var lastEvenNumber = -1;

  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      lastEvenNumber = arr[i];
      return lastEvenNumber;
    }
  }
}

/**
 * kiểm tra giá trị index có hợp lệ hay không
 * @param {*} index1 vị trí 1
 * @param {*} index2 vị trí 2
 * @param {*} arr mảng
 * @returns true nếu cả hai index hợp lệ và ngược lại
 */
function checkTwoIndexValid(index1, index2, arr) {
  if (checkIndexValid(index1, arr) && checkIndexValid(index2, arr)) {
    return true;
  }
  return false;
}

/**
 * đổi chỗ của hai phần tử thông qua vị trí index
 * @param {*} index1 vị trí 1
 * @param {*} index2 vị trí 2
 * @param {*} arr mảng
 * @returns mảng mới đã đổi chỗ 2 phần tử
 */
function swapTwoElementByIndex(index1, index2, arr) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  var newArr = [...arr];
  return newArr;
}

/**
 * sắp xếp mảng bằng thuật toán bubbleSort
 * @param {*} arr mảng
 * @returns mảng mới đã được sắp xếp
 */
function bubbleSort(arr) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }

  var newArr = [...arr];
  return newArr;
}

/**
 * kiểm tra xem số đó có phải là số nguyên tố hay không
 * @param {*} num số cần kiểm tra
 * @returns true nếu số đó là số nguyên tố và ngược lại
 */
function isPrime(num) {
  if (num <= 1 || !Number.isInteger(num)) return false;
  if (num == 2) return true;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

/**
 * tìm vị trí index của số nguyên tố đầu tiên
 * @param {*} arr mảng
 * @returns vị trí index của số nguyên tố đầu tiên
 */
function findFirstIndexPrimeNum(arr) {
  indexFirstPrimeNum = -1;

  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      indexFirstPrimeNum = i;
      break;
    }
  }

  return indexFirstPrimeNum;
}

/**
 * đếm có bao nhiêu số nguyên trong mảng
 * @param {*} arr mảng
 * @returns số lượng số nguyên trong mảng
 */
function countInterger(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      count++;
    }
  }
  return count;
}

/**
 * đếm bao nhiêu số âm, không, dương trong mảng
 * @param {*} arr mảng
 * @returns mảng mới chứa số lượng số âm, không, dương tương ứng với vị trí index 0, 1, 2
 */
function countNegativeZeroPositive(arr) {
  var count = [0, 0, 0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count[0]++;
    } else if (arr[i] === 0) {
      count[1]++;
    } else {
      count[2]++;
    }
  }

  return count;
}
