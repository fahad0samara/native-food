import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Stack,
  VStack,
} from 'native-base'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
const Card = () => {
  const [Data, setData] = React.useState([])

  const fetchData = async () => {
    try {
      const resp = await fetch(
        'https://my-app-shopping.herokuapp.com/food_burger',
      )

      const data = await resp.json()
      console.log('====================================')
      console.log(data)
      console.log('====================================')

      setData(data)
    } catch (error) {
      console.log('====================================')
      console.log(error)
      console.log('====================================')
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const renderItem = ({ item }) => {
    return (
      <VStack mx="3" my="3" rounded="lg" bg="gray.100" p="4" shadow="9">
        <Box>
          <Image
         
            source={{ uri: item.img }}
            style={{
              width: 180,
              height: 170,
              borderRadius: 10,
            }}
          />
          <Heading size="xl">{item.title}</Heading>
          <Text  style={{
              color: 'white',
            
         margin:5
,              borderRadius: 10
            
                     
                    }}>{item.type}</Text>
        </Box>
        <HStack space={20}>
          <VStack>
              
            <Heading size="lg" mt="2">
            {item.price} $
          </Heading>
         
          </VStack>
          <TouchableOpacity >
            <IconButton
              style={{
             
              backgroundColor: 'green',

        
            
                     
                    }}
              rounded="lg"
             
              variant="solid"
              _icon={{
                as: AntDesign,
                name: 'shoppingcart',
                size: '3xl',
              }}
            />
          </TouchableOpacity>
        </HStack>
      </VStack>
    )
  }
  return (
    <HStack mt="4">
      {Data && (
        <FlatList
          horizontal={true}
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </HStack>
  )
}

export default Card
