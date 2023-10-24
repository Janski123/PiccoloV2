import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Aloita pelaaminen"
        onPress={() => navigation.navigate('PelinAloitus')}
      />
    </View>
  );
}

export default HomeScreen;