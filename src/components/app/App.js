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
      if player 1 is currently active, set activePlayer to 2
      if player 2 is currently active, set active player to 1
    */
    const newActivePlayer = activePlayer === 1 ? 2 : 1;
    setActivePlayer(newActivePlayer);
  }

	return (
		<div className='app'>
			<ul className='grid'>
				{board.map((item) => {
					return (
            <Square
              key={item.id}
              activePlayer={activePlayer}
              square={item}
            />
          );
				})}
			</ul>
		</div>
	);
}

export default App;
