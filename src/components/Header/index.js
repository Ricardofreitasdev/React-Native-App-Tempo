import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'



export default function Header({ icon, bg, dados }){

    return(
     <LinearGradient
     
     style={ styles.header } 
     colors={bg}     
     >
    <Text style={ styles.date }>{ dados.data.results.date }</Text>
    <Text style={ styles.city }>{ dados.data.results.city }</Text>
    <Ionicons
    
    name={icon.name}
    color={icon.color}
    size={150}
    
    />

    <Text style={ styles.temperatura } >{dados.data.results.temp}°</Text>   
    </LinearGradient>
    )
}

const styles = StyleSheet.create({

    header: {
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    date: {
        color: 'white',
        fontSize: 14,
    },
    city: {
        color: 'white',
        fontSize: 25
    },
    temperatura: {
        color: 'white',
        fontSize: 36,
    }

})