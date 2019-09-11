import React, { Component } from 'react';
import { View, Text,   StyleSheet } from 'react-native';

export default class PrimeiroProjeto extends Component{
  render(){
    return (
      <View style={{flex:1, backgroundColor:'black'}}>
      <View style={{height:70,  backgroundColor:'blue'}}></View>
      <View style={{flex:1,  backgroundColor:'green'}}></View>
      <View style={{height:50,  backgroundColor:'yellow'}}></View>
      </View>
    );
  }
}
