import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../styles/styles'


function Game( questions) {
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [randomPlayer, setrandomPlayer] = useState("")
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= questions.questions.length) {
      setGameOver(true);
    }
  }, [currentQuestionIndex]);

// const getRandomPlayerName = () => {
//    const randomIndex = Math.floor(Math.random() * playerData.numberOfPlayers);
//    setrandomPlayer(playerData.playerNames[randomIndex])
//  };


  
const handleNextQuestion = () => {
  if (currentQuestionIndex < questions.questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
     setCurrentQuestion(questions.questions[currentQuestionIndex + 1]);
  } else {
    setGameOver(true);
 }
 };

  return (
    <View style={styles.container}>
      {gameOver ? (
        <View>
        <Text>Kysymykset loppuivat, kiitos pelaamisesta!</Text>
        <Button title='Takaisin alkuun'onPress={() => navigation.navigate('Home')}></Button>
        </View>
      ) : (
        <View>
          <Text style={styles.question}>
            {currentQuestion}
          </Text>
          <View style={styles.buttonContainer}>
          <Button title="Seuraava kysymys" onPress={handleNextQuestion} />
          <Button title='Takaisin alkuun'onPress={() => navigation.navigate('Home')}></Button>
          </View>
        </View>
      )}
    </View>
  );
}

export default Game;