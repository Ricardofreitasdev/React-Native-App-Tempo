import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import * as Location from 'expo-location';

import { SECRET_KEY } from '@env';

import api from '../../services/api';



const myList =  [
    {
      "date": "23/03",
      "weekday": "Ter",
      "max": 31,
      "min": 19,
      "description": "Ensolarado com muitas nuvens",
      "condition": "cloudly_day"
    },
    {
      "date": "24/03",
      "weekday": "Qua",
      "max": 31,
      "min": 19,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "25/03",
      "weekday": "Qui",
      "max": 31,
      "min": 19,
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "26/03",
      "weekday": "Sex",
      "max": 31,
      "min": 20,
      "description": "Parcialmente nublado",
      "condition": "clear_day"
    },
    {
      "date": "27/03",
      "weekday": "Sáb",
      "max": 32,
      "min": 20,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "28/03",
      "weekday": "Dom",
      "max": 32,
      "min": 20,
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "29/03",
      "weekday": "Seg",
      "max": 33,
      "min": 22,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "30/03",
      "weekday": "Ter",
      "max": 27,
      "min": 21,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "31/03",
      "weekday": "Qua",
      "max": 25,
      "min": 19,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "01/04",
      "weekday": "Qui",
      "max": 28,
      "min": 18,
      "description": "Ensolarado com muitas nuvens",
      "condition": "cloudly_day"
    }
]


export default function Home(){

  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState([])
  const [icon, setIcon] = useState({name: 'cloud', color:'#fff'})
  const [bg, setBg] = useState(['#1ed6ff' , '#97c1ff'])


  const secret_key = SECRET_KEY;

  useEffect(() =>{

    (async ()=> {
      let { status } = await Location.requestPermissionsAsync();

      if(status !== 'granted'){
        setErrorMsg('Permissão negada para ver localização');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      
      let latitude = location.coords.latitude;
      let longitude = location.coords.longitude;

      const response = await api.get(`/weather?key=${secret_key}&lat=${latitude}&lon=${longitude}`);
      
      setDados(response);   
    
        if(response.data.currently == 'noite'){
        setBg(['#0c3741' , '#0f2f61'])
      }

      switch (response.data.condition_slug) {

        case 'clear_day':
          setIcon({name: 'partly-sunny', color: '#ffb300'})
          break;

        case 'rain':
          setIcon({name: 'rainy', color: '#fff'})
          break;
      
      }

      setLoading(false);
    })()  

    }, [])

    return(
       <SafeAreaView style={ styles.container } > 

       <Menu />  

       <Header icon={icon} bg={bg} dados={dados} />

       <Conditions dados={dados}/>

       <FlatList
            horizontal={true}
            contentContainerStyle={ styles.list__wrapper }
             style={ styles.list }
             data={ dados.data.results.forecast }
             keyExtractor={ item => item.date }
             renderItem={ ({ item }) => <Forecast data={ item } />}
       />
       </SafeAreaView>      

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop:'5%'
        
    },

    list: {
        marginTop: 15
       
    },
    list__wrapper: {
        
    }

})