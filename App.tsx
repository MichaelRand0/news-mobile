import { NavigationContainer } from '@react-navigation/native'
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
import { useAuth } from '~hooks/auth'

const Layout = () => {
  const Stack = createNativeStackNavigator()
  const { getState, getActions } = useRedux()
  const { setUser } = getActions()
  const { user } = getState().auth
  const { getAsyncUser, logoutAsync } = useAuth()
  useEffect(() => {
    const setAsyncUser = async () => {
      const userData = await getAsyncUser()
      setUser(userData)
    }
    setAsyncUser()
  }, [])
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerShown: user?.id ? true : false,
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
              <ButtonMain onPress={async () => await logoutAsync()} variant="ORANGE">
                <Text style={{ fontSize: 18, color: 'white' }}>Выйти</Text>
              </ButtonMain>
            ),
          }}
        >
          {user ? (
            <Stack.Screen name="Home" component={Home} />
          ) : (
            <Stack.Screen name="Auth" component={Auth} />
          )}
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
