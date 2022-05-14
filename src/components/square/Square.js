import React from 'react';

export default function Square({ squareInfo, handleSquareClick }) {
	const { id, isSelected, player, winningSpace } = squareInfo;
	const squareText = player === 1 ? 'X' : 'O';
	const squareClass = winningSpace ? ' square square_winner' : 'square';

	return (
		<li
			className={squareClass}
			data-testid={id}
      // could use event object?
      // pass isSelected so we avoid searching the array unnecessarily
			onClick={() => handleSquareClick(id, isSelected)}
		>
			{isSelected && squareText}
		</li>
	);
}
