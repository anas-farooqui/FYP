import React from 'react';
import { StyleSheet, Text, View ,Image,ImageBackground,TouchableOpacity,TextInput,Button } from 'react-native';



export const Screen1=({navigation})=> {

    return (
        <View style={styles.container}>
      
            <ImageBackground source={require("./assets/main_screen.jpg")} style={{flex:1}}>
                <Text style={styles.heading}>Ai Trainer</Text>

                <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.navigate('Plan')}>
                     <Text style={{fontSize:25,color:"white",fontFamily:"Faustina",}}>Admin</Text>
                     </TouchableOpacity>

                     {/* onPress={() => alert("This is Clicked")} */}

                     <TouchableOpacity style={styles.loginbutton1} onPress={() => navigation.navigate('Login')} >
                     <Text style={{fontSize:25,color:"white",fontFamily:"Faustina",}}>Login</Text>
                     </TouchableOpacity>




            </ImageBackground>
            </View>
            


    );}




    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent:"center",
        backgroundColor: 'white',
       
        },


        heading:{
            fontSize:40,
            color:"white",
            marginLeft: "30%",
            justifyContent:"center",
            flexDirection: 'column',
            fontFamily:"Faustina",
            alignItems:'center',
            fontWeight:"bold"
            
            },
            loginbutton:{

                width: "90%",
                marginLeft:"5%",
                borderRadius: 42,
                height: "5%",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"90%",
                backgroundColor: "#00A4F9",
                shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,  
        elevation: 6
    
                },
                loginbutton1:{

                    width: "90%",
                    marginLeft:"5%",
                    borderRadius: 42,
                    height: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop:"10%",
                    backgroundColor: "#00A4F9",
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 10,  
                    elevation: 6
                    },
    })      