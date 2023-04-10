import { React } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
{/*import './App.css';*/}
 

export default function App(){
  function TelaLogin(){
    return(
      <Image style={styles.Imagem} source={require('../src/components/img/logo512.png')}/>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    width: "100%",
    height: "100%",
    backgroundColor: '#000'
  },
});