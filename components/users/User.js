import React, { Component } from 'react';
import { ToolbarAndroid,View,TextInput,Text, ScrollView,StyleSheet,Dimensions, TouchableOpacity,} from 'react-native';

import Login from './Login';
import Register from './Register'

let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'login'
        }
    }
    render() {
        const viewToRender = this.state.selectedTab === 'login'? <Login />:<Register />;
        return (
            <View style={Styles.container} >
                <ToolbarAndroid
                    style={Styles.ToolBar}
                    navIcon={require('../../assets/toolbar/Chauffer_Logo.png')}
                    title={'CHAUFFER'}
                    titleColor='#455A64'
                >
                </ToolbarAndroid>

                <View 
                    style={Styles.tabBar}>
                    <TouchableOpacity
                        style={{
                            borderBottomColor:this.state.selectedTab === 'login'?'#0277BD':'white',
                            borderBottomWidth:2,
                            paddingTop:height*.007,
                            marginRight:10,
                            marginLeft:10,
                            flex:1,
                            alignItems:'center'
                        }}                        
                        onPress={() => this.setState({ selectedTab: 'login' })}>
                         <Text style={{fontSize:20,fontFamily:'Roboto',color:this.state.selectedTab === 'login'?'#0277BD':'#424242'}} >
                            Login
                         </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderBottomColor:this.state.selectedTab === 'register'?'#0277BD':'white',
                            borderBottomWidth:2,
                            paddingTop:height*.007,
                            marginRight:10,
                            marginLeft:10,
                            flex:1,
                            alignItems:'center',
                         }}
                        onPress={() => this.setState({ selectedTab: 'register' })}>
                        <Text style={{fontSize:20,fontFamily:'Roboto',color:this.state.selectedTab === 'register'?'#0277BD':'#424242'}} >
                            Register
                        </Text>
                    </TouchableOpacity>                    
                </View>  
                {viewToRender}             
                
            </View>
        );
    }
}

const Styles = StyleSheet.create({
   container:{
       backgroundColor:'#f3f3f3',
       flex:1,
   },
   ToolBar:{
       minHeight:height*.09,
       maxHeight:height*.09,     
   },
   tabBar:{
    minHeight:height*.085,
    maxHeight:height*.085, 
    flexDirection:'row',
    backgroundColor:'white',
    paddingRight:10, 
    paddingLeft:10,
    marginBottom:-7,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
   }
});