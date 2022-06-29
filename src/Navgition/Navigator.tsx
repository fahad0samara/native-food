import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homepag from '../screen/Homepag'

import TabNavigation from './TabNavigation'
import Details from './NavMenu/Details'

const Stack = createNativeStackNavigator()
export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Homepag} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
       <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}
