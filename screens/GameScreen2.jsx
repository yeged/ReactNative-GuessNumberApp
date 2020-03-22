import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import GameScreen from "./GameScreen";
import NumberContain from "../components/NumberContain";
import Card from "../components/Card";

function generateRandomBetween(min, max, exclude){
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNo = Math.floor(Math.random() * (max - min)) + min;
    if(rndNo === exclude){
        return generateRandomBetween(min, max, exclude)
    }else{
        return rndNo;
    }
}

function GameScreen2(props){
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

    return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContain>{currentGuess}</NumberContain>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" />
                <Button title="GREATER" />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: "center",
        padding:10
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop:20,
        width:300,
        maxWidth: "80%"
        
    }
})

export default GameScreen2;