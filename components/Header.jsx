import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText"


import Colors from "../constants/Colors"

function Header(props) {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary,
        paddingTop: 36
    },
    headerTitle: {
        color: "black",
    }

})

export default Header;