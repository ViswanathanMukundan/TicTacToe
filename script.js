const winningStates = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,4,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[2,4,6]];

let board;
let turn = 'X';
let win;

const boardCells = Array.from(document.querySelectorAll('#board div'));

document.getElementById('board').addEventListener('click', currentTurn);
const message = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);

function declareWinner()
{
	let winner = null;
	winningStates.forEach(function(combination, index)
	{
		if (board[combination[0]] && board[combination[0]] === board[combination[1]] && board[combination[0]] === board[combination[2]])
			winner =  board[combination[0]];
	});

	return winner ? winner : board.includes('') ? null : 'T';
};

function currentTurn()
{
	let indx = boardCells.findIndex(function(square) 
	{
		return square === event.target;
	});
	board[indx] = turn;
	turn = turn === 'X' ? 'O' : 'X';	//if previous turn = X, current turn will be O and vice versa
	win = declareWinner();
	render();
};

function init()
{
	//document.querySelector('h2');
	board = [
	   '', '', '',
	   '', '', '',
	   '', '', ''];
	   render();
};

function render()
{
	board.forEach(function(mark, index)
	{
		boardCells[index].textContent = mark;
	})
	message.textContent = win === 'T' ? `Game drawn!` : win ? `${win} wins!!` : `${turn}'s turn!`; 
	//if(message.search("wins") === 2)
	//	alert(message.textContent);
};

init();