//function printAboutLive(){
  //  console.log('Estou aprendendo com muito afinco')
//}

//printAboutLive();

//funcao com parametro
//function sum(number1, number2){

   // console.log(number1 + number2)
  //  return //se n tem return entao eh void vazia
//}


const sum = function sum(number1, number2){
    return number1 + number2; // Agora a função devolve o valor calculado
};

const firstNumber = 10;
const secondNumber = 20; // Corrigido o typo de 'secondeNumber' para 'secondNumber'
const result = sum(firstNumber, secondNumber);

console.log(`Primeiro numero é ${firstNumber} e o segundo numero é ${secondNumber}`);
console.log(`A soma dos dois eh ${result}`);
//sum(number1,number2);//mandando argumentos dentro dos parametros
