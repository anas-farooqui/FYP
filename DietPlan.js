import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,TextInput,Button,Dimensions } from 'react-native';

const {window,height}=Dimensions.get("window")

export const DietPlan=({navigation})=> {
    return (
    <View style={styles.container}>
    <View style={styles.logincontainer}>
    <Text style={styles.heading}>Ai <Text style={{color:'#00A4F9'}}>Trainer</Text></Text>
    
    <Text style={styles.logintext} >Diet Plan!</Text>
<View>
<View style={styles.inputView}>
     <TextInput placeholder="Age" placeholderTextColor="black"  style={styles.textInput}/>
     <Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/user.png")}/>
  </View>

<View style={styles.inputView}>
     <TextInput placeholder="Gender" placeholderTextColor="black"style={styles.textInput}/>
     <Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/gmail.png")}/>
  </View>
  <View style={styles.inputView}>
     <TextInput placeholder="Weight" placeholderTextColor="black" style={styles.textInput}/>
     <Image style={styles.ImageStyle} source={require("C:/React_Native/fyp/assets/eye.png")}/>
  </View>

  
  <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.navigate('Home')}  >
      <Text style={{fontSize:25,color:"white",fontFamily:"Faustina",}}>Calculate</Text>
    </TouchableOpacity>

 {/* <Button title="Signup" style={styles.loginbutton}  onPress={() => navigation.navigate('Login')} /> */}



     
    

    
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
    padding: 10,
    marginLeft: 20,
    width: "100%",
    fontSize:15,
    borderBottomColor: '#00A4F9',
    borderBottomWidth: 1,
    
  },

homeButton:{
    width: "30%",
borderRadius: 20,
height: 20,
alignItems: "center",
justifyContent: "center",
marginTop: 20,
backgroundColor: "red",


},

text:{
  marginTop:40,
  marginLeft:"5%",
  fontSize:20,
  fontFamily:"Faustina",
},

heading:{
  fontSize:40,
  marginLeft: "30%",
  justifyContent:"center",
  flexDirection: 'column',
  fontFamily:"Faustina",
  alignItems:'center',
  fontWeight:"bold"
  
  },
  logintext:{
    marginTop:"10%",
  marginBottom:50,
  marginLeft:"28%",
  marginRight:90,
  fontSize:35,
  flexDirection: 'column',
  fontFamily:"Faustina",
  
  },
  

  logintext1:{
    marginLeft:80,
    marginRight:80,
    marginBottom:70,
    fontSize:20,
    fontFamily:"Faustina",
    },
    inputView: {
      flexDirection: 'row',
      justifyContent:"center",
    borderColor:"blue",
    borderRadius: 10,
    width: "90%",
    height: "10%",
    marginLeft:"5%",
    marginBottom: "15%",
    alignItems: "center",
    },
    
    loginbutton:{
    
    width: "90%",
    marginLeft:"5%",
    borderRadius: 42,
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"1%",
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
