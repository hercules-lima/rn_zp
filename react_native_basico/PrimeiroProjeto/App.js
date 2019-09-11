import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class PrimeiroProjeto extends Component{
  render(){
    let imagem = {uri:'https://cdn.theatlantic.com/assets/media/img/mt/2018/11/shutterstock_552503470/lead_720_405.jpg?mod=1541605820'}
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text style={{fontSize:25,color:'red', margin:20}}>Olá Mundo!</Text>
        <Image source={imagem} style={{width:300,height:300,margin:20}} />
      </View>
    );
  }
}