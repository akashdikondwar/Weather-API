const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '187fb79226msh4e72574c777d474p1bba5cjsnc983d1fbc2a2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function getWeather (city) {


    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
        const result = await response.json();//here it was response.text() earlier, but i did json and it worked!
        console.log(result);

        cityname.innerText=city;
        temp.innerText= result.temp;
        feelsLike.innerText=result.feels_like;
        minTemp.innerText=result.min_temp;
        maxTemp.innerText=result.max_temp;
        windSpeed.innerText=result.wind_speed;
        windDegrees.innerText=result.wind_degrees;

    } catch (error) {
        console.error(error);
    }
    
}

// no need to use getelementbyid. directly use id as variable.
searchbox.addEventListener('keypress',e=>{
    if(e.keyCode==13){
        e.preventDefault();
        getWeather(searchbox.value);
    }
})

// getWeather('Pune');

// "cloud_pct": 100
// "temp": 24
// "feels_like": 24
// "humidity": 73
// "min_temp": 2
// "max_temp": 24
// "wind_speed": 2.06
// "wind_degrees": 320
// "sunrise": 1696466133
// "sunset": 1696508919