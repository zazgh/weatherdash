var ApiKey = 'd5103f54a36b89026ca66ae8b14dc149'
var baseWeatherSite = "https://api.openweathermap.org/data/2.5/weather"
var description = document.getElementById("results-container")
var city = document.getElementById('city')
var temp = document.getElementById('temp')
var country = document.getElementById('country')
var cityZipcodeInput = $("#city-zipcode")
var searchFormat = $("#search-format")
console.log(searchFormat.val())
// executes after the page has been loaded and all elements have been created
$(document).ready(function(){

    $("#btnsearch").click((e) => {
        e.preventDefault()
        var searchCriteria = cityZipcodeInput.val()
        searchLocation(searchCriteria)
    })

})

function searchLocation(searchCriteria) {
    var requestUrl = baseWeatherSite + "?q=" + searchCriteria + "&APPID=" + ApiKey
    console.log(requestUrl)
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        displayData(data)
    })
}

function displayData(data) {
    description.innerHTML= data.weather[0].description
    city.innerHTML = data.name;
    country.innerHTML = data.sys.country;
    if (searchFormat.val() == "f")
    {
        temp.innerHTML = Math.floor(1.8*(data.main.temp -273) + 32) + ' °F';
    }
    else
    {
        temp.innerHTML = Math.floor(1*(data.main.temp -273) + 0) + ' °C';
    }
}

localStorage.setItem(city, json (searchCriteria));
console.log(searchCriteria)

var searchHis = json.parse (localStorage.getItem("city"));

if (searchHis !==nill) {
    var searchedData = searchHis.lenngth -1;
    var searchedCity = searchHis[searchedData];
    temp(searchedCity);
    console.log(`searched city: ${searchedCity}`)
}


