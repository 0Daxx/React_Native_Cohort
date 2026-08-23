import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { useThemeStyles } from '../hooks/useThemeStyles';

export default function OnboardScreen() {
  const { theme, scale, globalStyles } = useThemeStyles();

  // Temporary mock structure for visual representation
  const mockRestaurants = [{ id: '1', name: 'Burger Hub', price: '$$' }, { id: '2', name: 'Pizza Kitchen', price: '$$$' }];

  return (
    <ScrollView style={[globalStyles.container, { backgroundColor: theme.background }]}>
      {/* Top Banner */}
      <View style={[styles.deliveryBanner, { backgroundColor: theme.primary, borderRadius: scale(12), padding: scale(16) }]}>
        <Text style={[globalStyles.buttonText, { fontSize: scale(18) }]}>Free Delivery Weekend!</Text>
        <Text style={{ color: '#FFFFFF', opacity: 0.8, fontSize: scale(12) }}>On orders above $20</Text>
      </View>

      <Text style={[globalStyles.title, { marginTop: scale(24), fontSize: scale(18) }]}>Popular Restaurants</Text>
      
      {mockRestaurants.map((item) => (
        <TouchableOpacity 
          key={item.id} 
          style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border, padding: scale(16), borderRadius: scale(12), marginVertical: scale(8) }]}
        >
          <View style={styles.cardHeader}>
            <Text style={{ color: theme.text, fontSize: scale(16), fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ color: theme.green, fontWeight: '600' }}>{item.price}</Text>
          </View>
          <Text style={[globalStyles.body, { marginTop: scale(4) }]}>Fast Food • Burgers • 25-35 mins</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  deliveryBanner: { width: '100%' },
  card: { borderWidth: 1, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
});