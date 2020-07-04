

let arr = []


function makeAble() {
	if (document.getElementById('number-input').disabled) {
		document.getElementById('number-input').disabled = false;
	}
}

function clickNum(num) {
	makeAble();
	document.getElementById('number-input').value += num
}

function backspace() {
	let value = document.getElementById('number-input').value;
	const val_arr = value.split('')

	val_arr.pop()
	value = ''

	for(let i = 0; i < val_arr.length; i++) {
		value += val_arr[i]
	}

	document.getElementById('number-input').value = value
}

function clearInput() {
	arr = []
	document.getElementById('number-input').value = ''
}

function makeDecimal(){
	if(!document.getElementById('number-input').value.includes('.')){
		document.getElementById('number-input').value += '.'
	}
}

//The Operators
function performOp(operator) {
	if (document.getElementById('number-input').value === '') {
		console.error('I need a number')
	} else {
		arr.push(document.getElementById('number-input').value)
		arr.push(operator)
		document.getElementById('number-input').value = ''
	}
}

//Equals
function equals() {

	console.log(arr);
	let number;

	let addOp = false;
	let subOp = false;
	let divOp = false;
	let multOp = false;

	arr.push(document.getElementById('number-input').value)

	//If the array ends in an operator
	if (document.getElementById('number-input').value == '') {
		console.error('Invalid, must end in number')
	} else {
		for(let i = 0; i < arr.length; i++){
			/*if (arr[i] != '+') {
				
				if(arr[i].includes('.')){
					number += parseFloat(arr[i])
				} else {
					number += parseInt(arr[i])
				}
			}*/

			if (i === 0) {
				if(arr[i].includes('.')){
					number = parseFloat(arr[i])
				} else {
					number = parseInt(arr[i])
				}
			} else if (i % 2 == 1) {
				if (arr[i] === '+') {
					addOp = true
				} else if (arr[i] === '-') {
					subOp = true
				} else if (arr[i] === '/') {
					divOp = true
				} else {
					multOp = true
				}
			} else {
				
				if (addOp === true) {
					
					if(arr[i].includes('.')) {
						number += parseFloat(arr[i])
					} else {
						number += parseInt(arr[i])
					}

					addOp = false
				} else if (subOp === true) {

					if (arr[i].includes('.')) {
						number -= parseFloat(arr[i])
					} else {
						number -= parseInt(arr[i])
					}

					subOp = false
				} else if (divOp === true) {

					if (arr[i].includes('.')) {
						number /= parseFloat(arr[i])
					} else {
						number /= parseInt(arr[i])
					}

					divOp = false
				} else {

					if (arr[i].includes('.')) {
						number *= parseFloat(arr[i])
					} else {
						number *= parseInt(arr[i])
					}

					multOp = false
				}
			}

		}
		document.getElementById('number-input').value = number;
		
	}
	console.log(arr);

	arr = [];
}