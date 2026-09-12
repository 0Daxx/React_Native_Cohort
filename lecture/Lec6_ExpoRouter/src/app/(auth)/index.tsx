import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router";
// import { Button } from 'expo-router/build/react-navigation';
const index = () => {
  return (
    <View>
      <Text>index</Text>

      {/* <Button> */}
      <Link style={{ margin:10 , padding: 10 , borderWidth: 1 , borderColor: 'black' }} href="/(auth)/register">Register</Link>
      {/* </Button> */}
      {/* <Link href="/(auth)/login">Login</Link> */}
    </View>
  )
}

export default index

const styles = StyleSheet.create({})