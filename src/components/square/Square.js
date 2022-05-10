import React from 'react'

export default function Square({ squareInfo, handleSquareClick }) {

  const { id, isSelected, player } = squareInfo;
  const squareText = player === 1 ? 'X' : 'O';

  return (
    <li className='square' onClick={() => handleSquareClick(id, isSelected)}>
      {
        isSelected ? squareText : id
      }
    </li>
  )
}

