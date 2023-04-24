import React from 'react'
import ReactDOM from 'react-dom'
import Header from 'nav/header'
import useStore from 'host/store'

import './index.scss'

const App = () => {
  const { count, increment } = useStore()

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <br />
      <div>Name: host</div>
      <div>Count: {count}</div>
      <br />
      <div>
        <button
          onClick={increment}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
