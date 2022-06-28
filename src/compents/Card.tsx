import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {
  Box,
  Button,
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Stack,
  Tooltip,
  VStack,
} from 'native-base'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'

const Card = () => {
  const [Data, setData] = React.useState([])
  const Datacat = (str, num) => {
       if (str.length > num) {
         return str.substring(0, num) + "...";
       }
       return str;
     }
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
      <VStack
        bgColor='black'
        
      
        mx="3" my="3" rounded="lg" p='2' shadow="9">
        <Box >
          <Image
            source={{ uri: item.img }}
            style={{
              width: 200,
              height: 170,
              borderRadius: 5,
            }}
          />
          <Heading size="lg"  color='white' ml='3'>
{Datacat(item.title, 15)+'...'}

          </Heading>
          <Text
            style={{
              color: 'green',
              fontSize: 20,

              margin: 5,
              borderRadius: 10,
            }}
          >
            {item.type}
          </Text>
        </Box>
        <HStack space={24}>
          <VStack>
            <Heading
              color='white'
            
              size="lg" mt="2">
              {item.price}$
            </Heading>
          </VStack>
         
            <Tooltip label="Click here to read more" openDelay={500}>
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
            </Tooltip>
          
        </HStack>
      </VStack>
    )
  }
  return (
    <HStack mt="4"  >
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
function substring(title: any, arg1: number) {
  throw new Error('Function not implemented.')
}

