import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartGame from "./components/StartGame";
import HomeScreen from "./components/HomeScreen";
import DrinkingGame from "./components/DrinkingGame";
import Game from "./components/Game";
import { useState, useEffect } from "react";

const Stack = createStackNavigator();

export default function App() {
   const [questions, setQuestions] = useState([]);
   const [drinkingQuestions, setdrinkingQuestions] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      loadQuestions();
   }, []);

   const loadQuestions = async () => {
      // Simulate loading time
      setTimeout(() => {
         // Load questions (you can use your actual loading logic here)
         const questionsData = require("./data/questions.json");
         const drinkingQuestionsData = require("./data/drinkingQuestions.json");
         setQuestions(questionsData.questions);
         setdrinkingQuestions(drinkingQuestionsData.questions);
         setLoading(false);
      }); // Simulating 2 seconds of loading time
   };

   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="PelinAloitus" component={StartGame} />
            <Stack.Screen name="Game">
               {(props) => <Game {...props} questions={questions} />}
            </Stack.Screen>
            <Stack.Screen name="DrinkingGame">
               {(props) => (
                  <DrinkingGame {...props} questions={drinkingQuestions} />
               )}
            </Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
   );
}
