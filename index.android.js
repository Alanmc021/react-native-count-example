/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Button, ListView, Text, View,TouchableOpacity} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


class helloworld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.onButtonPress = this.onButtonPress.bind(this);
    this.decrement = this.decrement.bind(this);
  }
 
  onButtonPress() {
    this.setState({
      count : this.state.count + 1
    });

  };
  decrement() {
    if(this.state.count != 0){
      this.setState({
        count : this.state.count - 1
      });
    }
    else
    {
      alert("Negative values are not decremented!")
    }
  };
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.Text1}>
            <Text>count: {this.state.count}</Text>
          </View>
          <View style={styles.buttonspart}>
            <View style={{alignItems:'stretch'}}>
              <TouchableOpacity style={styles.text2}
                onPress={this.onButtonPress} > 
                <View >
                  <Text>+</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View  style={{alignItems:'stretch'}}>
              <TouchableOpacity style={styles.text2}
               onPress={this.decrement}>
                  <View > 
                    <Text >-</Text>
                  </View>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text1: {
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end'
  },
  buttonspart: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10
  },
  text2: {
    alignItems:'center',
    backgroundColor:'#68a0cf',
    borderWidth: 1,
    borderColor: '#fff',
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    justifyContent:'center',
    padding:10,
    paddingHorizontal:20

  }

});






AppRegistry.registerComponent('helloworld', () => helloworld);