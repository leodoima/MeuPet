import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import dogImage from './src/assets/daydog.png';

export default function App() {
  return (

      <View style={styles.container}>
        <Text style={styles.welcome}>Bem-Vindo!</Text>
        <Text style={styles.name}>App MeuPet</Text>

        <Image source={dogImage} style={styles.dogImage}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Efetuar login</Text>
        </TouchableOpacity>

        <Text style={styles.account}>Criar conta</Text>
        <StatusBar style="auto" />  
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dogImage:{
    width: 350,
    height: 350
  },

  button:{
    backgroundColor: '#3A3C42',
    height: 50,
    width: 170,
    borderRadius: 5,
    alignItems: 'center',
  },

  textButton:{
    padding: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },

  welcome: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  name:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 30
  },

  account: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20
  },
});
