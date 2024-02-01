const apiKey = "Enter API Key here ";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
const weatherElement = document.querySelector(".weather");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloud.png";
        weatherElement.style.display = "block";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src="clear.png";
        weatherElement.style.display = "block";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src="mist.png";
        weatherElement.style.display = "block";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src="rain.png";
        weatherElement.style.display = "block";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src="drizzle.png";
        weatherElement.style.display = "block";
    }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


// query parameters
// setTimeout()
// setInterval()
// Promises
// Async await
// What is event loop in nodejs and understand how it handles async await

// What is node.js
// Make a simple hello world in node.js
// Make a countdown timer in nodejs -> you run the program -> time show hoga:
//    12:00:01
//    12:00:02
//    ^ In terminal