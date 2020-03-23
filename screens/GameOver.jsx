import React from "react";
import {View, Text, StyleSheet, Button, Image, Dimensions, ScrollView} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText"
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton"
import {ScreenOrientation} from "expo"

function GameOver(props){
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT) // Locks the screen in PORTRAIT mode.
    return(
        <ScrollView>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer:{
        width: Dimensions.get("window").width * 0.7,
        height: Dimensions.get("window").width * 0.7,
        borderRadius: Dimensions.get("window").width * 0.7 /2,
        borderWidth:3,
        borderColor: "black",
        overflow: "hidden",
        marginVertical :Dimensions.get("window").height / 30 //This effectively sets the vertical margin to 5% of the device height.heigth/40 would set it to 2.5% etc
    },
    image:{
        width: "100%",
        height: "100%",
        
    },
    resultContainer:{
        marginHorizontal:40,
        marginVertical: Dimensions.get("window").height / 60
    },
    highlight:{
        color: Colors.primary,
        fontFamily: "open-sans-bold",
    },
    resultText:{
        textAlign: "center",
        fontSize: Dimensions.get("window").height < 400 ? 14 : 20
    }
})

export default GameOver