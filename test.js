import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,TextInput,Button } from 'react-native';


export const Test=({navigation})=> {
    return (
        <View style={styles.container}>
           
     
            <Text style={styles.text}>Workout  Plan</Text>

            <View style={styles.mainBox}> 
            <View style={styles.box}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold",fontSize:25}}>Days</Text>
          </View>

          <View style={styles.heading}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold",fontSize:25}}>Workout Split</Text>
          </View>
          </View>

            <View style={styles.mainBox}> 
            <View style={styles.box}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Monday</Text>
          </View>
          <View style={styles.heading}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Arms</Text>
          </View>
          
          </View>
          <View style={styles.mainBox}> 
            <View style={styles.box}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Tuesday</Text>
          </View>
         
          <View style={styles.heading}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Shoulders and Traps</Text>
          </View>
          </View>

          <View style={styles.mainBox}> 
            <View style={styles.box}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Wednesday</Text>
          </View>
         
          <View style={styles.heading}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Cardio and ABS</Text>
          </View>
          </View>

          <View style={styles.mainBox}> 
            <View style={styles.box}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Thursday</Text>
          </View>
         
          <View style={styles.heading}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Chest and Triceps</Text>
          </View>
          </View>

          <View style={styles.mainBox}> 
            <View style={styles.box}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Friday</Text>
          </View>
         
          <View style={styles.heading}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Back and Biceps</Text>
          </View>
          </View>

          <View style={styles.mainBox}> 
            <View style={styles.box}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Saturday</Text>
          </View>
         
          <View style={styles.heading}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Legs</Text>
          </View>
          </View>

          <View style={styles.mainBox}> 
            <View style={styles.box}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>Sunday</Text>
          </View>
         
          <View style={styles.heading}> 
            <Text style={{fontFamily:"Faustina",color:"white",fontWeight:"bold"}}>OFF</Text>
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
      backgroundColor: 'grey',
    
    },
    mainBox:{
        flexWrap:"wrap",
        flexDirection:"row",
        // justifyContent:"center",
      //   alignItems:"flex-start",
      backgroundColor: 'grey',
    },
    heading:{
      width:240,
      height:50,
      borderWidth:1,
      backgroundColor:"#00A4F9",
      borderColor:"black",
      alignItems:"center",
      justifyContent:"center"
    },
    box:{
        width:130,
        height:50,
        borderWidth:1,
        // marginTop:10,
        // marginLeft:10,
        // marginBottom:10,
        backgroundColor:"#00A4F9",
        borderColor:"black",
        justifyContent:"center",
        alignItems:"center"

    },
    text:{
        marginTop:10,
        fontSize:25,
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















































































// import React,{useEffect,useState,Component} from 'react';
// import {SafeAreaView, Text,View} from 'react-native';
// import axios from "axios";
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
// import BootstrapTable from 'react-bootstrap-table-next';
// import { FlatList } from 'native-base';




// const data = [
//   {id: 1, name: 'Gob', value: '2'},
//   {id: 2, name: 'Buster', value: '5'},
//   {id: 3, name: 'George Michael', value: '4'}
// ];
// const columns = [{
//   dataField: 'id',
//   text: 'Product ID'
// }, {
//   dataField: 'name',
//   text: 'Product Name'
// }, {
//   dataField: 'value',
//   text: 'Product value'
// }];


// const Index = ({...props}) => {
//     const [arr,setarr]=useState([])
//     useEffect(()=>{
//       // http://192.168.124.92:8000/api/users/
//         axios.get("https://jsonplaceholder.typicode.com/users ").then(res=>{
//             console.log("res==>",res.data);
//             setarr(res.data)
//             })
//     },[])
// const Index = ()=> {
//   return (
//     <View style={StyleSheet.body}>
      
//       <View style={StyleSheet.listWrapper}>
//         <Text styles={styles.row}>Anas  Anas  Anas</Text>
//         <Text styles={styles.row}>@ @ @</Text>
//         <Text styles={styles.row}>123   123   123</Text>
//       </View>
     

    
//     </View>


//   );
// }
// export default Index; 

// const styles=StyleSheet.create({

//   body:{
//     background:'#fff',
//     flex:1,
//   },
//   listWrapper:{
//     flexDirection:'row',
//     flexWrap:'wrap',
//     borderBpttomWidth:5,
//   },
//   row:{
//     backgroundColor:'#fff',
//     flex:1,
//     fontSize:13,
//     paddingHorizontal:2,
//     paddingVertical:10
//   }



// })




{/* 
        {
        arr.length > 0 ? (arr.map(item=><View>
          <Text style={{ fontSize:25 ,      justifyContent:"center",
      flexDirection: 'column',
      fontFamily:"Faustina",
      alignItems:'center',
      fontWeight:"bold",
      marginBottom:"5%"
      }}>{item.name}</Text>
        <Text style={{ fontSize:20,      justifyContent:"center",
      flexDirection: 'row',
      fontFamily:"Faustina",
      alignItems:'center',
      fontWeight:"bold",
      color:"blue",
      marginBottom:"5%"
      }}>{item.email}</Text>
        </View>) ) :null
      }
      <Text>Sign In</Text> */}
    {/* </SafeAreaView>
  );
};
export default Index; */}


{/* // const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   justifyContent:"center",
//   // backgroundColor: 'white',
 
//   // },


//   data:{
      // fontSize:5,
 
//       // color:"white",
//       // marginLeft: "30%",
      // justifyContent:"center",
      // flexDirection: 'column',
      // fontFamily:"Faustina",
      // alignItems:'center',
      // fontWeight:"bold"
      
//       },
// })       */}