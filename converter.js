const calculatorTemp = () => {
var numberTemp = document.getElementsByClassName('temp-input')[0].value;
	console.log(numberTemp);

const tempSelected = document.getElementsByClassName('inp-select');
const selectedValue = tempSelected[0].options[tempSelected[0].selectedIndex].value;
console.log(selectedValue);

const celToFah = (cel) => {
	let fahrenheit = Math.round((cel * 9/5) +32);
	return fahrenheit;
}

const fahToCel = (fah) => {
	let celsius = Math.round((fah - 32) * 5/9);
	return celsius;
}

let result;

if(selectedValue == 'celsius'){
	result=celToFah(numberTemp)
	r=document.getElementsByClassName('res')[0].innerHTML = `${result}°Fahrenheit`;
	console.log(r);
}
else{
	result=fahToCel(numberTemp)
	e=document.getElementsByClassName('res')[0].innerHTML = `${result}°Celsius`;
	console.log(e);
}
}

