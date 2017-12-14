import React, { Component } from 'react';
import { View,Text,Dimensions,TouchableOpacity,ScrollView } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import {Actions} from 'react-native-router-flux';

let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            emailAdress:'',
            password:''
        }
    }
    
    render() {
        return (
            <ScrollView 
                contentContainerStyle={{justifyContent:'center', alignItems:'center',backgroundColor:'#f3f3f3'}}>
                <Hoshi
                    onChangeText={(text)=>{
                        this.setState({emailAdress: text});
                    }}
                    label={'Email Address'}
                    borderColor={'#4FC3F7'}
                    keyboardType={'email-address'}
                    style={{minWidth:width*.8,marginTop:height*.10}}
                   
                />
                <Hoshi
                    onChangeText={(text)=>{
                        this.setState({password: text});
                    }}
                    label={'Password'}
                    borderColor={'#4FC3F7'}
                    secureTextEntry
                    style={{minWidth:width*.8,marginTop:15}}
                   
                />
                <TouchableOpacity
                    style={{minWidth:width*.7,flex:1, marginTop:height*.07}}
                    onPress={()=>alert(this.state.emailAdress + "  " + this.state.password)}
                    
                >
                <Text style={{alignSelf:'center', color:'#0277BD', fontSize:18}}>Forgot Your Password? </Text>
                </TouchableOpacity>
                <View style={{minWidth:width*.7,minHeight:height*.12,flex:3,paddingTop:20,marginTop:height*.1}}>
                    <TouchableOpacity
                        style={{backgroundColor:'#212121',minHeight:height*.1,alignContent:'center',justifyContent:'center'}}
                        onPress={()=>alert(this.state.emailAdress + "  " + this.state.password)}>
                    <Text  style={{alignSelf:'center', color:'#f3f3f3', fontSize:20}}> LOGIN </Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        );
    }
}