// screens/Intro.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
// import { Image } from 'expo-image';

import logo from '../data/symbol/logo.png';

const Intro = ({ navigation }) => {

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Image
          source = {logo}
          style = {styles.logo}
          contentfit = "cover"
          transition = {1000}
          placeholder = {blurhash}
        ></Image>
      </View>

      <View style={styles.mid}>
        <Text style={{'fontSize' : '72' , 'fontWeight': '500', 'fontFamily' : 'Georgia', 'color' : '#4F6367', 'alignContent' : 'justify'}}>MAPPIN</Text>
        <Text style = {{fontSize: 40, fontWeight: '450', color: '#7A9E9F', 'fontFamily' : 'Montserrat', marginTop: 10}}> POINT IT OUT!</Text>
      </View>

      <View style={styles.bottom}>
        <Button
          color = '#EEF5DB'
          style = {{'borderColor' : 'black', 'borderWidth': '2', 'fontColor' : '#010200' }}
          title ="Start!"
          onPress={() => navigation.navigate('List')}
        />
      </View>
    </View>
  );
};

// Designing the Layers
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#EEF5DB' 
  },
  top: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mid: {
    width: '100%',
    height: '40%',
    backgroundColor: '#EEF5DB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    width: '100%',
    height: '7%',
    backgroundColor: '#B8D8D8',
    borderWidth: 3,
    borderColor: '#7A9E9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 50
  }
  }
);

export default Intro;