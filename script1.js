//call the weather API
const form = document.querySelector(`#search-form`)
const searchinput = document.getElementById(`cityInput`).value

//paragraph tag for searching a weather Api
const searchResultHTML = document.querySelector(`#searchresult`)
form.addEventListener("submit",async (event)=>{
    event.preventDefault()
    //getGeographicalCountry
    const geo = await getGeographicalCountry(searchInput)
    searchResultHTML = `you searched lagos`
    //console.log(geo.name)
})

async function getweather() {
    //use fetch function
    const lat = 6.5244; // lagos latitude
    const lon = 3.3792; // lagos latitude
    const fetchApi = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`
        )
    const data = await getWeather.json();
    return data.results[0]
    }
getWeather(



)
async function getGeographicalCountry() {
    //use fetch function
    const fetchApi = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchCity)}&count=1&language=en&format=json`
   )
    const data = await fetchApi.json();
    //console.log(data)
    return data.results[0]
}
    getGeographicalCountry()
//algorithm - to get the detailed geocoding for a country