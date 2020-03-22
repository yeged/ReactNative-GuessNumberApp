import React from "react";
import {View, Text, StyleSheet, Button, Image} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText"
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton"


function GameOver(props){
    return(
        <View style={styles.screen}>
            <TitleText>Game is Over</TitleText>
            <View style={styles.imageContainer}>
            <Image 
            style={styles.image} 
            resizeMode="cover" 
            source={require("../assets/original.png")}
            //source={{uri: "https://i.ytimg.com/vi/z0pPhTLvzu4/hqdefault.jpg"}}
            />
            </View>
            <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
            Your phone needed <Text style={styles.highlight}>{props.round}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
            </BodyText>
            </View>
            <MainButton  onPress={props.onNewGame} >NEW GAME</MainButton> 
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
        
    },
    resultContainer:{
        marginHorizontal:40,
        marginVertical:20
    },
    highlight:{
        color: Colors.primary,
        fontFamily: "open-sans-bold",
    },
    resultText:{
        textAlign: "center",
        fontSize:20
    }
})

export default GameOver