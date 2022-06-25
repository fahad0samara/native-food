import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, Box } from 'native-base'
import Navigator from './src/Navgition/Navigator'
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigator />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
