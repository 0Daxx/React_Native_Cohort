import { StatusBar } from 'expo-status-bar';
import { Text, View , Pressable , Image ,  } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


import Ionicons from '@expo/vector-icons';


// data , components 


export default function ProgressScreen() {
  return (
    <View style={{ flex: 1 , justifyContent : 'center' , alignItems : 'center' }} >
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

