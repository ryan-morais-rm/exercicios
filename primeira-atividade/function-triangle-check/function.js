export function triangulo(a, b, c) {
	let maior = a;
	let lado1 = b;
	let lado2 = c;

	if (b > maior) {
		maior = b;
		lado1 = a;
		lado2 = c;
	}

	if (c > maior) {
		maior = c;
		lado1 = a;
		lado2 = b;
	}

	if (lado1 + lado2 > maior) {
		return true;
	} else {
		return false;
	}
}
