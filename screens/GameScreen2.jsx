import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import GameScreen from "./GameScreen";
import NumberContain from "../components/NumberContain";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText"
import MainButton from "../components/MainButton"

import { Ionicons } from "@expo/vector-icons"

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
            <TitleText>Opponent's Guess</TitleText>
            <NumberContain>{currentGuess}</NumberContain>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={() => nextGuessHandler("lower")} > <Ionicons name="md-remove" size={24} color="white" /> </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, "greater")} > <Ionicons name="md-add" size={24} color="white" /> </MainButton>
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
        width: 400,
        maxWidth: "90%"

    }
})

export default GameScreen2;