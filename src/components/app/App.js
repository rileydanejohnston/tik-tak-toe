import React, { useState, useEffect } from 'react';
import Square from '../square/Square';
import { boardDefault } from '../../constants/app-constants';

function App() {

  /* 
    player 1 will be X
    player 2 will be O
  */
	const [board, setBoard] = useState(boardDefault);
	const [activePlayer, setActivePlayer] = useState(1);

  const changePlayers = () => {
    /*
      if p1 is active, activePlayer = p2
      if p2 is active, activePlayer = p1
    */
    const newActivePlayer = activePlayer === 1 ? 2 : 1;
    setActivePlayer(newActivePlayer);
  }
  

  const handleSquareClick = (clickId, selected) => {
    // players can't choose squares that are already chosen
    if (!selected) {
    /*
      find the clicked square
      update isSelected and player properties
    */
      const tempBoard = board.map((square) => {
        const { id } = square;
        if (clickId === id) {
          return {
            id,
            isSelected: true,
            player: activePlayer,
          };
        }
        return square;
      })
  
      setBoard(tempBoard);
      changePlayers();
    }
    
  }

	return (
		<div className='app'>
			<ul className='grid'>
				{board.map((item) => {
					return (
            <Square
              key={item.id}
              squareInfo={item}
              handleSquareClick={handleSquareClick}
            />
          );
				})}
			</ul>
		</div>
	);
}

export default App;