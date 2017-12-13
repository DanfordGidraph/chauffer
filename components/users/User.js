import React, { Component } from 'react';
import { ToolbarAndroid,View,TextInput,Text, ScrollView,StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Login from './Login';
import Register from './Register'

export default class User extends Component {
    state = {  }
    render() {
        return (
            <ScrollView style={Styles.container} >
                <ToolbarAndroid
                    style={Styles.ToolBar}
                    navIcon={require('../../assets/toolbar/Chauffer_Logo.png')}
                    title={'CHAUFFER'}
                    titleColor='#455A64'
                >
                </ToolbarAndroid>

                <ScrollableTabView
                    tabBarUnderlineStyle={{backgroundColor:'#26C6DA'}}
                    tabBarActiveTextColor='#26C6DA'
                    style={{flex:9}}
                >
                    <Login tabLabel='Login' />
                    <Register tabLabel='Register' />
                </ScrollableTabView>

            </ScrollView>
        );
    }
}

const Styles = StyleSheet.create({
   container:{
       backgroundColor:'#f3f3f3',
       flex:1,
   },
   ToolBar:{
       maxHeight:50,
       height:50,
       minHeight:50,
       flex:1,
       
   } 
});