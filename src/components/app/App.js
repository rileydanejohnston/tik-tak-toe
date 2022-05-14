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
	const [winningIndexes, setWinningIndexes] = useState([]);


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
      setWinningIndexes([0, 4, 8]);
		}
		else if (testSpaces(2, 4, 6)) {
      setWinningIndexes([2, 4, 6]);
		}
    else if (testSpaces(0, 1, 2)) {
      setWinningIndexes([0, 1, 2]);
		}
    else if (testSpaces(3, 4, 5)) {
      setWinningIndexes([3, 4, 5]);
		}
    else if (testSpaces(6, 7, 8)) {
      setWinningIndexes([6, 7, 8]);
		}
    else if (testSpaces(0, 3, 6)) {
      setWinningIndexes([0, 3, 6]);
    }
    else if (testSpaces(1, 4, 7)) {
      setWinningIndexes([1, 4, 7]);
    }
    else if (testSpaces(2, 5, 8)) {
      setWinningIndexes([2, 5, 8]);
    }

	}, [turnCount]);

	useEffect(() => {

		if (winningIndexes.length === 0) return;

		const tempBoard = board.map((square, index) => {
			// test if the board index is one of the winning indexes
			const compareIndexes = index === winningIndexes[0] || index === winningIndexes[1] || index === winningIndexes[2];
			if (compareIndexes) {
				square.winningSpace = true;
			}
			return square;
		});

		setBoard(tempBoard);

	}, [winningIndexes])

	const handleReset = () => {
		setBoard(boardDefault);
		setActivePlayer(1);
		setTurnCount(0);
		winningIndexes([]);
		setWinner(0);
		setIsTie(false);
	}
	

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
			<button className='reset' data-testid='reset-button' onClick={handleReset}>Reset Game</button>
		</div>
	);
}

export default App;
