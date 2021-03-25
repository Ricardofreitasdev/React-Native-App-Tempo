import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

export default function Conditions({ dados }){


    return(
        <View style={ styles.wrapper }>      

           <View style={ styles.wrapper__item }>
            <Feather             
                name="wind"
                size={30}
                color="#2FE2E2"
            />
            <Text style={ styles.wrapper__item__text }>{dados.data.results.wind_speedy}</Text>
           </View>

           <View style={ styles.wrapper__item }>
            <Feather             
                name="sunrise"
                size={30}
                color="#2FE2E2"
            />
            <Text style={ styles.wrapper__item__text }>{dados.data.results.sunrise}</Text>
           </View>

           <View style={ styles.wrapper__item }>
            <Feather             
                name="sunset"
                size={30}
                color="#2FE2E2"
            />
            <Text style={ styles.wrapper__item__text }>{dados.data.results.sunset}</Text>
           </View>

           <View style={ styles.wrapper__item }>
           <Ionicons
                name="water-outline"
                size={30}
                color="#2FE2E2" />
            <Text style={ styles.wrapper__item__text }>{dados.data.results.humidity}</Text>
           </View>

        </View>
    )
}

const styles = StyleSheet.create({

    wrapper: {
        width: '95%',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 15,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    wrapper__item: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    wrapper__item__text: {
        fontSize: 14
    }

})