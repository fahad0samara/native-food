import { useState } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
  useColorModeValue,
} from 'native-base'
import Card from './Card'

const FirstRoute = () => (
  <Center flex={1} my="4">
    This is Tab 1
  </Center>
)

const SecondRoute = () => (
  <Center flex={1} my="4">
 <Card/>
  </Center>
)

const ThirdRoute = () => (
  <Center flex={1} my="4">
    This is Tab 3
  </Center>
)

const FourthRoute = () => (
  <Center flex={1} my="4">
    This is Tab 4{' '}
  </Center>
)

const initialLayout = {
  width: Dimensions.get('window').width,
}
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
})

const Tab = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {
      key: 'first',
      title: 'Tab 1',
    },
    {
      key: 'second',
      title: 'Tab 2',
    },
    {
      key: 'third',
      title: 'Tab 3',
    },
    {
      key: 'fourth',
      title: 'Tab 4',
    },
    {
      key: 'fourth',
      title: 'Tab 5',
    },
     {
      key: 'fourth',
      title: 'Tab 5',
    },
  
    
  ])

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i)
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5,
            ),
          })
          const color =
            index === i
              ? useColorModeValue('#000', '#e5e5e5')
              : useColorModeValue('#1f2937', '#a1a1aa')
          const borderColor =
            index === i
              ? 'cyan.500'
              : useColorModeValue('coolGray.200', 'gray.400')
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"
            >
              <Pressable
                onPress={() => {
                  console.log(i)
                  setIndex(i)
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
             
              </Pressable>
            </Box>
          )
        })}
      </Box>
    )
  }

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
 
      onIndexChange={setIndex}

      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  )
}
export default Tab
