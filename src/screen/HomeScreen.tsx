import { View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Avatar,
  Box,
  Text,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
  VStack,
  Button,
} from 'native-base'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import Card from '../compents/Card'
import Menu from '../Navgition/NavMenu/Menu'





const HomeScreen = ({ navigation }) => {
   
  return (
    <SafeAreaView>
       <ScrollView>
      <Box>
        <HStack alignItems="center">
          <VStack ml="5">
            <Text>welcome</Text>
            <Heading>Fahad Samara</Heading>
          </VStack>
          <Box justifyContent="center" ml="40">
            <Avatar
              bg="green.500"
              source={{
                uri: 'https://avatars.githubusercontent.com/u/90055525?v=4',
              }}
            ></Avatar>
          </Box>
        </HStack>
        <Stack alignSelf="center" mt="10">
          <HStack space="2">
            <Input
              placeholder="Search your favorite burger"
              placeholderTextColor="black"
              width="80%"
              borderColor="black"
              borderWidth="2"
              borderRadius="12"
              py="3"
              px="1"
              fontSize="14"
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="9"
                  color="gray.400"
                  as={<MaterialIcons name="search" />}
                />
              }
            />

            <IconButton
              colorScheme="green"
              variant="solid"
              _icon={{
                as: MaterialIcons,
                name: 'tune',
              }}
            />
          </HStack>
        </Stack>
      </Box>

      <Card />
       <HStack mt="7" mx={4} space="48" alignItems="center">
          <Text fontSize="xl" bold>
            Our Server{' '}
          </Text>
          <Text fontSize="lg" color='green.500'>See More </Text>
      </HStack>
     
      <Menu/>
  </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
