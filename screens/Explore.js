import React, { Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Dimensions, Text, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView, Image} from 'react-native';
import Category from './components/Explore/Category';
import Home from './components/Explore/Home';

const { height, width } = Dimensions.get('window');

class Explore extends Component{
    UNSAFE_componentWillMount(){
        this.startHeaderHeight = 80;
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View 
                      style={{height:this.startHeaderHeight, backgroundColor:'white', borderBottomWidth: 1, borderBottomColor:'#dddddd'}}
                    >
                        <View 
                          style={{flexDirection: 'row', padding:10, backgroundColor: 'white', marginHorizontal: 20, shadowOffset: {width:0, height:0}, shadowColor:'black', shadowOpacity:0.2, elevation:1, marginTop: Platform.OS=="android" ? 30 : null}}
                        >
                            <Icon name="ios-search" size={20} />
                            <TextInput 
                                underlineColorAndroid="transparent"
                                placeholder="Try Islamabad"
                                placeholderTextColor="grey"
                                style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
                            />
                        </View>
                    </View>
                    <ScrollView
                      scrollEventThrottle={16}
                    >
                        <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
                            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal:20}}>What can we help you find, Asad?</Text>
                            <View style={{height: 130, marginTop: 20}}>
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category
                                        imageUri={require('../assets/home.jpg')}
                                        name='Home'
                                    />
                                    <Category
                                        imageUri={require('../assets/experiences.jpg')}
                                        name='Experiences'
                                    />
                                    <Category
                                        imageUri={require('../assets/restaurants.jpg')}
                                        name='Restaurants'
                                    />
                                </ScrollView>
                            </View>
                            <View
                                style={{marginTop:40, paddingHorizontal:20}}
                            >
                                <Text
                                    style={{fontSize:25, fontWeight:'700'}}
                                >
                                    Introducing Airbnb Plus
                                </Text>
                                <Text
                                    style={{fontWeight:'400', color:'black', marginTop:10}}
                                >
                                    A new selection of homes verified for quality & comfort
                                </Text>
                                <View
                                    style={{width: width-40, height: 200, marginTop:20}}
                                >
                                    <Image
                                        source={require('../assets/home.jpg')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5, borderWidth:1, borderColor:'#dddddd'}}
                                    />
                                </View>
                            </View>
                        </View>
                        <View
                          style={{marginTop: 40}}
                        >
                            <Text
                              style={{ fontSize:24, fontWeight: '700', paddingHorizontal: 20}}
                            >
                                Homes around the world
                            </Text>
                            <View
                              style={{paddingHorizontal:20, marginTop:20, flexDirection:'row', justifyContent:'space-between', flexWrap: 'wrap'}}
                            >
                                <Home
                                  width={width}
                                  name='The Cozy Place'
                                  type='PRIVATE ROOM - 2 BEDS'
                                  price={82}
                                  rating={4.2}
                                />
                                <Home
                                  width={width}
                                  name='The Cozy Place'
                                  type='PRIVATE ROOM - 2 BEDS'
                                  price={50}
                                  rating={3.5}
                                />
                                <Home
                                  width={width}
                                  name='The Cozy Place'
                                  type='PRIVATE ROOM - 2 BEDS'
                                  price={42}
                                  rating={3}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
} 
export default Explore;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  