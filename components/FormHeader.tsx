import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { green, lightGrey, lineColor } from '../styles/colors'

const { width } = Dimensions.get('screen')
const LINE_SIZE = width - 88
const lineParts = new Array(6).fill(0)
const n = lineParts.length

export const FormHeader = () => {
  return (
    <View style={styles.container}>
      <AntDesign
        name='left'
        size={25}
        color={lightGrey}
        style={[styles.icon, { left: 10 }]}
      />
      {lineParts.map((_, idx) => (
        <View
          key={idx}
          style={[
            styles.line,
            {
              marginLeft: idx === 0 ? 44 : 0,
              backgroundColor: idx === 0 ? green : lineColor
            }
          ]}
        />
      ))}

      <AntDesign
        name='questioncircleo'
        size={25}
        color={lightGrey}
        style={[styles.icon, { right: 10 }]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20
  },
  line: {
    width: LINE_SIZE / n,
    height: 3
  },
  icon: {
    position: 'absolute'
  }
})
