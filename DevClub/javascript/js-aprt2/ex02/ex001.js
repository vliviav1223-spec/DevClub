function imprimir (number1) {

    for(let i = 0; i <= number1; i++){
        console.log([i])
    }
}

imprimir(5)

console.log()

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

function horaExata (){
    const horaAtual = new Date()
    return horaAtual.getHours()
}

console.log(horaExata())

function anoTamo (){
    const anoAtual = new Date()
    return anoAtual.getFullYear()
}
console.log(anoTamo())

function maiorMenor (numero1, numero2){
    if(numero1 > numero2){
        return maior = numero1
        return menor = numero2
    }else{
        return maior = numero2
        return menor = numero1
    }
}

console.log(maiorMenor(2,4))