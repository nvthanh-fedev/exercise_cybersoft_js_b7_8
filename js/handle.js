/**
 * handle thêm số vào mảng
 * @param {*} num số cần thêm vào mảng
 * @param {*} arr mảng
 * @param {*} idAlert id alert in danh sách mảng
 */
function handleAddNumber(num, arr, idAlert) {
  if (num !== "") {
    arr.push(+num);
    document.getElementById(idAlert).innerHTML = "Mảng số: " + printArr(arr);
  }
}

/**
 * xử lý bài 1, tính tổng số dương và in ra alert
 * @param {*} positiveSum tổng số dương
 */
function handle1(positiveSum) {
  document.querySelector("#b1-alert").innerHTML =
    "Tổng số dương là: " + positiveSum;
}

/**
 * xử lý bài 2, đếm số lượng số dương và in ra alert
 * @param {*} countPositiveNumbers
 */
function handle2(countPositiveNumbers) {
  document.querySelector("#b2-alert").innerHTML =
    "Số lượng số dương là: " + countPositiveNumbers;
}

/**
 * xử lý bài 3, tìm số nhỏ nhất và in ra alert
 * @param {*} minNum số nhỏ nhất
 */
function handle3(minNum) {
  document.querySelector("#b3-alert").innerHTML = "Số nhỏ nhất là: " + minNum;
}

/**
 * xử lý bài 4, tìm số dương nhỏ nhất và in ra alert
 * @param {*} minPositiveNum số dương nhỏ nhất
 */
function handle4(minPositiveNum) {
  document.querySelector("#b4-alert").innerHTML =
    "Số dương nhỏ nhất là: " + minPositiveNum;
}

/**
 * xử lý bài 5, tìm số chẵn cuối cùng và in ra alert
 * @param {*} lastEvenNumber số chẵn cuối cùng
 */
function handle5(lastEvenNumber) {
  document.querySelector("#b5-alert").innerHTML =
    "Số chẵn cuối cùng là: " + lastEvenNumber;
}

/**
 * xử lý bài 6, đổi vị trí hai giá trị và in ra alert
 * @param {*} check kiểm tra giá trị index có hợp lệ không
 * @param {*} newArr mảng mới sau khi đổi vị trí
 */
function handle6(check, newArr) {
  if (!check) {
    document.querySelector("#b6-alert").innerHTML =
      "Giá trị index không hợp lệ! vui lòng nhập lại giá trị index!";
  } else {
    document.querySelector("#b6-alert").innerHTML =
      "Mảng sau khi đổi: " + newArr;
  }
}

/**
 * xử lý bài 7, sắp xếp mảng tăng dần và in ra alert
 * @param {*} arrSorted mảng đã sắp xếp
 */
function handle7(arrSorted) {
  document.querySelector("#b7-alert").innerHTML = "Mảng tăng dần: " + arrSorted;
}

/**
 * xử lý bài 8, tìm ra số nguyên tố đầu tiên trong mảng và in ra alert
 * @param {*} indexFirstPrimeNum vị trí index số nguyên đầu tiên
 */
function handle8(indexFirstPrimeNum) {
  if (indexFirstPrimeNum !== -1) {
    document.querySelector("#b8-alert").innerHTML =
      "Số nguyên tố đầu tiên là: " + arr[indexFirstPrimeNum];
  } else {
    document.querySelector("#b8-alert").innerHTML =
      "Không tìm thấy số nguyên tố trong mảng!";
  }
}

/**
 * xử lý bài 9, đếm xem có bao nhiêu số nguyên trong mảng mới và in ra alert
 * @param {*} count đếm số nguyên trong mảng mới
 */
function handle9(count) {
  if (count === 0) {
    document.querySelector("#b9-alert-count-int").innerHTML =
      "Không có số nguyên trong mảng";
  } else {
    document.querySelector("#b9-alert-count-int").innerHTML =
      "Có: " + count + " số nguyên trong mảng.";
  }
}

/**
 * xử lý bài 10, so sánh số lượng số âm và số dương, và in ra alert
 * @param {*} count
 */
function handle10(count) {
  if (count[0] > count[2]) {
    document.querySelector("#b10-alert").innerHTML =
      "Số lượng số âm nhiều hơn số lượng dương.";
  } else if (count[0] === count[2]) {
    document.querySelector("#b10-alert").innerHTML =
      "Số lượng số âm bằng số lượng số dương.";
  } else {
    document.querySelector("#b10-alert").innerHTML =
      "Số lượng số âm ít hơn số lượng số dương.";
  }
}
