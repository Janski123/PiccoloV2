import React from 'react';
import { View, Text, Button } from 'react-native';
import playerData from '../data/playerData';

function Game({ players }) {
  return (
    <View>
      <Text>Kyssäreitä!</Text>
      <Button
        title="Palaa takaisin alkuun"
        onPress={() => navigation.navigate('Home')}
      />
            <Button
        title="Testi"
        onPress={() => console.log(playerData.selectedGameMode)}
      />
    </View>
  );
}

export default Game;