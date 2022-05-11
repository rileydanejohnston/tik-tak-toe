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

  // test spaces 0 - 4 - 8
	const testDiagonal1 = () => {
		return board[0].player === board[4].player && board[4].player === board[8].player;
	};

  // test spaces 6 - 4 - 2
	const testDiagonal2 = () => {
		return board[6].player === board[4].player && board[4].player === board[2].player;
	};

  // test spaces 0 - 1 - 2
	const testRow1 = () => {
		return board[0].player === board[1].player && board[1].player === board[2].player;
	};

  // test spaces 3 - 4 - 5
	const testRow2 = () => {
		return board[3].player === board[4].player && board[4].player === board[5].player;
	};

  // test spaces 6 - 7 - 8
	const testRow3 = () => {
		return board[6].player === board[7].player && board[7].player === board[8].player;
	};

  // test spaces 0 - 3 - 6
	const testCol1 = () => {
		return board[0].player === board[3].player && board[3].player === board[6].player;
	};

  // test spaces 1 - 4 - 7
	const testCol2 = () => {
		return board[1].player === board[4].player && board[4].player === board[7].player;
	};

  // test spaces 2 - 5 - 8
	const testCol3 = () => {
		return board[2].player === board[5].player && board[5].player === board[8].player;
	};

	// check all possibilities for a winner
	useEffect(() => {
    if (turnCount < 5) return;

    const diagonalResult1 = testDiagonal1();
    const diagonalResult2 = testDiagonal2();
    const rowResult1 = testRow1();
    const rowResult2 = testRow2();
    const rowResult3 = testRow3();
    const colResult1 = testCol1();
    const colResult2 = testCol2();
    const colResult3 = testCol3();

		if (diagonalResult1) {
			setDiagonal1(true);
		}
		else if (diagonalResult2) {
			setDiagonal2(true);
		}
    else if (rowResult1) {
			setRow1(true);
		}
    else if (rowResult2) {
			setRow2(true);
		}
    else if (rowResult3) {
			setRow3(true);
		}
    else if (colResult1) {
      setCol1(true);
    }
    else if (colResult2) {
      setCol2(true);
    }
    else if (colResult3) {
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
