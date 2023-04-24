import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import Header from 'header/Header'
import CountProvider, { useCount } from 'host/store'

const App = () => {
  const [count, setCount] = useCount()
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header/>
      <br/>
      <div>Name: host</div>
      <div>Count: {count}</div>
      <br/>
      <div>
        <button
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById('app'),
)
