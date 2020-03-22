import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";


function GameOver(props){
    return(
        <View style={styles.screen}>
            <Text>Game is Over</Text>
            <Text>Number of Rounds: {props.round}</Text>
            <Text>Your Number : {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onNewGame} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default GameOver