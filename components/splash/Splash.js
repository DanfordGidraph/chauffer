import React, { Component } from 'react';
import { Image, View,StyleSheet,Dimensions } from 'react-native';
const {width, height} = Dimensions.get('screen');

import {Actions} from 'react-native-router-flux';

export default class Splash extends Component {
    state = {  }

    componentDidMount(){
      setTimeout(()=>{
        Actions.push('User');
      },1000);
    }

    render() {
        return (
            <View style={styles.container}>
            <Image style={styles.LogoSplash} source={require('../../assets/splash/Chauffer_Logo.png')} />
            <Image style={styles.Loader} source={require('../../assets/splash/loader.gif')} />
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#212121',
    },LogoSplash:{
      maxWidth:110,
      maxHeight:90,
      marginTop:100,
    }, Loader:{
      marginTop:150,
    }
  });