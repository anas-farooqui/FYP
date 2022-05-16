import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Button } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { useState } from "react";




export const Help=({navigation})=> {
  const [current, setCurrent] = useState(0);
    return (
    <View style={styles.container}>
      <View style={styles.logincontainer}>

    <Text style={styles.heading}>Ai <Text style={{color:'#00A4F9'}}>Trainer</Text></Text>
    <Text style={styles.logintext1 } >Let us know how we can help you ?</Text>


    <View style={{ marginTop: 50 }} >
      <RadioButtonGroup
        containerStyle={{ marginBottom: 20 }}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground="#00A4F9"
      >
        
        <RadioButtonItem  style={{marginBottom:10,marginTop:20}} value='0' label={<Text style={{marginBottom:10,marginLeft:50,fontSize:25,fontFamily:"Faustina", shadowColor: 'black',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.4,
                    // shadowRadius: 1,  
                    elevation: 9}}>Weight Loss</Text>}/>
       
        <RadioButtonItem  style={{marginBottom:10,marginTop:20,elevation:5}} value='1' label={<Text style={{marginBottom:10,marginLeft:50,fontSize:25,fontFamily:"Faustina",}}>Weight Gain</Text>} />
     
        <RadioButtonItem  style={{marginBottom:10,marginTop:20}} value='2' label={<Text style={{marginBottom:10,marginLeft:50,fontSize:25,fontFamily:"Faustina",}}>Height</Text>} />
       
        <RadioButtonItem  style={{marginBottom:10,marginTop:20}} value='3' label={<Text style={{marginBottom:10,marginLeft:50,fontSize:25,fontFamily:"Faustina",}}>Weight</Text>} />
        
      </RadioButtonGroup>
    </View>



    
    <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.navigate('DietPlan')} >
      <Text style={{fontSize:25,color:"white",fontFamily:"Faustina",}}>Get Started</Text>
    </TouchableOpacity>




     {/* <TouchableOpacity>
       <Button style={styles.button} title="Get Started " color="#00A4F9" onPress={() => navigation.navigate('Signup')} />
     </TouchableOpacity> */}
    
     </View> 
  </View> 

);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
  backgroundColor: 'white',
  justifyContent:"space-between"
  },
  logincontainer:{
    justifyContent: "center",
    alignItems:"center"
    
    },
    radiotext:{
      marginBottom:10,marginLeft:10,fontSize:30,fontFamily:"Faustina",
    },

    box:{
      width:290,
      height:50,
      borderWidth:1,
      marginTop:10,
      marginLeft:20,
      marginBottom:10,
      backgroundColor:"#CECECE",
      borderColor:"grey",
      justifyContent:"space-between",
      alignItems:"center"

  },

  heading:{
    marginTop:"10%",
    fontSize:40,
    marginLeft: "10%",
    justifyContent:"center",
    flexDirection: 'column',
    fontFamily:"Fuatina",
    alignItems:'center',
    fontWeight:"bold"
    },
   
    
    logintext1:{
      marginTop:"10%",
      marginLeft:"5%",
      marginBottom:50,
      fontSize:20,
      alignItems:"center",
      fontFamily:"Faustina",
    },
    loginbutton:{

      width: "90%",
      borderRadius: 42,
      height: "9%",
      alignItems: "center",
      justifyContent: "center",
      marginTop:"20%",
      backgroundColor: "#00A4F9",
      shadowColor: '#00A4F9',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 9,  
        elevation: 6
    
      },
     
  }
  );

  



