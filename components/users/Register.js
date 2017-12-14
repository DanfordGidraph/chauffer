import React, { Component } from 'react';
import { View,Text,Dimensions,TouchableOpacity, ScrollView,Picker,KeyboardAvoidingView } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import {Actions} from 'react-native-router-flux';


let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            mobileNumber:'',
            emailAdress:'',
            travellersCode:'',
            password:'',
            confirmPassword:'',
            passConfirmed:false,
            countryCode:'+245',
        }
    }
    render() {
        return (
            <ScrollView 
                contentContainerStyle={{
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#f3f3f3',
                }}
                >
                <View style={{flex:1, flexDirection:'row',minWidth:width*.9,maxWidth:width*.9}}>
                    <Hoshi
                        onChangeText={(text)=>{
                            this.setState({firstName: text});
                        }}
                        label={'First Name'}
                        borderColor={'#4FC3F7'}
                        style={{minWidth:width*.4,marginTop:5,flex:1,marginRight:10}}
                        // backgroundColor={'#F9F7F6'}
                    />
                    <Hoshi
                        onChangeText={(text)=>{
                            this.setState({lastName: text});
                        }}
                        label={'Last Name'}
                        borderColor={'#4FC3F7'}
                        style={{minWidth:width*.4,marginTop:5,flex:1}}
                        // backgroundColor={'#F9F7F6'}
                    />
                </View>
                <View style={{flex:1, flexDirection:'row',minWidth:width*.9,maxWidth:width*.9}}>
                        <Picker 
                            style={{flex:2,marginTop:15, minWidth:width*.15}}
                            selectedValue={this.state.countryCode}
                            onValueChange={(itemValue, itemIndex) => this.setState({countryCode: itemValue})} >
                            <Picker.Item label='+254' value='+254'/>
                            <Picker.Item label='+253' value='+253'/> 
                            <Picker.Item label='+256' value='+256'/>                            
                        </Picker>
                    <Hoshi
                        onChangeText={(text)=>{
                            this.setState({lastName: text});
                        }}
                        label={'Phone Number'}
                        borderColor={'#4FC3F7'}
                        fontSize={8}
                        style={{minWidth:width*.4,marginTop:5,flex:3,}}
                        // backgroundColor={'#F9F7F6'}
                    />
                </View>
                
                <Hoshi
                    onChangeText={(text)=>{
                        this.setState({emailAdress: text});
                    }}
                    label={'Email Address'}
                    borderColor={'#4FC3F7'}
                    keyboardType={'email-address'}
                    style={{minWidth:width*.9,flex:1}}
                    // backgroundColor={'#F9F7F6'}
                />
                           
                <Hoshi
                    onChangeText={(text)=>{
                        this.setState({password: text});
                    }}
                    label={'Password'}
                    borderColor={'#4FC3F7'}
                    secureTextEntry
                    style={{minWidth:width*.9,flex:1}}
                    // backgroundColor={'#F9F7F6'}
                />
                <Hoshi
                    onChangeText={(text)=>{
                        this.setState({confirmPassword: text});
                    }}
                    label={'Confirm Password'}
                    borderColor={'#4FC3F7'}
                    secureTextEntry
                    style={{minWidth:width*.9,flex:1}}
                    // backgroundColor={'#F9F7F6'}
                />
                {/* Register Button */}
                <View style={{minWidth:width*.7,minHeight:height*.1,marginTop:10,flex:1,paddingTop:10}}>
                    <TouchableOpacity
                        style={{backgroundColor:'#212121',minHeight:height*.1,alignContent:'center',justifyContent:'center'}}
                        onPress={()=>alert(this.state.emailAdress + "  " + this.state.password)}>
                    <Text  style={{alignSelf:'center', color:'#f3f3f3', fontSize:20}}> REGISTER </Text>
                    </TouchableOpacity>
                </View>

                {/* Footer message */}
                <Text style={{alignSelf:'center',marginTop:10, textAlign:'center', color:'#212121',flexWrap:'wrap',maxWidth:width*.7,flex:.5, fontSize:8}}>
                    By tapping Register, You agree to receive an SMS to confirm your registration. Message and data rates may apply
                 </Text>
                
                
            </ScrollView>
        );
    }
}