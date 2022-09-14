var $ = function (id) {
  return document.getElementById(id);
};

var calculateClick = function () {
  var investment = parseFloat($("investment").value);
  var rate = parseFloat($("rate").value);
  var years = parseInt($("years").value);
  console.log(investment, rate, years);
  if (isNaN(investment) || investment < 0) {
    alert("Investment should be a positive numeric value");
  } else if (isNaN(rate) || rate < 0) {
    alert("Rate should be a positive numeric value");
  } else if (isNaN(years) || years < 0) {
    alert("Years should be a positive numeric value");
  } else {
    var futureValue = investment * (1 + rate * years);
    $("future_value").value = futureValue.toFixed(2);
  }
};

window.onload = function () {
  $("calculate").onclick = calculateClick;
  $("investment").focus();
  $("clear").onclick = clear;
};

var clear = function () {
  $("investment").value = "";
  $("rate").value = "";
  $("years").value = "";
  $("future_value").value = "";
};
