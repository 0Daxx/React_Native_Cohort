import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
const ProductDynamicPage = () => {
  const { slug } = useLocalSearchParams()
  return (
    <View>
      <Text>ProductDynamicPage</Text>
      <Text>{  JSON.stringify(slug)   }  </Text>
      <Text>{  Array.isArray(slug) ? slug.join(' / ') : slug }  </Text>
    </View>
  )
}

export default ProductDynamicPage

const styles = StyleSheet.create({})