import React from 'react';
import * as Location from 'expo-location'
import { StyleSheet, Text, View } from 'react-native';

import Loading from './Loading';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Weather from './Weather';



export default function App() {
let [loading , setLoading] = useState(true)
let [weateherData , setWeatherData] = useState([])
let [startWeather , setStartWeather] = useState(false)

async function getWeather(location){
  let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=01ffc5c2eafbb0930b2eebf9e7f897f1&units=metric`)
  let res = await data.json()
  await setWeatherData(res)
}

useEffect(async ()=>{
  try {
    let respons = await Location.requestBackgroundPermissionsAsync()
    let location = await Location.getCurrentPositionAsync()
    await getWeather(location)
    await setLoading(false)
    console.log(location.coords.latitude)
    console.log(location.coords.longitude)
  } catch (error) {
    Alert.alert('Нету обнаружения', 'Попробуйте включить геолокацию в ручную')
  }
}, [])


  return (
    loading ? <Loading/> : <Weather data = {weateherData}/>
  );
}


