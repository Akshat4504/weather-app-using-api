import React, { useState } from 'react'
import axios from 'axios'

export default function Weather() {
    const [city, setCity] = useState("");
    const[weather, setWeather] = useState();
    const handleCityChange = (event) => {
        setCity(event.target.value)
    }
    const API_KEY = "1a9a6f62297d00ca802af552d88e879ey"; // Replace this

    const fetchWeather = async () => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                setWeather(response);
            } catch (error) {
                console.log("Error fetching weather data", error);
                setWeather(null);
            }
        };
        
        
    }
    const handleClick = () =>{
        fetchWeather();
    }
    return (
    <div className='weather-container'>
        <input type="text" placeholder='Enter City name' value={city} onChange={handleCityChange}/>
        <button onClick={handleClick}>Get Weather</button>
        {weather && <>
        <div className='weather-info'>
        <h3>{weather?.name}</h3>
        <p>Temperature: {weather?.main?.temp}</p>
        <p>{weather?.weather?.[0]?.description}</p>

        </div>
        </>

        }
    </div>
  )
}
