import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class PrimeiroRNProjeto extends Component{

  somar(n1,n2){
    return n1 + n2;
  }

  render(){

    return (
      <View>

        <Text style={styles.texto}>A soma de 10 + 10 é { this.somar(10,10)}</Text>

        <Button title= "Aperte" onPress={() => alert("Fui Apertado!")} ></Button>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  texto:{
    fontSize:30
  }
});