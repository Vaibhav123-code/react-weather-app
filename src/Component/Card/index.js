import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style.css'
export default function Card({weatherData}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        '& > :not(style)': {
          m: 1,
          width: 600,
          height: 300,
          backgroundColor: 'skyblue'
        },
      }} 
    >
      <Paper elevation={7} className='card'>
        <div>
        {weatherData && (
        <div>
          <h2 className='title-style'>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          
          {weatherData.weather && weatherData.weather.length > 0 && (
            <p className='description'>Description: {weatherData.weather[0].description}</p>
          )}
          {weatherData.main && (
            <p className='temp'>Temperature: {weatherData.main.temp} K</p>
          )}
         
        </div>
      )}
        </div>
      </Paper>
    
    </Box>
  );
}