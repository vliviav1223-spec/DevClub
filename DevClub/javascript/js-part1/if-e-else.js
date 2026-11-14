const age = 17

if(age >= 18){
    console.log("Maior de idade")
}else {
    console.log("Menor de idade")
}

console.log("Finalizado o programa . . . ")

//else if

const temperature = 36

if(temperature >= 36 && temperature <=39){
    console.log("Afebril")
}else if(temperature > 39){
    console.log('Febre')
}else {
    console.log('Temperatura muito baixa para medição')
}