import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Container from '~shared/Container'
import InputMain from '~shared/inputs/InputMain'
import colors from '~constants/colors'
import { Controller, useForm } from 'react-hook-form'
import ButtonMain from '~shared/buttons/ButtonMain'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useQuery } from '~hooks/query'
import { useEndpoint } from '~hooks/endpoint'
import { useModal } from '~hooks/modal'
import { NavigationProp } from '@react-navigation/native'
import { useRedux } from '~hooks/redux'

interface Props {
  navigation: NavigationProp<any>
}

const schema = yup
  .object()
  .shape({
    email: yup.string().email('Неправильный адрес эл. почты').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
  })
  .required()

const Auth = (props: Props) => {
  const { navigation } = props
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { getEndpoint } = useEndpoint()

  const { isLoading, fetchData } = useQuery()
  const { changeContent } = useModal()
  const {getActions} = useRedux()
  const {setUser} = getActions()

  // useEffect(() => {
  //   console.log('isLoading', isLoading)
  // }, [isLoading])

  const onSubmit = async () => {
    const params = {
      email: getValues().email,
      password: getValues().password,
    }

    changeContent({
      type: 'LOADING',
    })

    const data: any = await fetchData(getEndpoint('auth'), params)
    if (data?.success == false) {
      changeContent({
        type: 'ERROR',
        message: data?.errors?.[0],
      })
    } else {
      setUser(data?.user)
      changeContent(null)
      navigation.navigate('Home')
    }
  }
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Авторизация</Text>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputMain
            error={errors.email?.message}
            containerStyle={{ marginBottom: 10 }}
            placeholder="Эл. почта"
            onChangeText={(val) => onChange(val)}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputMain
            error={errors.password?.message}
            containerStyle={{ marginBottom: 20 }}
            placeholder="Пароль"
            onChangeText={(val) => onChange(val)}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <ButtonMain style={{ paddingHorizontal: 50 }} onPress={handleSubmit(onSubmit)}>
        <Text>Войти</Text>
      </ButtonMain>
    </Container>
  )
}

export default Auth

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: '500',
    marginBottom: 20,
  },
})
