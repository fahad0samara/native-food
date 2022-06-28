

import { ImageBackground, Pressable } from 'react-native'

import React from 'react'
import { Box, Button, Heading, Icon, Text, View } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const Homepag = ({ navigation }) => {
  return (
    <Box>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
        }}
        source={{
          uri:
            'https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-french-fries-dark-background_140725-89731.jpg?t=st=1656120509~exp=1656121109~hmac=ba953ff7d1ce454108c4d5292d6e69c9ef68eb3f8a6d69af91cc583ffdc09e5f&w=826',
        }}
      >
        <Box alignItems="center" position="absolute" bottom={3}>
          <Pressable>
            <Box
              opacity="75"
              w="100%"
              borderColor="black"
              shadow="9"
              borderWidth="4"
              bg="black"
              mx="0"
              rounded="xl"
            >
              <Text
                bold
                color="white"
                ml="8"
                opacity="100"
                mt="3"
                fontWeight="black"
                fontSize="3xl"
              >
                Delicious And Easy Food to Make For You
              </Text>
              <Text mt="2" fontSize="lg" ml="5" color="white" italic>
                we provide several food menus that are easy to process and paste
                wite good taste
              </Text>

              <Button
                onPress={() => {
                  navigation.navigate('TabNavigation')
                }}
                width="90%"
                bg="green.500"
                rounded="2xl"
                ml="8"
                mt={4}
                endIcon={
                  <Icon
                    as={AntDesign}
                    name="arrowright"
                    mt="2"
                    size="3xl"
                    ml="2"
                    color="white"
                  />
                }
              >
                <Text fontSize="3xl"> Get Started</Text>
              </Button>
            </Box>
          </Pressable>
        </Box>
      </ImageBackground>
    </Box>
  )
}

export default Homepag
