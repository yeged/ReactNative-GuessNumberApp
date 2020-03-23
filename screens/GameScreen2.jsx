import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
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

function renderListItem(value, numOfRound) {
    return (
        <View key={value} style={styles.listItem}>
            <BodyText>#{numOfRound}</BodyText>
            <BodyText>{value}</BodyText>
        </View>
    )

}


function GameScreen2(props) {
    const randomNumber = generateRandomBetween(1, 100, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(randomNumber)
    const [pastGuess, setPastGuess] = useState([randomNumber]);

    const minValue = useRef(1);
    const maxValue = useRef(100);

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuess.length)
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
            minValue.current = currentGuess + 1
        }
        const nextNumber = generateRandomBetween(minValue.current, maxValue.current, currentGuess);
        setCurrentGuess(nextNumber)
        setPastGuess((prevValue) => [nextNumber, ...prevValue])
    }

    return (
        <View style={styles.screen}>
            <TitleText>Opponent's Guess</TitleText>
            <NumberContain>{currentGuess}</NumberContain>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={() => nextGuessHandler("lower")} > <Ionicons name="md-remove" size={24} color="white" /> </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, "greater")} > <Ionicons name="md-add" size={24} color="white" /> </MainButton>
            </Card>
            <View style={styles.listContainer}>
            <ScrollView contentContainerStyle={styles.list}>
                {pastGuess.map((value, index) => renderListItem(value, pastGuess.length - index))}
            </ScrollView>
            </View>

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
    },
    listItem: {
        borderColor: "#ccc",
        padding:15,
        marginVertical:10,
        backgroundColor: "white",
        borderWidth:1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%"
    },
    listContainer:{
        flex:1,
        width:"80%"
    },
    list:{
        flexGrow: 1, //for flex-end works and ScrollView
        alignItems: "center",
        justifyContent: "flex-end"
    }

})

export default GameScreen2;