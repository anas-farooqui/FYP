import React from 'react';
import { StyleSheet,ImageBackground,Image, Text, View ,TouchableOpacity,TextInput,Button } from 'react-native';


export const Gender= ({navigation}) => {
    return (
      <View style={styles.container}>
          <Text style={styles.heading}>Ai <Text style={{color:'#00A4F9'}}>Trainer</Text></Text>

       <TouchableOpacity>
       <Image style={styles.image} source={require("C:/Users/hp/Desktop/male.PNG")}>
       </Image>
       </TouchableOpacity>
       <TouchableOpacity>
       <Image style={styles.image} source={require("C:/Users/hp/Desktop/female.jpg")}>
       </Image>
       </TouchableOpacity>


      
       <view>
        <Button title="Next "  style={styles.nextbutton}  onPress={() => navigation.navigate('Home')}/>
      </view>
       
      
        
      </View>
    );
  }
  




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    heading:{
        fontSize:45,
        marginBottom:10,
        marginLeft:20,
        marginRight:30,
        fontStyle:"Forte",
        alignItems:'center'
        
        },
      
    image: {
      width: 60,
      height: 100,
      marginTop:30
    //   resizeMode: 'stretch',
    },
    nextbutton:{
        // width: "40%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        // backgroundColor: "#00A4F9",
        }



  });
  
