import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { Digits } from '../components/Digits'

// onKeyPress={e => {
//   if (e.nativeEvent.key === 'Backspace') {
//     setValues(values.slice(0, values.length - 1))
//   }
// }

describe('<Digits />', () => {
  test('entering a digit', () => {
    const { getByText, getByTestId } = render(<Digits />)

    const input = getByTestId('digit-input')
    fireEvent.changeText(input, '1')
    const item = getByText('1')
    expect(item).toBeDefined()
  })

  test('digits stop at 10 digits', () => {
    const { getByText, getByTestId, queryByText } = render(<Digits />)
    const input = getByTestId('digit-input')
    fireEvent.changeText(input, 'abcdefghijk')
    expect(getByText('j')).toBeDefined()
    expect(queryByText('k')).toBeNull()
  })

  test('deleting digits', () => {
    const { getByText, getByTestId, queryByText } = render(<Digits />)
    const input = getByTestId('digit-input')
    fireEvent.changeText(input, 'abcdefghijk')
    expect(getByText('j')).toBeDefined()

    fireEvent(input, 'onKeyPress', { nativeEvent: { key: 'Backspace' } })
    expect(queryByText('j')).toBeNull()
  })
})
