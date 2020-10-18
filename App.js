import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,
   Text,
   View, 
   Button, 
   Alert, 
   Image,
   TouchableHighlight} from 'react-native';

export default class App extends React.Component {

  myButtonPressed() {
    Alert.alert("Thanks! Quack quack");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Feed the duck, please</Text>
        <TouchableHighlight onPress = {this.myButtonPressed}>
          <Image style={styles.image} source={require("./assets/duck.gif")}></Image>
        </TouchableHighlight>
        
        <StatusBar style="auto" />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  text: {
    fontSize: 30,
    backgroundColor: "#2475B0",
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: "#FFFFFF",
    borderRadius: 20,
    overflow: 'hidden',  
  },
  image: {
    width: '60%',
    height: undefined, 
    aspectRatio: 1
  }
});
