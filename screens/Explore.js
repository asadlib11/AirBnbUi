import React, { Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Dimensions, Text, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView, Image, Animated} from 'react-native';
import Category from './components/Explore/Category';
import Home from './components/Explore/Home';
import Tag from './components/Explore/Tag';

const { height, width } = Dimensions.get('window');

class Explore extends Component{
    UNSAFE_componentWillMount(){

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 100
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
        this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [50, 30],
            extrapolate: 'clamp'
        })

    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <Animated.View 
                      style={{height:this.animatedHeaderHeight, paddingTop:10, backgroundColor:'white', borderBottomWidth: 1, borderBottomColor:'#dddddd'}}
                    >
                        <View 
                          style={{flexDirection: 'row', padding:10, marginBottom:5, backgroundColor: 'white', marginHorizontal: 20, shadowOffset: {width:0, height:0}, shadowColor:'black', shadowOpacity:0.2, elevation:1, marginTop: Platform.OS=="android" ? 30 : null}}
                        >
                            <Icon name="ios-search" size={20} />
                            <TextInput 
                                underlineColorAndroid="transparent"
                                placeholder="Try Islamabad"
                                placeholderTextColor="grey"
                                style={{flex: 1, fontWeight: '700', marginLeft:5, backgroundColor: 'white'}}
                            />
                        </View>
                        <Animated.View
                          style={{flexDirection:'row', marginHorizontal:20, opacity:this.animatedOpacity, position:'relative', top:10}}
                        >
                            <Tag name="Guests" />
                            <Tag name="Date" />
                        </Animated.View>
                    </Animated.View>
                    <ScrollView
                      scrollEventThrottle={16}
                      onScroll={
                          Animated.event(
                              [
                                  {nativeEvent: {contentOffset:{y:this.scrollY}}}
                              ]
                          )
                      }
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
  