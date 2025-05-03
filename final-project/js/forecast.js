// First, create a request to the weather API using your API key
const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=3b96a3cab82a5123d0254d66cb7cf11c';
const response = await fetch(url);
const data = await response.json();

// Then, parse the JSON data to extract the forecast information
const temperature = data.observations[0].temperature;
const forecast = data.observations[0].descrption;

window.addEventListener("load", function(){
    console.log("page is fully loaded");

    console.log(temperature);
    console.log(forecast)
});

// Finally, display the forecast on the HTML page
document.getElementById('temperature').innerHTML = temperature;
document.getElementById('forecast').innerHTML = forecast;

{/* <div id="weather">
<p>Temperature:</p>
<br>
<p id = 'forecast'></p>
<br>
<p>Forecast</p>
<br>
<p id="temperature"></p>
</div> */}