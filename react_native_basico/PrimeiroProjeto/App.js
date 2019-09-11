import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Imagem extends Component{
  render(){
    let imagem = {uri:'https://www.google.com.br/logos/'+this.props.nome+'.jpg'}

    return (

      <Image source={imagem} style={{width:parseInt(this.props.largura),height:parseInt(this.props.altura)}} />


      )


  }


}


export default class PrimeiroProjeto extends Component{
  render(){
    let imagem = {uri:'https://www.google.com.br/logos/google.jpg'}
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text style={{fontSize:25,color:'red', margin:20}}>Olá Mundo!</Text>

        <Imagem nome='google' largura='700' altura='200' />

        
      </View>
    );
  }
}