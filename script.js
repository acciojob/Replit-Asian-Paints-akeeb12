//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function () {
	for(let i = 1; i <= 9; i ++){
		document.getElementById(`grid-items${i}`).style.backgroundColor = 'transparent';
	}
	let block_Id = document.getElementById('block_id').value;
	let color_Id = document.getElementById('color_id').value;
	document.getElementById(`grid-item${blockId}`).style.backgroundColor = color;
});

document.getElementById('Reset').addEventListener('click', function() {
		for(let i = 1; i <= 9; i ++){
			document.getElementById(`grid-item${i}`).style.backgroundColor = 'transparent';
		}
	});