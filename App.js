import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header"
import GameScreen from "./screens/GameScreen"
import GameScreen2 from "./screens/GameScreen2"

export default function App() {

  const [chosenNumber, setChosenNumber] = useState();

  function startGameHandler(selectedNumber){
    setChosenNumber(selectedNumber)
  }


  let screenOutput = <GameScreen onStart={startGameHandler} />

  if(chosenNumber){
    screenOutput = <GameScreen2 userChoice={chosenNumber} />
  }

  return (
    <View style={styles.screen}>
        <Header title="Guess A Number"/>
        {screenOutput}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
