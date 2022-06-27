import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Box, Heading, HStack, Icon, IconButton, Input, Stack, VStack } from 'native-base'
import { MaterialIcons ,AntDesign} from '@expo/vector-icons'
import Card from '../compents/Card'

const HomeScreen = () => {
  return (
    <SafeAreaView>
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
                uri:
                  'https://avatars.githubusercontent.com/u/90055525?v=4',
              }}
            ></Avatar>
          </Box>
        </HStack>
        <Stack alignSelf="center" mt="10"
      >
          <HStack  space="2">
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
              name: "tune" 
      
            }}
            />
          </HStack>
        </Stack>
       

         
     
               <Card />
    
           
        
      
    
      </Box>
    </SafeAreaView>
  )
}

export default HomeScreen
