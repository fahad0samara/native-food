import React from 'react'
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons'
import HomeScreen from '../screen/HomeScreen'
import Chart from '../screen/Chart'

import Notifications from '../screen/Notifications'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 12,
          color: '#fff',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        },

        headerShown: false,
        tabBarStyle: {
          height: 65,
          backgroundColor: '#000',
          borderTopWidth: 0,
          shadowColor: '#000',

          shadowOpacity: 0.5,
          shadowRadius: 0.5,
          elevation: 5,

          borderBottomColor: '#000',
          borderBottomWidth: 1,

          justifyContent: 'center',
          alignItems: 'center',

          paddingVertical: 20,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              component={Ionicons}
              size={focused ? 30 : 20}
              color={focused ? '#00a680' : 'red'}
            />
          ), // icon for tab bar  (default is icon name)
        }}
      />

      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="shoppingcart"
              size={focused ? 30 : 20}
              color={focused ? '#00a680' : 'red'}
            />
          ), // icon for tab bar (default is icon name)
          // color for tab bar (default is color for tab bar)
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="notifications-outline"
              size={focused ? 30 : 20}
              color={focused ? '#00a680' : 'red'}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="history"
              size={focused ? 30 : 20}
              color={focused ? '#00a680' : 'red'}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  )
}

export default TabNavigation
