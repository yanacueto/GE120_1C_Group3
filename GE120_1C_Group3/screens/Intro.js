// screens/Intro.js
import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';

const Intro = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Button
            style = {{'borderColor' : '#010200', 'borderWidth': '2', 'fontColor' : '#010200' }}
            title ="Start!"
            onPress={() => navigation.navigate('List')}
          />
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: { 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: 20,
          backgroundColor: '#EEF5DB' 
        },
        image: {
            width: 300,
            height: 300,
            marginBottom: 20
        }
    });

export default Intro;