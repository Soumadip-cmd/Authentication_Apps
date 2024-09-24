// web-ClientId:1035545013004-p0tlf28nbm8847ivn29dr1r6cio30r7n.apps.googleusercontent.com
// android-ClientId:1035545013004-etpoa0p6t8be3uflcolq1g7jjd84fuo4.apps.googleusercontent.com
// ios-ClientId:1035545013004-m8vqnen4o8ts8b3tnevke5bhkesclm9l.apps.googleusercontent.com

import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import * as Google from 'expo-auth-session/providers/google'
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


WebBrowser.maybeCompleteAuthSession()

export default function App() {
  const [userInfo,sretUserInfo]=React.useState(null)
  const [request,response,promptAsync]=Google.useAuthRequest({
    webClientId:"1035545013004-p0tlf28nbm8847ivn29dr1r6cio30r7n.apps.googleusercontent.com",
    androidClientId:"1035545013004-etpoa0p6t8be3uflcolq1g7jjd84fuo4.apps.googleusercontent.com",
    iosClientId:"1035545013004-m8vqnen4o8ts8b3tnevke5bhkesclm9l.apps.googleusercontent.com",
  })
  return (
    <View style={styles.container}>
      <Text>Auth Verification</Text>
      <Button title='sign in with google' onPress={promptAsync}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
