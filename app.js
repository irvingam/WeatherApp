// Selectors
const api = {
    key: "dd27bad266e3ddbf9645ca1c6f57f7e5",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchInput = document.querySelector('.search-box')

// Events
searchInput.addEventListener('keypress', setQuery)

// Functions
function setQuery(event) {
    if (event.keyCode == 13) {
        getResults(searchInput.value)
        console.log(searchInput.value)
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=standard&APPID=${api.key}`)
    .then(weather => {
        return weather.json()
    }).then(displayResults)
}

function displayResults(weather) {
    console.log(weather)
}