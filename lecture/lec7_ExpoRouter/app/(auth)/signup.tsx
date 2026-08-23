import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Link } from 'expo-router';

const signup = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>signup</Text>

      <Link href="/(auth)/login" asChild >
        <Button title="Go to login" />
      </Link>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({})