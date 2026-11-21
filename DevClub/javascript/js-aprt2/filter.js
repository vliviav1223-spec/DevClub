// FILTER
// cria um novo array a partir do array percorrido
// cria um nvo array apenas com os elemntos filtrados
// aceita 3 parametros
//     item do array  
//     index
//     array completo

const list = [
    {name: "Livia", vip: true},
    {name: "Maria", vip: false},
    {name: "Julia", vip: true},
    {name: "Ralf", vip: true},
    {name: "Montanha", vip: false},
    {name: "Ana", vip: false},
    {name: "Julio", vip: true}
];

const justVips = list.filter( client => client.vip);

console.log(justVips);

const students = [
    { name: "Rodolfo", testGrade: 7},
    { name: "Maria", testGrade: 5},
    { name: "João", testGrade: 8},
    { name: "Bruno", testGrade: 9},
    { name: "Carla", testGrade: 3},
    { name: "Ana", testGrade: 2},
    { name: "Julio", testGrade: 10}
];

const newStudentList = students.filter(student => {
    return student.testGrade >= 7
})