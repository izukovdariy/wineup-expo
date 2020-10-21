import React from 'react'
import { Button, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { TParamList } from 'screens/Auth/types'
import { AUTH_ROUTES } from 'libs/constants/routes'

import styles from './styles'

export type TProps = StackScreenProps<TParamList, AUTH_ROUTES.CONFIRM_AGE>

const ConfirmAgeScreen: React.FC<TProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title='Go to AgeDenied'
        onPress={() => navigation.push(AUTH_ROUTES.AGE_DENIED)}
      />
      <Button
        title='Go to SignIn'
        onPress={() => navigation.navigate(AUTH_ROUTES.SIGN_IN)}
      />
    </View>
  )
}

export default ConfirmAgeScreen
