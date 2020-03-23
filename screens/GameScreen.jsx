import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from "react-native";

import Card from "../components/Card"
import Colors from "../constants/Colors"
import Input from "../components/Input"
import NumberContain from "../components/NumberContain"
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText"
import MainButton from "../components/MainButton"

const GameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get("window").width / 4);

   

    useEffect(() => {
        function updateLayout(){
            setButtonWidth(Dimensions.get("window").width /4)
        }
    
        Dimensions.addEventListener("change", updateLayout)
        return () => {
            Dimensions.removeEventListener("change", updateLayout)
        }
    })

    const numberInputHandler = (textInput) => {
        setEnteredValue(textInput.replace(/[^0-9]/g, ""));
    }

    const resetInputHandler = () => {
        setEnteredValue("");
        setConfirm(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid Value", "Number has to be between 1-99", [{ text: "Okay", style: "destructive", onPress: resetInputHandler }])
            setEnteredValue("")
            return;
        }
        setConfirm(true);
        setSelectedNumber(chosenNumber)
        setEnteredValue("");
    }

    let confirmOutput;

    if (confirm) {

        confirmOutput = (<Card style={styles.confirmStyle}>
            <BodyText>You Selected</BodyText>
            <NumberContain>{selectedNumber}</NumberContain>
            <View>
                <MainButton onPress={() => props.onStart(selectedNumber)} >Start Game</MainButton>
            </View>
        </Card>)
    }


    //This is for Ios ===> behavior=position
    return (
        <ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}> 
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a new Game</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input
                        blurOnSubmit
                        keyboardType="number-pad"
                        maxLength={2}
                        autoCorrect={false}
                        autoCapitalize={false}
                        style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={{width: buttonWidth}}>
                            <Button title="Reset" color={Colors.accent} onPress={resetInputHandler} />
                        </View>
                        <View style={{width: buttonWidth}}>
                            <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        minWidth: 300,
        width: "80%",
        maxWidth: "95%",
        alignItems: "center"

    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 15
    },
    // button: {
    //     //width: "45%",
    //     width: Dimensions.get("window").width / 4
    // },
    input: {
        width: 35,
        textAlign: "center"
    },
    confirmStyle:{
        marginVertical:20,
        alignItems: "center"
    }
})

export default GameScreen;