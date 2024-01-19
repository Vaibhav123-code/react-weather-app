import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import Card from './Component/Card';

function App() {
  const apiKey = '8720f769208cec164ef03102302f48b1';
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  
  async function fetchData() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${cityName}`);
      const data = response.data;
      console.log("data =", data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  return (
    <div className="App">
      <h1 className='title'>Weather App</h1>
      <div className='input-container'>
      <input type='search' placeholder='city name' required value={cityName} onChange={(e) => setCityName(e.target.value)} />
      <button onClick={()=> fetchData()}>get data</button>
      </div>
      <Card weatherData={weatherData}/>
    </div>
  );
}

export default App;
