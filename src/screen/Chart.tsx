import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'
import { Categories, COLOURS } from '../database/items'



const Chart = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
            position: 'relative',
          }}
        >
          <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
          <Image
            source={require('../database/images/background.png')}
            style={{ position: 'absolute', top: 0, left: -100 }}
          />

          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLOURS.black,
            }}
          >
            your card
          </Text>
        </View>

          
        
      </ScrollView>
    </View>
  )
}

export default Chart
