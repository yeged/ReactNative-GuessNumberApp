import React from "react";
import {View, Text, StyleSheet, Button, Image} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText"


function GameOver(props){
    return(
        <View style={styles.screen}>
            <TitleText>Game is Over</TitleText>
            <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMode="cover" source={require("../assets/original.png")}/>
            </View>
            <BodyText>Number of Rounds: {props.round}</BodyText>
            <BodyText>Your Number : {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onNewGame} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer:{
        width: 250,
        height: 250,
        borderRadius: 125,
        borderWidth:3,
        borderColor: "black",
        overflow: "hidden",
        marginVertical:30
    },
    image:{
        width: "100%",
        height: "100%",
        
    }
})

export default GameOver