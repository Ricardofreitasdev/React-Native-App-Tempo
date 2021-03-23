import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { condition } from '../../utils/condition';




export default function Forecast({ data }){

    let icon = condition(data.condition);

    return(

        <View style={ styles.container } >  
            <View>
                <Text>{data.weekday}</Text>
                <Text>{data.date}</Text>
            </View>
       
            <Ionicons 
                name={ icon.name }
                color={ icon.color }
                size={25}
            />

            <View>
                <Text>{data.min}°</Text>
                <Text style={{fontSize: 18, fontWeight:'bold'}} >{data.max}°</Text>
            </View>
           
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        marginLeft: 12,
        borderRadius: 8,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 75,
        height: 150

    }

})