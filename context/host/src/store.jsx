import React, { useContext, useState } from 'react'

const CountContext = React.createContext([0, () => {}])

const CountProvider = ({ children }) => {
  return (
    <CountContext.Provider value={useState(0)}>
      {children}
    </CountContext.Provider>
  )
}

export const useCount = () => useContext(CountContext)
export default CountProvider