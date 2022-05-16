import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Image,Button } from 'react-native';



export const Login=({navigation})=> {
    return (
    <View style={styles.container}>
      <View style={styles.logincontainer}>
    <Text style={styles.heading}>Ai <Text style={{color:'#00A4F9'}}>Trainer</Text></Text>
    <Text style={styles.logintext  } >Welcome!</Text>
    <Text style={styles.logintext1} >Sign into Your Account</Text>
<View>

<View style={styles.inputView}>
     <TextInput placeholder="EmailID" placeholderTextColor="black" style={styles.textInput} /> 
     <Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/gmail.png")}/>
  </View>
  <View style={styles.inputView}>
     <TextInput placeholder="Password" placeholderTextColor="black"  style={styles.textInput}/>
     <Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/eye.png")}/>
  </View>
    <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.navigate('Help')} >
      <Text style={{fontSize:25,color:"white"}}>Login</Text>
    </TouchableOpacity>

   
  
    {/* <Text style={styles.text}>Dont't Have an Account?   
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
      >
      <Text style={{color:"blue" ,fontFamily:"Faustina",}} >Signup</Text>
      </TouchableOpacity></Text> */}

    
  </View>
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


textInput:{
  height: 40,
  fontFamily:"Faustina",
  padding: 10,
  marginLeft: 20,
  width: "100%",
  fontSize:15,
  borderBottomColor: '#00A4F9',
  borderBottomWidth: 1,
},

text:{
  marginTop:40,
  marginLeft:"5%",
  fontSize:20,
  fontFamily:"Faustina",
},

logincontainer:{
justifyContent: "center",

},

heading:{
fontSize:40,
marginLeft: "30%",
justifyContent:"center",
flexDirection: 'column',
fontFamily:"Faustina",
alignItems:'center',
fontWeight:"bold",

},
logintext:{
  marginTop:"10%",
marginBottom:40,
marginLeft:"30%",
marginRight:90,
fontSize:35,
flexDirection: 'column',
fontFamily:"Faustina",

},

logintext1:{
marginLeft:120,
marginRight:20,
marginBottom:50,
fontSize:20,
alignItems:"center",
justifyContent:"center",
fontFamily:"Faustina",
},
inputView: {
  flexDirection: 'row',
  justifyContent:"center",
borderColor:"blue",
borderRadius: 10,
borderColor:"black",
borderEndColor:"black",
// backgroundColor:"#CECECE",
width: "90%",
height: "15%",
marginLeft:"5%",
marginBottom: "10%",
alignItems: "center",
},

loginbutton:{

width: "90%",
marginLeft:"5%",
borderRadius: 42,
height: "15%",
alignItems: "center",
justifyContent: "center",
marginTop:"10%",
backgroundColor: "#00A4F9",
shadowColor: '#00A4F9',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 9,  
        elevation: 6
    
},
ImageStyle: {
  height: 25,
  width: 25,
 
}

 }
  );
