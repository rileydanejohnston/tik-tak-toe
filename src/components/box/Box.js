import React from 'react';

export default function Box({ boxInfo, handleBoxClick }) {
	const { id, isSelected, player, winningBox } = boxInfo;
	const boxText = player === 1 ? 'X' : 'O';
	const boxClass = winningBox ? ' box box_winner' : 'box';

	return (
		<li
			className={boxClass}
			data-testid={id}
			// could use event object?
			// pass isSelected so we avoid searching the array unnecessarily
			onClick={() => handleBoxClick(id, isSelected)}
		>
			{isSelected && boxText}
		</li>
	);
}
