import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './screens/Explore';
import Inbox from './screens/inbox';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();
function MyTabs(){
  return(
    <Tab.Navigator
      initialRouteName="Explore"
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        styles:{
          backgroundColor: 'white',
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
          tabBarIcon:({tintColor})=>(
            <Icon name="ios-search-outline" color={tintColor} size={24} />
          )
        }}
      />
      
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: 'SAVED',
          tabBarIcon:({tintColor})=>(
            <Icon name="ios-heart-outline" color={tintColor} size={24} />
          )
        }}
      />
      
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarLabel: 'TRIPS',
          tabBarIcon:({tintColor})=>(
            <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
          )
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'INBOX',
          tabBarIcon:({tintColor})=>(
            <Icon name="ios-inbox-outline" color={tintColor} size={24} />
          )
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon:({tintColor})=>(
            <Icon name="ios-person-outline" color={tintColor} size={24} />
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

// export default createBottomTabNavigator({
//   Explore: {
//     screen: Explore,
//     navigationOptions: {
//       tabBarLabel: 'EXPLORE',
//       tabBarIcon:({tintColor})=>(
//         <Icon name="ios-search-outline" color={tintColor} size={24} />
//       )
//     }
//   }, 
//   Saved: {
//     screen: Saved,
//     navigationOptions: {
//       tabBarLabel: 'SAVED',
//       tabBarIcon:({tintColor})=>(
//         <Icon name="ios-heart-outline" color={tintColor} size={24} />
//       )
//     }
//   }, 
//   Trips: {
//     screen: Trips,
//     navigationOptions: {
//       tabBarLabel: 'TRIPS',
//       tabBarIcon:({tintColor})=>(
//         <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
//       )
//     }
//   },
//   Inbox: {
//     screen: Inbox,
//     navigationOptions: {
//       tabBarLabel: 'INBOX',
//       tabBarIcon:({tintColor})=>(
//         <Icon name="ios-inbox-outline" color={tintColor} size={24} />
//       )
//     }
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: 'PROFILE',
//       tabBarIcon:({tintColor})=>(
//         <Icon name="ios-person-outline" color={tintColor} size={24} />
//       )
//     }
//   }
// },{
//   tabBarOptions:{
//     activeTintColor: 'red',
//     inactiveTintColor: 'grey',
//     styles:{
//       backgroundColor: 'white',
//       borderTopWidth: 0,
//       shadowOffset: {width:5, height:3},
//       shadowColor: 'black',
//       shadowOpacity: 0.5,
//       elevation: 5
//     }
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
