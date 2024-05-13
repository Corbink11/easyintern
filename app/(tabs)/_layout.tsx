import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import JobsScreen from './Jobs';  // import Jobs screen
import ProfileScreen from './Profile';
import LoginScreen from './index';
import SupportScreen from './SupportScreen'; //import the Support screen


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Login') {
              iconName = focused ? 'login' : 'login'; 
            } else if (route.name === 'Jobs') {
              iconName = focused ? 'work' : 'work-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#222' }, //dark theme for the tab bar
        })}
      >
        <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Jobs" component={JobsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false } } />
        <Tab.Screen name="Support" component={SupportScreen} options={{
  tabBarIcon: ({ color, size }) => (
    <Icon name="help-outline" size={size} color={color} />
  ),
  headerShown: false
}} />
      </Tab.Navigator>
  );
}

export default MyTabs;