import React from 'react'
import {View, Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from '../screens/HomeScreen'
import NotificationScreen from '../screens/NotificationScreen'
import SearchScreen from '../screens/SearchScreen'
import AccountScreen from '../screens/AccountScreen'
import SettingsScreen from '../screens/SettingsScreen'
import colors from '../utils/colors'

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={focused ? 30 : 25}
              color={focused ? colors.primary : colors.lightDark}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'notifications' : 'notifications-outline'}
              size={focused ? 30 : 25}
              color={focused ? colors.primary : colors.lightDark}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'search' : 'search-outline'}
              size={focused ? 30 : 25}
              color={focused ? colors.primary : colors.lightDark}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              size={focused ? 30 : 25}
              color={focused ? colors.primary : colors.lightDark}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'settings' : 'settings-outline'}
              size={focused ? 30 : 25}
              color={focused ? colors.primary : colors.lightDark}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
