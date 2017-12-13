import React, { Component } from 'react';
import { View,Text } from 'react-native';

export default class Login extends Component {
    state = {  }
    render() {
        return (
            <View style={{alignContent:'center',flex:1, justifyContent:'center', backgroundColor:'#010101'}}>
                <Text>Login</Text>
            </View>
        );
    }
}