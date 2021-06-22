import React, { useState } from 'react';

const BOARD_SIZE = 10;

const Board = () => {
	const [board, setBoard] = useState(
		new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0)),
	);
	return (
		<div className='board'>
			{board.map((row, rowIndex) => {
				return (
					<div className='row' key={rowIndex}>
						{row.map((cell, cellIndex) => {
							return <div key={cellIndex} className='cell'></div>;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Board;
