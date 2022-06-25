import { Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/HomeScreen'
import Chart from '../screen/Chart'
import { Entypo,FontAwesome ,MaterialCommunityIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
  return (
      <Tab.Navigator
          
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarAccessibilityLabel: 'accessibility',
 
        

            
      }}
      
    >
      <Tab.Screen name="Hom" component={HomeScreen} 
           options={{
          tabBarIcon: ({ }) => (
            <FontAwesome name="home" size={24} color="red" />
          ),
        }}
      
          />
      <Tab.Screen name="Chart" component={Chart} />
    </Tab.Navigator>
  )
}

export default TabNavigation
