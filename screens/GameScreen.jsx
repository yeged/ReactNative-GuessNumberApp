import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from "react-native";

import Card from "../components/Card"
import Colors from "../constants/Colors"
import Input from "../components/Input"

const GameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = (textInput) => {
        setEnteredValue(textInput.replace(/[^0-9]/g, ""));
    }

    const resetInputHandler = () => {
        setEnteredValue("");
        setConfirm(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
            setEnteredValue("")
            return;
        }
        setConfirm(true);
        setSelectedNumber(chosenNumber)
        setEnteredValue("");
    }

    let confirmOutput;

    if(confirm){
        confirmOutput = <Text>My number : {selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>This is game GameScreen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
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
                    <View style={styles.button}>
                        <Button title="Reset" color={Colors.accent} onPress={resetInputHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} />
                    </View>
                </View>
            </Card>
            {confirmOutput}
        </View>
        </TouchableWithoutFeedback>
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
        width: 300,
        maxWidth: "80%",
        alignItems: "center"

    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 15
    },
    button: {
        width: "45%",
    },
    input: {
        width: 35,
        textAlign: "center"
    }
})

export default GameScreen;