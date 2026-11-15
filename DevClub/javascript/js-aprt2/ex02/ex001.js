const imprimir = (number1) => {

    for(let i = 0; i <= number1; i++){
        console.log([i])
    }
}

imprimir(5)

console.log()
//////////////////////////////////////
function tabuada (number02){

    if(number02 > 0 && number02 <= 10){
        for(let i = 1; i <= 10; i++){
        let result = [i]*number02;
        console.log(`${i} X ${number02} = ${result}`)
        }
    }else{
        console.log("Erro")
    }   
}

tabuada(5)
//////////////////////////////////////
function horaExata (){
    const horaAtual = new Date()
    ///pra pra fazer console.log(new Date().toLcaleTimeString('pt-BR'))
    return horaAtual.getHours()
}

console.log(horaExata())
//////////////////////////////////////
function anoTamo (){
    const anoAtual = new Date()
    return anoAtual.getFullYear()
}
console.log(anoTamo())
/////////////////////////////////////
function maiorMenor (numero1, numero2){
    if(numero1 > numero2){
        return [numero1, numero2]
    }else{
        return [numero2, numero1]
    }
}

console.log(maiorMenor(2,4))
///////////////////////////////////////

const salario = [1500, 2500, 1800, 3200, -1]
const filhos = [2, 1, 3, 0]

let somaSalario = 0
let somaFilhos = 0
let maior =0
let pop = 0

function mediaPop(salario, quantidadeFilhos){
    somaSalario += salario;
    somaFilhos += quantidadeFilhos;

    if(salario > maior){
        maior = salario
    }
    pop++;
}

for(let i = 0; i < salario.length; i++){
    if(salario[i] < 0){
        break;
    }

    mediaPop(salario[i], filhos[i])
}

if (pop > 0) {
    let mediaS = somaSalario / pop;
    let mediaF = somaFilhos / pop;

    console.log(`Média salarial: R$ ${mediaS.toFixed(2)}`);
    console.log(`Média de filhos: ${mediaF.toFixed(2)}`);
    console.log(`Maior salário: R$ ${maior.toFixed(2)}`);
}