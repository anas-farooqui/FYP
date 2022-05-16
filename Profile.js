import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,TextInput,Button } from 'react-native';


export const Profile=({navigation})=> {
    return (
        <View style={styles.container}>
                <View style={styles.mainBox}> 
            <View style={styles.box}><Image style={styles.ImageStyle1} source={require("C:/React_Native/fyp/assets/profile.png")} />
            <Text style={{fontFamily:"Faustina",fontSize:25}}>User Name</Text></View>
          
          </View>
          <Text style={{fontFamily:"Faustina",fontSize:20,fontWeight:"bold"}}>My Exercises</Text>
          <Text style={{fontFamily:"Faustina",fontSize:20,fontWeight:"bold"}}>Progress</Text>


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
      backgroundColor: 'white',
    
    },
    ImageStyle1: {
      
        height: 90,
        width: 90,
        // resizeMode: 'stretch',
       
    },
    box:{
        width:150,
        height:150,
        borderWidth:1,
        marginTop:10,
        marginLeft:10,
        marginBottom:10,
        backgroundColor:"#00A4F9",
        borderColor:"#00A4F9",
        justifyContent:"space-between",
        alignItems:"center"

    },
    mainBox:{
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"center",
      //   alignItems:"flex-start",
      backgroundColor: '#00A4F9',
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