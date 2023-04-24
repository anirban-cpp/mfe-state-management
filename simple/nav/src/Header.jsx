import React from 'react'

const Header = ({ count, onClear }) => {
  return (
    <header className="bg-blue-700 text-white font-bold p-5 flex">
      <div className="flex-grow">Header</div>
      <div className='mt-auto mb-auto mr-5'>{count}</div>
      <button
        onClick={onClear}
        className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
      >
        Clear Cart
      </button>
    </header>
  )
}

export default Header
