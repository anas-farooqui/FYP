import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,TextInput,Button } from 'react-native';


export const Home=({navigation})=> {
    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.text}>Diet Plan</Text>
            <View style={styles.mainBox}>
            <View style={styles.box}><Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/chicken-leg.png")} /><Text style={{fontFamily:"Faustina",}}>Chicken </Text></View>
            <View style={styles.box}><Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/milkshake.png")} /><Text style={{fontFamily:"Faustina",}}>Milk Shake</Text></View>

            </View>
     
            <Text style={styles.text}>Workout Exercise</Text>

            <View style={styles.mainBox}> 
            <TouchableOpacity  onPress={() => navigation.navigate('Exercise')}>
            <View style={styles.box}>
          
                <Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/dumbell.png")} />
                <Text style={{}}>Shoulder Press</Text></View>
                </TouchableOpacity>
            <View style={styles.box}><Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/dumbell.png")} /><Text style={{fontFamily:"Faustina",}}>Pushups</Text></View>
          </View>

          <View style={styles.mainBox}> 
            <View style={styles.box}><Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/dumbell.png")} /><Text style={{fontFamily:"Faustina",}}>Bicep</Text></View>
            <View style={styles.box}><Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/dumbell.png")} /><Text style={{fontFamily:"Faustina",}}>Cool Down</Text></View>
          </View>
          

          </View>



 


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
    mainBox:{
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"center",
      //   alignItems:"flex-start",
      backgroundColor: 'white',
    },
    box:{
        width:150,
        height:150,
        borderWidth:1,
        marginTop:10,
        marginLeft:10,
        marginBottom:10,
        backgroundColor:"#CECECE",
        borderColor:"grey",
        justifyContent:"space-between",
        alignItems:"center"

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
    text:{
        marginTop:10,
        fontSize:20,
        // fontFamily:"Faustina",
        // fontWeight:"bold",
        marginLeft:10
        
    },
    ImageStyle: {
        height: 30,
        width: 30,
        // resizeMode: 'stretch',
       
    }




})