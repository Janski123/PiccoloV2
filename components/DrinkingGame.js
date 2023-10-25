import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import playerData from '../data/playerData';


function DrinkingGame( drinkingQuestions) {
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [randomPlayer, setrandomPlayer] = useState("")
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= drinkingQuestions.questions.length) {
      setGameOver(true);
    }
  }, [currentQuestionIndex]);

// const getRandomPlayerName = () => {
//    const randomIndex = Math.floor(Math.random() * playerData.numberOfPlayers);
//    setrandomPlayer(playerData.playerNames[randomIndex])
//  };


  
const handleNextQuestion = () => {
  if (currentQuestionIndex < drinkingQuestions.questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
     setCurrentQuestion(drinkingQuestions.questions[currentQuestionIndex + 1]);
  } else {
    setGameOver(true);
 }
 };

  return (
    <View>
      {gameOver ? (
        <Text>Kysymykset loppuivat, kiitos pelaamisesta!</Text>
      ) : (
        <View>
          <Text>
            {currentQuestion}
          </Text>
          <Button title="Seuraava kysymys" onPress={handleNextQuestion} />
          <Button title='Takaisin alkuun'onPress={() => navigation.navigate('Home')}></Button>
        </View>
      )}
    </View>
  );
}

export default DrinkingGame;