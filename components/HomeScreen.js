import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../styles/styles";
function HomeScreen({ navigation }) {
   return (
      <View>
         <Text style={styles.headers}>Tervetuloa pelaaman Piccolo V2!</Text>
         <Button
            title="Aloita pelaaminen"
            onPress={() => navigation.navigate("PelinAloitus")}
         />
         <Text>© Jani Koponen 2023</Text>
      </View>
   );
}

export default HomeScreen;
