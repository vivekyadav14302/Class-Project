import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground, StyleSheet, TextInput,} from 'react-native';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

export default class App extends React.Component{
  render(){
    return(
     <View>
        <AppContainer />
     </View>
    )
  }
}


var AppNavigator = createSwitchNavigator({
  FirstScreen : FirstScreen,
  SecondScreen: SecondScreen

})

const AppContainer = createAppContainer(
    AppNavigator
)