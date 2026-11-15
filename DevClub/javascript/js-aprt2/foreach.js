const students = [
    { name: "Livia", age: 25},
    { name: "Maria", age: 55},
    { name: "Ana", age: 18},
    { name: "Pedro", age: 19},
    { name: "Rafaela", age: 39},
    { name: "Julia", age: 31},
    { name: "Ralf", age: 73},
];

// students.forEach ( (studante, index, array) => {
//     console.log(studante, array)
// })

let allStudentsAge =0

students.forEach((student, index) => {
    allStudentsAge = allStudentsAge + student.age
})

const averageAge = allStudentsAge / students.length

console.log(`Media dos alunos eh de ${averageAge.toFixed(0)}`)