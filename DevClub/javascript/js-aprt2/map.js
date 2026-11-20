const numbers = [1, 2, 3, 4]
const students = [
    { name: "Livia", age: 98},
    { name: "Julia", age: 21},
    { name: "Maria", age: 91},
    { name: "Ralf", age: 9},
    { name: "Rodolfo", age: 8},
    { name: "Darth Vader", age: 54},
    { name: "Cebola", age: 32},
];

// percorrer um array, transformar seus elementos e criar um NOVO array com os resultados.
// e vai ter a mesma quantidade que o array antigo

const newArray = numbers.map( (qlqrCoisa) => {
    return qlqrCoisa * 2
})
console.log(newArray)


const newStudentes = students.map( (students) => {
    return newStudent = {
        name: students.name + ' da Silva',
        age: students.age - 5
    }

    return newStudentes
})
console.log(newStudentes)