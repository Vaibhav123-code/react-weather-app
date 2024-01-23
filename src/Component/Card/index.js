import React, { useEffect, useState } from 'react'; 
import './style.css'
import clear from '../../Assets/clear.png'
import cloud from '../../Assets/cloud.png'
import drizzle from '../../Assets/drizzle.png'
import rain from '../../Assets/rain.png'
import snow from '../../Assets/snow.png'
import haze from '../../Assets/humidity.png' 
import wind from '../../Assets/wind.png'

export default function Card({weatherData}) {
  const [icon, setIcon] = useState(clear);
  console.log(cloud)
  console.log(clear)
  useEffect(() => {
    if(weatherData){
      const weatherMain = weatherData.weather[0].main;
      console.log(weatherMain)
      switch (weatherMain) {
        case 'Clouds':
          setIcon(cloud);
          break;
        case 'Drizzle':
          setIcon(drizzle);
          break;
        case 'Rain':
          setIcon(rain);
          break;
        case 'Snow':
          setIcon(snow);
          break;
        case 'Haze':
          setIcon(haze);
          break;
        case 'Clear':
          setIcon(clear);
          break;
        default:
          setIcon(clear); // Default to clear image if no match
      }
  }
  },[weatherData])
  
  return (
    <div className='main-container'>
    {weatherData && (
     <div className='weather-container'>
      <div className='weather-icon'>
        <img src={clear} alt='icon'/>
      </div>
      <div className='temp'>
      <p className='title-style'> {Math.floor(weatherData.main.temp)} °C</p>
      </div>
      <div className='location'>
        <p>{weatherData.name}</p>
      </div>
      <div className='weather-detail'>
        <div className='humidity'>
          <img src={haze} alt='icon'/>
            <p>{weatherData.main.humidity} % </p>
            <div className='humidity-text'>
            <p>humidity</p>
            </div>
        </div>
        <div className='wind'>
        <img src={wind} alt='icon'/>
            <p>{weatherData.wind.speed} km/hr </p>
            <div className='wind-text'>
            <p>wind speed</p>
            </div>
        </div>
           
      </div>
      
      
      </div>

  )}
    </div>
  );
}