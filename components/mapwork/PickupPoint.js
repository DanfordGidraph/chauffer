import React, { Component } from 'react';
import { View,Text,Dimensions,TouchableOpacity,ScrollView, ToolbarAndroid, StyleSheet,TextInput } from 'react-native';
import { Fumi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import MapView from 'react-native-maps';
import PlacesAutocomplete from 'react-native-places-autocomplete';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const placesAPI= 'AIzaSyB01mAtz0DgnCnECXgfxy7zjL492kaJils';
let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;

export default class PickupPoint extends Component {
    constructor(props){
        super(props);
        this.state ={
                mapSearchText:'',
                location: {
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                },
                searchHeight:height*.1,
        }
    }

    render() {
        return (
            <View>
                <ToolbarAndroid
                    style={Styles.ToolBar}
                    navIcon={require('../../assets/toolbar/Chauffer_Logo.png')}
                    title={'CHAUFFER'}
                    titleColor='#455A64'>
                </ToolbarAndroid>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    listViewDisplayed='auto'    // true/false/undefined
                    fetchDetails={true}
                    renderDescription={(row) => row.description} // custom description render
                    onPress={(data, details) => { // 'details' is provided when fetchDetails = true
                        console.log(details.geometry.location);
                        let locObject = {
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }
                        this.setState({
                            location:locObject,
                        })
                        // console.log(details);
                    }}
                    getDefaultValue={() => {
                        return ''; // text input default value
                    }}
                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'AIzaSyCTc2gjNhaBA92bDlGrdwwQGGRB1xdsQio',
                        language: 'en', // language of the results
                        types: '(cities)' // default: 'geocode'
                    }}
                    styles={{
                        description: {
                        fontWeight: 'bold',
                        color:'#000',
                                                                  
                        },
                        textInputContainer:{
                            // borderBottomWidth:1,
                            elevation:4,                            
                            backgroundColor:'#fff',
                            minHeight:height*.1,
                            marginTop:height*.06,
                            paddingBottom:6,
                        },
                        textInput:{
                            backgroundColor:'#f3f3f3',
                            borderRadius:0,
                            alignSelf:'center'
                        },
                        listView:{
                            backgroundColor:'#f2f2f2',
                                                },
                        predefinedPlacesDescription: {
                        color: '#1faadb'
                        },
                        container:{
                            flex:1,
                            position:'absolute',
                            marginTop:height*.02,
                            minWidth:width,
                            zIndex:100,
                            padding:10,
                        },
                    }}
                
                    currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                    currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        types: 'food'
                    }}
                
                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities                
                    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                    // renderLeftButton={() => <Image source={require('path/custom/left-icon')} />}
                    renderRightButton={() => <Icon style={{alignSelf:'center', marginRight:10,marginTop:10}} name='map-pin' size={20} color='#000' />}
                    
                />
                <ScrollView style={{flex:9,position:'absolute',marginTop:height*.09}}>
                                       
                    <MapView
                        mapType={'standard'}
                        showsMyLocationButton={true}
                        showsCompass={true}
                        toolbarEnabled={true}
                        style={Styles.mapView}
                        region={this.state.location}
                        >
                        <MapView.Marker
                            coordinate={this.state.location}
                            title={'test'}
                            // description={marker.description}
                        />
                    </MapView>

                    <View style={{minWidth:width,alignSelf:'center',minHeight:height*.15,flex:1}}>
                        <TouchableOpacity
                            style={{backgroundColor:'#212121',minHeight:height*.15,alignContent:'center',justifyContent:'center'}}
                            onPress={()=>{Actions.push('PickupPoint')}}>
                            <Text  style={{alignSelf:'center', color:'#f3f3f3', fontSize:13, fontWeight:'100'}}><Icon name='location-arrow' size={25}  /><Text style={{paddingRight:10,color:'#212121'}} >..</Text> SET PICK UP LOCATION
                                </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container:{
        
    }, 
    ToolBar:{
        // flex:1,
        minHeight:height*.09,
        maxHeight:height*.09,
        paddingBottom:-20,
        backgroundColor:'#fff',
        elevation:1,
    },
    mapView:{
        // marginTop:-60,
        height: height*.65,
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:'red'
    }
});