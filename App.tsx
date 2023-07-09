import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from '~redux/store'
import colors from '~constants/colors'
import Home from '~modules/Home'
import ButtonMain from '~shared/buttons/ButtonMain'
import Auth from '~modules/Auth'
import { useRedux } from '~hooks/redux'
import Modal from '~shared/modals/Modal'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Layout = () => {
  const Stack = createNativeStackNavigator()
  const { getState } = useRedux()
  const { user } = getState().auth
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          initialRouteName="Auth"
          screenListeners={({ navigation }) => ({
            state: async () => {
              const data = await AsyncStorage?.getItem('user')
              const user = JSON.parse(data ?? '')
              if (user) {
                navigation.navigate('Home')
              } else {
                navigation.navigate('Auth')
              }
            },
          })}
          screenOptions={{
            headerShadowVisible: false,
            headerShown: user?.token ? true : false,
            headerStyle: {
              backgroundColor: colors.lightWhite,
            },
            title: '',
            headerLeft: () => (
              <ButtonMain>
                <Text style={{ fontSize: 18, color: 'white' }}>Пользователь</Text>
              </ButtonMain>
            ),
            headerRight: () => (
              <ButtonMain variant="ORANGE">
                <Text style={{ fontSize: 18, color: 'white' }}>Выйти</Text>
              </ButtonMain>
            ),
          }}
        >
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Modal />
        <Layout />
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightWhite,
    paddingTop: 10,
  },
})

export default App
