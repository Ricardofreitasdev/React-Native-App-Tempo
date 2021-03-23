import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function Menu(){

    const navigation = useNavigation();

    return(
        <TouchableOpacity style={ styles.container } onPress={ () => navigation.openDrawer() }>

            <Feather 
                name={'menu'}
                size={36}
                color="#373737"
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        zIndex: 9,
        top: 10,
        left: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'


    }

})