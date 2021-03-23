import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'



export default function Header(){

    return(
     <LinearGradient
     
     style={ styles.header } 
     colors={['#1ed6ff' , '#97c1ff']}     
     >
    <Text style={ styles.date }>07/10/2021</Text>
    <Text style={ styles.city }>Marilia/SP</Text>
    <Ionicons
    
    name="cloud"
    color="#fff"
    size={150}
    
    />

    <Text style={ styles.temperatura } >30°</Text>   
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