import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText"


import Colors from "../constants/Colors"

function Header(props) {
    return (
        <View style={{...styles.headerBase, ...Platform.select({ios: styles.headerIos, android: styles.headerAndroid})}}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase: {
        width: "100%",
        height: 90,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 36
    },
    headerIos:{
        backgroundColor: Colors.accent
    },
    headerAndroid:{
        backgroundColor: Colors.primary 
    },
    headerTitle: {
        color: "black",
    }

})

export default Header;