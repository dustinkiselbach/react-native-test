import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { background, green, lightGrey } from './styles/colors'

import { Button } from './components/Button'
import { Digits } from './components/Digits'
import { FormHeader } from './components/FormHeader'

export default function App () {
  return (
    <SafeAreaView style={{ backgroundColor: background, flex: 1 }}>
      <FormHeader />
      <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
        <View>
          <Text style={{ fontSize: 28, fontWeight: '500', marginBottom: 8 }}>
            Verify Email
          </Text>
          <Text style={{ color: '#585553' }}>
            Please enter the code sent to
          </Text>
          <Text style={{ color: '#585553' }}>robby@internet.com.</Text>
        </View>
        <Digits />
        <View style={styles.bottom}>
          <Text style={[styles.secondaryText, { marginBottom: 2 }]}>
            Didn't receive your code? <Text style={styles.link}>Resend</Text>
          </Text>
          <Text style={[styles.secondaryText, { marginBottom: 30 }]}>
            Enter your email incorrectly?{' '}
            <Text style={styles.link}>Update Email</Text>
          </Text>
          <Button />
        </View>
        <StatusBar style='auto' />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 44,
    flex: 1
  },
  secondaryText: {
    color: lightGrey
  },
  link: {
    color: green
  },
  bottom: {
    marginTop: 'auto',
    marginBottom: 30
  }
})
