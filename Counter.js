import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react'
import 'jest-dom/extend-expect'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.increment= this.increment.bind(this);
    this.state ={ count: 0 }
  }

  increment() {
    this.setState(state => ({...state, count: state.count+1}))
  }

  render() {
    return (
      <p id="counter-text">
        Clicked: {this.state.count} times
        {' '}
        <button onClick={this.increment}>
          +
        </button>
        {' '}
      </p>
    )
  }
}

export default Counter


//==========================================================
//TESTS

afterEach(cleanup)

test('loads and displays greeting', async () => {
  const { getByText, getByTestId } = render(<Counter />)


  fireEvent.click(getByText('+'))

  const greetingTextNode = await waitForElement(() =>
    getByTestId('counter-text')
  )

  expect(greetingTextNode).toHaveTextContent('1')
})
