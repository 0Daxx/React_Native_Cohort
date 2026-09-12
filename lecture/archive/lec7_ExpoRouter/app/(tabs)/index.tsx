import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>index</Text>

      {/* go to userId */}
      {/* <Text>Go to userId</Text> */}
      <Link href="/user/1" style={{color:'red' , fontSize:20 , }} > Go to userId </Link>
      <Link href="/docs/react/introduction" style={{color:'red' , fontSize:20 , }} > Go to REact Docs </Link>
      <Link href="/docs/react" style={{color:'red' , fontSize:20 , }} > Go to REact </Link>
      <Link href="/product/p1/details/intro/summary" style={{color:'blue' , fontSize:20 , }} > Go to Product  </Link>
      {/* <Button title="Go to userId" onPress={() => {}} /> */}
    </View>
  )
}

export default index

const styles = StyleSheet.create({})