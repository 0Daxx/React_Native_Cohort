import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { useLocalSearchParams } from '@/.expo/types/router'
// import { useLocalSearchParams } from '@/.expo/types/router'
import { useLocalSearchParams } from 'expo-router'

const SubTopic = () => {
  const { topicName, subTopic } = useLocalSearchParams()
  return (
    <View>
      <Text>SubTopic</Text>
      <Text>{topicName}</Text>
      <Text>{subTopic}</Text>
    </View>
  )
}

export default SubTopic

const styles = StyleSheet.create({})