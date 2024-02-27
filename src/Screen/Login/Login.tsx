import {View,Text } from 'react-native'
import React from 'react'
import LoginStyle from './LoginStyle'
import { TextInput ,Button } from 'react-native-paper';



const Login = () => {
    const [text, setText] = React.useState("");
  return (
    <View style={LoginStyle.container}>
        <View style={LoginStyle.upperSection}>
            <Text style={LoginStyle.heading}>Welcome Back</Text>
            <Text style={LoginStyle.upperText}>Sign in your account</Text>

        </View>
      <View style={LoginStyle.loginSection}>
        <TextInput label="Email" style={LoginStyle.textInput}
      value={text}
      mode="outlined"
      onChangeText={text => setText(text)}  left={
        <TextInput.Icon
          icon="email-outline"
          color="#22C55E"
        />}/>
        <TextInput label="Password" mode="outlined" style={LoginStyle.textInput}
      placeholder="Type something" secureTextEntry right={<TextInput.Icon icon="eye" />}/>

<Button mode="elevated" onPress={() => console.log('Pressed')} style={LoginStyle.btn} textColor='white'>
    Login
  </Button>
      </View>
    </View>
  )
}

export default Login
