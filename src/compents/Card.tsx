import { Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {
  Box,
  Button,
  Center,
  View,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Stack,
  Tooltip,
  VStack,
} from 'native-base'
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const Card = () => {
  const [Data, setData] = React.useState([])
  const navigation = useNavigation();
  const Datacat = (str, num) => {
    if (str.length > num) {
      return str.substring(0, num) + '...'
    }
    return str
  }
  const fetchData = async () => {
    try {
      const resp = await fetch(
        'https://my-app-shopping.herokuapp.com/food_burger',
      )

      const data = await resp.json()

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
  const renderItem = ({Data,item} ) => {
    return (
       
      <VStack
        style={{
          margin: 5,
          backgroundColor: 'white',
          borderRadius: 20,
          elevation: 4,
        }}
      >
        <TouchableOpacity
          
        >
        <Box>
          <Image
            source={{ uri: item.img }}
            style={{
              width: 200,
              height: 170,
              borderRadius: 5,
            }}
          />
          <Heading size="lg" color="black" ml="3">
            {Datacat(item.title, 15) + '...'}
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
            <Heading color="black" size="lg" mt="2">
              {item.price}$
            </Heading>
          </VStack>

          <View
            bg="green.500"
            style={{
              width: 85,
              height: 50,

              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Entypo name="plus" style={{ fontSize: 20, color: 'white' }} />
          </View>
          </HStack>
            </TouchableOpacity>
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
function substring(title: any, arg1: number) {
  throw new Error('Function not implemented.')
}
