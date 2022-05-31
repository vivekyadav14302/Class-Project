
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SecondScreen from './SecondScreen'

export default class FirstScreen extends React.Component{
  // gotoNextScreen = ()=> {
  //   this.props.navigation.navigate('SecondScreen')
  // }

  render(){
    return(
      
      <View>
        <TouchableOpacity style={{backgroundColor: 'red'}} 
        // onPress = {this.gotoNextScreen}
        onPress = {()=> this.props.navigation.navigate('SecondScreen')}
        
        >
          <Text >Click</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
