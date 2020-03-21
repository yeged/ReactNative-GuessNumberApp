import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: "black", // for only IOS
        shadowOffset: { height: 2, width: 0 }, // for only IOS
        shadowRadius: 6, // for only IOS
        shadowOpacity: 0.2, // for only IOS
        elevation: 8, //for Android
        borderBottomLeftRadius: 10,
        backgroundColor: "white",
        padding: 20
    }
})

export default Card;