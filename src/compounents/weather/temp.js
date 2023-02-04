// https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=78edbb124382f6e6e02aed413c606bb8

import React, { useEffect, useState } from 'react'
import "./style.css"
import WeatherCart from "./weatherCart"

const Temp = () => {
 const [searchValue,setSearchValue]=useState("kolkata")
 const [tempInfo,setTempInfo]=useState({})

 const getWeatherInfo=async()=>{
try{
let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=78edbb124382f6e6e02aed413c606bb8`
const res=await fetch(url);
const data=await res.json();

const {temp,pressure,humidity}=data.main
const {main:weatherMood}=data.weather[0]
const {name} = data;
const {speed}=data.wind
const {country,sunset}=data.sys

const myNewWeather = {
    temp,
    pressure,
    humidity,
    weatherMood,
    name,
    speed,
    country,
    sunset
}
setTempInfo(myNewWeather)

// console.log(temp)
}
  catch(error){
console.log(error)
  }
 }
 useEffect(()=>{
    getWeatherInfo()
 },[])

  return (
    <>
<div className='wrap'>
<div className='Search'>
<input 
    type="search"
    placeholder='search.....'
    autoFocus
    id='search'
    className='searchTerm'
    value={searchValue }
    onChange={(e)=>setSearchValue(e.target.value)}
/>
<button className='searchButton' type='button' onClick={getWeatherInfo}> search </button>

</div>

</div>
    

{/* create our temp card */}

  <WeatherCart tempInfo={tempInfo}/>
    </>
  );
};

export default Temp