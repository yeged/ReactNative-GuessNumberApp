import React from "react";
import { View, Text, StyleSheet, ColorPropType } from "react-native";

import Color from "../constants/Colors"

function NumberContain(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: Color.accent,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginVertical:20
    },
    text:{
        fontSize:22,
        color: Color.accent
    }
})

export default NumberContain;