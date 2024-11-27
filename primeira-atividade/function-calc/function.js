export function calculadora(num1, num2, sinal) {
	switch (sinal) {
		case '+':
			return parseInt(num1) + parseInt(num2);
		case '-':
			return parseInt(num1) - parseInt(num2);
		case '*':
			return parseInt(num1) * parseInt(num2);
		case '/':
			return parseInt(num1) / parseInt(num2);
	}
}


