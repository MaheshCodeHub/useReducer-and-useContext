import React, { useContext } from 'react'
import CardContext from '../Context/CardContext'

function CardsHook() {
  return  useContext(CardContext)
}

export default CardsHook
