import React, { useRef, useState } from 'react'
import {
  StyleSheet,
  TextInput,
  Pressable,
  View,
  Text,
  Dimensions
} from 'react-native'
import { lineColor } from '../styles/colors'

const { width } = Dimensions.get('screen')

const inputs = new Array(10).fill(0)
const n = inputs.length

const DIGIT_MARGIN = 4
const SEPERATOR_SIZE = 20
const SIZE = (width - DIGIT_MARGIN * n - 88 - SEPERATOR_SIZE * 2) / n

export const Digits: React.FC = () => {
  const [values, setValues] = useState('')
  const input = useRef<TextInput>(null)
  const selectedIndex = values.length < n ? values.length : n - 1

  return (
    <Pressable style={styles.container} onPress={() => input.current?.focus()}>
      {inputs.map((_, idx) => {
        const seperated = idx === 2 || idx === 5
        return (
          <React.Fragment key={idx}>
            <View style={[styles.digit, { marginRight: seperated ? 0 : 0 }]}>
              <Text style={styles.digitText}>{values[idx]}</Text>
            </View>
            {seperated ? (
              <View style={styles.seperator}>
                <Text style={styles.seperatorDash}>-</Text>
              </View>
            ) : null}
          </React.Fragment>
        )
      })}

      <TextInput
        ref={input}
        caretHidden={true}
        keyboardType='numeric'
        style={[
          styles.input,
          {
            left: selectedIndex * SIZE
          }
        ]}
        value=''
        onChangeText={value => {
          if (values.length >= n) {
            return
          }
          setValues((values + value).slice(0, n))
        }}
        onKeyPress={e => {
          if (e.nativeEvent.key === 'Backspace') {
            setValues(values.slice(0, values.length - 1))
          }
        }}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 75
  },
  input: {
    position: 'absolute',
    fontSize: SIZE,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'transparent',
    width: SIZE,
    top: 0,
    bottom: 0
  },
  digit: {
    borderBottomColor: lineColor,
    borderBottomWidth: 2,
    marginHorizontal: DIGIT_MARGIN,
    width: SIZE,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  digitText: {
    fontSize: SIZE,
    fontWeight: '500'
  },
  seperator: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SEPERATOR_SIZE
  },
  seperatorDash: {
    fontSize: SEPERATOR_SIZE
  }
})
