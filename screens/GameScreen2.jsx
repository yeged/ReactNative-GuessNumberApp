import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import GameScreen from "./GameScreen";
import NumberContain from "../components/NumberContain";
import Card from "../components/Card";

function generateRandomBetween(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNo = Math.floor(Math.random() * (max - min)) + min;
    if (rndNo === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNo;
    }
}



function GameScreen2(props) {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0);

    const minValue = useRef(1);
    const maxValue = useRef(100);

    const {userChoice, onGameOver} = props

    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])

    function nextGuessHandler(direction) {
        if ((direction === "lower" && currentGuess < props.userChoice) || (direction === "greater" && currentGuess > props.userChoice)) {
            Alert.alert("Don\'t lie", "You know that this is wrong", [{ text: "Sorry", style: "cancel" }])
            return;
        }
        if (direction === "lower") {
            maxValue.current = currentGuess
        } else {
            minValue.current = currentGuess
        }
         const nextNumber = generateRandomBetween(minValue.current, maxValue.current, currentGuess);
         setCurrentGuess(nextNumber)
         setRounds(round => round + 1)
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContain>{currentGuess}</NumberContain>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => nextGuessHandler("lower")} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, "greater")} />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%"

    }
})

export default GameScreen2;