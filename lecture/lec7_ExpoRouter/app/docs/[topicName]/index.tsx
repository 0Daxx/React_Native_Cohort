import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
const TopicName = () => {
  const { topicName } = useLocalSearchParams()
  return (
    <View>
      <Text>TopicName : </Text>
      <Text>{topicName}</Text>

    </View>
  )
}

export default TopicName

const styles = StyleSheet.create({})