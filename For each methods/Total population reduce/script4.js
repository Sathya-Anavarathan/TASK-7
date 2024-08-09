var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", "true");
xhr.send();
request.onload = function () {
  var countryData = JSON.parse(this.response);
  const totalPopulation = countryData.reduce(
    (accumulator, country) => accumulator + country.population,
    0
  );
  console.log("Total population of countries:", totalPopulation);
};