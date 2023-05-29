import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Weather from './components/Weather'
import Loader from './components/Loader'


function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
  const lat = pos.coords.latitude
  const lon = pos.coords.longitude
  const API_KEY = "7354d51bff7c4db2cef10b6973f6044e"

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  axios.get(URL)
  .then(({data}) => setWeatherInfo(data))
  .catch((err) => console.log(err))
  }
  useEffect (() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])



  return (
    <main className='w-full bg-no-repeat bg-cover bg-fixed min-h-screen text-black flex justify-center items-center font-principal-font p-2'>
  
      {
        weatherInfo ? <Weather weatherInfo={weatherInfo} /> : < Loader />
      }

    </main>
  )
}

export default App
