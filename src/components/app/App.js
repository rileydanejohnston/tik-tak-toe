import React, { useState, useEffect } from 'react';
import Square from '../square/Square';
import { boardDefault } from '../../constants/app-constants';

function App() {
	const [board, setBoard] = useState(boardDefault);
	const [activePlayer, setActivePlayer] = useState(1);
	const [turnCount, setTurnCount] = useState(0);
	const [isTie, setIsTie] = useState(false);
	const [winner, setWinner] = useState(0);
	// describes the winning series
	const [diagonal1, setDiagonal1] = useState(false);
  const [diagonal2, setDiagonal2] = useState(false);
  const [row1, setRow1] = useState(false);
  const [row2, setRow2] = useState(false);
  const [row3, setRow3] = useState(false);
  const [col1, setCol1] = useState(false);
  const [col2, setCol2] = useState(false);
  const [col3, setCol3] = useState(false);


	const changePlayers = () => {
		// if p1 is active, activePlayer = p2
		// if p2 is active, activePlayer = p1
		const newActivePlayer = activePlayer === 1 ? 2 : 1;
		setActivePlayer(newActivePlayer);
	};

	const updateSquares = squareId => {
		// find the clicked square
		// update isSelected and player properties
		const tempBoard = board.map(square => {
			const { id } = square;
			if (squareId === id) {
				return {
					id,
					isSelected: true,
					player: activePlayer,
				};
			}
			return square;
		});
		return tempBoard;
	};

	const handleSquareClick = (clickId, selected) => {
		// players can't choose squares that are already chosen
		if (!selected) {
			const tempBoard = updateSquares(clickId);
			setBoard(tempBoard);
			setTurnCount(turnCount + 1);
			changePlayers();
		}
	};

  // params represent array indexes
  const testSpaces = (one, two, three) => {
    return board[one].player === board[two].player && board[two].player === board[three].player;
  }

	// check all possibilities for a winner
	useEffect(() => {
    if (turnCount < 5) return;

		if (testSpaces(0, 4, 8)) {
			setDiagonal1(true);
		}
		else if (testSpaces(2, 4, 6)) {
			setDiagonal2(true);
		}
    else if (testSpaces(0, 1, 2)) {
			setRow1(true);
		}
    else if (testSpaces(3, 4, 5)) {
			setRow2(true);
		}
    else if (testSpaces(6, 7, 8)) {
			setRow3(true);
		}
    else if (testSpaces(0, 3, 6)) {
      setCol1(true);
    }
    else if (testSpaces(1, 4, 7)) {
      setCol2(true);
    }
    else if (testSpaces(2, 5, 8)) {
      setCol3(true);
    }

	}, [turnCount]);

	return (
		<div className='app'>
			<ul className='grid'>
				{board.map(item => {
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
