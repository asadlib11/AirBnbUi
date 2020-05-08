import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './screens/Explore';
import Inbox from './screens/inbox';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();
function MyTabs(){
  return(
    <Tab.Navigator
      initialRouteName="Explore"
      tabBarOptions={{
        activeTintColor: 'red',
        styles:{
          backgroundColor: 'red',
          borderTopWidth: 0,
          shadowOffset: {width:5, height:3},
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 5
        }
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'EXPLORE',
          tabBarIcon:({color})=>(
            <Ionicons name="ios-search" color={color} size={24} type="Ionicons" />
          )
        }}
      />
      
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: 'SAVED',
          tabBarIcon:({color})=>(
            <Ionicons name="ios-heart-empty" color={color} size={24} type="Ionicons" />
          )
        }}
      />
      
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarLabel: 'TRIPS',
          tabBarIcon:({color})=>(
            <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: color }} />
          )
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'INBOX',
          tabBarIcon:({color})=>(
            <MaterialIcons name="chat-bubble-outline" color={color} size={24} />
          )
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon:({color})=>(
            <MaterialIcons name="person-outline" color={color} size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
