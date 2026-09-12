import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';

// If you are using React Navigation, type your navigation prop accordingly
interface LogoutScreenProps {
  navigation: any; 
}

export default function LogoutScreen({ navigation }: LogoutScreenProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      // 1. Simulate an API call or clearing storage (e.g., AsyncStorage.clear() or SecureStore)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 2. Clear your global auth state here (e.g., Redux, Zustand, or React Context)
      console.log('User logged out successfully');

      // 3. Navigate to the Login or Auth screen
      // If using a switch navigator or conditional rendering based on token, this might happen automatically.
      Alert.alert('Success', 'You have been logged out.', [
        { text: 'OK', onPress: () => navigation.replace('Login') }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong during logout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out of your account?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log Out', style: 'destructive', onPress: handleLogout },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF3B30" />
          <Text style={styles.loadingText}>Logging you out safely...</Text>
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <Text style={styles.title}>See You Soon!</Text>
          <Text style={styles.subtitle}>
            You can always log back in to access your data and preferences.
          </Text>

          <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.cancelButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Stay Logged In</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 24,
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  logoutButton: {
    backgroundColor: '#FF3B30', // Destructive Red
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#007AFF', // Standard iOS Blue
    fontSize: 16,
    fontWeight: '600',
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#8E8E93',
  },
});