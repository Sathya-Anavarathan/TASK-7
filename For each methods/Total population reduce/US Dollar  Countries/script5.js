var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function () {
  var res = JSON.parse(req.response);
  var currency = res.filter((element) => {
    for (let key in element.currencies) {
      if (element.currencies[key].code === "USD") {
        return element;
      }
    }
  });
  console.log(currency);
};