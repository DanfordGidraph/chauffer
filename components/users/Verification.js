import React, { Component } from 'react';
import { View,Text,Dimensions,TouchableOpacity,ScrollView, ToolbarAndroid, StyleSheet,TextInput } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';

let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;

export default class Verification extends Component {
    constructor(props){
        super(props);
        this.state ={
                verificationCode:'',
        }
    }
    render() {
        return (
            <View>
                 <ToolbarAndroid
                    style={Styles.ToolBar}
                    navIcon={require('../../assets/toolbar/Chauffer_Logo.png')}
                    title={'CHAUFFER'}
                    titleColor='#455A64'
                >
                </ToolbarAndroid>
                <View
                    style={Styles.navigationBar}                    
                >
                    <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}} >
                        <Icon name='angle-left' size={45} color='#030303' style={{marginLeft:10,}} />
                    </TouchableOpacity>
                    <View style={{flex:6,alignItems:'flex-start',justifyContent:'center'}}>
                        <Text style={{fontSize:18, fontWeight:'100',color:'#4FC3F7',marginLeft:40}}>
                            CONFIRMATION CODE
                        </Text>
                    </View>
                </View>
                <View style={{marginTop:20,maxWidth:width*.9,alignSelf:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'300',color:'#212121'}}> VERIFY PHONE NUMBER </Text>
                </View>

                <View style={{marginTop:20,maxWidth:width*.9,alignSelf:'center'}}>
                    <Text>ENTER CODE</Text>
                </View>
                <View style={{marginTop:20,maxWidth:width*.9,alignSelf:'center'}}>
                    <Hoshi
                        onChangeText={(text)=>{this.setState({
                            verificationCode:text,
                        })}}
                        label={'verification Code'}
                        keyboardType={'numeric'}
                        maxLength={6}
                        borderColor={'#4FC3F7'}
                        style={{minWidth:width*.5,}}
                        // backgroundColor={'#F9F7F6'}
                    />
                </View>
                <View style={{minWidth:width*.70,alignSelf:'center',minHeight:height*.12,marginTop:20,flex:1,paddingTop:10}}>
                    <TouchableOpacity
                        style={{backgroundColor:'#212121',minHeight:height*.1,alignContent:'center',justifyContent:'center'}}
                        onPress={ () => {Actions.push('User');} }>
                    <Text  style={{alignSelf:'center', color:'#f3f3f3', fontSize:20}}> ACTIVATE ACCOUNT </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',

    },
    ToolBar:{
        minHeight:height*.09,
        maxHeight:height*.09, 
    },
    navigationBar:{
        minHeight:height*.09,
        maxHeight:height*.09, 
        flexDirection: 'row',
        borderBottomColor:'gray',
        elevation:1,

    }
})