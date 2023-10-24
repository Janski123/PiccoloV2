import React from 'react';
import { View, Text, Button } from 'react-native';

function StartGame({ navigation }) {
  return (
    <View>
      <Text>Lisää pelaajat ja valitse pelimuoto!</Text>
      <Button
        title="Palaa takaisin"
        onPress={() => navigation.navigate('Home')} // Navigate to the Home screen
      />
    </View>
  );
}

export default StartGame;