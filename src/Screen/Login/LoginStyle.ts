import { StyleSheet, Dimensions } from "react-native"
const { width, height } = Dimensions.get('window');
const LoginStyle = StyleSheet.create({
   container:{
    backgroundColor:"#fff",
    width:width,
    justifyContent:"space-around",
    paddingLeft:10,
    paddingRight:10
    
   },
   upperSection:{
    width:width,
    height:"20%"
   },
   heading:{
    fontSize:30,
    fontWeight:"900",
    color:"#000"
   },
   upperText:{
    fontSize:15,
    fontWeight:"500",
    color:"gray"
   },
   loginSection:{
      width:width-20,
      height:"50%"
   },
   btn:{
    backgroundColor:"red",
    color:"#fff",
    marginTop:20
   },
   textInput:{
    margin:10,
   }
  })
  export default LoginStyle