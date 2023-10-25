import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', // This makes the buttons appear next to each other
    marginTop: 50,
  },
  text: {
    fontSize: 18,
    marginBottom: 10, // Add margin at the bottom of the text
  },
  picker: {
    width: 200, // Set the width of the Picker
    position: 'absolute',
    bottom: 50,
    right: 50,
 },
 question : {
    fontSize: 20,
    width: 350,
    height: 100,
 },
 headers : {
    fontSize: 30,
    
 }
});