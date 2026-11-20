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

// const newArray = numbers.map( (number) => {
//     return number * 2
// })
// console.log(newArray)

const double = number => number * 2
const sum = number => `R$ ${number.toFixed(2)}`

const newArray = numbers.map(double).map(sum) //map(double).map(sum)...

const newArray2 = numbers.map (number => number * 3)