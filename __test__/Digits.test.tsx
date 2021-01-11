import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { Digits } from '../components/Digits'

// onKeyPress={e => {
//   if (e.nativeEvent.key === 'Backspace') {
//     setValues(values.slice(0, values.length - 1))
//   }
// }

describe('<Digits />', () => {
  describe('when editing digits', () => {
    test('sets input digit', () => {
      const { getByText, getByTestId } = render(<Digits />)
      const input = getByTestId('digit-input')
      fireEvent.changeText(input, '1')
      const item = getByText('1')
      expect(item).toBeDefined()
    })

    test('deletes input digit', () => {
      const { getByTestId, queryByText } = render(<Digits />)
      const input = getByTestId('digit-input')
      fireEvent.changeText(input, '1')
      fireEvent(input, 'onKeyPress', { nativeEvent: { key: 'Backspace' } })
      expect(queryByText('1')).toBeNull()
    })
  })

  describe('when digits overflow', () => {
    test('digits stop at 10 digits', () => {
      const { queryByText, getByTestId } = render(<Digits />)
      const input = getByTestId('digit-input')
      fireEvent.changeText(input, 'abcdefghijk')
      expect(queryByText('k')).toBeNull()
    })

    test('delete removes last digit rendered', () => {
      const { queryByText, getByTestId } = render(<Digits />)
      const input = getByTestId('digit-input')
      fireEvent(input, 'onKeyPress', { nativeEvent: { key: 'Backspace' } })
      expect(queryByText('j')).toBeNull()
    })
  })
})
