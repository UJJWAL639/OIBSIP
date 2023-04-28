function tempconvert() {
  var temp = document.getElementById("valNum").value;
  var value;
  var type = document.getElementById("temperature-type").value;
  if (temp != "") {
    if (type == "Farenheit") {
      value = (parseFloat(temp) * 1.8 + 32).toFixed(2);
      document.getElementById("value_at_result").innerHTML = value + " &#8457";
    } else if (type == "Kelvin") {
      value = (parseFloat(temp) + 273.15).toFixed(2);
      document.getElementById("value_at_result").innerHTML = value + " &#8490";
    } else {
      value = temp;
      document.getElementById("value_at_result").innerHTML = value + " &#8451";
    }
  } else {
    document.getElementById("value_at_result").innerHTML = " ";
  }
}
window.onload = function () {
  clock();
  function clock() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    if (min < 10) {
      document.getElementById("currentTime").innerHTML = hour + ":0" + min;
    } else {
      document.getElementById("currentTime").innerHTML = hour + ":" + min;
    }
    setTimeout(clock, 1000);
  }
};
