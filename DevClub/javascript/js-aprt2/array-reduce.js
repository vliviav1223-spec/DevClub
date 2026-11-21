// reduce
//     retorna um valor (pde ser Array, objeto)
//     aceita 4 parametros
//         acumulador
//         valor atual
//         indexe
//         array completo

const list = [1, 2, 3, 4];

//const sum = list.reduce(acc, current) => acc + current, 0)

const sum = list.reduce((acc, current) => {

    return acc + current;

}, 0) //acc q eh o acumlador começa com zero e vai acumulando
console.log(sum)