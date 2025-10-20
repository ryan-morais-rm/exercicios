function calculadora() {
  const operacao = prompt("Escolha a operação: +, -, *, /");

  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));

  let resultado;

  switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("Erro: divisão por zero não é permitida!");
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      alert("Operação inválida!");
      return;
  }

  alert(`Resultado: ${resultado}`);
}

calculadora();
