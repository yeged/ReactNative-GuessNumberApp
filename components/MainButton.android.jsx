import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,TouchableNativeFeedback, Platform } from "react-native";

import Colors from "../constants/Colors"

function MainButton(props) {

    let ButtonComponent = TouchableOpacity;
    
    if(Platform.Version >= 21){
        ButtonComponent = TouchableNativeFeedback
    }

    return (
        <View style={styles.buttonContainer}>
        <ButtonComponent activeOpacity={0.7} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:25,
        overflow: "hidden"
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: "white",
        fontFamily: "open-sans",
        fontSize: 16
    }
})

export default MainButton;
