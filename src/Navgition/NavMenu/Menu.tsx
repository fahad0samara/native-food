import { View, Text } from 'react-native'
import React from 'react'
import All from './All'
import Beef from './Beef'
import Chicken from './Chicken'
import Drink from './Drink'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab =createBottomTabNavigator()
const Menu = () => {
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
        name="All"
        component={All}
       
      />

     
    </Tab.Navigator>
  )
}

  


export default Menu
