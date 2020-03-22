import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header"
import GameScreen from "./screens/GameScreen"
import GameScreen2 from "./screens/GameScreen2"
import GameOver from "./screens/GameOver";

export default function App() {

  const [chosenNumber, setChosenNumber] = useState();
  const [gameRounds, setGameRounds] = useState(0);

  function newGameHandler(){
    setGameRounds(0);
    setChosenNumber(null);
  }

  function startGameHandler(selectedNumber){
    setChosenNumber(selectedNumber)
  }

  function gameOverHandler(round){
    setGameRounds(round);
  }

  let screenOutput = <GameScreen onStart={startGameHandler} />

  if(chosenNumber && gameRounds <= 0){
    screenOutput = <GameScreen2 onGameOver={gameOverHandler} userChoice={chosenNumber} />
  }else if(gameRounds>0){
    screenOutput = <GameOver userNumber={chosenNumber} round={gameRounds} onNewGame={newGameHandler} />
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
