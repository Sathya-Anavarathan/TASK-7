var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", "true");
xhr.send();
xhr.onload = function () {
  var countryData = JSON.parse(this.response);
  const populationLessThan2Lakh = countryData.filter(
    (country) => country.population < 200000
  );
  console.log(
    "Countries with population less than 2 lakhs:",
    populationLessThan2Lakh
  );
};