import React from 'react'

export default function Square({ square }) {

  const { id, player, isSelected } = square;

  return (
    <li className='square'>
      {
        isSelected ? player : id
      }
    </li>
  )
}

