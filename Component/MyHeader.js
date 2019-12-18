import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import{ Appbar } from 'react-native-paper';

const MyHeader = (props) =>{
    return (
        <Appbar.Header>
                <Appbar.Content 
                    title = "Ilica"
                    subtitle = "Your location defined"
                    //subtitle = {props.title}
                    style={{alignItems:"center"}}
                />
                
        </Appbar.Header>
    )
}

export default MyHeader;