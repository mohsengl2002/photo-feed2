import React from 'react';
import {Flatlist,StyleSheet,Text,View,Image}from 'react-native';

class upload extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>Feed</Text>
            </View>
        )
    }
}

export default upload;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });