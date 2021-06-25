import React from 'react';
import {Flatlist,StyleSheet,Text,View,Image}from 'react-native';

class profile extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Profile</Text>
        </View>
      );
    }
  }
  export default profile;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });