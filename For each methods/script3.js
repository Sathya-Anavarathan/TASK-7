var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", "true");
xhr.send();
request.onload = function () {
  var countryData = JSON.parse(this.response);
  countryData.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital[0]);
    console.log("Flag:", country.flags.png);
  });
};