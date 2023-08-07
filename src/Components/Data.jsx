import React from 'react'
import { useSelector } from 'react-redux';

const Data = () => {
  const {c} = useSelector(state => state.custom)

  return (
    <div>
      <h2>{c}</h2>
    </div>
  )
}

export default Data