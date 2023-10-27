import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import playerData from "../data/playerData";
import { styles } from "../styles/styles";

function StartGame({ navigation }) {
   const [selectedPlayers, setSelectedPlayers] = useState(
      playerData.numberOfPlayers
   );
   const [playerNames, setPlayerNames] = useState(playerData.playerNames);
   const [gameMode, setGameMode] = useState(playerNames.selectedGameMode);
   const playerInputFields = [];

   const updateGameMode = (newGameMode) => {
      playerData.selectedGameMode = newGameMode;
      setGameMode(newGameMode); // Update selectedGameMode in the imported file
   };

   for (let i = 0; i < selectedPlayers; i++) {
      playerInputFields.push(
         <TextInput
            key={i}
            placeholder={`Player ${i + 1} Name`}
            onChangeText={(text) => {
               const newPlayerNames = [...playerNames];
               newPlayerNames[i] = text;
               setPlayerNames(newPlayerNames);
            }}
         />
      );
   }
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Valitse pelimuoto!</Text>
         <View style={styles.buttonContainer}>
            <Button
               title="Palaa takaisin"
               onPress={() => navigation.navigate("Home")} // Navigate to the Home screen
            />
            {/* <Picker
    selectedValue={selectedPlayers}
    onValueChange={(itemValue) => setSelectedPlayers(itemValue)}
    >
    <Picker.Item label="1 Player" value={1} />
    <Picker.Item label="2 Players" value={2} />
    <Picker.Item label="3 Players" value={3} />
    <Picker.Item label="4 Players" value={4} />
    <Picker.Item label="5 Players" value={5} />
    <Picker.Item label="6 Players" value={6} />
    <Picker.Item label="7 Players" value={7} />
    <Picker.Item label="8 Players" value={8} />
    <Picker.Item label="9 Players" value={9} />
    <Picker.Item label="10 Players" value={10} />
    </Picker>
  {playerInputFields}  */}
            <Picker
               selectedValue={gameMode}
               style={styles.picker}
               onValueChange={(itemValue) => {
                  updateGameMode(itemValue); // Update the selected game mode in the imported file
               }}
            >
               {playerData.gameModes.map((mode, index) => (
                  <Picker.Item key={index} label={mode} value={mode} />
               ))}
            </Picker>

            <Button
               title="Aloita pelaaminen"
               onPress={() => {
                  if (gameMode == "Tutustuminen" || gameMode == undefined) {
                     navigation.navigate("Game");
                  } else {
                     navigation.navigate("DrinkingGame");
                  }
               }}
            />
         </View>
      </View>
   );
}

export default StartGame;
