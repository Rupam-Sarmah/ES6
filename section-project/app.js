import * as ELEMENTS  from './elements.js';
import {Http} from './http.js';
import {WeatherData, WEATHER_PROXY_HANDLER} from './weather-data.js';
ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);
const APP_ID='9fc4b0ea3e35014693bb88bc4b6cf187';

function searchWeather(){
    const CITY_NAME=ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if(CITY_NAME.length == 0){
        return alert('Please Eneter a valid city name');
    }
    ELEMENTS.ELEMENT_LOADING_TEXT.style.display='block';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display='none';
    const URL='http://api.openweathermap.org/data/2.5/weather?q='+ CITY_NAME +'&units=metric&appid=' + APP_ID;
    Http.fetchData(URL)
        .then(responseData => {
            const WEATHER_DATA= new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY= new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature= responseData.main.temp;
            updateWeather(WEATHER_PROXY);
        })
        .catch(error => alert(error));

}

function updateWeather(WeatherData){
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent=WeatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent=WeatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent=WeatherData.temperature;
    ELEMENTS.ELEMENT_LOADING_TEXT.style.display='none';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display='block';
}
