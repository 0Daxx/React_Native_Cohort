import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Link } from 'expo-router';

const login = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>login</Text>

      <Link href="/(auth)/signup" asChild >
        <Button title="Go to Sign up" />
      </Link>
    </View>
  )
}

export default login

const styles = StyleSheet.create({})