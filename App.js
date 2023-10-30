import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import JoinScreen from './src/screens/JoinScreen/JoinScreen';
import Navigation from './src/navigation';




export default function App() {
  return (

    <View style={styles.container}>
      {/* <SignUpScreen /> */}
      {/* <JoinScreen /> */}
      
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
