import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/Screen/Login/Login';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}
const styles = StyleSheet.create({
  // background: rgb(2,0,36);
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E9EBEB',
  },
  })

export default App;
