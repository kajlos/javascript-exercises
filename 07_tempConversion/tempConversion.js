const ftoc = function(fahrenheitToCelcius) {
//[°F] = [°C] × 9⁄5 + 32
let celcius = ((fahrenheitToCelcius -32) *5/9);
let result = (Math.round(celcius * 10)/10);
return result;
};

const ctof = function(celciusToFahrenheit) {
  let fahrenheit = ((celciusToFahrenheit * 9/5) + 32);
  let result = (Math.round(fahrenheit * 10)/10);
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
 