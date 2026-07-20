import React, { useEffect } from 'react';
import { syncFromCloud } from './src/utils/storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from './src/theme/colors';
import HomeScreen from './src/screens/HomeScreen';
import TodayScreen from './src/screens/TodayScreen';
import MeScreen from './src/screens/MeScreen';
import ParentScreen from './src/screens/ParentScreen';

const Tab = createBottomTabNavigator();

function TabIcon({ emoji, label, focused }) {
  return (
    <View style={styles.tabIcon}>
      <Text style={styles.tabEmoji}>{emoji}</Text>
      <Text style={[styles.tabLabel, focused && styles.tabLabelActive]}>{label}</Text>
    </View>
  );
}

export default function App() {
  useEffect(() => {
    // Pull latest progress from cloud on launch
    syncFromCloud().then(synced => {
      if (synced) console.log('Progress synced from cloud');
    });
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#060C1A',
            borderTopColor: '#0A3050',
            borderTopWidth: 1,
            height: 90,
            paddingBottom: 12,
            paddingTop: 4,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="🗺️" label="Path" focused={focused} /> }}
        />
        <Tab.Screen
          name="Today"
          component={TodayScreen}
          options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="⚡" label="Train" focused={focused} /> }}
        />
        <Tab.Screen
          name="Me"
          component={MeScreen}
          options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="👁️" label="Sorcerer" focused={focused} /> }}
        />
        <Tab.Screen
          name="Parent"
          component={ParentScreen}
          options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="🏯" label="HQ" focused={focused} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIcon: { alignItems: 'center', paddingTop: 4, width: 70 },
  tabEmoji: { fontSize: 28 },
  tabLabel: { fontSize: 13, fontWeight: '600', color: 'rgba(255,255,255,0.75)', marginTop: 3 },
  tabLabelActive: { fontWeight: '800', color: '#00B4D8' },
});
