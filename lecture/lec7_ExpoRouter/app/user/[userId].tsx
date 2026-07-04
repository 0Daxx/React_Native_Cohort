import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useLocalSearchParams } from 'expo-router'

const UserIdScreen = () => {
  const { userId } = useLocalSearchParams()
  return (
    <View>
      <Text>UserIdScreen</Text>
      <Text>{userId}</Text>
    </View>
  )
}

export default UserIdScreen

const styles = StyleSheet.create({})