import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,TextInput,Button } from 'react-native';


export const Admin=({navigation})=> {
    return (
        <View style={styles.container}>

                    <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/home.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/notification-bell.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/user.png")} />
          </TouchableOpacity>
          
         
          </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
       
      flex: 1,
      backgroundColor: 'grey',
    
    },
    footer: {
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor:'white',
        flexDirection:'row',
        height:80,
        alignItems:'center',
        justifyContent:"space-evenly",
        shadowColor: '#00A4F9',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 9,  
        elevation: 6
    
      },
      ImageStyle: {
        height: 30,
        width: 30,
        // resizeMode: 'stretch',
       
    },
})