import React, { useEffect, useState } from 'react'

const WeatherCart = ({tempInfo}) => {  //props
    const [weatherState,setWeatherState]=useState("") //statevariable
    const {
        temp,
        pressure,
        humidity,
        weatherMood,
        name,
        speed,
        country,
        sunset
    }= tempInfo

    useEffect (()=>{
        if(weatherMood){
           switch (weatherMood) {
            case "clouds":
                setWeatherState("wi-day-cloudy")
               break;

               case "Haze":
                setWeatherState("wi-day-fog")
               break;

               case "clear":
                setWeatherState("wi-day-sunny")
               break;
           
            default:
                setWeatherState("wi-day-sunny")
                break;
           }
        }
    },[weatherMood])

    // let converting sec into hr

    let sec=sunset
    let date = new Date (sec*1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

  return (
    <>
        <article className='widget'>
    <div className='weatherIcon'>
        <i className={`wi ${weatherState}`}></i>
    </div>
    <div className='weatherInfo'>
        <div className='temputure'>
            <span> {temp}&deg;</span>
        </div>
        <div className='description'>
            <div className='weatherCondition'>Sunny</div>
            <div className='place'> {name},{country} </div>
        </div>
    </div>
    <div className='date'>{new Date().toLocaleString()}</div>

    <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
              {timeStr} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
              {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
           {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
              {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article> 
    </>
  )
}

export default WeatherCart