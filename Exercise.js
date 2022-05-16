import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,TextInput,Button } from 'react-native';


export const Exercise=({navigation})=> {
    return (
        <View style={styles.container}>
           
     
            <Text style={styles.text}>Workout Schedule</Text>

            <View style={styles.mainBox}> 
            <View style={styles.box}><Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/dumbell.png")} />
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Step 1</Text>
            <Text style={{fontFamily:"Faustina",color:"white"}}>Shoulder Press</Text></View>
            <View style={styles.box}><Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/dumbell.png")} />
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Step 2</Text>
            <Text style={{fontFamily:"Faustina",color:"white"}}>Pushups</Text></View>
          </View>


          <Text style={styles.text}>Step 2</Text>
          
          <Image style={styles.ImageStyle1} source={require("C:/React_Native/fyp/assets/images (4).jpg")} />
          {/* <View style={styles.shadow}> */}

         


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
    mainBox:{
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"center",
      //   alignItems:"flex-start",
      backgroundColor: 'grey',
    },
    box:{
        width:150,
        height:150,
        borderWidth:1,
        marginTop:10,
        marginLeft:10,
        marginBottom:10,
        backgroundColor:"#00A4F9",
        borderColor:"grey",
        justifyContent:"space-between",
        alignItems:"center"

    },
    text:{
        marginTop:10,
        fontSize:20,
        fontFamily:"Faustina",
        fontWeight:"bold",
        marginLeft:10
        
    },
    ImageStyle: {
        height: 30,
        width: 30,
        // resizeMode: 'stretch',
       
    },
    ImageStyle1: {
        marginLeft:"5%",
        height: "40%",
        width: "90%",
        // resizeMode: 'stretch',
       
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
      shadow:{
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation: 3,
      }






})