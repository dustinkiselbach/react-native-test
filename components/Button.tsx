import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { green } from '../styles/colors'

export const Button: React.FC = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Next</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: green,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})
