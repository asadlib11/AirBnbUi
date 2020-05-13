import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import StarRating from 'react-native-star-rating';

export default class Tag extends Component {
    render() {
        return (
            <View
                style={{minHeight:20, minWidth:40, padding:5, marginRight:5, backgroundColor: 'white', borderColor:"#dddddd", borderWidth:0.8, borderRadius:2}}
            >
                <Text
                  style={{fontWeight:'700', fontSize:10}}
                >
                  {this.props.name}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  