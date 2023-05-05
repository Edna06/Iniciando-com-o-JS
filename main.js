// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
// alert('Hello World')




// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

// const number1 = prompt('digite um número')
// const number2 = prompt('digite outro número que você queira somar com o anterior')
// const result = Number(number1) + Number(number2)

// alert("O resultado da soma é " + result)





// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

// const Value = prompt("Insira um valor para análise")

// if(isNaN(Value)){
//   alert("Não é um número")
// } else {
//   alert("É um número")
// }




// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

// const Value = prompt('Digite um valor para a análise')

// if(typeof(Value) === 'string'){
//   alert('O valor inserido é uma string')
// } else {
//   alert('O valor inserido não é uma string')
// }



// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

// let value = prompt("Digite um valor para saber se ele é boleano ou não")

// if(value == 'true' || value == 'false'){
//   alert("é um booleano")
// } else {
//  alert("não é um booleano")
// }



// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
// let value1 = prompt("Digite um número")
// let value2 = prompt("digite um número para ser subtraído do número anterior")

// const result = Number(value1) - Number(value2)

// alert('o resultado da subtração é ' + result)


// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

// let value1 = prompt("Digite um número")
// let value2 = prompt("digite um número para ser multiplicado pelo número anterior")

// const result = Number(value1) * Number(value2)

// alert('o resultado da multiplicação é ' + result)




// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
// let value1 = prompt("Digite um número")
// let value2 = prompt("Digite um número para dividir o número anterior")

// const result = Number(value1) / Number(value2)

// alert('o resultado da divisão é ' + result)





// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const value = prompt("digite um número para saber se ele é par ou ímpar")

const number = Number(value)
const calc = number % 2

if(calc === 0) {
  alert("o número inserido é par")
} else {
  alert("O número inserido é ímpar")
}




